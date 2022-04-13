---
title: "Solving Inequalities using Graphs"
slug: inequalities-and-graphs
description: "Solving a linear inequality drawing graphs of the functions."

date: 2021-04-09 12:55:09.679 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - linear function
  - absolute value
  - inequality

menu:
  math1-func:
    name: Inequalities and Graphs
    parent: Functions and Graphs
    weight: 15

weight: 15
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Solving Linear Inequalities](../../../numbers-and-expressions/inequalities/solving-inequalities/)

{{% /details %}}

In this lesson, we will:

- derive the solution of an inequality from the graphs of its parts.


## Graphs and Inequalities

How do you solve the inequality $$ 2x-2 \le \dfrac{x}{2} + 1? $$ The obvious answer seems to [solve it algebraically](../../../numbers-and-expressions/inequalities/solving-inequalities/):
`\begin{align*}
  2x-2 \le \dfrac{x}{2} + 1 & \iff 2x - \dfrac{x}{2} \le 2 + 1 \\
  & \iff \dfrac{3}{2} x \le 3 \\
  & \iff x \le 2.
\end{align*}`
But here is another way of interpreting the question: given two functions, $f(x) = 2x-2$ and $g(x) = \dfrac{x}{2} + 1$, at which values of $x$ is the value of $g(x)$ greater than or equal to $f(x)$? One great way to visualise this problem is to draw the graphs of $y=f(x)$ and $y=g(x)$:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-ex1.png" alt="Graphs of y=2x-2 and y=x/2+1." >}}

You should be able to tell the graph of $y=g(x)$ is above the graph of $y=f(x)$ when $x<2$. Because y-coordinates tell the values of a function, it means that $g(x)$ is greater than $f(x)$ when $x<2$!

{{% hbox %}}

{{% note Theorem %}} $f(x) > g(x)$ if and only if when the graph of $y=f(x)$ is ***above*** the graph of $y=g(x)$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-graphs.jpg" alt="Visual demonstration of the theorem." style="margin-bottom: 0">}}

{{% /hbox %}}

Below is a little more complicated example.

{{% hbox %}}

{{% note Example %}}
Solve $2|x+1|-|x-1|>x+2$ using graphs.

{{% note Solution %}}
We will first find the graph of $y=2|x+1|-|x-1|$.

{{% ol i %}}
{{% li %}}
When $x<-1$,
`\begin{align*}
  y &=-2(x+1)+(x-1) \\
  &= -2x - 2 + x - 1 \\
  &= -x - 3.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-1\le x < 1$,
`\begin{align*}
  y &=2(x+1)+(x-1) \\
  &= 2x + 2 + x - 1 \\
  &= 3x + 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x\ge 1$,
`\begin{align*}
  y &=2(x+1)-(x-1) \\
  &= 2x + 2 - x + 1 \\
  &= x + 3.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Now, we can draw the graphs of $y=2|x+1|-|x-1|$ $(\tcirc{1})$ and $y=x+2$ $(\tcirc{2})$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-ex2.png" alt="Graphs of y=2|x+1|-|x-1| and y=x+2." >}}

$\tcirc{1}$ is above $\tcirc{2}$ before the first intersection and after the second intersection. Note the two graphs are parallel where $x>1$, so $\tcirc{1}$ will be always above $\tcirc{2}$.

Now, the first intersection is somewhere $x<-1$, so it is where $y=x+2$ meets $y=-x-3$:
`\begin{align*}
  x+2 = -x-3 & \iff 2x = -5 \\
  & \iff x = -\dfrac{5}{2},
\end{align*}`

Then, the second intersection is somewhere between $x=-1$ and $1$, so it is where where $y=x+2$ meets $y=3x+1$:
`\begin{align*}
  x+2 = 3x+1 & \iff 1 = 2x \\
  & \iff x = \dfrac{1}{2}.
\end{align*}`

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-ex2a.png" alt="Solution of 2|x+1|-|x-1|>x+2." >}}

Therefore, we conclude $\boldsymbol{ x<-\dfrac{5}{2} }$ or $\boldsymbol{ x > \dfrac{1}{2} }.$

{{% /hbox %}}


## Practice Questions

1. Solve the following inequalities by drawing appropriate graphs.
    1. $|x-1| + 2|x|\le 3$
    2. $|x+2| - |x-1|>x$

{{% details title="Answer" %}}

1. 
    1. $-\dfrac{2}{3} < x < \dfrac{4}{3}$
    2. $x<-3$, or $-1<x<3$

{{% note Solution %}}

{{% enum a %}}
Let the graph of $y=|x-1| + 2|x|$ be $\tcirc{1}$. It is divided into three sections:

{{% ol i %}}
{{% li %}}
When $x<0$,
`\begin{align*}
  y &= -(x-1) - 2x \\
  &= -3x + 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $0\le x < 1$,
`\begin{align*}
  y &= -(x-1) + 2x \\
  &= x + 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x \ge 1$,
`\begin{align*}
  y &= (x-1) + 2x \\
  &= 3x - 1.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Let the graph of $y=3$ to be $\tcirc{2}$. If we draw the two graphs on the coordinate plane, it becomes clear that $\tcirc{1}$ and $\tcirc{2}$ have two points of intersection:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-q1a.png" alt="Graphs of y=|x-1| + 2|x| and y=3." >}}

The first point is left of $x=0$, so it is where $y=3$ and $y=-3x+1$ meet. Thus
`\begin{align*}
  3 = -3x + 1 &\iff 3x = -2 \\
  &\iff x = -\dfrac{2}{3}.
\end{align*}`

The second point is right of $x=1$, so it is where $y=3$ and $y=3x-1$ meet:
`\begin{align*}
  3 = 3x-1 &\iff 4 = 3x \\
  &\iff x = \dfrac{4}{3}.
\end{align*}`

The graph of $y=|x-1| + 2|x|$ is below the graph of $y=3$ in between the two intersections. Therefore, the solution to the inequality is $\boldsymbol{ -\dfrac{2}{3} < x < \dfrac{4}{3} }.$

{{% enum b %}}
The graph of $y = |x+2| - |x-1|$ is equivalent to the following graphs.

{{% ol i %}}
{{% li %}}
When $x<-2$,
`\begin{align*}
  y &= -(x+2) + (x-1) \\
  &= -3.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-2\le x < 1$,
`\begin{align*}
  y &= (x+2) + (x-1) \\
  &= 2x + 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x \ge 1$,
`\begin{align*}
  y &= (x+2) - (x-1) \\
  &= 3.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Let this graph be $\tcirc{3}$, and the graph of $y=x$ be $\tcirc{4}$. If we draw the two graphs on the coordinate plane, we find they meet three times. Let the x-coordinates of the intersecting points to be $a$, $b$, and $c$:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/ineq-q1b.png" alt="Graphs of y=|x+2| - |x-1| and y=x." >}}

It is pretty trivial that $a=-3$ and $c=3$. $b$ is where $y=x$ and $y=2x+1$ meet:
`\begin{align*}
  x = 2x + 1 \iff x = -1,
\end{align*}`
hence $b=-1$.

The inequality corresponds to the range of $x$ where $\tcirc{3}$ is above $\tcirc{4}$, which is $\boldsymbol{ x<-3 }$ or $\boldsymbol{ -1<x<3 }.$

{{% /details %}}
