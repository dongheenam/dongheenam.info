---
title: "Using Desmos API in Hugo"
description: "How to embed the interactive graphing package Desmos in Hugo."

date: 2021-05-31 19:01:09.726 +1000
lastMod: 2021-05-31 19:01:09.726 +1000

toc: true
math: true
draft: false
highlight: true
desmos: true

tags:
  - JavaScript
  - Desmos

---

## Introduction

[Desmos](https://www.desmos.com/) is a powerful web-based graphing calculator. You can draw graphs by typing their equations, calculate derivatives and integrals, solve inequalities, and perform [many more operations](https://learn.desmos.com/). Desmos has a [standalone website](https://www.desmos.com/calculator), but also [provides an API](https://www.desmos.com/api/v1.6/docs/index.html) so that you can embed it in your webpage with pre-defined graphs and calculations using JavaScript. The API is pretty straightforward to deal with; for example, the following code

```html
<div id="calc" style="width: 100%; height: 450px"></div>
<script>
  const elt = document.getElementById('calc');
  const calc = Desmos.GraphingCalculator(elt);
  calc.setExpression({ id: 'f', latex: 'x^2+y^2=5^2' });
  calc.setExpression({ id: 'g', latex: 'x+y=3' });
</script>
```
renders as follows.

<div id="calc" class="box-desmos" style="height: 450px"></div>
<script>
  const elt = document.getElementById('calc');
  const calc = Desmos.GraphingCalculator(elt);
  calc.setExpression({ id: 'f', latex: 'x^2+y^2=5^2' });
  calc.setExpression({ id: 'g', latex: 'x+y=3' });
</script>


## Setting up

### Including the script

Desmos provides the pre-packaged JavaScript file, so you simply need to include it using the `<script>` tag:

```filename
> layouts/partials/head.html
```
```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ...
    {{- if .Params.desmos -}}
    <script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
    {{- end -}}
</head>
```

Things to note:
- You need to write `desmos: true` in your page's YAML to include the script.
- The `<meta>` tag is required so that the calculator layout is correctly adjusted for mobile devices (you should have this tag in your website already).
- The default API Key (`dcb31709b452b1cf9dc26972add0fda6`) is for development purpose only. You should contact the Desmos team to [obtain your API key](https://www.desmos.com/api/v1.6/docs/index.html#document-api-keys) for live projects.

### Shortcode

You then need to create an empty `<div>` with an unique ID and initiate Desmos. Since this is mostly repetitive, it is best to make a [Hugo shortcode](https://gohugo.io/content-management/shortcodes/). Here is my suggestion:

```filename
> layouts/shortcodes/desmos.html
```
```html
{{- $id := .Get "id" -}}
{{- $style := .Get "style" | default "width: 100%; height: 450px" -}}
<div id="calc-{{ $id }}" style="{{ $style | safeCSS }}"></div>
<script>
  const elt_{{ $id | safeJS }} = document.getElementById('calc-{{ $id }}');
  const calc_{{ $id | safeJS }} = Desmos.GraphingCalculator(elt{{ with .Get "options" }}, {{ . | safeJS }}{{ end }});
</script>
```

This is an example usage.{{% sn 86 %}}You can find the list of available options from the [Desmos API Documentation](https://www.desmos.com/api/v1.6/docs/index.html#document-calculator).{{% /sn %}}

```filename
> content/desmos-example.md
```
```html
{{% print "{{% desmos id=\"vd1\" options=\"{keypad: false}\" %}}" %}}
```

Above is converted to

```filename
> public/desmos-example.html
```
```html
<div id="calc-vd1" style="width: 100%; height: 450px"></div>
<script>
  const elt_vd1 = document.getElementById('calc-vd1');
  const calc_vd1 = Desmos.GraphingCalculator(elt_vd1, {keypad: false});
</script>
```

The name of the JS variables have the ID as suffix to avoid duplicate variable names when the shortcode is called more than once. I admit it may not be the most elegant solution for this, but hey, it works!


## Drawing Graphs

### Adding an expression

You can draw graphs with the `setExpression()` or `setExpressions()` method. The basic structure is as follows.

```javascript
const calc = Desmos.GraphingCalculator(elt);
calc.setExpression({ label: "plot-1", latex: "y = x^2 - 3" });
calc.setExpressions([
  { label: "plot-2", latex: "y^2 = x + 3" },
  { label: "plot-3", latex: "x + y \\le -13/4" }
]);
```

Here is the result.

{{% desmos id="ex1" options="{keypad: false}" %}}
<script>
  calc_ex1.setExpression({ label: "plot-1", latex: "y = x^2 - 3" });
  calc_ex1.setExpressions([
    { label: "plot-2", latex: "y^2 = x + 3" },
    { label: "plot-3", latex: "x + y \\le -13/4" }
  ]);
</script>

For the list of arguments, check the [documentation](https://www.desmos.com/api/v1.6/docs/index.html#document-manipulating-expressions).


### Adding a slider

If you declare a variable with an expression, a slider is automatically added for that variable. This is a very cool way to make a dynamic applet. Have a look at the example below.

```javascript
calc_ex2.setExpression({ label: "plot", latex: "y = ax^2 + bx + c" });
calc_ex2.setExpressions([
  // this is a default slider
  { label: "slider-a", latex: "a = 1" },
  // this slider can only have values between -3 and 3
  { label: "slider-b", latex: "b = 0", sliderBounds: {min: -3, max: 3} },
  // this slider has increments of 1
  { label: "slider-c", latex: "c = 0", sliderBounds: {step: 1} }
]);
```

Result:

{{% desmos id="ex2" options="{keypad: false}" %}}
<script>
  calc_ex2.setExpression({ label: "plot", latex: "y = ax^2 + bx + c" });
  calc_ex2.setExpressions([
    // this is a default slider
    { label: "slider-a", latex: "a = 1" },
    // this slider can only have values between -3 and 3
    { label: "slider-b", latex: "b = 0", sliderBounds: {min: -3, max: 3} },
    // this slider has increments of 1
    { label: "slider-c", latex: "c = 0", sliderBounds: {step: 1} }
  ]);
</script>

Another cool features is the draggable point. Instead of using the sliders, one can directly move the points in the plot to change the values of the variables. Have a look at the example below.

```html
{{% print "{{% desmos id=\"ex3\" options=\"{keypad: false, expressions: false}\" %}}" %}}
<script>
  calc_ex3.setExpression({ label: "plot", latex: "y = ax(x-p)(x-q)" });
  calc_ex3.setExpressions([
    { label: "slider-a", latex: "a = 1" },
    { label: "slider-b", latex: "p = 1" },
    { label: "slider-c", latex: "q = -1" },
    { label: "xcept-1", latex: "(p, 0)", color: calc_ex3.colors.BLUE },
    { label: "xcept-2", latex: "(q, 0)", color: calc_ex3.colors.BLUE },
    { label: "dilation", latex: "(0, 2a)", color: calc_ex3.colors.RED }
  ]);
</script>
```

Note the `{expressions: false}` option to remove the expressions panel, so the sliders are invisible now. However, you can still move the blue and red points around to change the values of $a,~p,~q.$

{{% desmos id="ex3" options="{keypad: false, expressions: false}" %}}
<script>
  calc_ex3.setExpression({ label: "plot", latex: "y = ax(x-p)(x-q)" });
  calc_ex3.setExpressions([
    { label: "slider-a", latex: "a = 1" },
    { label: "slider-b", latex: "p = 1" },
    { label: "slider-c", latex: "q = -1" },
    { label: "xcept-1", latex: "(p, 0)", color: calc_ex3.colors.BLUE },
    { label: "xcept-2", latex: "(q, 0)", color: calc_ex3.colors.BLUE },
    { label: "dilation", latex: "(0, 2a)", color: calc_ex3.colors.RED }
  ]);
</script>


### Observing the values

You can not only push the expressions into `GraphicsCalculator` but also pull values out of it. You can do it by using the `HelperExpression` constructor.

```javascript
calc_ex4.setExpression({ label: "slider-a", latex: "a = 1" });
const a = calc_ex4.HelperExpression({ latex: "a" });
```

You can access the value of the variable with the `numericValue` property, and the `observe()` function executes the specified callback function when it detects a change in the value. Overall, the code would look like below.

```html
{{% print "{{% desmos id=\"ex4\" options=\"{keypad: false}\" %}}" %}}
<div>The value of a is <span id="display-a"></span>.</div>
<script>
  calc_ex4.setExpression({ label: "slider-a", latex: "a = 3" });
  const a = calc_ex4.HelperExpression({ latex: "a" });
  const $disp_a = document.getElementById("display-a");
  a.observe('numericValue', function() {
    $disp_a.innerHTML = a.numericValue;
  });
</script>
```

You can confirm when you change the value of $a$, the content of the following sentence also changes: the value of a is <span id="display-a"></span>.

{{% desmos id="ex4" style="height: 200px" options="{keypad: false}" %}}
<script>
  calc_ex4.setExpression({ label: "slider-a", latex: "a = 3" });
  const a = calc_ex4.HelperExpression({ latex: "a" });
  const $disp_a = document.getElementById("display-a");
  a.observe('numericValue', function() {
    $disp_a.innerHTML = a.numericValue;
  });
</script>

## Examples

This is a collection of some examples that show the power of Desmos applets.

### Extrema of quadratic graphs

The code below shows the minimum and maximum points of $ y = x^2-2ax+3a $ with domain $0 \le x \le 4.$ The code is a little messy because Desmos cannot automatically calculate the extrema of a function, but the overall behaviour is fairly smooth. You can change the value of $a$ by dragging the vertex of the graph.

{{% desmos id="ext" options="{keypad: false, expressions: false}" %}}
<script>
  // set the boundaries for the axes
  calc_ext.setMathBounds({
    left: -3,
    right: 8,
    bottom: -11,
    top: 21
  });
  // draw the expressions
  calc_ext.setExpressions([
    { id: 'slider', latex: 'a=3', sliderBounds: {min:-1, max: 5, step: 0.1} },
    { id: 'dom', latex: "0 \\le x \\le 4",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2-2ax+3a", color: "black"},
    { id: 'f2', latex: "y=x^2-2ax+3a \\{ 0 \\le x \\le 4 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(a, -a^2+3a)", color: 'black', showLabel: true, label: "a = 3"},
    { id: 'min', latex: minLoc(3), color: 'green', showLabel: true, label: "Min"},
    { id: 'max', latex: maxLoc(3), color: 'red', showLabel: true, label: "Max"}
  ]);
  // add a HelperExpression for a
  const slider = calc_ext.HelperExpression({ latex: 'a' });
  // update the locations of the extrema when a changes
  slider.observe('numericValue', function() {
      calc_ext.setExpressions([
        {id: 'min', latex: minLoc(slider.numericValue)},
        {id: 'max', latex: maxLoc(slider.numericValue)},
        {id: 'ver', label: `a = ${slider.numericValue}`}
      ]);
    });
  // returns the coordinates of the minimum based on a
  function minLoc(a) {
    if (a < 0) {
      return `(0, ${3*a})`;
    } else if (a <= 4) {
      return `(${a}, ${-(a**2) + 3*a})`;
    } else {
      return`(4, ${16-5*a})`;
    }
  }
  // returns the coordinates of the maximum based on a
  function maxLoc(a) {
    if (a < 2) {
      return  `(4, ${16-5*a})`;
    } else if (a == 2) {
      return "(0,6), (4,6)";
    } else {
      return`(0, ${3*a})`;
    }
  }
</script>

Below is the code.

```html
{{% print "{{% desmos id=\"ext\" options=\"{keypad: false, expressions: false}\" %}}" %}}
<script>
  // set the boundaries for the axes
  calc_ext.setMathBounds({
    left: -3,
    right: 8,
    bottom: -11,
    top: 21
  });
  // draw the expressions
  calc_ext.setExpressions([
    { id: 'slider', latex: 'a=3', sliderBounds: {min:-1, max: 5, step: 0.1} },
    { id: 'dom', latex: "0 \\le x \\le 4",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2-2ax+3a", color: "black"},
    { id: 'f2', latex: "y=x^2-2ax+3a \\{ 0 \\le x \\le 4 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(a, -a^2+3a)", color: 'black', showLabel: true, label:"a = 3"},
    { id: 'min', latex: minLoc(3), color: 'green', showLabel: true, label:"Min"},
    { id: 'max', latex: maxLoc(3), color: 'red', showLabel: true, label:"Max"}
  ]);
  // add a HelperExpression for a
  const slider = calc_ext.HelperExpression({ latex: 'a' });
  // update the locations of the extrema when a changes
  slider.observe('numericValue', function() {
      calc_ext.setExpressions([
        {id: 'min', latex: minLoc(slider.numericValue)},
        {id: 'max', latex: maxLoc(slider.numericValue)},
        {id: 'ver', label: `a = ${slider.numericValue}`}
      ]);
    });
  // returns the coordinates of the minimum based on a
  function minLoc(a) {
    if (a < 0) {
      return `(0, ${3*a})`;
    } else if (a <= 4) {
      return `(${a}, ${-(a**2) + 3*a})`;
    } else {
      return`(4, ${16-5*a})`;
    }
  }
  // returns the coordinates of the maximum based on a
  function maxLoc(a) {
    if (a < 2) {
      return  `(4, ${16-5*a})`;
    } else if (a == 2) {
      return "(0,6), (4,6)";
    } else {
      return`(0, ${3*a})`;
    }
  }
</script>
```