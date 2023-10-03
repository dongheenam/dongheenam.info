---
title: "Graphs of Linear Functions"
slug: linear-graphs
description: "Drawing the graph of a function with natural or limited domain."

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
  math1:
    name: Graph of Linear Function
    parent: Functions and Graphs
    weight: 12

weight: 12
---

## Introduction

Graphs are a convenient way of visualising functions. In this lesson, we will:

- Revise the definition of the graph of a function.
- Draw the graph of a linear function when its domain is given.
- Evaluate the minimum and maximum values of a function.


## Graph

Let's recall the definition of a function: a function ***relates*** a certain value of $x$ with the corresponding value of $y$. {{% mn %}}{{% img-raw loc="sidenote" src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex1.png" %}} The graph of $y=x+2$. {{% /mn %}} For example, a function $$ y = x+2 $$ pairs $x=0$ with $y=2$, $1$ with $3$, $\sqrt{5}$ with $\sqrt{5}+2$, and so on. You can see these values form a *combination* of numbers: $(0, 2)$, $(1, 3)$ and $\big(\sqrt{5}, \sqrt{5}+2\big)$. If we collect these coordinates on the coordinate plane, we get the ***graph*** of $y=x+2$!

{{% hbox %}}

{{% note Definition %}} *The **graph** of a function $y=f(x)$ is the set of all pairs of numbers $(x, y)$ given $x$ is an element of its domain.*

{{% /hbox %}}

### Graph of a linear function

Before moving on, we will review the basic properties of a linear function and its graph.

{{% hbox %}}

{{% note Definition %}} *The function $y=f(x)$ is **linear** if $f(x)$ is a linear polynomial of $x$.*
- The general form of a linear function is $f(x) = ax + b$, where $a\ne 0$.
- The graph of a linear function forms a line on the coordinate plane.

{{% note Example %}} The following functions are linear functions of $x$.
- $f(x) = 3x-4$
- $g(x) = \dfrac{x}{3}$
- $h(x) = \sqrt{2} x + \sqrt{3}$

{{% /hbox %}}

Given $f(x) = ax+b$, if you increase the value of $x$ by 1, you increase the value of $y$ by $a$:
\begin{align*}
  f(0) &= b, \cr
  f(1) &= a + b, \cr
  f(2) &= 2a + b, \cr
  \vdots
\end{align*}
and hence $a$ is called the ***gradient***, or ***slope***. Also, the value of $y$ when $x=0$ is $b$, and this value is called the ***y-intercept***.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-lineprop.jpg" caption="Gradient and y-intercept of a line graph." >}}

{{% hbox %}}

{{% note Example %}} Draw the graphs of the following linear functions.

1. $y = -x + 3$
2. $3x-2y=6$

{{% note Solution %}}

{{% enum 1 %}}
The graph has the gradient of -1, and y-intercept of 3. Thus the graph passes $(0, 3)$ and $(0+1, 3-1)=(1,2)$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex2.png" alt="Graph of y=-x+3" >}}

{{% enum 2 %}}
We can rearrange the equation to reveal the gradient and y-intercept:
\begin{align*}
  3x-2y = 6 & \iff 2y = 3x - 6 \cr
  &\iff y = \dfrac{3}{2} x - 3.
\end{align*}

However, it is easier to find the x- and y-intercepts of the graph and draw the graph from there. When $x=0$,
\begin{align*}
  -2y = 6 \iff y = -3,
\end{align*}

so the y-intercept is $-3$, and when $y=0$,
\begin{align*}
  3x = 6 \iff x = 2,
\end{align*}

so the x-intercept is $2$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex3.png" alt="Graph of 3x-2y=6" >}}

{{% /hbox %}}

## Graphing with a Limited Domain

When the domain of a function is smaller than its natural domain, you need to draw the graph only within that domain. Have a look at the example below.

{{% hbox %}}

{{% note Example %}} Draw the graphs of the following functions.
1. $y=-2x+1,$ $-1\le x\le 2$
2. $y=2x-4$, $0\le x < 3$

{{% note Solution %}}

{{% enum 1 %}} When $x=-1$, $$y=2+1=3,$$ and when $x=2$, $$y=-4+1=-3.$$
So we need to draw the graph in between $(-1,3)$ and $(2,-3)$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex4.png" alt="Graph of y=-2x+1" >}}

{{% enum 2 %}}
When $x=0$, $$y=0-4=-4,$$ and when $x=3$, $$y=6-4=2.$$ Note that $(3,2)$ is ***not*** included in the graph!

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex5.png" alt="Graph of y=2x-4" >}}

{{% /hbox %}}


### Guessing the function from its domain and range

Let's say a function $f(x)=ax+b$ has a domain of $\\{ x \\, | \\, 1\le x \le 2 \\}$ and range of $\\{ y \\, | \\, 3\le y \le 5 \\}$. How can we specify this function?

Well, because its graph is a line, there are only two possibilities:

- $f(1)=3$ and $f(2)=5$, or
- $f(1)=5$ and $f(2)=3$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-ex6.png" alt="Illustration of the two possible scenarios." >}}

In the first case, the equation would be $y=2x+1$. In the second case, the equation would be $y=-2x+7$.


### Maximum and minimum values

What is the smallest value you can get by squaring a real number? It is $0^2 = 0$. Likewise, some functions have the smallest or largest value in their range. They are called ***maximum*** and ***minimum*** values.

{{% hbox %}}

{{% note Definition %}} *The **maximum value** of a function is the largest number in its range. The **minimum value** is the smallest number in its range.*
- The point at which the function has its maximum value is called the ***maximum point***, or the ***maximum***.
- The point at which the function has its minimum value is called the ***minimum point***, or the ***minimum***.

{{% note Example %}}

- $f(x) = x^2$ has the minimum value of 0, but the maximum value does not exist.
- $f(x) = -x+2 ~ (-2\le x \le 0)$ has the range of $2 \le y \le 4$, so the minimum value is 2 and the maximum value is 4.

{{% /hbox %}}

Let's find the minimum and maximum values of the functions from the previous example.

{{% hbox %}}

{{% note Example %}} Find the minimum and maximum values of the following functions.
1. $y=-2x+1,$ $-1\le x\le 2$
2. $y=2x-4$, $0\le x < 3$

{{% note Solution %}}

{{% enum 1 %}}
From the graph above, it is easy to tell the range is $-3 \le y \le 3$. Hence the minimum value is $\boldsymbol{ -3 }$, and the maximum value is $\boldsymbol{ 3 }$.

{{% enum 2 %}}
From the graph above, the range is $-4 \le y < 2$. Note that this set does not include $2$ but any numbers that are up to $2$. Hence the minimum value is $\boldsymbol{ -4 }$ but ***the maximum value does not exist***.

{{% /hbox %}}


## Practice Questions

1. Draw the following functions and find their minima and maxima, if they exist.
    1. $y=5x-2$ $(0\le x \le 3)$
    2. $y=-3x+1$ $(-1<x \le 2)$

{{% details title="Answer" %}}

1. 
    1. Range: $-2\le y \le 13$, minimum: $-2$, maximum: $13$.
    2. Range: $-5\le y < 4$. minimum: $-5$.

{{% note Solution %}}

{{% enum a %}}
When $x=0$, $y=0-2=-2$, and when $x=3$, $y=15-2=13$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-q1a.png" alt="Graph of y=5x-2" >}}

Thus, the range is $\boldsymbol{ -2\le y \le 13 }$. The minimum is $\boldsymbol{ -2 }$, and the maximum is $\boldsymbol{ 13 }$.

{{% enum b %}}
When $x=-1$, $y=3+1=4$, and when $x=2$, $y=-6+1=-5$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/graph-q1b.png" alt="Graph of y=-3x+1" >}}

Thus, the range is $\boldsymbol{ -5\le y < 4 }$. The minimum is $\boldsymbol{ -5 }$, and the maximum $\textbf{does not exist}$.

{{% /details %}}

2. When the function $y=ax+b$, $2\le x \le 5$, has the range of $-1\le y\le 5$, find the values of $a$ and $b$.

{{% details title="Answer" %}}

2. $a=2, \\, b=-5$, or $a=-2, \\, b=9.$

{{% note Solution %}}
Say $f(x) = ax+b$. The two possibilities are:

- $f(2)=-1$ and $f(5)=5$, or
- $f(2)=5$ and $f(5)=-1$.

In the first case, the gradient is $\dfrac{5+1}{5-2} = 2$, so $a=2$. Then
\begin{align*}
  f(2) = -1 & \iff 2a + b = -1 \cr
  & 4 + b = -1 \cr
  & b = -5.
\end{align*}

In the second case, the gradient is $\dfrac{-5-1}{5-2}=-2$, so $a=-2$. Then
\begin{align*}
  f(2) = 5 & \iff 2a+b = 5 \cr
  & -4 + b = 5 \cr
  & b = 9. 
\end{align*}

Therefore, we conclude $\boldsymbol{ a=2, \\, b=-5 }$, or $\boldsymbol{ a=-2, \\, b=9 }.$

{{% /details %}}