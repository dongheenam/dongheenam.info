---
title: "Reflections of Quadratic Functions"
slug: transformations-2
description: "Reflecting a quadratic function given their expressions."

date: 2021-04-25 20:09:38.634 +1000

toc: true
type: docs
math: true
draft: true

tags:
  - function
  - quadratic function
  - transformation

menu:
  math1-func:
    name: Reflections
    parent: Quadratic Graphs
    weight: 14

weight: 24
---

## Introduction

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 10A
    - Describe, interpret and sketch parabolas, hyperbolas, circles and exponential functions and their transformations [(ACMNA267)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11762&elaborations=true&cd=ACMNA267&searchTerm=ACMNA267#dimension-content).
- Mathematical Methods Unit 1
    - Examine dilations and the graphs of $y=cf(x)$ and $y=f(kx)$ [(ACMMM026)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/mathematical-methods/?unit=Unit+1&cd=ACMMM025&searchTerm=ACMMM025#dimension-content).

{{% /details %}}

In this lesson, we will:
- Find the reflections of a quadratic graph in general form.
- Solve problems using the reflections of quadratic graphs.

## Reflecting Quadratic Graphs

Recall the [following rules for reflections](../../functions-and-graphs/transformations/#reflection):
- If you reflect the point $(a,b)$:
    - about the x-axis, it becomes $(a,-b)$.
    - about the y-axis, it becomes $(-a,b)$.
    - about the origin, it becomes $(-a,-b)$.
- If you reflect the graph of the function $y = f(x)$:
    - about the x-axis, it becomes $-y = f(x)$.
    - about the y-axis, it becomes $y = f(-x)$.
    - about the origin, it becomes $-y = f(-x)$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/refl-ex1.png" caption="Three reflections of the quadratic graph $y = f(x)$ (dotted graph)." >}}

To summarise, you can reflect a graph over the x-axis by replacing $y$ with $-y$, and reflect it over the y-axis by replacing $x$ with $-x$.

{{% box %}}

{{% note Example %}} Find the expressions of the following reflections of the graph of $y=2x^2-5x+4$, and draw their graphs.
1. Reflection about the x-axis
2. Reflection about the y-axis
3. Reflection about the origin

{{% note Solution %}}

1. Substituting $y$ with $-y$ gives:
\begin{align}
  \hl{-y} &= 2x^2-5x+4 \\\\
  \implies \boldsymbol{ y } & \boldsymbol{ = -2x^2 + 5x - 4 }. \quad \cdots ~\enclose{circle}{\\kern .07em 1 \\kern .09em}
\end{align}
2. Substituting $x$ with $-x$ gives:
\begin{align}
  y &= 2(\hl{-x})^2 -5(\hl{-x}) + 4 \\\\
  \implies \boldsymbol{ y } & \boldsymbol{ = 2x^2 + 5x + 4 }. \quad \cdots ~\enclose{circle}{\\kern .07em 2 \\kern .09em}
\end{align}
3. Substituting $x$ with $-x$ and $y$ with $-y$ gives:
\begin{align}
  \hl{-y} &= 2(\hl{-x})^2 -5(\hl{-x}) + 4 \\\\
  \implies \boldsymbol{ y } & \boldsymbol{ = - 2x^2 - 5x - 4 }. \quad \cdots ~\enclose{circle}{\\kern .07em 3 \\kern .09em}
\end{align}

Because the original function is
{{% mn 84 tips %}}
$(1)$ $2\left(x^2 - \dfrac{5}{2} x\right) + 4$<br>
$=2\left(x^2 - \dfrac{5}{2} x + \dfrac{25}{16}-\dfrac{25}{16}\right) + 4$<br>
$=2\left(x^2 - \dfrac{5}{4} \right)^2 -2 \cdot \dfrac{25}{16} + 4$<br>
$=2\left(x^2 - \dfrac{5}{4} \right)^2 + \dfrac{9}{8}.$
{{% /mn %}}
\begin{align}
  y &= 2x^2-5x+4 \\\\
  &= 2\left(x^2 - \dfrac{5}{2} x\right) + 4 \\\\
  &= 2\left(x-\dfrac{5}{4} \right)^2 + \dfrac{7}{8}, \tag{1}
\end{align}
the coordinates of the vertex is $\left( \dfrac{5}{4}, \dfrac{7}{8} \right)$. We can use this information to draw the graphs of the three reflections:

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/refl-ex2.png" alt="Three reflections of the quadratic graph $y=2x^2-5x+4$." >}}

{{% /box %}}