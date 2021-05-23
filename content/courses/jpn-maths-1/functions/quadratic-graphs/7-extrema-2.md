---
title: "Minima and Maxima of Quadratic Functions 2"
slug: extrema-2
description: "Finding the minima and maxima of quadratic functions in a general case."

date: 2021-05-23 09:56:17.111 +1000

toc: true
type: docs
math: true
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

# Introduction

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

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extvar-ex1.png" alt="Graph of $y = x^2 - 4x + 1$." >}}

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

$\tcirc{3} \quad$ When $\hl{a+1>1}$, $x=a+2$ is the farthest from $x=1$. Thus, the maximum value is f(a+2) = (a+2-1)^2 + 1 = a^2 + 2a + 2.$

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




## Practice Questions

1. Find the minimum and maximum of $y=-x^2+6x$ $(0\le x \le a),$ where $a$ is a positive number.

{{% details title="Answer" %}}

1. 

{{% note Solution %}} From $y = -x^2 + 6x = -(x-3)^2 + 9$, the vertex is $(3,9).$

{{% /details %}}


2. Find the extrema of the function $y = -2x^2 + 6x + 1$ with domain $a \le x \le a + 1.$