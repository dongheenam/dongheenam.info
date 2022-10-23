---
title: "Managing Nested States in React"
description: "Tricks for updating nested states, such as form values, in React using setState and Zustand"

date: 2022-10-23 07:39:49.825 +1100

toc: true
draft: false

tags:
  - React
  - JavaScript
  - Zustand

---

## Managing Form Value State

Suppose we have a simple form with three inputs -- name, age and favourite item -- controlled by a state.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx"}
import {useState} from "react";

const FAVOURITES = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
] as const;

type FormValues = {
  name: string;
  age: number;
  favourite: typeof FAVOURITES[number];
};
const INITIAL_VALUES: FormValues = {
  name: "",
  age: 0,
  favourite: "apple",
};

export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  return (
    <div>
      <div>
        <label>
          <span>Name</span>
          <input type="text" value={formValues.name} />
        </label>
      </div>
      <div>
        <label>
          <span>Age</span>
          <input type="number" value={formValues.age} />
        </label>
      </div>
      <div>
        <label>
          <span>Favourite</span>
          <select value={formValues.favourite}>
            {FAVOURITES.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx"}
import {useState} from "react";

const FAVOURITES = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
];

const INITIAL_VALUES = {
  name: "",
  age: 0,
  favourite: "apple",
};

export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  return (
    <form>
      <div>
        <label>
          <span>Name</span>
          <input type="text" value={formValues.name} />
        </label>
      </div>
      <div>
        <label>
          <span>Age</span>
          <input type="number" value={formValues.age} />
        </label>
      </div>
      <div>
        <label>
          <span>Favourite</span>
          <select value={formValues.favourite}>
            {FAVOURITES.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
}
```
{{% /tab %}}
{{% /tabs %}}

We now need to provide the inputs `onChange` handlers, so users can actually change the values. But how does it look like? Because the form values are stored inside an object, it becomes pretty nasty.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx"}
// ...
export default function App() {
  // ...
  return (
    // ...
          <input
            type="text"
            value={formValues.name}
            onChange={(e) =>
              setFormValues((prev) => ({ 
                ...prev,
                name: e.target.value 
              }))
            }
          />
    // ...
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx"}
// ...
export default function App() {
  // ...
  return (
    // ...
          <input
            type="text"
            value={formValues.name}
            onChange={(e) =>
              setFormValues((prev) => ({ 
                ...prev,
                name: e.target.value 
              }))
            }
          />
    // ...
  );
}
```
{{% /tab %}}
{{% /tabs %}}

Having to write this multiple times is pretty painful, so we need a utility function. At first glance, writing a utility function for handling the state change does not look like an easy task because there are two arguments we need to deal with: the key and the new value. Luckily, we have a couple of solutions you can implement.

### Solution 1: currying

This solution uses the technique called [currying](https://javascript.info/currying-partials).{{% sn curry %}}This technique is mostly used in functional programming languages, such as [Haskell](https://wiki.haskell.org/Currying). You can also find the reducer function used in [`Array.reduce()`](https://www.w3schools.com/jsref/jsref_reduce.asp) also has a similar structure. {{% /sn %}} In short, we are writing a function that accepts a field name and returns *another function that updates that field*. The [arrow function notation](https://www.w3schools.com/js/js_arrow_function.asp) nicely shows what we are intending to do here.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx
const updateForm = <Key extends keyof FormValues>
  (field: Key) =>
  (value: FormValues[Key]) =>
    setFormValues((prev) => ({ ...prev, [field]: value }));
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx
// ...
const updateForm = (field) => (value) =>
  setFormValues((prev) => ({ ...prev, [field]: value }));
```
{{% /tab %}}
{{% /tabs %}}

This is how the utility function can be used:

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx", hl_lines="5-8 15"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateForm = <Key extends keyof FormValues>
    (field: Key) =>
    (value: FormValues[Key]) =>
      setFormValues((prev) => ({ ...prev, [field]: value }));
  
  return (
    // ...
          <input
            type="text"
            value={formValues.name}
            onChange={(e) => updateForm("name")(e.target.value)}
          />
    // ...
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateForm = (field) => (value) =>
    setFormValues((prev) => ({ ...prev, [field]: value }));
  
  return (
    // ...
          <input
            type="text"
            value={formValues.name}
            onChange={(e) => updateForm("name")(e.target.value)}
          />
    // ...
  );
}
```
{{% /tab %}}
{{% /tabs %}}

{{% details title="Note on types" %}}

This function works perfectly fine with custom types thanks to [generic types](https://www.typescriptlang.org/docs/handbook/2/generics.html). This is useful because TypeScript can still pick up errors like writing a wrong field name, as shown below.

{{< figure src="blogs/2022/nested-state-types.png" alt="TypeScript picking up wrong field names" >}}

{{% /details %}}

It does not look like it's saving much hassle, but it becomes very useful when we want to extract the inputs to separate components.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx", hl_lines="11-15 22-40"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateForm = (field) => (value) =>
    setFormValues((prev) => ({ ...prev, [field]: value }));
  
  return (
    <form>
      <div>
        <TextInput
          label="name"
          value={formValues.name}
          setValue={updateForm("name")}
        />
      </div>
      {/* ... */}
    </form>
  );
}

interface TextInputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  label: string;
  value: string;
  setValue: (value: string) => void;
}
function TextInput({ label, value, setValue, ...props }: TextInputProps) {
  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </label>
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx", hl_lines="11-15 22-34"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateForm = (field) => (value) =>
    setFormValues((prev) => ({ ...prev, [field]: value }));
  
  return (
    <form>
      <div>
        <TextInput
          label="name"
          value={formValues.name}
          setValue={updateForm("name")}
        />
      </div>
      {/* ... */}
    </form>
  );
}

function TextInput({ label, value, setValue, ...props }) {
  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </label>
  );
}
```
{{% /tab %}}
{{% /tabs %}}


### Solution 2: object input

Possibly a more common approach is to write a function that takes a partial object of the form values and merges the input with the current state.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx
const updateFormTwo = (updated: Partial<FormValues>) =>
  setFormValues((prev) => ({...prev, ...updated}));
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx
const updateFormTwo = (updated) =>
  setFormValues((prev) => ({...prev, ...updated}));
```
{{% /tab %}}
{{% /tabs %}}

This function can be called like this.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx", hl_lines="5-6 13"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateFormTwo = (updated: Partial<FormValues>) =>
    setFormValues((prev) => ({...prev, ...updated}));
  
  return (
    // ...
        <input
          type="text"
          value={formValues.name}
          onChange={(e) => updateFormTwo({ name: e.target.value })}
        />
    // ...
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx", hl_lines="5-6 13"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateFormTwo = (updated) =>
    setFormValues((prev) => ({...prev, ...updated}));
  
  return (
    // ...
        <input
          type="text"
          value={formValues.name}
          onChange={(e) => updateFormTwo({ name: e.target.value })}
        />
    // ...
  );
}
```
{{% /tab %}}
{{% /tabs %}}

This method is easier to understand, but it is not really my favourite because extracting the input element takes a little more effort.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/App.tsx", hl_lines="14"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateFormTwo = (updated: Partial<FormValues>) =>
    setFormValues((prev) => ({...prev, ...updated}));
  
  return (
    <form>
      <div>
        <TextInput
          label="name"
          value={formValues.name}
          setValue={(value) => updateFormTwo({ name: value })}
        />
      </div>
      {/* ... */}
    </form>
  );
}
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/App.jsx", hl_lines="14"}
// ...
export default function App() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const updateFormTwo = (updated) =>
    setFormValues((prev) => ({...prev, ...updated}));
  
  return (
    <form>
      <div>
        <TextInput
          label="name"
          value={formValues.name}
          setValue={(value) => updateFormTwo({ name: value })}
        />
      </div>
      {/* ... */}
    </form>
  );
}
```
{{% /tab %}}
{{% /tabs %}}


## Managing Global State

You can extend the methods above to write an action for a global state manager, such as Redux and [Zustand](https://github.com/pmndrs/zustand).

### With Zustand

Say you want to store the form values from the previous section once it is submitted. You would then need a store like this:

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx {path="/src/useMyStore.tsx"}
import create from 'zustand';

const FAVOURITES = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
] as const;

interface MyState {
  user: {
    name: string;
    age: number;
    favourite: typeof FAVOURITES[number];
  };
}
const useMyStore = create<MyState>()((set) => ({
  user: {
    name: "John",
    age: 18,
    favourite: "durian",
  },
}));
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx {path="/src/useMyStore.jsx"}
import create from 'zustand'

const FAVOURITES = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
];

const useMyStore = create((set) => ({
  user: {
    name: "John",
    age: 18,
    favourite: "durian",
  },
}))
export default useMyStore;
```
{{% /tab %}}
{{% /tabs %}}

The actions can then be defined like this. Note that you only need one or the other.

{{% tabs id="typescript" %}}
{{% tab name="TypeScript" %}}
```tsx
interface MyState {
  // ...
  updateUser: <Key extends keyof MyState["user"]>
    (field: Key) => (value: MyState["user"][Key]) => void;
  updateUserTwo: (updated: Partial<MyState["user"]>) => void;
}
const useMyStore = create<MyState>()((set) => ({
  // ...
  updateUser: (field) => (value) =>
    set((prev) => ({ user: { ...prev.user, [field]: value } })),
  updateUserTwo: (updated) =>
    set((prev) => ({ user: { ...prev.user, ...updated } })),
}));

```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```jsx
const useMyStore = create((set) => ({
  // ...
  updateUser: (field) => (value) =>
    set((prev) => ({ user: { ...prev.user, [field]: value } })),
  updateUserTwo: (updated) =>
    set((prev) => ({ user: { ...prev.user, ...updated } })),
}));
```
{{% /tab %}}
{{% /tabs %}}

You can see that `updateUserTwo` may be more useful when you need to update multiple fields at once.