---
title: "Minima and Maxima as Functions"
slug: extrema-as-functions
description: "Treating the maximum or minimum values as functions and solving problems."

date: 2021-07-01 14:07:22.667 +1000

toc: true
type: docs
math: true
desmos: true
draft: false

tags:
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1-func:
    name: Extrema as Functions
    parent: Quadratic Graphs
    weight: 18

weight: 28
---

## Introduction

We [looked at some examples](../extrema-2/#varying-coefficients) how the minimum and maximum values change as the coefficients of the function change. In this lesson, we will extend that idea and:
- define the minimum and maximum values of a function with a variable constant as a function.
- find the extrema of the minimum and maximum functions.

## Function of Extremum Values

Suppose a quadratic function $f(x)$ with a free parameter $t$.{{% sn 36 %}}Strictly speaking, this makes $f$ a function of *both* $x$ and $t$, or $f(x, t)$. However, this treatment makes the problem much more complicated, so we will treat it as just a function of $x$ for now.{{% /sn %}} Below is one example.

- $f(x) = x^2 + t.$

You can clearly see that the minimum of this function will depend on the value of $t$. Does this mean that the minimum forms a function? Well, if you recall the [definition of a function](../../functions-and-graphs/introduction/#functions), it still needs to satisfy two additional conditions.

- the minimum of $f(x)$ must exist for every possible value of $t$, and
- the minimum must be unique for a single value of $t$.

The first condition is pretty easy: if you fix the value of $t$ and there are more than one minimum values for $f(x)$, it implies that $f(x)$ is itself not a function. The second condition can be satisfied by carefully choosing the range of $t$. Therefore, we conclude that the minimum value of $f(x)$ is in fact a function of $t$!

How is this going to be useful? Here is one application: a function may have maximum or minimum values. If the extremum values of a function forms a function, you may be able to find the minimum or maximum of the extremum values of a function!

{{% box %}}

{{% note Example %}} Suppose $f(x) = x^2 - 2ax + 2a$ with the domain $0\le x \le 2$ and $a$ is positive. Define the minimum value of $f(x)$ as $\min_f (a).$ Find the maximum of $\min_f (a).$

{{% note Solution %}} We will first find the vertex of the function in terms of $a$.
\begin{align*}
  f(x) &= x^2 - 2ax \hl{+a^2 -a^2} + 2a \\\\
  &= (x-a)^2 - a^2 + 2a
\end{align*}
hence the vertex of $y=f(x)$ is $(a, -a^2+2a).$ The vertex can be inside the domain $0\le x \le 2$ or outside.

$\tcirc{1}\quad$ When $0< a \le 2,$ the vertex is inside the domain. Because $y=f(x)$ is concave up, the vertex becomes the minimum. Hence the minimum value is $$f(a) = -a^2 + 2a.$$

$\tcirc{2}\quad$ When $a > 2,$ the vertex is on the right of the domain. The minimum occurs at the nearest point to the vertex. Hence the minimum value is $$f(2) = 2^2 - 2a\cdot 2 + 2a = -2a + 4.$$

From above, we can define $\min_f (a)$ by:
$$ \textstyle \min_f (a) = \begin{cases} -a^2 + 2a & \text{if } 0 < a \le 2, \\\\ -2a + 4 & \text{if } a > 2. \end{cases} $$

So what is the maximum of this function? We know it should not happen beyond $a=2$ because $-2a+4$ decreases as $a$ increases. Then the maximum of $\min_f(a)$ is equal to the maximum of $-a^2 + 2a$ at $0 < a \le 2.$ This is a concave down parabola, so the maximum is the vertex.
\begin{align*}
  -a^2 + 2a &= -(a^2 - 2a) \\\\
  &= -(a^2 - 2a \hl{+ 1 -1} ) \\\\
  &= -\left\\{(a-1)^2 - 1 \right\\} \\\\
  &= -(a-1)^2 + 1,
\end{align*}
The vertex is $(1,1),$ so the maximum is $\boldsymbol{ 1 }$ at $\boldsymbol{ a=1 }.$

{{% mn 76 %}}Minimum points of $f(x) = x^2 - 2ax + 2a$. Drag the vertex to change the value of $a$. Note where the minimum value is the largest. {{% /mn %}}
{{% desmos id="ex1" style="height: 450px; margin-bottom: 0.5rem" options="{keypad: false, expressions: false}" %}}
<script>
  calc_ex1.setMathBounds({
    left: -2,
    right: 8,
    bottom: -6,
    top: 5
  });
  let min_coords = minLoc(2);
  calc_ex1.setExpressions([
    { id: 'slider', latex: 'a=2', sliderBounds: {min:0, max: 3.5, step: 0.05} },
    { id: 'dom', latex: "0 \\le x \\le 2",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2 - 2ax + 2a", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y=x^2 - 2ax + 2a \\{ 0 \\le x \\le 2 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(a, -a^2+2a)", color: 'black', showLabel: true, label:"a = 2", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'min', latex: min_coords, color: 'green', pointSize: 15, showLabel: true, label:"Min", labelSize: Desmos.LabelSizes.LARGE }
  ]);
  let ex1_slider = calc_ex1.HelperExpression({ latex: 'a' });
  ex1_slider.observe('numericValue', function() {
      min_coords = minLoc(ex1_slider.numericValue);
      calc_ex1.setExpressions([
        { id: 'min', latex: min_coords, label: `Min = ${min_coords}`},
        { latex: min_coords, color: 'green', pointOpacity: 0.3 },
        { id: 'ver', label: `a = ${ex1_slider.numericValue}`}
      ]);
    });
  function minLoc(a) {
    if (a < 2) {
      return `(${a}, ${(-1*a**2 + 2*a).toFixed(2)})`;
    } else {
      return`(2, ${(-2*a + 4).toFixed(2)})`;
    }
  }
</script>

{{% /box %}}


## Practice Questions

1. Define the minimum of the function $g(x) = x^2 - 6x + 4$ $(a \le x \le a+4)$ be $\min_g(a).$ Find the minimum of the function $y = \min_g(a).$

{{% details title="Answer" %}}

1. $-5$ at $-1 \le a \le 3$

{{% note Solution %}} From
\begin{align*}
  f(x) &= x^2 - 6x + 9 - 9 + 4 \\\\
  &= (x-3)^2 - 5,
\end{align*}
the vertex of $y=f(x)$ is $(3, -5).$ Because the graph is concave up, the vertex or the point closest to the vertex becomes the minimum. We can think of the following three possibilities:

$\tcirc{1}\quad$ When $a+4<3$ or $a<-1$, the vertex is on the left of the domain. The minimum is $$ f(a+4) = (a+1)^2 - 5 = a^2 + 2a - 4. $$

$\tcirc{2}\quad$ When $a \le 3 \le a+4$ or $-1 \le a \le 3$, the vertex is inside the domain. The minimum is $$ f(3) = -5. $$

$\tcirc{3}\quad$ When $a > 3$, the vertex is on the right of the domain. The minimum is $$ f(a) = a^2 - 6a + 4. $$

Therefore, we find
$$ \textstyle \min_g(a) = \begin{cases} a^2 + 2a - 4 & \text{if } a < -1, \\\\ -5 & \text{if } -1 \le a \le 3, \\\\ a^2 - 6a + 4 & \text{if } a > 3. \end{cases} $$

Now, let's think about what the minimum of this function would be. Because $a^2 + 2a - 4 = (a+1)^2 - 5$ and $a^2 - 6a + 4 = (a-3)^2 - 5,$ the value of $\min_g(a)$ cannot be smaller than -5. Therefore, the minimum of $\min_g(a)$ is $\boldsymbol{ -5 },$ and it occurs at $\boldsymbol{ -1 \le a \le 3 }.$

{{% mn 141 %}}Minimum points of $g(x) = x^2 - 6x + 4$ where $a \le x \le a+4$. Drag the black dot to change the value of $a$. Note where the minimum value is the smallest. {{% /mn %}}
{{% desmos id="q1" style="height: 450px; margin-bottom: 0.5rem" options="{keypad: false, expressions: false}" %}}
<script>
  calc_q1.setMathBounds({
    left: -5,
    right: 11,
    bottom: -6,
    top: 10
  });
  let min_coords2 = minLoc2(2);
  calc_q1.setExpressions([
    { id: 'slider', latex: 'a=0', sliderBounds: {min:-4, max: 6, step: 0.1} },
    { id: 'dom', latex: "a \\le x \\le a+4",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2 - 6x + 4", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y=x^2 - 6x + 4 \\{ a \\le x \\le a+4 \\}", color: "black", lineWidth: 3.5},
    { id: 'dom-start', latex: "(a, 0)", color: 'black', showLabel: true, label:"a = 0", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'min', latex: min_coords2, color: 'green', pointSize: 15, showLabel: true, label:"Min", labelSize: Desmos.LabelSizes.LARGE }
  ]);
  let ex2_slider = calc_q1.HelperExpression({ latex: 'a' });
  let prev_coords2 = min_coords2;
  ex2_slider.observe('numericValue', function() {
      min_coords2 = minLoc2(ex2_slider.numericValue);
      console.log([min_coords2, prev_coords2]);
      calc_q1.setExpressions([
        { id: 'min', latex: min_coords2, label: `Min = ${min_coords2}`},
        { id: 'dom-start', label: `a = ${ex2_slider.numericValue}`}
      ]);
      if (min_coords2 != prev_coords2) {
        calc_q1.setExpression(
          { latex: min_coords2, color: 'green', pointOpacity: 0.3 },
        );
        prev_coords2 = min_coords2;
      }
    });
  function minLoc2(a) {
    if (a < -1) {
      return `(${(a+4).toFixed(1)}, ${(a**2 + 2*a - 4).toFixed(2)})`;
    } else if (a <= 3) {
      return "(3, -5)";
    } else {
      return `(${a}, ${(a**2 - 6*a + 4).toFixed(2)})`;
    }
  }
</script>

{{% /details %}}
