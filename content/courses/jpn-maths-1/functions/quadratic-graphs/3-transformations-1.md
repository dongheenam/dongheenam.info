---
title: "Translations of Quadratic Functions"
slug: transformations-1
description: "Translating a quadratic function given their expressions."

date: 2021-04-19 22:00:48.591 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - quadratic function
  - transformation

menu:
  math1:
    name: Translations
    parent: Quadratic Graphs
    weight: 13

weight: 23
---

## Introduction 

It is time to build upon [the transformations](../quadratic-functions) of $y=ax^2$ and have a deeper look at the transformations of quadratic graphs in general. In this lesson, we will:
- Find the translation of a quadratic graph in general form.
- Solve problems using the translations of quadratic graphs.

## Translating Quadratic Graphs

To translate a graph, we perform the following operations.
- If you translate the graph of the function $y = f(x)$:
    - horizontally by $p$ units, it becomes $y = f(x-p)$.
    - vertically by $q$ units, it becomes $y-q = f(x)$ (or $y = f(x)+q$).

Let's apply this idea to quadratic functions in general form.

{{% hbox %}}

{{% note Example %}} Find the equation of the graph obtained by translating the graph of $y=-2x^2+4x-4$ 3 units left and 1 unit up.

{{% note Solution %}} Let $f(x) = -2x^2+4x-4$. Then
- Moving 3 units left:{{% sn 54 %}}$p$ is positive if moving right, and $p$ is negative if moving left. Since we are moving to the left, we need to ***subtract*** -3 from $x$, which means to add 3.{{% /sn %}} $y = f(x\hl{+3})$
- Moving 1 unit up:{{% sn 55 %}}Likewise, $q$ is positive if moving up, and negative if moving down.{{% /sn %}} $y\hl{-1} = f(x+3)$

Therefore, the equation of the new graph is:
`\begin{align*}
  y &= \underline{f(x+3)} + 1 \\
  &= \underline{-2(x+3)^2 + 4(x+3) - 4} + 1 \\
  &= -2(x^2 + 6x + 9) + 4(x+3) - 3 \\
  &= -2x^2 + (-12+4)x -18+12-3 \\
  &= \boldsymbol{ -2x^2 -8x -9 }.
\end{align*}`

***Alternative solution.*** We can find the coordinates of the vertex by converting the equation to the vertex form:
`\begin{align*}
  y &= -2x^2 + 4x - 4 \\
  &= -2(x^2 - 2x) - 4 \\
  &= -2(\underline{x^2 - 2x + 1} - 1) - 4 \\
  &= -2\underline{(x-1)^2} + 2 - 4 \\
  &= -2(x-1)^2 -2 .
\end{align*}`

Thus we find the vertex is $(1,-2)$. If we move this vertex 3 units left and 1 unit up, it becomes $(1-3,-2+1)=(-2,-1)$. Therefore, the equation of the new graph is $$ \boldsymbol{ y = -2(x+2)^2 - 1 }. $$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/trans-ex2.png" alt="Graph of y=-2x^2+4x-4 and its translation." >}}

{{% /hbox %}}

{{% details title="Translating points vs graphs" %}}

You may realise that when we translate the graph of $y=f(x)$, we find $$ y\hl{-q} = f(x\hl{-p})$$ but when we translate a point $(x,y)$ we find $$ (x\hl{+p},x\hl{+q}). $$ This is because we can move a point directly but we move a graph by [shifting the coordinate plane instead](../../functions-and-graphs/transformations/#translations). Yes, this can be quite confusing!

{{% /details %}}

Try [Practice Question](#practice-question) 1.

## Applications of Translations

Up until now, all we had to do is to move the graph according to the prescribed transformations. But can we find the transformation given the initial and final graphs?

{{% hbox %}}

{{% note Example %}} Let $P_1$ be the graph of $y=2x^2 +6x + 7$ and $P_2$ be the graph of $y=2x^2-4x+1$. Find the translation of $P_1$ to $P_2$.

{{% note Solution %}} We can certainly let $f(x) = 2x^2 + 6x + 7$ and solve $$ f(x-p) + q = 2x^2 - 4x + 1 $$ for $p$ and $q$, but it sounds a little too cumbersome. Instead, we can focus on the coordinates of the vertices.

For $P_1$,
`\begin{align*}
  y &= 2x^2 + 6x + 7 \\
  &= 2(x^2 + 3x) + 7 \\
  &= 2\left\{ \left( x + \dfrac{3}{2}\right)^2 - \dfrac{9}{4} \right\} + 7 \\
  &= 2\left( x + \dfrac{3}{2}\right)^2 - \dfrac{9}{2} + 7 \\
  &= 2\left( x + \dfrac{3}{2}\right)^2 + \dfrac{5}{2},
\end{align*}`

so the vertex is $\left(-\dfrac{3}{2}, \dfrac{5}{2}\right)$. For $P_2$,
`\begin{align*}
  y &= 2x^2 - 4x + 1 \\
  &= 2(x^2 - 2x) + 1 \\
  &= 2\\{ (x-1)^2 - 1 \\} + 1 \\
  &= 2(x-1)^2 - 1,
\end{align*}`
so the vertex is $(1, -1)$.

Thus the translation moves $\left(-\dfrac{3}{2}, \dfrac{5}{2}\right)$ to $(1, -1)$. If we let the amount of horizontal translation be $p$ and vertical translation be $q$, we have
$$ -\dfrac{3}{2} \hl{+p} = 1, \quad \dfrac{5}{2} \hl{+q} = -1. $$

This means $p=\dfrac{5}{2}$ and $q=-\dfrac{7}{2}$. Therefore, $\textbf{$\boldsymbol{ P_2 }$ is $\boldsymbol{ P_1 }$ translated $\boldsymbol{ \dfrac{5}{2} }$ units right and $\boldsymbol{ \dfrac{7}{2} }$ units down.}$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/trans-ex1.png" alt="Graph of P1 and P2." >}}

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}} When translated 1 unit along the x-axis and -2 units along the y-axis, the parabola $P_1$ moves to $P_2:~ y=2x^2 + 8x + 9$. Find the expression for $P_1$.

{{% note Solution %}} If we move $P_1$ right by 1 unit and down by 2 units and get $P_2$, $P_1$ is $P_2$ moved left by 1 unit and up by 2 units:
`\begin{alignat*}{3}
  P_1 \longrightarrow & ~\text{(1 unit right, 2 units down)} & \longrightarrow P_2 \\
  P_1 \longleftarrow & ~\text{(1 unit left, 2 units up)} & \longleftarrow P_2 \\
\end{alignat*}`

Thus, the equation of $P_1$ is $$ y-2 = 2(x+1)^2 + 8(x+1) + 9. $$ Therefore
`\begin{align*}
  y &= 2(x+1)^2 + 8(x+1) + 9 + 2 \\
  &= 2(x^2 + 2x + 1) + 8(x+1) + 11 \\
  &= \boldsymbol{ 2x^2 + 12x + 21 }.
\end{align*}`

{{% /hbox %}}


## Practice Questions

1. The graph of $y=f(x)$ can be obtained by translating the graph of $y=x^2-4x$ horizontally by 2 units and vertically by -1 unit. Find $f(x)$.

{{% details title="Answer" %}}

1. $f(x) = x^2 - 8x - 11$ or $(x-4)^2 - 5$

{{% note Solution %}}
When you move the graph of $y=g(x)$ 2 units right and 1 unit down, the equation becomes
$$ y+1 = g(x-2). $$

Thus,
`\begin{align*}
  f(x) &= (x-2)^2 -4(x-2) - 1 \\
  &= x^2 - 4x + 4 - 4x + 8 - 1 \\
  &= \boldsymbol{ x^2 - 8x + 11 }.
\end{align*}`

***Alternative solution.*** Converting $y = x^2 - 4x$ to the vertex form gives
`\begin{align*}
  y &= x^2 - 4x \\
  &= x^2 - 4x + 4 - 4 \\
  &= (x-2)^2 - 4.
\end{align*}`

Thus the vertex of $y = x^2 - 4x$ is $(2, -4)$. If we move this point 2 units right and 1 unit down, it becomes $(2+2,-4-1)=(4,-5)$.

Therefore, $f(x)$ is equal to
`\begin{align*}
  f(x) &= \boldsymbol{ (x-4)^2 - 5 } \\
  &= x^2 - 8x + 16 - 4 \\
  &= \boldsymbol{ x^2 - 8x + 11 }.
\end{align*}`

{{% /details %}}

2. {{% mn ref2 ref %}}From Hiroshima Bunkyo Univ.{{% /mn %}} How do we need to translate the graph of $y=x^2-8x-13$ to have it overlap the graph of $y=x^2+4x+3$?

{{% details title="Answer" %}}

2. 6 units left and 28 units up

{{% note Solution %}}
If we convert both functions to their vertex forms,
`\begin{align*}
  y &= x^2 - 8x - 13 \\
  &= x^2 - 8x + 16 - 16 - 13 \\
  &= (x-4)^2 - 29 \tag{$\cdots\tcirc{1}$}
\end{align*}`

and
`\begin{align*}
  y &= x^2 + 4x + 3 \\
  &= x^2 + 4x + 4 - 4 + 3 \\
  &= (x+2)^2* - 1. \tag{$\cdots\tcirc{2}$}
\end{align}`

Thus the vertex of $\tcirc{1}$ is $(4, -29)$ and the vertex of $\tcirc{2}$ is $(-2, -1)$. We need to find the translation that moves $(4, -29)$ to $(-2, -1)$, which is $\textbf{ translating 6 units left and 28 units up.}$

{{% /details %}}

3. Find the equation of the graph, which becomes $y=x^2+3x+4$ when translated 1 unit left and 2 units up.

{{% details title="Answer" %}}

3. $y = x^2 + x$

{{% note Solution %}}
The graph we need to find is the graph of $y=x^2 + 3x + 4$ translated 1 unit right and 2 units down. Thus
`\begin{align*}
  y &= (x-1)^2 + 3(x-1) + 4 - 2 \\
  &= x^2 - 2x + 1 + 3x - 3 + 4 - 2 \\
  &= \boldsymbol{ x^2 + x }.
\end{align*}`

{{% /details %}}