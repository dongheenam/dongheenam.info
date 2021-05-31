---
title: "Minima and Maxima of Quadratic Functions 2"
slug: extrema-2
description: "Finding the minima and maxima of quadratic functions in a general case."

date: 2021-05-23 09:56:17.111 +1000

toc: true
type: docs
math: true
desmos: true
draft: true

tags:   
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1-func:
    name: Extrema of Quadratics 2
    parent: Quadratic Graphs
    weight: 17

weight: 27
---

## Introduction

[Previously](../extrema-1) we discussed how the minimum and maximum of a quadratic function can be determined. In this lesson, we will generalise this idea further, and:
- find the extrema of a quadratic function with a variable domain.
- find the extrema of a quadratic function with variable coefficients.


## Varying Domain

Suppose $f(x) = x^2 - 4x + 1$ and its domain be $\\{ x\\, | \\, 0\le x \le a \\}$, where $a$ is a positive constant. How will its extremum point change based on the value of $a$?

Well, we can first try drawing $y = f(x)$. Since
\begin{align}
  f(x) &= x^2 - 4x + 1 \\\\
  &= (x-2)^2 - 4 + 1 \\\\
  &= (x-2)^2 - 3,
\end{align}
the graph of $y=f(x)$ is as below.

{{% mn 122 %}}Graph of $y = x^2 - 4x + 1$. Drag the black dot to change the value of $a$.{{% /mn %}}
{{% desmos id="vd1" style="height: 400px" options="{keypad: false, expressions: false}" %}}
<script>
  calc_vd1.setMathBounds({
    left: -1,
    right: 6,
    bottom: -4,
    top: 7
  });
  calc_vd1.setExpressions([
    { id: 'slider', latex: 'a=3', sliderBounds: {min:0.1, max: 5, step: 0.1} },
    { id: 'drag', latex: "(a,0)", color: 'black', showLabel: true, label:"a = 3", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'dom', latex: "0 \\le x \\le a",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2 - 4x + 1", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y=x^2 - 4x + 1 \\{ 0 \\le x \\le a \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(2, -3)", color: 'black'}
  ]);
  let vd1_slider = calc_vd1.HelperExpression({ latex: 'a' });
  vd1_slider.observe('numericValue', function() {
      calc_vd1.setExpressions([
        {id: 'drag', label: `a = ${vd1_slider.numericValue}`}
      ]);
    });
</script>

Because $x=2$ is the axis of symmetry, $f(0) = f(4) = 1$. We can think of four possible scenarios:

$\tcirc{1} \quad 0 < a < 2$

The domain sits on the left of the axis of symmetry. Hence the minimum is $f(a) = a^2-4a+1$ at $x=a$, and the maximum is $1$ at $x=0$.

$\tcirc{2} \quad 2 \le a < 4$

The domain includes the vertex, so the minimum is $-3$ at $x=2$. $f(a)$ is still smaller than $1$, and the maximum is $1$ at $x=0$.

$\tcirc{3} \quad a = 4$

This is when $f(a) = 1$. There are two maximum points at $x=0$ and $x=4$, with the maximum value of $1$. The minimum is $-3$ at $x=2$.

$\tcirc{4} \quad a > 4$

The minimum is $-3$ at $x=2$. $f(a)$ becomes greater than $1$ so the maximum is $f(a) = a^2-4a+1$ at $x=a$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extvar-ex1a.png" alt="Four different types of domains of $f(x)$, shown on the graph of $y=f(x)$." >}}

Below is a slightly different example.

{{% box %}}

{{% note Example %}} When $a$ is a constant and the domain of $f(x) = x^2-2x+2$ is $a \le x \le a+2$,
1. Find the maximum of $f(x)$.
2. Find the minimum of $f(x)$.

{{% note Solution %}} First note $f(x) = x^2-2x+2 = (x-1)^2 + 1,$ so the axis of symmetry is $x=1$. Also, the midpoint of the domain is $x=a+1$.

1. Because $y=f(x)$ is concave up, the maximum point is the point farthest from the axis of symmetry. We can think of three possible cases based on the relation between the axis of symmetry and the midpoint of the domain.

$\tcirc{1} \quad$ When $\hl{a+1<1}$, $x=a$ is the farthest from $x=1$. Thus, the maximum value is $f(a) = a^2 - 2a + 2.$

$\tcirc{2} \quad$ When $\hl{a+1=1}$, both $x=a=0$ and $x=a+2=2$ have the same distance from $x=1$. Thus, the maximum value is $f(0) = 2,$ at both $x=0$ and $x=2$.

$\tcirc{3} \quad$ When $\hl{a+1>1}$, $x=a+2$ is the farthest from $x=1$. Thus, the maximum value is $f(a+2) = (a+2-1)^2 + 1 = a^2 + 2a + 2.$

Therefore, the maximum value of $f(x)$ is
\begin{cases}
\textbf{when $\boldsymbol{a<0}$,} & \boldsymbol{ a^2 - 2a + 2 } && \textbf{at $\boldsymbol{ x=a }$} \\\\
\textbf{when $\boldsymbol{a=0}$,} & \boldsymbol{ 2 } && \textbf{at $\boldsymbol{ x=0,~2 }$} \\\\
\textbf{when $\boldsymbol{a>0}$,} & \boldsymbol{ a^2 + 2a + 2 } && \textbf{at $\boldsymbol{ x=a+2 }$}
\end{cases}

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extvar-ex2a.png" alt="Maximum points of y = x^2-2x+2." >}}

2. If the domain includes the vertex, then it becomes the minimum point. Otherwise, the minimum point is the point closest to the axis of symmetry. Like the maximum, there exist three possibilities.

$\tcirc{1} \quad$ When $\hl{a+2<1}$, $x=a+2$ is the closest from $x=1$. Thus, the minimum value is $f(a+2) = a^2 + 2a + 2.$

$\tcirc{2} \quad$ When $\hl{a\le 1 \le a+2}$, the vertex is included in the domain. Thus, the minimum value is $f(1) = 1.$

$\tcirc{3} \quad$ When $\hl{a>1}$, $x=a$ is the closest from $x=1$. Thus, the minimum value is $f(a) = a^2 - 2a + 2.$

Therefore, the minimum value of $f(x)$ is
\begin{cases}
\textbf{when $\boldsymbol{a<-1}$,} & \boldsymbol{ a^2 + 2a + 2 } && \textbf{at $\boldsymbol{ x=a+2 }$} \\\\
\textbf{when $\boldsymbol{-1\le a \le 1}$,} & \boldsymbol{ 1 } && \textbf{at $\boldsymbol{ x=1 }$} \\\\
\textbf{when $\boldsymbol{a>1}$,} & \boldsymbol{ a^2 - 2a + 2 } && \textbf{at $\boldsymbol{ x=a }$}
\end{cases}

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/extvar-ex2b.png" alt="Minimum points of y = x^2-2x+2." >}}

{{% /box %}}

{{% note Question %}} Try [Practice Questions](#practice-questions) 1 and 2.


## Varying Coefficients

In this case, we will try moving the graph itself and see what happens!

{{% mn 122 %}}Extremum points of $y = x^2 - 2ax + 3a$. Drag the vertex to change the value of $a$.{{% /mn %}}
{{% desmos id="vd2" height="450px" options="{keypad: false, expressions: false}" %}}
<script>
  calc_vd2.setMathBounds({
    left: -3,
    right: 8,
    bottom: -11,
    top: 21
  });
  calc_vd2.setExpressions([
    { id: 'slider', latex: 'a=3', sliderBounds: {min:-1, max: 5, step: 0.1} },
    { id: 'dom', latex: "0 \\le x \\le 4",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2-2ax+3a", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y=x^2-2ax+3a \\{ 0 \\le x \\le 4 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(a, -a^2+3a)", color: 'black', showLabel: true, label:"a = 3", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'min', latex: minLoc(3), color: 'green', pointSize: 15, showLabel: true, label:"Min", labelSize: Desmos.LabelSizes.LARGE },
    { id: 'max', latex: maxLoc(3), color: 'red', pointSize: 15, showLabel: true, label:"Max", labelSize: Desmos.LabelSizes.LARGE }
  ]);
  let vd2_slider = calc_vd2.HelperExpression({ latex: 'a' });
  vd2_slider.observe('numericValue', function() {
      calc_vd2.setExpressions([
        {id: 'min', latex: minLoc(vd2_slider.numericValue)},
        {id: 'max', latex: maxLoc(vd2_slider.numericValue)},
        {id: 'ver', label: `a = ${vd2_slider.numericValue}`}
      ]);
    });
  function minLoc(a) {
    if (a < 0) {
      return `(0, ${3*a})`;
    } else if (a <= 4) {
      return `(${a}, ${-(a**2) + 3*a})`;
    } else {
      return`(4, ${16-5*a})`;
    }
  }
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

## Practice Questions

1. Find the minimum and maximum of $y=-x^2+6x$ $(0\le x \le a),$ where $a$ is a positive number.

{{% details title="Answer" %}}

{{% note Solution %}} For convenience, let's denote $f(x) = -x^2 + 6x$. Below are some important properties of $y=f(x)$:
- $f(x) = -x^2 + 6x = -(x-3)^2 + 9$. The axis of symmetry is $x=3.$
- From the axis of symmetry, $f(0) = f(6) = 0.$
- The coefficient of $x^2$ is negative. The vertex $(3,9)$ is the highest point of the parabola.

Thus, we can think of the following possibilities.

$\tcirc{1} \quad$ When $\hl{ 0< a < 3 }$, the only candidates for the extrema are $x=0$ and $x=a$. Since the latter point is closer to the axis of symmetry, $f(0) < f(a)$. Therefore, $f(a)$ is the maximum value, and $f(0)=0$ is the minimum value.

$\tcirc{2} \quad$ When $\hl{ 3 \le a < 6 }$, the domain includes the vertex, which is the maximum point. Since $x=a$ is still closer to the axis of symmetry than $x=0$, the minimum value is $f(0).$

$\tcirc{3} \quad$ When $\hl{a = 6}$, $f(0) = f(a)$, so $x=0$ and $x=a$ both become the minimum points.

$\tcirc{4} \quad$ When $\hl{a > 6}$, $f(a)$ becomes smaller than $f(0)$ because it is now farther from the axis of symmetry. Therefore, the minimum value becomes $f(a)$.

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/extvar-q1.png" alt="Extrema of y = -x^2 + 6x." >}}

From the above, we conclude:
- When $0< a < 3$, 
\begin{cases}
    \textbf{minimum of $\boldsymbol{ 0 }$ at $\boldsymbol{ x=0 }$,} \\\\
    \textbf{maximum of $\boldsymbol{ -a^2+6a }$ at $\boldsymbol{ x=a }$.}
\end{cases}
- When $3 \le a < 6$,
\begin{cases}
    \textbf{minimum of $\boldsymbol{ 0 }$ at $\boldsymbol{ x=0 }$,} \\\\
    \textbf{maximum of $\boldsymbol{ 9 }$ at $\boldsymbol{ x=3 }$.}
\end{cases}
- When $a = 6$,
\begin{cases}
    \textbf{minimum of $\boldsymbol{ 0 }$ at $\boldsymbol{ x=0, 6}$,} \\\\
    \textbf{maximum of $\boldsymbol{ 9 }$ at $\boldsymbol{ x=3 }$.}
\end{cases}
- When $a > 6$,
\begin{cases}
    \textbf{minimum of $\boldsymbol{ -a^2+6a }$ at $\boldsymbol{ x=a }$,} \\\\
    \textbf{maximum of $\boldsymbol{ 9 }$ at $\boldsymbol{ x=3 }$.}
\end{cases}

{{% /details %}}


2. For the function $y = -2x^2 + 6x + 1$ with domain $a \le x \le a + 1,$
    1. Find the maximum.
    2. Find the minimum.

{{% details title="Answer" %}}

{{% note Solution %}} We denote $f(x) = -2x^2 + 6x + 1.$ Note
\begin{align}
  f(x) &= -2(x^2 - 3x) + 1 \\\\
  &= -2\left( x - \dfrac{3}{2} \right)^2 + 2 \cdot \left(\dfrac{3}{2}\right)^2 + 1 \\\\
  &= -2\left( x - \dfrac{3}{2} \right)^2 + \dfrac{11}{2},
\end{align}
so the vertex is $\left( \dfrac{3}{2}, \dfrac{11}{2} \right).$

$\hspace{0.5em} \text{a.} \quad$ Because the vertex is the global maximum point, we can think about the values of $a$ such that the domain includes the vertex.

$\tcirc{1}\quad$ When $a+1<\dfrac{3}{2}$, or $a<\dfrac{1}{2}$, the domain sits on the left of the vertex. Because $x=a+1$ is closer to the vertex than $x=a$, the maximum is
\begin{align}
  f(a+1) &= -2(a+1)^2 + 6(a+1) + 1 \\\\
  &= -2a^2 - 4a - 2 + 6a + 6 + 1\\\\
  &= -2a^2 + 2a + 5.
\end{align}

$\tcirc{2}\quad$ When $a\le \dfrac{3}{2} \le a+1$, or $\dfrac{1}{2} \le a \le \dfrac{3}{2}$, the domain includes the vertex. Therefore the maximum is $\dfrac{11}{2}$ at $x=\dfrac{3}{2}$.

$\tcirc{3}\quad$ When $\dfrac{3}{2} < a$, the domain sits on the right of the vertex. Because $x=a$ is now closer to the vertex than $x=a+1$, the maximum is $f(a) = -2a^2 + 6a + 1.$

Therefore, the maximum of $y = -2x^2 + 6x + 1$ is
\begin{cases}
\textbf{when $\boldsymbol{a<\dfrac{1}{2}}$,} & \boldsymbol{ -2a^2 + 2a + 5 } && \textbf{at $\boldsymbol{ x=a+1 }$} \\\\
\textbf{when $\boldsymbol{\dfrac{1}{2}\le a \le \dfrac{3}{2}}$,} & \boldsymbol{ \dfrac{11}{2} } && \textbf{at $\boldsymbol{ x=\dfrac{3}{2} }$} \\\\
\textbf{when $\boldsymbol{a>\dfrac{3}{2}}$,} & \boldsymbol{ -2a^2 + 6a + 1 } && \textbf{at $\boldsymbol{ x=a }$}
\end{cases}

<br>

$\hspace{0.5em} \text{b.} \quad$ The point that is the farthest away from the vertex becomes the minimum. Because of this, we can think of three possibilities based on the relationship between the vertex and the midpoint of the domain $x = a + \dfrac{1}{2}.$

$\tcirc{1}\quad$ When $a + \dfrac{1}{2} < \dfrac{3}{2}$, or $a < 1$, $x=a$ is farther away from the vertex than $x=a+1$. The minimum is $f(a) = -2a^2 + 6a + 1.$

$\tcirc{2}\quad$ When $a + \dfrac{1}{2} = \dfrac{3}{2}$, or $a=1$, both $x=a$ and $x=a+1$ are equally distanced from the vertex. The minimum is $f(1) = f(2) = 5.$

$\tcirc{3}\quad$ When $a + \dfrac{1}{2} > \dfrac{3}{2}$, or $a > 1$, $x=a+1$ is farther away from the vertex than $x=a$. The minimum is $f(a+1) = -2a^2 + 2a + 5.$

Therefore, the minimum of $y = -2x^2 + 6x + 1$ is
\begin{cases}
\textbf{when $\boldsymbol{a<1}$,} & \boldsymbol{ -2a^2 + 6a + 1 } && \textbf{at $\boldsymbol{ x=a }$} \\\\
\textbf{when $\boldsymbol{a=1}$,} & \boldsymbol{ 5 } && \textbf{at $\boldsymbol{ x=1, 2 }$} \\\\
\textbf{when $\boldsymbol{a>1}$,} & \boldsymbol{ -2a^2 + 2a + 5 } && \textbf{at $\boldsymbol{ x=a+1 }$}
\end{cases}

{{% /details %}}

