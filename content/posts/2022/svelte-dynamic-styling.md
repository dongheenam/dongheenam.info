---
title: "Themed Svelte Components without CSS-in-JS"
description: "Using CSS variables to make easily customisable components"

date: 2022-12-26 11:18:35.881 +1100

toc: true
draft: false

tags:
  - Svelte
  - JavaScript
  - CSS

---

## Introduction

For my React hobby projects, I really loved using [Chakra UI](https://chakra-ui.com/) and [Mantine](https://mantine.dev/) for a long time because they are very intuitive to use. If you want to make a filled red button, you just write

```React
import { Button as ChakraButton } from "@chakra-ui/react";
import { Button as MantineButton } from "@mantine/core";

function App() {
  return (
    <ChakraButton variant="filled" colorScheme="red">
      Red button
    </ChakraButton>
    <MantineButton variant="filled" color="red">
      Another red button
    </MantineButton>
  );
}
```

and you're done! Sadly, I eventually stopped using those UI libraries because of my (and NextJS compiler's) concerns towards bloated [bundle sizes](https://bundlephobia.com/package/@chakra-ui/react@2.4.4), and the use of CSS-in-JS to achieve easy styling, which the React team now [discourages us](https://github.com/reactwg/react-18/discussions/110) to use.

However, trying to reproduce this flexibility with plain CSS is hard. I first tried this while going through [30 Days of React](https://github.com/Asabeneh/30-Days-Of-React) tutorials, and it was a [hot mess](https://github.com/dongheenam/30-days-of-react-solutions/blob/main/src/components/Button.tsx). I now 100% agree that Tailwind is not built for this, but [SASS mixins](https://github.com/dongheenam/math-test-builder/blob/radix-revisit/src/styles/mixins.scss#L93) weren't particularly pleasant either.

I finally had a "Eureka" moment when I was reading at Svelte Docs on [style props](https://svelte.dev/docs#template-syntax-element-directives-style-property): I can use CSS variables to dynamically style the components! Of course, I am reinventing the wheel since there are many fascinating UI libraries that only use (S)CSS, such as [PrimeReact](https://www.primefaces.org/primereact/) and [Blueprint](https://blueprintjs.com/), but I took this as an opportunity to know more about Svelte and modern CSS.

Now let's have a look.

## Svelte Components with Themes

We will build a component with pre-defined styles that can be toggled with two props: `variant` and `color`. For example, the following buttons can be made

{{< figure src="blogs/2022/buttons.png" alt="Example buttons" >}}

with this code:

```svelte {path="App.svelte"}
<script>
  import Button from "./Button.svelte";
</script>

<div>
  <Button>
    Gray default
  </Button>
  <Button variant="outline" color="blue">
    Blue outlined
  </Button>
  <Button variant="subtle" color="red">
    Red subtle
  </Button>
  <Button variant="filled" color="green">
    Green filled
  </Button>
</div>
```

### TL;DR

If you just want the code without any explanations, explore [this REPL](https://svelte.dev/repl/060d8275145246e6991003d5eac1972c?version=3.55.0).


### Dependencies

Because creating a color system is a painful task, I will use [Radix colors](https://www.radix-ui.com/colors) for the component. The library provides CSS variables for their color scheme, which essentially looks like:

```css {path="'@radix-ui/colors/gray.css'"}
#root {
  --gray1: hsl(...);
  --gray2: hsl(...);
  /* ... */
}
```

You can, of course, swap these with any color palettes you have.


### Base CSS

Let's first focus on the base styles, such as typography and padding.

```svelte {path="Button.svelte" hl_lines="13-24"}
<script>
</script>

<!-- passing the event listeners and props -->
<button
  on:click
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    padding: 0.6em 1em;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    /* for buttons with icons */
    display: flex;
    gap: 0.6em;
    align-items: center;
  }
</style>
```

### The "default" style

We will then add a "default" style to the button, that is, how the button should look like if no props were passed on. My default style is a grey button without border or background, just like the case of [Material UI](https://mui.com/material-ui/react-button/). Don't forget to add `:hover` and `:active` selectors to make the button respond to user actions.{{% sn guide %}}
I followed [this guide](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale) from Radix Colors.
{{% /sn %}}

```svelte {path="Button.svelte" hl_lines="25-36"}
<script>
</script>

<!-- passing the event listeners and props -->
<button
  on:click
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    padding: 0.6em 1em;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    /* for buttons with icons */
    display: flex;
    gap: 0.6em;
    align-items: center;

    /* colors */
    color: var(--gray11);
    background-color: transparent;
    border-color: transparent;
  }
  button:hover {
    color: var(--gray12);
    background-color: var(--gray4);
  }
  button:active {
    background-color: var(--gray5);
  }
</style>
```

### Adding variety with CSS variables

Now, it's time to add different style and colour options to this component. As mentioned earlier, the component will have four different variant choices and a few colour options:

```svelte {path="Button.svelte"}
<script>
  /** @type {"gray" | "blue" | "green" | "yellow" | "red"} */
  export let color = "gray";
  /** @type {"default" | "outline" | "subtle" | "filled"} */
  export let variant = "default";
</script>

<!-- ... -->
```

This looks like a painful job to code up the four variants, but it is not as tricky as it seems. Let's first summarise the text, background and border colours for the variants in a table.{{% sn guide2 %}}
I followed [this guide](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale) from Radix Colors.
{{% /sn %}} Note the "odd" ones are in bold.

|   | Default | Outline | Subtle | Filled |
|---|---|---|---|---|
| `base` | | | |
| text | color11 | color11 | color11 | ***white*** |
| background | transparent | transparent | ***color3*** | ***color9*** |
| border | transparent | ***color7*** | transparent | transparent |
| `:hover` | | | |
| text | color12 | color12 | color12 | ***white*** |
| background | color4 | color4 | color4 | ***color10*** |
| border | transparent | ***color8*** | transparent | transparent |
| `:active` | | | |
| background | color5 | color5 | color5 | ***color11*** |

Because the variants share a fair amount of settings, we can selectively define CSS variables and provide [fallback values](https://defensivecss.dev/tip/css-variable-fallback/), instead of setting up every variable for every variant. For example, only outlined buttons have non-transparent borders, so we can do something like:

```svelte {path="Button.svelte",hl_lines="4-9 12 18"}
<script>
  export let variant = "default";

  let bdColor = null;
  $: {
    if (variant === "outline") {
      bdColor = `var(--${color}7)`;
    }
  }
</script>

<button style:--btn-bd={bdColor}>
  <slot />
</button>

<style>
  button {
    border-color: var(--btn-bd, transparent);
  }
</style>
```

By appling this logic to the other CSS properties as well, we have completed the `Button` component with themes!

{{% mn ex %}}
You can play with this component in [this REPL](https://svelte.dev/repl/060d8275145246e6991003d5eac1972c?version=3.55.0).
{{% /mn %}}
```svelte {path="Button.svelte",hl_lines="18-52 57-63 83-95"}
<script>
  /** @type {"gray" | "blue" | "green" | "yellow" | "red"} */
  export let color = "gray";
  /** @type {"default" | "outline" | "subtle" | "filled"} */
  export let variant = "default";

  // CSS variables
  const VARS_INIT = {
    text: null,
    textHover: null,
    border: null,
    borderHover: null,
    background: null,
    backgroundHover: null,
    backgroundActive: null,
  };
  $: vars = {};
  $: {
    // flush the previous values
    vars = VARS_INIT;
    
    // colors
    if (color !== "gray") {
      vars = {
        ...vars,
        text: `var(--${color}11)`,
        textHover: `var(--${color}12)`,
        backgroundHover: `var(--${color}4)`,
        backgroundActive: `var(--${color}5)`,
      };
    }

    // variants
    switch (variant) {
      case "outline":
        vars.border = `var(--${color}7)`;
        vars.borderHover = `var(--${color}8)`;
        break;
      case "subtle":
        vars.background = `var(--${color}3)`;
        break;
      case "filled":
        vars = {
          ...vars,
          text: `white`,
          textHover: `white`,
          background: `var(--${color}9)`,
          backgroundHover: `var(--${color}10)`,
          backgroundActive: `var(--${color}11)`,
        };
        break;
    }
  }
</script>

<button
  style:--btn-color={vars.text}
  style:--btn-color--hover={vars.textHover}
  style:--btn-bd={vars.border}
  style:--btn-bg={vars.background}
  style:--btn-bd--hover={vars.borderHover}
  style:--btn-bg--hover={vars.backgroundHover}
  style:--btn-bg--active={vars.backgroundActive}
  on:click
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    padding: 0.6em 1em;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    /* for buttons with icons */
    display: flex;
    gap: 0.6em;
    align-items: center;

    /* colors */
    color: var(--btn-color, var(--gray11));
    background-color: var(--btn-bg, transparent);
    border-color: var(--btn-bd, transparent);
  }
  button:hover {
    color: var(--btn-color--hover, var(--gray12));
    border-color: var(--btn-bd--hover, transparent);
    background-color: var(--btn-bg--hover, var(--gray4));
  }
  button:active {
    background-color: var(--btn-bg--active, var(--gray5));
  }
</style>
```