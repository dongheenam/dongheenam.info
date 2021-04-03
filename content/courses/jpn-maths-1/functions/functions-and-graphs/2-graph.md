---
title: "Graph of a Function"
slug: graph
description: "Drawing graph of a function with natural or limited domain."

date: 2021-04-02 19:19:45.554 +1100
lastMod: 2021-04-02 19:19:45.554 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - linear function
  - domain
  - range

menu:
  math1-func:
    name: Graph of a Function
    parent: Functions and Graphs
    weight: 12

weight: 12
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematical Methods Unit 1
  - Understand the concept of a function as a mapping between sets, and as a rule or a formula that defines one variable quantity in terms of another [(ACMMM022)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/mathematical-methods/?unit=Unit+1&cd=ACMMM022&searchTerm=ACMMM022).
  - Understand the concept of the graph of a function [(ACMMM024)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/mathematical-methods/?unit=Unit+1&cd=ACMMM024&searchTerm=ACMMM024).

{{% /details %}}

## Introduction

Graphs are convenient ways of visualising functions. In this lesson, we will:

- Revise the definition of the graph of a function.
- Draw the graph of a function when its domain is given.


## Graph

Let's recall the definition of a function: a function *relates* a certain value of $x$ with the corresponding value of $y$. {{% mn %}}{{% img loc="sidenote" src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex1.png" %}} The graph of $y=x+2$. {{% /mn %}} For example, a function $$ y = x+2 $$ relates $x=0$ with $y=2$, $1$ with $3$, $\sqrt{5}$ with $\sqrt{5}+2$, and so on. You can see these values form a *pair* of numbers: $(0, 2)$, $(1, 3)$ and $\big(\sqrt{5}, \sqrt{5}+2\big)$. If we collect all of these pairs on the coordinate plane, we get the *graph* of $y=x+2$!

{{% note Definition %}} The *graph* of a function $y=f(x)$ is the set of all possible points $(x, y)$.


### Graph of a Linear Function

Before moving on, we will review the basic properties of a linear function and its graph.

{{% box %}}

{{% note Definition %}} The function $y=f(x)$ is *linear* if $f(x)$ is a linear polynomial of $x$.

{{% note Theorem %}} 

- The general form of a linear function is $f(x) = ax + b$, where $a\ne 0$.
- The graph of a linear function forms a line on the coordinate plane.

{{% note Example %}} The following functions are linear functions of $x$.

- $f(x) = 3x-4$
- $g(x) = \dfrac{x}{3}$
- $h(x) = \sqrt{2} x + \sqrt{3}$

{{% /box %}}

Given $f(x) = ax+b$, if you increase the value of $x$ by $1$, you increase the value of $y$ by $a$:
\begin{align}
  f(0) &= b, \\\\
  f(1) &= a + b, \\\\
  f(2) &= 2a + b, \\\\
  \vdots
\end{align}
and hence $a$ is called the *gradient*, or *slope*. Also, the value of $y$ when $x=0$ is $b$, and this value is called the *y-intercept*.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-lineprop.jpg" caption="Gradient and y-intercept of a line graph." >}}

{{% box %}}

{{% note Example %}} Draw the graphs of the following linear functions.

1. $y = -x + 3$
2. $3x-2y=6$

{{% note Solution %}}

1. The graph has the gradient of $-1$, and y-intercept of $3$. Thus the graph passes $(0, 3)$ and $(0+1, 3-1)=(1,2)$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex2.png" alt="Graph of y=-x+3" >}}

2. We can rearrange the equation to reveal the gradient and y-intercept:
\begin{align}
  3x-2y = 6 & \implies 2y = 3x - 6 \\\\
  &\implies y = \dfrac{3}{2} x - 3.
\end{align}
However, it is easier to find the x- and y-intercepts of the graph and draw the graph from there. When $x=0$,
\begin{align}
  -2y = 6 \implies y = -3,
\end{align}
so the y-intercept is $-3$, and when $y=0$,
\begin{align}
  3x = 6 \implies x = 2,
\end{align}
so the x-intercept is $2$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex3.png" alt="Graph of 3x-2y=6" >}}

{{% /box %}}

## Graphing with a Limited Domain

When the domain of a function is smaller than its natural domain, you need to draw the graph only within that domain. Have a look at the example below.

{{% box %}}

{{% note Example %}} Draw the graphs of the following functions.

1. $y=-2x+1,$ $-1\le x\le 2$
2. $y=2x-4$, $0\le x < 3$

{{% note Solution %}}

1. When $x=-1$, $y=2+1=3$, and when $x=2$, $y=-4+1=-3$. So we need to draw the graph in between $(-1,3)$ and $(2,-3)$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex4.png" alt="Graph of y=-2x+1" >}}

2. When $x=0$, $y=0-4=-4$, and when $x=3$, $y=6-4=2$. Note that $(3,2)$ is *not* included in the graph!

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex5.png" alt="Graph of y=2x-4" >}}

{{% /box %}}

### Maximum and Minimum Values

What is the smallest value you can get by squaring a real number? It is $0^2 = 0$. Likewise, some functions have a smallest or largest value in their range. They are called *maximum* and *minimum* values.

{{% box %}}

{{% note Definition %}} The *maximum value* of a function is the largest number in its range, and the *minimum value* is the smallest number in its range.

{{% note Example %}}

- $f(x) = x^2$ has the minimum value of $0$, but the maximum value does not exist.
- $f(x) = -x+2 ~ (-2\le x \le 0)$ has the range of $2 \le y \le 4$, so the minimum value is $2$ and the maximum value is $4$.

{{% /box %}}

Let's find the minimum and maximum values of the functions from the previous example.

{{% box %}}

{{% note Example %}} Find the minimum and maximum values of the following functions.

1. $y=-2x+1,$ $-1\le x\le 2$
2. $y=2x-4$, $0\le x < 3$

{{% note Solution %}}

1. From the graph above, it is easy to tell the range is $-3 \le y \le 3$. Hence the minimum value is $\boldsymbol{ -3 }$, and the maximum value is $\boldsymbol{ 3 }$.
2. From the graph above, the range is $-4 \le y < 2$. Note that this set does not include $2$ but any numbers that are up to $2$. Hence the minimum value is $\boldsymbol{ -4 }$, but *the maximum value does not exist*.

{{% /box %}}


## Practice Questions

1. Draw the following functions and find their minima and maxima, if they exist.
    1. $y=5x-2$ $(0\le x \le 3)$
    2. $y=-3x+1$ $(-1<x \le 2)$

{{% details title="Answer" %}}

1. 
    1. Range: $-2\le y \le 13$. Minimum: $-2$, maximum: $13$.
    2. Range: $-5\le y < 4$. Minimum: $-5$.

{{% note Solution %}}

$\hspace{0.5em} \text{a.} \quad$ When $x=0$, $y=0-2=-2$, and when $x=3$, $y=15-2=13$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-q1a.png" alt="Graph of y=5x-2" >}}

Thus, the range is $\boldsymbol{ -2\le y \le 13 }$. The minimum is $\boldsymbol{ -2 }$, and the maximum is $\boldsymbol{ 13 }$.

$\hspace{0.5em} \text{b.} \quad$ When $x=-1$, $y=3+1=4$, and when $x=2$, $y=-6+1=-5$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-q1b.png" alt="Graph of y=-3x+1" >}}

Thus, the range is $\boldsymbol{ -5\le y < 4 }$. The minimum is $\boldsymbol{ -5 }$, and the maximum $\textbf{does not exist}$.

{{% /details %}}