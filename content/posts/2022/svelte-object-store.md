---
title: "Objects in Svelte Stores: Thoughts and Best Practices"
description: "Svelte stores are perfect for handling nested objects, but there are a couple of things you want to be aware of."

date: 2022-12-17 17:31:52.266 +1100

toc: true
draft: false

tags:
  - Svelte
  - JavaScript

---

## Introduction

[Svelte stores](https://svelte.dev/docs#run-time-svelte-store) are an amazing tool to make writing an app in Svelte more exciting. You just need one line of code with `$` and `bind:` to create an input connected to a global state: 

```svelte
<script>
  import { writable } from "svelte/store";
  const name = writable("John");
</script>

<label>
  What is your name?
  <input type="text" bind:value={$name} />
</label>
<div>
  Hello, {$name}!
</div>
```

Storing an object is also fairly straightforward because we can use `$store.key` notation. Have a look at the example below.

```javascript {path="stores.js"}
import { writable } from "svelte/store";

export const store = writable({
  name: "John",
  age: 18,
});
```
```svelte {path="App.svelte"}
<script>
  import { store } from "./stores";
</script>

<label>
  What is your name?
  <input type="text" bind:value={$store.name} />
</label>
<div>
  Hello, {$store.age}-year-old {$store.name}!
</div>
```

However, its behaviour may surprise you if you are not aware of how Svelte works under the hood. Have a look at the two examples below.


### Issues with Reactive Statements

Say you want to fetch some additional information based on user's age:

```svelte {path="App.svelte" hl_lines="5-14"}
<script>
  import { store } from "./stores";

  let drinks = [];
  $: {
    drinks = [];
    const isMinor = $store.age < 18;
    if (isMinor) {
      drinks = ["juice"];
    } else {
      // simulate a slow API
      setTimeout(() => (drinks = ["beer", "wine", "whiskey"]), 1000);
    }
  }
</script>

<label>
  What is your name?
  <input type="text" bind:value={$store.name} />
</label>
<div>
  <span>Hello, {$store.age}-year-old {$store.name}!</span>
  <span>Do you want to drink some {drinks.join(", ")}?</span>
</div>
```

{{% mn ex1 %}}
Check [this REPL](https://svelte.dev/repl/ab3c3bf746b04ae18d8d08bdea34b0e1?version=3.55.0) for demonstration.
{{% /mn %}}
You would think the highlighted line should only run when the age changes, but it turns out it will be executed every time you modify the name as well.


### Issues with `afterUpdate`

Okay, that seems odd, but it still makes some sense because we are still using the `name` field in the component. So you decide to extract the inputs and then insert the age-dependent logic in the `AgeForm` component:

```svelte {path="App.svelte"}
<script>
  import { store } from "./stores";
  import NameForm from "./NameForm.svelte";
  import AgeForm from "./AgeForm.svelte";
</script>

<div>
  <NameForm />
  <AgeForm />
</div>
<div>
  <span>Hello, {$store.age}-year-old {$store.name}!</span>
</div>
```
```svelte {path="AgeForm.svelte"}
<script>
  import { store } from "./stores";
	
  $: {
    if ($store.age < 18) {
      alert("You are under 18!");
    }
  }
</script>

<label>
  What is your age?
  <input type="number" bind:value={$store.age} />
</label>
```

{{% mn ex2 %}}
Check [this REPL](https://svelte.dev/repl/492019a2d37e435897b0da21ab011183?version=3.55.0) for demonstration.
{{% /mn %}}
But still, the `alert()` is triggered when the user modifies the name field. *What is happening?*

## Behind the Scene

To get better understanding, we need to have a look at the runtime codes. Thankfully, REPL shows you the compiled JavaScript code, so let's inspect the output code for the `AgeForm.svelte` component in [this REPL](https://svelte.dev/repl/492019a2d37e435897b0da21ab011183?version=3.55.0).

### TL;DR

When Svelte stores with an array or object inside receive an update, they ***always*** schedule an update for all subscribed components. This makes the components to execute the callbacks scheduled by `beforeUpdate()` or `afterUpdate()` and trigger reactive variables and statements to recalculate, but does not guarantee DOM updates. The DOM elements will only be modified when the actual values of the variables they refer to change.


### Input to store

Let's first have a look at how Svelte handles change on `<input>`.

{{% tabs id="name" %}}

{{% tab name="Svelte component" %}}
```svelte {path="NameForm.svelte" hl_lines="7"}
<script>
  import { store } from "./stores";
</script>

<label>
  What is your name?
  <input type="text" bind:value={$store.name} />
</label>
```
{{% /tab %}}

{{% tab name="Compiled result" %}}
```javascript {linenos=true linenostart=60 hl_lines="5-8"}
function instance($$self, $$props, $$invalidate) {
  let $store;
  // ...

  function input_input_handler() {
    $store.name = this.value;
    store.set($store);
  }
  // ...
}
```
{{% /tab %}}

{{% /tabs %}}


You can see the input handler calls `store.set()` to update the store values. If you are used to React `setState`, you might have expected something like this,

```javascript
store.update((prev) => ({ ...prev, name: this.value }));
```

but `store.update()` is just identical to `.set()` [internally](https://github.com/sveltejs/svelte/blob/master/src/runtime/store/index.ts#L87), so there is little point in that.

The store then checks whether the new value is different from previous, before it notifies all of its subscribers. However, when the store contains an array or object, it *skips the check*, as seen from [the comparing algorithm](https://github.com/sveltejs/svelte/blob/670f4580568fe8ea31097981ba2d59c33daf0725/src/runtime/internal/utils.ts):

```javascript {path="'svelte/store'"}
export function writable(value, /* ... */) {
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      // run subscriber callbacks
    }
  }
}
```
```javascript {path="'svelte/internal/utils'"}
export function safe_not_equal(a, b) {
    return a != a
      ? b == b
      : a !== b
        || (a && typeof a === "object")
        || typeof a === "function";
  }
```

Hence, all components subscribed to the store will attempt to update ***even when none of the values changes***. For example, `alert()` will run whenever you click the button below.

{{% mn ex3 %}}
Check [this REPL](https://svelte.dev/repl/d23563499463416f98f7d59e4450a386?version=3.55.0) for demonstration.
{{% /mn %}}
```svelte {path="NameForm.svelte"}
<script>
  import { store } from "./stores";
</script>

<label>
  What is your name?
  <input type="text" bind:value={$store.name} />
</label>
<button on:click={() => $store.name = "James"}>
  James-ify me!
</button>
```

So why do Svelte does not implement shallow equality checking like many other state management libraries, and instead force *every* component to update? Let's find out what happens when a component is scheduled to update.


### Component update

Every component with variables whose values can change in its lifecycle will have its corresponding u***p***date method, `p()`, to instruct how its DOM elements should be updated. For example, here is the update method compiled from `NameForm.svelte`:

{{% tabs id="name" %}}

{{% tab name="Svelte component" %}}
```svelte {path="NameForm.svelte" hl_lines="7"}
<script>
  import { store } from "./stores";
</script>

<label>
  What is your name?
  <input type="text" bind:value={$store.name} />
</label>
```
{{% /tab %}}

{{% tab name="Compiled result" %}}
```javascript {linenos=true linenostart=41 hl_lines="5-12"}
function create_fragment(ctx) {
  // ...
  return {
    // ...
    p(ctx, [dirty]) {
      if (
        dirty & /*$store*/ 1 && 
        input.value !== /*$store*/ ctx[0].name
      ) {
        set_input_value(input, /*$store*/ ctx[0].name);
      }
    },
    // ...
  };
}
```
{{% /tab %}}

{{% /tabs %}}

The compiled code clearly indicates `<input>` will be updated when its value does not match `$store.name`. Thus, *components carry out the shallow comparison* for the store anyway, so stores do not need to worry about triggering redundant DOM updates.

However, there is still one takeaway; because `p()` will still be called to do these checks, callback functions scheduled with lifecycle methods like `beforeUpdate()` and `afterUpdate()` *will be invoked whether or not* the elements actually update.

This is the same with reactive statements. If we look at how `AgeForm.svelte` is compiled, we can see the statement will run if the store has been touched since last update, not just `$store.age`.

{{% tabs id="name" %}}

{{% tab name="Svelte component" %}}
```svelte {path="AgeForm.svelte" hl_lines="4-8"}
<script>
  import { store } from "./stores";
	
  $: {
    if ($store.age < 18) {
      alert("You are under 18!");
    }
  }
</script>

<label>
  What is your age?
  <input type="number" bind:value={$store.age} />
</label>
```
{{% /tab %}}

{{% tab name="Compiled result" %}}
```javascript {linenos=true linenostart=41 hl_lines="4-12"}
function instance($$self, $$props, $$invalidate) {
  // ...

  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$store*/ 1) {
      $: {
        if ($store.age < 18) {
          alert("You are under 18!");
        }
      }
    }
  };
  // ...
}
```
{{% /tab %}}

{{% /tabs %}}




{{% details title="More about Svelte internals" %}}

I was inspired by [this amazing presentation](https://www.youtube.com/watch?v=FNmvcswdjV8) and [this post series](https://lihautan.com/compile-svelte-in-your-head/) (unfortunately unfinished) to start writing this post. If you want a more in-depth analysis of the Svelte compiler, I highly recommend you to have a look.

{{% /details %}}


## Solutions

Now that we understand the reasons behind this seemingly unnecessary "updates", we can discuss how we can improve our practices.

### Don't worry about it

[Seriously](https://github.com/sveltejs/svelte/issues/4285). Components constantly calling their update methods will not affect the performance for most cases because going through a couple of `if` statements is much faster than actually performing DOM manipulations.

On the other hand, if your components are filled with slow side-effects, it is desirable to suppress component updates in the first place. Below are a few examples of how you can achieve this.


### Use multiple stores

The current store syntax introduced in [Svelte 3](https://github.com/sveltejs/rfcs/blob/master/text/0002-reactive-stores.md) is designed to encourage developers to work with multiple atomic stores, instead of one giant store like Redux. If we split the store into two separate stores, `$name` and `$age`, and the components only subscribe to one of them, there will be no unnecessary updates to begin with.

```javascript {path="stores.js"}
import { writable } from "svelte/store";

export const name = writable("John");
export const age = writable(18);
```
```svelte {path="NameForm.svelte"}
<script>
  import { name } from "./stores";
</script>

<label>
  What is your name?
  <input type="text" bind:value={$name} />
</label>
```

What if the component needs to access multiple stores at once? Of course it can import all of them, or you can `derive` a read-only store from multiple stores:

```javascript {path="stores.js"}
import { writable, derived } from "svelte/store";

export const name = writable("John");
export const age = writable(18);

export const selfIntro = derived(
  [name, age], 
  ([$name, $age]) => `${$age}-year-old ${$name}`
);
```
```svelte {path="App.svelte"}
<script>
  import { selfIntro } from "./stores";
</script>

<div>
  <span>Hello, {$selfIntro}!</span>
</div>
```


### Slice stores

Lastly, if you still wish to stick to one big nested store, you can use `derived` to have the components subscribe to only certain values.

```javascript {path="stores.js"}
import { writable } from "svelte/store";

export const store = writable({
  name: "John",
  age: 18,
});
```
```svelte {path="AgeForm.svelte" hl_lines="5 17"}
<script>
  import { derived } from "svelte/store";
  import { store } from "./stores";
	
  const age = derived(store, $store => $store.age);
  $: {
    if ($age < 18) {
      alert("You are under 18!");
    }
  }
</script>

<label>
  What is your age?
  <input 
    type="number" value={$age}
    on:change={(e) => $store.age = e.target.value} 
  />
</label>
```

Because derived stores are read-only, you need to provide a custom change handler, instead of using `bind:`. If you really want to bind to an `<input>`, we can implement the `set()` function to [turn it into](/posts/persisting-svelte-stores-with-localstorage/#understanding-svelte-stores) a writable store.{{% sn derived %}}
You can also use external libraries like [`svelte-writable-derived`](https://github.com/PixievoltNo1/svelte-writable-derived).
{{% /sn %}}

```javascript {path="stores.js"}
import { writable, derived } from "svelte/store";

const slice = (parentStore, key) => {
  return {
    ...derived(parentStore, ($store) => $store[key]),
    set: (value) => {
      parentStore.update((prev) => ({ ...prev, [key]: value }));
    },
    update: (updater) =>
      parentStore.update((prev) => ({ ...prev, [key]: updater(prev[key]) })),
  };
};

export const store = writable({
  name: "John",
  age: 18,
});
export const age = slice(store, "age");
```
