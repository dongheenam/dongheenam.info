---
title: "Persisting Svelte Stores with localStorage"
description: "Writing a wrapper function for Svelte stores to connect them to localStorage"

date: 2022-12-14 15:12:52.040 +1100

toc: true
draft: false

tags:
  - Svelte
  - JavaScript

---

## Motivation

[Svelte stores](https://svelte.dev/docs#run-time-svelte-store) show an awesome example of how easy global state managers can be. You don't need to write any getters and setters, just add a `$` sign and you are good to go!

{{% aside %}}
[REPL example](https://svelte.dev/repl/4b39fa8938a64347b976a8419fc472a1?version=3.55.0)
{{% /aside %}}

{{% tabs  %}}
{{% tab name="stores.js" %}}
```javascript
import { writable } from "svelte/store";

export const teaStore = writable("black tea");
```

{{% /tab %}}
{{% tab name="App.svelte" %}}
```Svelte
<script>
  import { teaStore } from "./stores";
</script>

<h1>Hello customer!</h1>
<label>
  <span>I want: </span>
  <input type="text" bind:value={$teaStore} />
</label>
<p>
  You wanted {$teaStore}!
</p>
```
{{% /tab %}}
{{% /tabs %}}

{{% aside %}}
`svelte/store` is just [150 lines](https://github.com/sveltejs/svelte/blob/master/src/runtime/store/index.ts) of code if we exclude type declarations.
{{% /aside %}}

However, because it is a very lightweight implementation, it lacks a few useful features that many React libraries provide out-of-the-box.

For example, this is how [Zustand](https://github.com/pmndrs/zustand) and [Jotai](https://jotai.org/) offer to persist data between user sessions:

{{% tabs id="react-persist" %}}
{{% tab name="Jotai" %}}
```JSX
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const teaAtom = atomWithStorage("my-tea", "black tea");

const App = () => {
  const [tea, setTea] = useAtom(teaAtom);
  const handleChange = (e) => setTea(e.target.value);

  return (
    <>
      <h1>Hello customer!</h1>
      <label>
        <span>I want: </span>
        <input type="text" value={tea} onChange={handleChange} />
      </label>
      <p>
        You wanted {tea}!
      </p>
    </>
  );
};

```
{{% /tab %}}
{{% tab name="Zustand" %}}
```JSX
import create from "zustand";
import { persist } from "zustand/middleware";

const useTeaStore = create(persist(
  (set) => ({
    tea: "Black tea",
    setTea: (next) => set({ tea: next }),
  })
));

const App = () => {
  const tea = useTeaStore((state) => state.tea);
  const setTea = useTeaStore((state) => state.setTea);
  const handleChange = (e) => setTea(e.target.value);

  return (
    <>
      <h1>Hello customer!</h1>
      <label>
        <span>I want: </span>
        <input type="text" value={tea} onChange={handleChange} />
      </label>
      <p>
        You wanted {tea}!
      </p>
    </>
  );
};

```
{{% /tab %}}
{{% /tabs %}}


Thankfully, Svelte stores are also highly customisable, and it was a pretty easy trick to implement a wrapper to persist the store values. Let's have a look.

## Quick Introduction

Before we start, it's useful to know [Svelte stores](https://github.com/sveltejs/svelte/blob/master/src/runtime/store/index.ts#L64-L109) are just plain objects with three functions: `subscribe`, `set`, and `update`. If we have a closer look at the [Svelte documentation](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values-store-contract), we can use *any* objects as stores with the `$` syntax, as long as we correctly implement the first two. This is great because it lets us create different 'types' of stores:

```javascript
import { writable } from "svelte/store";

const betterWritable = (value) => {
  const store = writable(value);
  // do other things
  return store;
};

export const betterTeaStore = betterWritable("Black tea");
```

or even middleware functions without much hassle:

```javascript
import { writable, get } from "svelte/store";

const makeStoreBetter = (store) => {
  const mySetter = (next) => {
    // do other things
    store.set(next);
  };
  const myUpdater = (updater) => {
    const next = updater(get(store));
    mySetter(next);
  };
  return {
    subscribe: store.subscribe,
    set: mySetter,
    update: myUpdater,
  };
};

const teaStore = writable("Black tea");
export const betterTeaStore = makeStoreBetter(teaStore);
```


## Approach 1: Subscribing

I found this method from [this](https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi) dev.to post. Essentially, you check localStorage when initiating a store, and immediately subscribe to the store to listen to any changes and write the values to localStorage.

```javascript
import { writable } from "svelte/store";

// ensure client-side
const isBrowser = typeof Storage !== "undefined";

const TEA_STORE_KEY = "my-tea";
const TEA_DEFAULT = "Black tea";

// initiate the store by try reading from localStorage
const defaultTea =
  isBrowser && TEA_STORE_KEY in localStorage
    ? localStorage.getItem(TEA_STORE_KEY)
    : TEA_DEFAULT;
export const teaStore = writable(defaultTea);

// listen to changes and update localStorage accordingly
if (isbrowser) {
  defaultTea.subscribe((value) =>
    localStorage.setItem(TEA_STORE_KEY, value)
  );
}

```

Because localStorages can [only store string values](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#basic_concepts), we need to use the JSON API to help us store other JSONifiable types like numbers, arrays and objects:

```javascript
import { writable } from "svelte/store";

// ensure client-side
const isBrowser = typeof Storage !== "undefined";

const DESSERT_STORE_KEY = "my-dessert";
const DESSERT_DEFAULT = { chocolate: 1, cracker: 3 };

// initiate the store by try reading from localStorage
const defaultDessert =
  isBrowser && DESSERT_STORE_KEY in localStorage
    ? JSON.parse(localStorage.getItem(DESSERT_STORE_KEY))
    : DESSERT_DEFAULT;
export const dessertStore = writable(defaultDessert);

// listen to changes and update localStorage accordingly
if (isbrowser) {
  defaultDessert.subscribe((value) =>
    localStorage.setItem(JSON.stringify(DESSERT_STORE_KEY), value)
  );
}

```

You can clearly see the lines we have to write over and over again, so let's define a new writable store instead.

```javascript
import { writable } from "svelte/store";

const isBrowser = typeof Storage !== "undefined";

const persistable = (key, initialValue) => {
  // ensure client-side
  if (!isBrowser) return writable(store);

  // load saved state from previous session
  const loaded =
    key in localStorage
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;
  const store = writable(loaded);

  // listen to changes and save
  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
};

export const teaStore = persistable("my-tea", "Black tea");
export const dessertStore = persistable("my-dessert",
  { chocolate: 1, cracker: 3 }
);

```

### Approach 2: Custom contract

The previous method lets you replicate Jotai's `atomWithStorage`, which I believe is good enough, but what if we want to mimic Zustand's `persist`?

```javascript
import { writable } from "svelte/store";
import persist from "...";

export const teaStore = persist("my-tea",
  writable("Black tea"),
);

```

One way to achieve is to call `store.set` to load from localStorage first, and then call `store.subscribe` to listen to further changes. This is problematic because the value will be saved to localStorage as soon as it is read. Instead, we can move the saving logic to a custom `set` function.

```javascript
import { writable, get } from "svelte/store";
const isBrowser = typeof Storage !== "undefined";

const persist = (key, store) => {
  // ensure client-side
  if (!isBrowser) return store;

  // load saved state from previous session
  if (key in localStorage) {
    const loaded = localStorage.getItem(key);
    store.set(JSON.parse(loaded));
  }

  // modify the setters to call localStorage.setItem
  const setThenSave = (value) => {
    store.set(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    subscribe: store.subscribe,
    set: setThenSave,
    update: (updater) => {
      const updated = updater(get(store));
      setThenSave(updated);
    },
  };
};

export const teaStore = persist("my-tea",
  writable("Black tea"),
);
export const dessertStore = persist("my-dessert",
  writable({ chocolate: 1, cracker: 3 }),
);
```

We now have another way to set up a persistent store!


## Conclusion

You can have a look at [this REPL](https://svelte.dev/repl/5f33cfec94ef4b9d9cac29bbc2430602?version=3.55.0) to play with the codes more in detail.