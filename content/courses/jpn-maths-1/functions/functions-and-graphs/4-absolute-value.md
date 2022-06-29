---
title: "Graphing Linear Functions with Absolute Values"
slug: absolute-values
description: "Graphing a linear function with one or multiple absolute value symbols."

date: 2021-04-06 10:19:02.752 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - linear function
  - absolute value

menu:
  math1:
    name: Graphing with Absolute Values
    parent: Functions and Graphs
    weight: 14

weight: 14
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Number Line and Absolute Values](../../../numbers-and-expressions/numbers/absolute-values)
    - [Linear Equations with Absolute Values](../../../numbers-and-expressions/inequalities/absolute-value-equations/)
    - [Linear Inequalities with Absolute Values](../../../numbers-and-expressions/inequalities/absolute-value-inequalities/)

{{% /details %}}

In this lesson, we will:
- draw a graph of an absolute value function using a variety of strategies.


## Drawing an Absolute Value Function

To draw a function with an absolute value symbol, we need to understand it first. [Remember that](../../../numbers-and-expressions/numbers/absolute-values#distance-and-absolute-value) $|A| = A$ when $A$ is positive, and $|A| = -A$ when $A$ is negative. For example, the $|x-2|$ is equivalent to

`$$ |x-2| = \begin{cases}
  x-2 & \quad \text{if $x\ge 2$}, \\
  -x+2 & \quad \text{if $x<2$}.
\end{cases} $$`

Therefore, the graph of $y=|x-2|$ is

`$$ y = |x-2| \iff \begin{cases}
  y = x-2 & \quad \text{if $x\ge 2$}, \\
  y = -x+2 & \quad \text{if $x<2$}.
\end{cases} $$`

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-ex1.png" alt="Graph of y=|x-2|." >}}


{{% hbox %}}

{{% note Example %}}
Sketch the graph of $y=\left| \dfrac{x}{2} +1  \right|$.

{{% note Solution %}}
$\dfrac{x}{2} +1 = 0$ when $x=-2$, so we need to draw the graph of 
`$$\begin{cases}
  y = \dfrac{x}{2} +1, & \text{if $x\ge -2$,} \\
  y = -\dfrac{x}{2} - 1, & \text{if $x<-2$.}
\end{cases}$$`

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-ex2.png" alt="Graph of y=|x/2 + 1|." >}}

{{% /hbox %}}

{{% details title="Using the transformation" %}}

There is one more method of drawing the graph of $y=|f(x)|$ using the [transformation of graphs](../transformation). Recall that
`$$ |f(x)| =\begin{cases}
f(x) & \quad \text{if $f(x)>0$}, \\
-f(x) & \quad \text{if $f(x)<0$},
\end{cases} $$`
and the graph of $y=-f(x)$ is the reflection of $y=f(x)$ about the x-axis. Thus, you can just draw the graph of $y=f(x)$, and reflect that graph only where its value becomes negative!

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-trans.jpg" alt="Drawing a graph using reflection." >}}

{{% /details %}}

Try [Practice Question](#practice-questions) 1 before moving on.

## Multiple Absolute Value Symbols

Just like [solving equations with multiple absolute values](../../../numbers-and-expressions/inequalities/absolute-value-equations/#equations-with-multiple-absolute-values), we need to separate the cases at every value of $x$ where an absolute value is equal to zero.

{{% hbox %}}

{{% note Example %}} Draw the graph of $y=|x+1| + |x-3|$.

{{% note Solution %}} Because $x+1=0$ at $x=-1$ and $x-3=0$ at $x=3$, we need to draw three separate graphs where $x<-1$, $-1\le x < 3$, and $x\ge 3$.

{{% ol i %}}
{{% li %}}
When $x<-1$, $x+1<0$ and $x-3<0$,
`\begin{align*}
  y &= -(x+1) -(x-3) \\
  &= -2x + 2.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-1\le x < 3$, $x+1>0$ and $x-3<0$,
`\begin{align*}
  y &= (x+1) - (x-3) \\
  &= 4.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x\ge 3$, $x+1>0$ and $x-3>0$,
`\begin{align*}
  y &= (x+1) + (x+3) \\
  &= 2x + 4.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y=|x+1| + |x-3|$ looks like below:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-ex3.png" alt="Graph of y = |x+1| + |x-3|." >}}

{{% /hbox %}}

## Practice Questions

1. Sketch the following graphs.
    1. $y = |3-x|$
    2. $y = |2x+4|$
    3. $y = 2|x-1| + 3$

{{% details title="Answer" %}}

{{% note Solution %}}

{{% enum a %}}
Note that $3-x\ge 0$ when $x \le 3$, and $3-x<0$ when $x >3$. Thus, the function is equivalent to
`$$\begin{cases}
  y = x-3 &\quad \text{if $x\le 3$,} \\
  y = 3-x &\quad \text{if $x<3$.}
\end{cases}$$`

Thus, the graph of $y = |3-x|$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1a.png" alt="Graph of y=|x-3|." >}}

{{% enum b %}}
$2x+4=0$ when $x=-2$. Hence we need to draw
`$$\begin{cases}
  y = 2x+4 &\quad \text{if $x\ge -2$,} \\
  y = -2x-4 &\quad \text{if $x<-2$.}
\end{cases}$$`

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1b.png" alt="Graph of y=|2x+4|." >}}

{{% enum c %}}
$x-1=0$ when $x=-1$, so the graph passes through $(-1, 3)$. Then, when $x\ge 1$,
`\begin{align*}
  2|x-1| + 3 &= 2(x-1) + 3 \\
  &= 2x + 1,
\end{align*}`

and when $x<1$,
`\begin{align*}
  2|x-1| + 3 &= -2(x-1) + 3 \\
  &= -2x + 5.
\end{align*}`

Therefore, the function is equivalent to
`$$\begin{cases}
  y = 2x+1 &\quad \text{if $x\ge 1$, } \\
  y = -2x+5 &\quad \text{if $x<1$.}
\end{cases}$$`

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1c.png" alt="Graph of y=2|x-1|+3." >}}

{{% /details %}}

2. Sketch the graph of the following functions.
    1. $y = |x+1| - |x|$
    2. $y = |x+1| + 2|x-1|$

{{% details title="Answer" %}}

{{% note Solution %}}

{{% enum a %}} The breakpoints are $x=-1$ and $0$.

{{% ol i %}}
{{% li %}}
When $x<-1$, $x+1<0$ and $x<0$,
`\begin{align*}
  y &= -(x+1) + x \\
  &= -1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-1 \le x < 0$, $x+1>0$ and $x<0$,
`\begin{align*}
  y &= (x+1) + x \\
  &= 2x+1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x\ge 0$, $x+1>0$,
`\begin{align*}
  y &= (x+1) - x \\
  &= 1.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y = |x+1| - |x|$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q2a.png" alt="Graph of y=|x+1| - |x|." >}}

{{% enum b %}}
The breakpoints are $x=-1$ and $1$.

{{% ol i %}}
{{% li %}}
When $x<-1$, $x+1<0$ and $x-1<0$,
`\begin{align*}
  y &= -(x+1) - 2(x-1) \\
  &= -3x + 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-1\le x < 1$, $x+1>0$ and $x-1<0$,
`\begin{align*}
  y &= (x+1) - 2(x-1) \\
  &= -x + 3.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x \ge 1$, $x+1>0$ and $x-1>0$,
`\begin{align*}
  y &= (x+1) + 2(x-1) \\
  &= 3x - 1.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y = |x+1| + 2|x-1|$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q2b.png" alt="Graph of y = |x+1| + 2|x-1|." >}}

{{% /details %}}