---
title: "Quadratic Functions and Graphs"
slug: quadratic-functions
description: "Definition of a quadratic function and the basic properties of a quadratic graph."

date: 2021-04-12 13:45:23.903 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - quadratic function

menu:
  math1:
    name: Quadratic Functions and Graphs
    parent: Quadratic Graphs
    weight: 11

weight: 21
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Transformations of Graphs](../../functions-and-graphs/transformations/)

{{% /details %}}

Up until now, we have been mostly discussing linear functions and their graphs, which are, well, ***lines***. Linear functions have a degree of $1$, and they are fun to play with, but it gets boring pretty quickly. We will take the next step and inquire into functions with a degree of $2$: quadratic functions! In this lesson, we will:
- define a quadratic function.
- define the general and vertex forms of a quadratic function.
- describe the basic properties of the graph of $y=ax^2$.
- dilate the graph of $y=ax^2$ to understand and sketch the graph of $y=a(x-p)^2 + q$.

## Quadratic Functions

Do you remember that a quadratic polynomial is a polynomial with [a degree of 2](../../../numbers-and-expressions/polynomials/terms-and-polynomials/#degree-of-a-polynomial)? Likewise, the degree of a quadratic function is also 2. This means a quadratic function can have up to three terms: one $x^2$ term, one $x$ term, and one constant term.

{{% hbox %}}

{{% note Definition %}} *A **quadratic function** of $x$ is a function of $x$ whose degree in $x$ is $2$. The **general form** of a quadratic function of $x$ is $$ f(x) = ax^2 + bx + c, $$ where $a \ne 0$.*

{{% note Example %}} The following functions are all quadratic.
- $f(x) = 2x^2$
- $g(y) = -y^2 + 2y - 5$
- $h(t) = \dfrac{t^2}{\sqrt{3}} - 2$

{{% /hbox %}}


## Quadratic Graphs

We will start with the simplest form of a quadratic function: $f(x) = x^2$. Let's find some points that are part of its graph and near the origin:
- $f(0) = 0^2 = 0$, then $(0,0)$.
- $f(1) = 1^2 = 1$, then $(1,1)$.
- $f(-1) = (-1)^2 = 1$, then $(-1,1)$.
- $f(2) = 2^2 = 4$, then $(2,4)$.
- $f(-2) = (-2)^2=4$, then $(-2,4)$.

If you repeat this exercise with the numbers in between, you will eventually get this beautiful curve:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex1.png" alt="Graph of y=x^2." >}}

We will use this graph to find the graph of other quadratic functions later. Finally, below are a set of helpful vocabulary for describing a quadratic graph.

{{% hbox %}}
{{% note Definition %}}
1. ***Parabola** is the name of the shape describing a quadratic graph.*
    - ***Concave up** means the graph bends upward ($\cup$ shape).*
    - ***Concave down** means the graph bends downward ($\cap$ shape).*
2. *The **axis of symmetry** is the vertical line about which the parabola is symmetric.*
3. *The **vertex** is where the parabola meets its axis of symmetry.*

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/quad-properties.jpg" alt="Properties of a parabola." >}}

{{% /hbox %}}

### Graph of $y = ax^2$

We [discussed earlier](../../functions-and-graphs/transformations/#dilation) that the graph of $y = af(x)$ is a dilation (stretch or contract) of the graph of $y=f(x)$ if $a>0$, and the graph of $y= -f(x)$ is the vertical reflection of the graph of $y=f(x)$. Thus, the graph of $y = ax^2$ looks like this:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex2.png" alt="Graphs of y=ax^2." >}}

Below are the properties of the graphs of $y=ax^2$.

{{% hbox %}}
{{% note Note %}} The properties of $y = ax^2$.
- The vertex is $(0,0)$.
- The axis of symmetry is the y-axis $(x=0)$.
- The graph passes through $(1,a)$.
- If $a>0$,
    - the graph is concave up.
    - the range is $y \ge 0$.
    - the vertex is the minimum point.
- If $a<0$,
    - the graph is concave down.
    - the range is $y \le 0$.
    - the vertex is the maximum point.

{{% /hbox %}}


### Graph of $y = a(x-p)^2 + q$ and the vertex form

The vertex of the graph of $y= ax^2$ is always the origin $(0,0)$. How do we describe a parabola whose vertex is not at the origin? Well, we can certainly [translate the graph](../../functions-and-graphs/transformations/#translation). You might have already guessed that the graph of $y = a(x-p)^2 + q$ is the graph of $y = ax^2$ translated horizontally by $p$ units and vertically by $q$ units.
`\begin{alignat*}{2}
  y = ax^2 & \longrightarrow y = a(\hl{x-p})^2 \quad && \text{(moved horizontally by $p$ units)} \\
  & \longrightarrow y = a(x-p)^2 \hl{+q} \quad && \text{(moved vertically by $q$ units)}
\end{alignat*}`

Therefore, the graph of $y = a(x-p)^2 + q$ looks like this:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex3.png" alt="Graph of y=a(x-p)^2 + q." >}}

Below are the properties of the graph:

{{% hbox %}}
{{% note Note %}} The properties of $y = a(x-p)^2+q$.

- The vertex is $(p, q)$.
- The equation of the axis of symmetry is $x=p$.
- The graph is concave up if $a>0$, and concave down if $a<0$.
- Its minimum or maximum value is $q$.

{{% /hbox %}}

We can immediately tell the vertex of the graph if you express the function as $f(x) = a(x-p)^2 + q.$ This is why it is called the ***vertex*** form of a quadratic function!

{{% hbox %}}

{{% note Definition %}} *If $f(x)$ is a quadratic function of $x$, $$f(x) = a(x-p)^2 + q$$ is the **vertex** or **standard** form of $f(x)$. The coordinates of the vertex of the graph $y=f(x)$ is $(p,q)$.*

{{% note Example %}}
- The vertex of the graph $y = -(x-3)^2 + 2$ is $(3,2)$.
- The vertex of the graph $y = 2(x+4)^2$ is $(-4,0)$.
- The vertex of the graph $y = 3x^2+7$ is $(0,7)$.

{{% /hbox %}}

Let's draw some graphs with the properties we learnt so far.

{{% hbox %}}

{{% note Example %}} For the following quadratic functions, draw their graphs and find the coordinates of the vertex and the axis of symmetry.
1. $y=-x^2+1$
2. $y=-(x+3)^2$
3. $y=-(x-4)^2+2$

{{% note Solution %}}

{{% enum 1 %}}
The graph of $y=-x^2+1$ is the graph of $y=-x^2$ moved 1 unit up. Thus the vertex is $\boldsymbol{ (0,1) }$, and the axis of symmetry is $\boldsymbol{ x=0 }$ (the y-axis).

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex4a.png" alt="Graph of y=-x^2+1." >}}

{{% enum 2 %}}
The graph of $y=-(x+3)^2$ is the graph of $y=-x^2$ moved 3 units left. Thus the vertex is $\boldsymbol{ (-3,0) }$, and the axis of symmetry is $\boldsymbol{ x=-3 }$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex4b.png" alt="Graph of y=-(x+3)^2." >}}

{{% enum 3 %}}
The graph of $y=-(x-4)^2+2$ is the graph of $y=-x^2$ moved 4 units right and 2 units up. Thus the vertex is $\boldsymbol{ (4,2) }$, and the axis of symmetry is $\boldsymbol{ x=4 }$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/quad-ex4c.png" alt="Graph of y=-(x-4)^2+2." >}}

{{% /hbox %}}


## Practice Questions

1. Sketch the following quadratic graphs, and state their vertices and axes of symmetry.
    1. $y=x^2 - 4$
    2. $y=2(x-1)^2$
    3. $y=-3(x-2)^2-1$

{{% details title="Answer" %}}

1. 
    1. Vertex: $(0,-4)$, axis of symmetry: $x=0$.
    2. Vertex: $(1,0)$, axis of symmetry: $x=1$.
    3. Vertex: $(2,-1)$, axis of symmetry: $x=2$.

{{% note Solution %}}

{{% enum a %}}
The graph of $y=x^2-4$ is the graph of $y=x^2$ moved 4 units down.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-q1a.png" alt="Graph of y=x^2-4." >}}

{{% enum b %}}
The graph of $y=2(x-1)^2$ is the graph of $y=2x^2$ moved 1 unit right.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/quad-q1b.png" alt="Graph of y=2(x-1)^2." >}}

{{% enum c %}}
The graph of $y=-3(x-2)^2-1$ is the graph of $y=-3x^2$ moved 2 units right and 1 unit down.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/quad-q1c.png" alt="Graph of y=-3(x-2)^2-1." >}}

{{% /details %}}