---
title: "Transformations of Graphs"
slug: transformations
description: "Revision of horizontal and vertical translation, dilation, and reflection of a graph."

date: 2021-04-03 23:40:16.213 +1100
lastMod: 2021-04-03 23:40:16.213 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - linear function
  - transformation

menu:
  math1-func:
    name: Transformations of Graph
    parent: Functions and Graphs
    weight: 13

weight: 13
---

## Introduction

While it is always possible to draw a function by finding a few points that are part of its graph, it is often easier to draw it by using the principles of transformation. This is why we need to understand how we can transform graphs! In this lesson, we will learn how to:

- Translate a linear graph horizontally or vertically.
- Dilate a linear graph horizontally or vertically.
- Reflect a linear graph about the x- or y-axis.

## Graph of $y=ax$

Before we start, let's quickly revise the simplest form of line graphs, $y=ax$.

{{% hbox %}}

{{% note Theorem %}}
The graph of $y=ax$ has the following properties:

- The graph passes through the origin $O(0, 0)$.
- The gradient equals $a$.
    - The graph becomes steeper (lies closer to the y-axis) when $|a|$ increases.
    - When $a>0$, the graph lies on the first and third quadrants.
    - When $a<0$, the graph lies on the second and fourth quadrants.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-ax.png" alt="Graphs of y=ax with varying a." >}}

{{% /hbox %}}

## Translations

Translating a graph means moving it around. Because there are two axes on the coordinate plane, there are two directions (horizontally and vertically) we can move the graph to!

To move a graph horizontally by $p$ units, replace $x$ with $x-p$. When $p>0$, it will move to the right, and when $p<0$, it will move to the left.

{{% hbox %}}

{{% note Theorem %}}
The graph of $y=f(x-p)$ is the horizontal translation of the graph of $y=f(x)$ by $p$ units.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-transx.png" caption="Left: translating the graph of $y=2x$ to the right by $2$ units.<br>Right: translating the graph of $y=2x$ to the left by $3$ units." >}}

{{% /hbox %}}

Likewise, by replacing $y$ with $y-q$, we can move the graph vertically.

{{% hbox %}}

{{% note Theorem %}}
The graph of $y-q = f(x)$ (or $y = f(x)+q$) is the vertical translation of the graph of $y=f(x)$ by $q$ units.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-transy.png" caption="Left: translating the graph of $y=2x$ upward by $2$ units.<br>Right: translating the graph of $y=2x$ downward by $3$ units." >}}

{{% /hbox %}}

Because we are used keep the left-hand side as $y$, a more familiar version of this rule is to ***add*** $q$ to the right-hand side. For example, if you want to move the graph of $y=2x$ up by 2, you write $y=2x\hl{+2}$, and so on.

{{% details title="Why?" %}}

Some of you might be thinking that this rule is counter-intuitive. For example, if you want to move a point, say $A(0,1)$, to the right by three units, you have to ***add*** three to the x-coordinates (so it becomes $A'(3, 1)$). Still, if you want to move $y=3x$ to the right by three units, you have to ***subtract*** three from $x$!

Here comes the secret: you are not moving the graph, but you are changing the perspective by moving the ***coordinate plane itself***. If you want to move your graph up, you instead move the coordinate plane down.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-trans2.jpg" caption="Translating a graph by moving the origin." >}}

If you find this too confusing, please do not worry! It is a very confusing concept (I took several years to finally understand it). You certainly do not have to memorise this. However, this is a challenge for those who always seek reasons!

{{% /details %}}


## Dilation

Dilation means to stretch or contract a graph. Just like translations, you can dilate horizontally or vertically.

To dilate a graph toward or away from the y-axis, you divide $x$ by a positive factor $a$. If $0<a<1$, the graph shrinks, and if $a>1$, the graph expands.

{{% hbox %}}

{{% note Theorem %}} The graph of $y = f\left(\dfrac{x}{a}\right)$ is the horizontal dilation of $y=f(x)$ by a factor of $a$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-dilx.png" caption="Left: horizontally dilating the graph of $y=2x$ by a factor of $3$, that is, stretching by a factor of $3$.<br>Right: horizontally dilating the graph of $y=2x$ by a factor of $0.5$, that is, contracting by a factor of $2$." >}}

{{% /hbox %}}

To dilate a graph vertically, you divide $y$ by a positive factor $b$. If $0<b<1$, the graph shrinks, and if $b>1$, the graph expands.

{{% hbox %}}

{{% note Theorem %}} The graph of $\dfrac{y}{b} = f(x)$ (or $y= bf(x)$) is the vertical dilation of $y=f(x)$ by a factor of $b$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-dily.png" caption="Left: vertically dilating the graph of $y=2x$ by a factor of $3$, that is, stretching by a factor of $3$.<br>Right: vertically dilating the graph of $y=2x$ by a factor of $0.5$, that is, contracting by a factor of $2$." >}}

{{% /hbox %}}

Just like with vertical translation, it is also equivalent to multiplying $f(x)$ by $b$. For example, if you stretch the graph of $y=2x$ vertically threefold, it becomes $y=\hl{6}x$.

## Reflection

Reflection is straightforward - all we need is a negative sign!

To reflect a graph about the x-axis, you multiply $y$ by -1. To reflect a graph about the y-axis, you multiply $x$ by -1.

{{% hbox %}}

{{% note Theorem %}} 

- The graph of $y=f(-x)$ is the reflection of $y=f(x)$ about the y-axis.
- The graph of $-y=f(x)$ is the reflection of $y=f(x)$ about the x-axis.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-refl.png" caption="Left: Horizontally reflecting the graph of $y=x+1$.<br>Right: Vertically reflecting the graph of $y=x+1$." >}}

{{% /hbox %}}

## Examples

Using these operations, we can define two different algebraic forms of a line graph.

### Gradient-intercept form

From the [previous lesson](../graph#graph-of-a-linear-function), we discussed the general form of a linear function is $$ f(x) = ax + b. $$ It is easy to tell that you can obtain this graph by vertically stretching the graph of $y=x$ by a factor of $a$, and then moving it up by $b$:

`\begin{alignat*}{2}
  y &= x \\
  \longrightarrow \dfrac{y}{\hl{a}} &= x && \text{(dilation by $a$)} \\
  y &= ax \\
  \longrightarrow y &= ax \hl{+b}. && \text{(translation by $b$)}
\end{alignat*}`

So, how do these operations relate to the property of $y=ax+b$? Well, the graph of $y=x$ has the gradient of 1 and the y-intercept of 0. Because you vertically stretch the graph by a factor of $a$ first, its gradient also increases by the same factor while fixing the y-intercept. Then you move the graph upward by $b$, so the y-intercept also moves up by $b$ without moving the gradient. Therefore, the graph of $y=ax+b$ has the gradient of $a$ and the y-intercept of $b$.

### Intercept form

Note that the graph of $x+y=1$ has the x-intercept of 1 and the y-intercept of 1. How can we make this graph have an x-intercept of $a$ and a y-intercept of $b$? Well, the answer is dilation: you need to vertically stretch the graph by $b$ (to move the y-intercept), and horizontally stretch the graph by $a$ (to move the x-intercept):

`\begin{alignat*}{2}
  x + y &= 1 \\
  \longrightarrow x + \dfrac{y}{\hl{b}} &= 1 && \text{(dilation by $b$)} \\
  \longrightarrow \dfrac{x}{\hl{a}} + \dfrac{y}{b} &= 1 && \text{(dilation by $a$)} \\
\end{alignat*}`

Below is the visual representation of this logic.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/trans-inter.png" caption="The graph of $\dfrac{x}{a} + \dfrac{y}{b} = 1$." >}}


## Practice Questions

1. Describe how the graphs of each of the following can be obtained by transforming the graph of $y=f(x)$.
    1. $y=-f(x)$
    2. $y=f(x+3)$
    3. $y=2f(x-1)$
    4. $y=f(3x)+2$

{{% details title="Answer" %}}

1. 
    1. Reflecting about the x-axis.
    2. Translating 3 units left.
    3. Translating 1 unit right, and dilating parallel to the y-axis, scale factor 2.
    4. Dilating parallel to the x-axis, scale factor 1/3, and translating 2 units up.

{{% /details %}}

2. Describe the relationship between the graph of $y=-3(x-1)$ and the graphs of the following functions.
    1. $y=3(x-1)$
    2. $y=-3(x+2)$
    3. $y=-2(x-1)$
    4. $y=-3\left(\dfrac{x}{2} -1\right)$

{{% details title="Answer" %}}

2. 
    1. Reflection about the x-axis (or the y-axis).
    2. They are horizontally two units apart.
    3. $y=-3(x-1)$ is a vertical dilation of $y=-2(x-1)$, with scale factor of 1.5.
    4. $y=-3\left(\dfrac{x}{2} -1\right)$ is a horizontal dilation of $y=-3(x-1)$, with scale factor of 2.

{{% /details %}}

3. Find the equation of the following line graphs.
    1. Gradient of $-1$, y-intercept of $-3$
    2. x-intercept of $-2$, y-intercept of $4$

{{% details title="Answer" %}}

3. 
    1. $y=-x-3$
    2. $-\dfrac{x}{2}+\dfrac{y}{4}=1$, or $y=2x+4$

{{% /details %}}