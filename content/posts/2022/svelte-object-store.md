---
title: "Objects in Svelte Stores: Thoughts and Best Practices"
description: "Svelte stores are perfect for handling nested objects, but there are a couple of things you want to be aware of."

date: 2022-12-17 17:31:52.266 +1100

toc: true
draft: true

tags:
  - Svelte
  - JavaScript

---

## Introduction

[Svelte stores](https://svelte.dev/docs#run-time-svelte-store) are an amazing tool to make writing an app in Svelte more exciting. You just need one line of code, `$` syntax and a simple `bind:` to create a global state: 

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

However, this practice creates strange behaviour that may be counterintuitive at first glance. Have a look at the two examples below.


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

Okay, that seems odd, but it still makes some sense because we are still using the `name` field in the component. So you decide to extract the inputs and then insert the age-dependent logic in the `AgeInput` component. You then use [`afterUpdate`](https://svelte.dev/docs#run-time-svelte-afterupdate) to make sure you only run the code when the age changes:

```svelte {path="App.svelte"}
<script>
  import { store } from "./stores";
  import NameInput from "./NameInput.svelte";
  import AgeInput from "./AgeInput.svelte";
</script>

<div>
  <NameInput />
  <AgeInput />
</div>
<div>
  <span>Hello, {$store.age}-year-old {$store.name}!</span>
</div>
```
```svelte {path="AgeInput.svelte"}
<script>
  import { afterUpdate } from "svelte";
  import { store } from "./stores";
	
  afterUpdate(() => {
    if ($store.age < 18) {
      alert("You are under 18!");
    }
  });
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

{{< hbox title="Note" >}}

I was inspired by [this amazing presentation](https://www.youtube.com/watch?v=FNmvcswdjV8) and [this post series](https://lihautan.com/compile-svelte-in-your-head/) (unfortunately unfinished) to start writing on this topic. If you want more in-depth analysis of the Svelte compiler, I highly recommend you to have a look.

{{< /hbox >}}

## Solutions


### Don't worry about it

https://github.com/sveltejs/svelte/issues/4285


### Split the store

https://github.com/sveltejs/rfcs/blob/master/text/0002-reactive-stores.md


### Use derived stores



{{% note Update %}}
I have since discovered [`svelte-writable-derived`](https://github.com/PixievoltNo1/svelte-writable-derived), which includes all features I am about to explain and more. This post will stay more as a tutorial for future myself and anyone who would like to know more about how Svelte store works.

