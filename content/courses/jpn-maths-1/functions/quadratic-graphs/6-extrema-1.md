---
title: "Minima and Maxima of Quadratic Functions 1"
slug: extrema-1
description: "Global minimum and maximum points of quadratic functions with or without restricted domain."

date: 2021-05-20 22:38:39.886 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - quadratic function
  - minimum and maximum
  - AC Methods

menu:
  math1-func:
    name: Extrema of Quadratics 1
    parent: Quadratic Graphs
    weight: 16

weight: 26
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Functions, Domain and Range](../../functions-and-graphs/introduction/)

{{% /details %}}

{{% details title="Links to Australian Curriculum" %}}

- Mathematical Methods Unit 1
    - Use function notation, domain and range, independent and dependent variables [(ACMMM023)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/mathematical-methods/?unit=Unit+1&cd=ACMMM023&searchTerm=ACMMM023).

{{% /details %}}

Linear functions have the entire set of reals $(\mathbb{R})$ as the domain and range.{{% sn 44 %}}Strictly speaking, this is true as long as the gradient is nonzero. For function $f(x)=c$, the range is a single number, $\\{ c \\}$.{{% /sn %}} If $x$ and $y$ have a linear relationship, you can always find the value of $x$ given a value of $y$. Even if we restrict the domain of a linear function, finding the range is relatively straightforward because the rate of change is constant.

On the other hand, quadratic functions are much more interesting. Because quadratics decrease and increase at different intervals{{% sn 46 %}}We call this type of functions *non-monotonic*. On the other hand, *monotonic* functions are always increasing or always decreasing.{{% /sn %}}, finding the range is much more challenging. This is why it is worth talking about the minimum and maximum values of quadratic functions! In this lesson, we will:

- Find the extrema (minima or maxima) of quadratic functions with its natural domain.
- Find the extrema of quadratic functions with a limited domain.


## Extrema and Vertex Form

We will first [recall the definition](../../functions-and-graphs/linear-graphs/#maximum-and-minimum-values) of the (global) minimum and maximum values first.

{{% box %}}

{{% note Definition %}} The *maximum value* of a function is the largest number in its range. In other words, if $y_\max$ is the maximum value of $f$ with domain $X$, then $$ f(x) \le y_\max \text{ for all $x\in X$.} $$

If $y_\max = f(x_\max)$, then $x_\max$ is called the <em>maximum point</em> of $f$.

Likewise, the *minimum value* of a function is the smallest number in its range. If $y_\min$ is the minimum value of $f$ with domain $X$, then $$ f(x) \ge y_\min \text{ for all $x\in X$.} $$

If $y_\min = f(x_\min)$, then $x_\min$ is called the <em>minimum point</em> of $f$.

*Extrema* refer to either minima or maxima. 

{{% /box %}}

How do we determine the extrema of a quadratic function? The key is the vertex because quadratics change their direction at the vertex.

{{% box %}}

{{% note Theorem %}} For a quadratic function $f(x) = a(x-p)^2+q$,
- If $a>0$, $f(x)$ has a global minimum of $q$ at $x=p$.
- If $a<0$, $f(x)$ has a global maximum of $q$ at $x=p$.

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/ext-def.jpg" alt="Global extrema of quadratic functions." >}}

{{% /box %}}

The first step of finding the maximum or minimum is to convert the quadratic functions into the vertex form!

{{% box %}}

{{% note Example %}} Find the maxima or minima of the following quadratic functions.
1. $y = 3x^2 +4x -1$
2. $y = -2x^2 + x$

{{% note Solution %}} 
1. Converting to the vertex form gives
{{% mn %}}
$(1)$ $3x^2 + 4x - 1$<br>
$=3\left(x^2 + \dfrac{4}{3}x \right) - 1$<br>
$=3\left\\\\{ x^2 + \dfrac{4}{3}x + \left( \dfrac{2}{3} \right)^2 \right\\\\}$ $\phantom{.} - 3 \left( \dfrac{2}{3} \right)^2 - 1$<br>
$=3\left( x + \dfrac{2}{3} \right)^2 - \dfrac{4}{3} - 1$.
{{% /mn %}}
\begin{align}
  y &= 3x^2 + 4x - 1 \\\\
  &= 3 \left( x + \frac{2}{3} \right)^2 - \frac{7}{3}. \tag{1} 
\end{align}
The coordinates of the vertex is $\left(-\dfrac{2}{3}, -\dfrac{7}{3} \right).$ Because $a=3$ is positive, the function has a $\textbf{minimum of $\boldsymbol{ -\dfrac{7}{3}}$ at $\boldsymbol{ x=-\dfrac{2}{3} }$}.$

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/ext-ex1.png" alt="Graph of y=3x^2+4x-1." >}}

2. Converting to the vertex form gives
{{% mn %}}
$(2)$ $-2x^2+x$<br>
$=-2\left(x^2 - \dfrac{1}{2}x \right)$<br>
$=-2\left\\\\{ x^2 - \dfrac{1}{2}x + \left( \dfrac{1}{4} \right)^2 \right\\\\}$ $\phantom{.} +2 \left( \dfrac{1}{4} \right)^2$<br>
$=-2\left( x - \dfrac{1}{4} \right)^2 + \dfrac{1}{8}$.
{{% /mn %}}
\begin{align}
  y &= -2x^2 + x \\\\
  &= -2\left(x - \dfrac{1}{4} \right)+\dfrac{1}{8}. \tag{2}
\end{align}
The coordinates of the vertex is $\left(\dfrac{1}{4}, \dfrac{1}{8} \right).$ Because $a=-2$ is negative, the function has a $\textbf{maximum of $\boldsymbol{ \dfrac{1}{8}}$ at $\boldsymbol{ x=\dfrac{1}{4} }$}.$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/ext-ex2.png" alt="Graph of y=-2x^2+x." >}}

{{% /box %}}

{{% note Question %}} Try [Practice Question](#practice-questions) 1.


## Restricted Domain

Finding the [extrema of a linear function](../../functions-and-graphs/linear-graphs/#graphing-with-a-limited-domain) was pretty straightforward because either end of the domain corresponds to either the minimum or the maximum value. This is not the case for quadratic functions because the function is not always increasing or decreasing. We will look at three possible scenarios when determining the minimum or maximum values for quadratic functions with a limited domain.

{{% note Example %}} Find the minimum and maximum of $f(x) = a(x-p)^2 + q,$ $s\le x \le t.$ For simplicity, we will set $a>0$ here.

### Vertex is outside the domain

This happens when either $p < s$ or $t < p$. When the vertex is not included in the domain, $f(x)$ becomes monotonic{{% sn 134 %}}In other words, the function is always increasing or decreasing.{{% /sn %}}, so the minimum and maximum values are $f(s)$ and $f(t)$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/ext-lim1.png" caption="Left: When the vertex is on the right of the domain.<br><br>Right: When the vertex is on the left of the domain." >}}

### Vertex is inside the domain but not the midpoint

The vertex is always the lowest point so the minimum value is $q$. The maximum value depends on the location of the vertex. Because the function increases as we move away from the vertex, the maximum is $f(s)$ if $s$ is farther from $p$ than $t$, and the maximum is $f(t)$ if $t$ is farther from $p$ than $s$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/ext-lim2.png" caption="Left: When $|s-p|>|t-p|$.<br><br>Right: When $|s-p|<|t-p|$." >}}

### Vertex is the midpoint

When the x-coordinate of the vertex is the midpoint of $s$ and $t$, or in other words, $p = \dfrac{s+t}{2}$, $f(s) = f(t)$, which is equal to the maximum value. The minimum point is the vertex, so the minimum value is $f(p)=q$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/ext-lim3.png" caption="When $p=\dfrac{s+t}{2}$." >}}

If the function is given in general form $f(x)=ax^2+bx+c$, you can either convert it to vertex form, or consider the axis of symmetry because $p = -\dfrac{b}{2a}.$ See the examples below.

{{% box %}}

{{% note Example %}} For the following functions, find the minima and maxima if they exist.
1. $y = 2x^2-8x+5$ $(0 \le x \le 3)$
2. $y = -x^2-2x+2$ $(-3 < x \le -2)$


{{% note Solution %}} 

1. Completing the square gives
{{% mn 162 tips %}}
$(1)$ $2x^2 - 8x + 5$<br>
$=2(x^2 - 4x) + 5$<br>
$=2\left\\\\{ (x-2)^2 - 4 \right\\\\} + 5$<br>
$=2(x-2)^2 - 3.$
{{% /mn %}}
\begin{align}
  y &= 2x^2 - 8x + 5 \\\\
  &= 2(x-2)^2 -3. \tag{1}
\end{align}
Thus the vertex is inside the domain. Because $a=2>0$, the vertex is the minimum point, and the minimum is $\boldsymbol{ -3 }$ at $\boldsymbol{ x=2 }.$ <br><br>
The two candidates for the maximum point are the two endpoints of the domain, $x=0$ and $x=3$. When $x=0$, $y=5$, and when $x=3$, $y=3\cdot 3^2 - 8\cdot 3 + 5 = -1.$ Out of these two points, it is clear that $x=0$ is the maximum point. Therefore, the maximum value is $\boldsymbol{ 5 }$ at $\boldsymbol{ x=0 }.$<br><br>Below is the graph of the function, and you can clearly see the extrema.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/ext-ex3.png" caption="Graph of $y = 2x^2-8x+5$, with domain $0 \le x \le 3$." >}}

2. The axis of symmetry is $$ x = -\dfrac{-2}{2(-1)} = -1, $$ which indicates that the vertex is on the right of the domain.<br><br>When $x=-3$, $y=-(-3)^2 - 2(-3) + 2 = -1,$<br> and when $x=-2$, $y = (-2)^2 - 2(-2) + 2 = 2.$<br><br> Because $(-3,-1)$ is not included, there is $\textbf{no minimum}$,<br> and the function has a maximum value of $\boldsymbol{ 2 }$ at $\boldsymbol{ x=-2 }.$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/ext-ex4.png" caption="Graph of $y = -x^2-2x+2$, with domain $-3 < x \le -2$." >}}

{{% /box %}}


## Practice Questions

1. For the following quadratic functions, find the values of there extreme values and state their type (minimum or maximum).
    1. $y = x^2-2x-3$
    2. $y = -2x^2+3x-5$
    3. $y = -2x^2+6x+1$
    4. $y = 3x^2-5x+8$

{{% details title="Answer" %}}

1. 
    1. $\text{minimum of $-4$ at $x=1$}$
    2. $\text{maximum of $- \dfrac{31}{8}$ at $x=\dfrac{3}{4}$}$
    3. $\text{maximum of $\dfrac{11}{2}$ at $x=\dfrac{3}{2}$}$
    4. $\text{minimum of $\dfrac{71}{12}$ at $x=\dfrac{5}{6}$}$

{{% note Solution %}}

\begin{align}
  \text{a.} \quad y &= \underline{x^2 - 2x} - 3 \\\\
  &= \underline{(x-1)^2 - 1} - 3 \\\\
  &= (x-1)^2 - 4,
\end{align}
so the vertex is $(1,-4)$. Because $a>0$, the function has $\textbf{a minimum},$ and its value is $\boldsymbol{ -4 }.$

\begin{align}
  \text{b.} \quad y &= -2x^2 + 3x - 5 \\\\
  &= -2 \left( x^2 - \dfrac{3}{2} x \right) - 5 \\\\
  &= -2 \left\\{ \left( x - \dfrac{3}{4} \right)^2 - \left( \frac{3}{4} \right)^2 \right\\} - 5 \\\\
  &= -2 \left( x - \dfrac{3}{4} \right)^2 + \frac{9}{8} - 5 \\\\
  &= -2 \left( x - \dfrac{3}{4} \right)^2 - \dfrac{31}{8}.
\end{align}
Hence the vertex is $\left(\dfrac{3}{4}, - \dfrac{31}{8} \right)$. Because $a<0$, the function has $\textbf{a maximum},$ and its value is $\boldsymbol{ - \dfrac{31}{8} }.$

\begin{align}
  \text{c.} \quad y &= -2x^2 + 6x + 1 \\\\
  &= -2 (x^2 - 3x ) + 1 \\\\
  &= -2 \left\\{ \left(x - \dfrac{3}{2} \right)^2 - \left( \dfrac{3}{2} \right)^2 \right\\} + 1 \\\\
  &= -2 \left(x - \dfrac{3}{2} \right)^2 + \dfrac{9}{2} + 1 \\\\
  &= -2 \left(x - \dfrac{3}{2} \right)^2 + \dfrac{11}{2}.
\end{align}
Hence the vertex is $\left( \dfrac{3}{2}, \dfrac{11}{2} \right)$. Because $a<0$, the function has $\textbf{a maximum},$ and its value is $\boldsymbol{ \dfrac{11}{2} }.$

\begin{align}
  \text{d.} \quad y &= 3x^2 - 5x + 8 \\\\
  &= 3 \left( x^2 - \dfrac{5}{3} x \right) + 8 \\\\
  &= 3 \left\\{ \left( x - \dfrac{5}{6} \right)^2 - \left( \dfrac{5}{6} \right)^2 \right\\} + 8 \\\\
  &= 3\left( x - \dfrac{5}{6} \right)^2 - \dfrac{25}{12} + 8 \\\\
  &= 3\left( x - \dfrac{5}{6} \right)^2 + \dfrac{71}{12}.
\end{align}
Hence the vertex is $\left( \dfrac{5}{6}, \dfrac{71}{12} \right)$. Because $a>0$, the function has a $\textbf{a minimum},$ and its value is $\boldsymbol{ \dfrac{71}{12} }.$

{{% /details %}}


2. Find all extreme points of the following functions.
    1. $y = 2x^2 + 3x + 1,~ -\dfrac{1}{2} \le x < \dfrac{1}{2}$
    2. $y = -\dfrac{1}{2}x^2 + 2x + \dfrac{3}{2},~ 1 \le x \le 5$

{{% details title="Answer" %}}

2. 
    1. $\text{minimum value of $0$ at $x=-\dfrac{1}{2}$}$ $\text{maximum does not exist}$
    2. $\text{minimum value of $-1$ at $x=2$,}$ $\text{maximum value of $\dfrac{7}{2}$ at $x=5$}$

{{% note Solution %}}

$\hspace{0.5em} \text{a.} \quad$ The axis of symmetry of the graph is $$ x = - \dfrac{3}{2\cdot 2} = -\dfrac{3}{4}, $$ which is outside the domain.

Out of the two ends of the domain, $x=-\dfrac{1}{2}$ is closer to the axis of symmetry, which means that it is the minimum point. The value of the function at $x=-\dfrac{1}{2}$ is $$ y = 2 \cdot \dfrac{1}{4} + 3\cdot\left(-\dfrac{1}{2}\right) + 1 = 0, $$ thus the function has $\textbf{a minimum value of $\boldsymbol{ 0 }$ at $\boldsymbol{ x=-\dfrac{1}{2} }$.}$

The other point, $x=\dfrac{1}{2}$, is not included in the domain, so $\textbf{there is no maximum}.$

<br>

$\hspace{0.5em} \text{b.} \quad$ The axis of symmetry is $$ x = -\dfrac{2}{2\cdot (-1/2)} = 2, $$ which is inside the domain.

Because the coefficient of $x^2$ is negative, the vertex is the maximum point. The y-coordinate of the vertex is $$ y = -\dfrac{1}{2}\cdot 2^2 + 2\cdot 2 + \dfrac{3}{2} = \dfrac{7}{2}, $$ so the function has $\textbf{a maximum value of $\boldsymbol{ \dfrac{7}{2} }$ at $x=2$.}$

Out of the two ends of the domain, $x= 5$ is farther from the axis of symmetry, so it is the minimum point. When $x=5$, $$ y = -\dfrac{1}{2} \cdot 5^2 + 2\cdot 5 + \dfrac{3}{2} = -1,$$ so the function has $\textbf{a minimum value of $\boldsymbol{ -1 }$ at $x=5$.}$

{{% /details %}}