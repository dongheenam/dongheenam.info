---
title: "Graphing Linear Functions with Absolute Values"
slug: absolute-values
description: "Graphing a linear function with one or multiple absolute value symbols."

date: 2021-04-05 12:49:33.068 +1000

toc: true
type: docs
math: true
draft: true

tags:
  - function
  - linear function
  - absolute value

menu:
  math1-func:
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

{{% details title="Links to Australian Curriculum" %}}

- Specialist Mathematics Unit 3
  - Use and apply the notation $|x|$ for the absolute value for the real number $x$ and the graph of $y=|x|$ [(ACMSM098)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/specialist-mathematics/?unit=Unit+3&cd=ACMSM098&searchTerm=ACMSM098#dimension-content).
  - Examine the relationship between the graph of $y=f(x)$ and the graphs of $y=\dfrac{1}{f(x)}$, $y=|f(x)|$ and $y=f(|x|)$ [(ACMSM099)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/specialist-mathematics/?unit=Unit+3&cd=ACMSM099&searchTerm=ACMSM099#dimension-content).

{{% /details %}}

In this lesson, we will:

- Draw a graph of an absolute value function using a variety of strategies.


## Drawing an Absolute Value Function

To draw a function with an absolute value symbol, we need to understand it first. [Remember that](../../../numbers-and-expressions/numbers/absolute-values#distance-and-absolute-value) $|A| = A$ when $A$ is positive, and $|A| = -A$ when $A$ is negative. For example, the $|x-2|$ is equivalent to

$$ |x-2| = \begin{cases}
  x-2 & \quad \text{if $x\ge 2$}, \\\\
  -x+2 & \quad \text{if $x<2$}.
\end{cases} $$

Therefore, the graph of $y=|x-2|$ is

$$ y = |x-2| \iff \begin{cases}
  y = x-2 & \quad \text{if $x\ge 2$}, \\\\
  y = -x+2 & \quad \text{if $x<2$}.
\end{cases} $$

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-ex1.png" alt="Graph of y=|x-2|." >}}


{{% box %}}

{{% note Example %}} Sketch the graph of $y=\left| \dfrac{x}{2} +1  \right|$.

{{% note Solution %}} $\dfrac{x}{2} +1 = 0$ when $x=-2$, so we need to draw the graph of 
\begin{cases}
  y = \dfrac{x}{2} +1, & \text{if $x\ge -2$,} \\\\\
  y = -\dfrac{x}{2} - 1, & \text{if $x<-2$.}
\end{cases}

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-ex2.png" alt="Graph of y=|x/2 + 1|." >}}

{{% /box %}}

{{% details title="Using the transformation" %}}

There is one more method of drawing the graph of $y=|f(x)|$ using the [transformation of graphs](../transformation). Recall that $$ |f(x)| = \begin{cases} f(x) & \quad \text{if $f(x)>0$}, \\\\ -f(x) & \quad \text{if $f(x)<0$}, \end{cases} $$ and the graph of $y=-f(x)$ is the reflection of $y=f(x)$ about the x-axis. Thus, you can just draw the graph of $y=f(x)$, and reflect that graph only where its value becomes negative!

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-trans.jpg" alt="Drawing a graph using reflection." >}}

{{% /details %}}

{{% note Question %}} Try [Practice Questions](#practice-questions) 1 before moving on.

## Multiple Absolute Value Symbols



## Practice Questions

1. Sketch the following graphs.
    1. $y = |3-x|$
    2. $y = |2x+4|$
    3. $y = 2|x-1| + 3$

{{% details title="Answer" %}}

{{% note Solution %}}

$\hspace{0.5em} \text{a.} \quad$ Note that $3-x\ge 0$ when $x \le 3$, and $3-x<0$ when $x >3$. Thus, the function is equivalent to
\begin{cases}
  y = x-3 &\quad \text{if $x\le 3$,} \\\\
  y = 3-x &\quad \text{if $x<3$.}
\end{cases}

Thus, the graph of $y = |3-x|$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1a.png" alt="Graph of y=|x-3|." >}}

$\hspace{0.5em} \text{b.} \quad$ $2x+4=0$ when $x=-2$. Hence we need to draw
\begin{cases}
  y = 2x+4 &\quad \text{if $x\ge -2$,} \\\\
  y = -2x-4 &\quad \text{if $x<-2$.}
\end{cases}

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1b.png" alt="Graph of y=|2x+4|." >}}

$\hspace{0.5em} \text{c.} \quad$ $x-1=0$ when $x=-1$, so the graph passes through $(-1, 3)$. Then, when $x\ge 1$,
\begin{align}
  2|x-1| + 3 &= 2(x-1) + 3 \\\\
  &= 2x + 1,
\end{align}
and when $x<1$,
\begin{align}
  2|x-1| + 3 &= -2(x-1) + 3 \\\\
  &= -2x + 5.
\end{align}

Therefore, the function is equivalent to
\begin{cases}
  y = 2x+1 &\quad \text{if $x\ge 1$, } \\\\
  y = -2x+5 &\quad \text{if $x<1$.}
\end{cases}

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/abs-q1c.png" alt="Graph of y=2|x-1|+3." >}}

{{% /details %}}

