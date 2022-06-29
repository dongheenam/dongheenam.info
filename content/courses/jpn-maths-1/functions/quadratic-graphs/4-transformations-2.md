---
title: "Reflections of Quadratic Functions"
slug: transformations-2
description: "Reflecting a quadratic function given their expressions."

date: 2021-04-26 20:48:14.044 +1000

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
    name: Reflections
    parent: Quadratic Graphs
    weight: 14

weight: 24
---

## Introduction

In this lesson, we will:
- Find the reflections of a quadratic graph in general form.
- Solve problems using the reflections of quadratic graphs.

## Reflecting Quadratic Graphs

Recall the [following rules for reflections](../../functions-and-graphs/transformations/#reflection):

{{% hbox %}}
{{% note Note %}}
- If you reflect the point $(a,b)$:
    - about the x-axis, it becomes $(a,-b)$.
    - about the y-axis, it becomes $(-a,b)$.
    - about the origin, it becomes $(-a,-b)$.
- If you reflect the graph of the function $y = f(x)$:
    - about the x-axis, it becomes $-y = f(x)$.
    - about the y-axis, it becomes $y = f(-x)$.
    - about the origin, it becomes $-y = f(-x)$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/refl-ex1.png" caption="Three reflections of the quadratic graph $y = f(x)$ (dotted graph)." >}}

{{% /hbox %}}

To summarise, you can reflect a graph over the x-axis by replacing $y$ with $-y$, and reflect it over the y-axis by replacing $x$ with $-x$.

{{% hbox %}}

{{% note Example %}}
Find the expressions of the following reflections of the graph of $y=2x^2-5x+4$, and draw their graphs.
1. Reflection about the x-axis
2. Reflection about the y-axis
3. Reflection about the origin

{{% note Solution %}}

{{% enum 1 %}}
Substituting $y$ with $-y$ gives:
`\begin{align*}
  \hl{-y} &= 2x^2-5x+4 \\
  \iff \boldsymbol{ y } & \boldsymbol{ = -2x^2 + 5x - 4 }. \tag{$\cdots\tcirc{1}$}
\end{align*}`
{{% enum 2 %}}
Substituting $x$ with $-x$ gives:
`\begin{align*}
  y &= 2(\hl{-x})^2 -5(\hl{-x}) + 4 \\
  \iff \boldsymbol{ y } & \boldsymbol{ = 2x^2 + 5x + 4 }. \tag{$\cdots\tcirc{2}$}
\end{align*}`
{{% enum 3 %}}
Substituting $x$ with $-x$ and $y$ with $-y$ gives:
`\begin{align*}
  \hl{-y} &= 2(\hl{-x})^2 -5(\hl{-x}) + 4 \\
  \iff \boldsymbol{ y } & \boldsymbol{ = - 2x^2 - 5x - 4 }. \tag{$\cdots\tcirc{3}$}
\end{align*}`

Because the original function is
{{% mn 84 tips %}}
(1)
$ x^2 - \dfrac{5}{2} x \\\\\\\\[0.5em]
= x^2 - \dfrac{5}{2} x + \dfrac{25}{16}-\dfrac{25}{16} \\\\\\\\[0.5em]
= \left( x - \dfrac{5}{4} \right)^2 - \dfrac{25}{16}.$
{{% /mn %}}
`\begin{align*}
  y &= 2x^2-5x+4 \\
  &= 2\left(x^2 - \dfrac{5}{2} x\right) + 4 \\
  &= 2\left(x-\dfrac{5}{4} \right)^2 + \dfrac{7}{8}, \tag{1}
\end{align*}`
the coordinates of the vertex is $\left( \dfrac{5}{4}, \dfrac{7}{8} \right)$. We can use this information to draw the graphs of the three reflections:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/refl-ex2.png" alt="Three reflections of the quadratic graph $y=2x^2-5x+4$." >}}

***Alternative solution.***
As demonstrated above, you can first find the equation in the vertex form and then work out the reflected equations.

For the quadratic graph $y = 2x^2-5x+4 = 2\left(x-\dfrac{5}{4} \right)^2 + \dfrac{7}{8}$,
- the reflection about the x-axis is $y = \hl{-}2\left(x-\dfrac{5}{4} \right)^2 \hl{-} \dfrac{7}{8}.$
- the reflection about the y-axis is $y = 2\left(x\hl{+}\dfrac{5}{4} \right)^2 + \dfrac{7}{8}.$
- the reflection about the origin is $y = \hl{-}2\left(x\hl{+}\dfrac{5}{4} \right)^2 \hl{-} \dfrac{7}{8}.$

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 and 2.

## Multi-step Transformations

We now know how to translate and reflect quadratic graphs, so let's try mixing them together. One thing you must be careful of is ***the order matters***. For example, for the graph of $y = 3(x-1)^2$,
- if you move it right 3 units and reflect the result over the y-axis,
`\begin{alignat*}{2}
  y &= 3(x-1)^2 \\
  \longrightarrow y&= 3(x-4)^2 && \text{(moved 3 units right)} \\
  \longrightarrow y&= 3(x+4)^2. && \text{(reflected over the y-axis)} \\
\end{alignat*}`
- if you reflect it over the y-axis and move the result right 3 units,
`\begin{alignat*}{2}
  y &= 3(x-1)^2 \\
  \longrightarrow y&= 3(x+1)^2 && \text{(reflected over the y-axis)} \\
  \longrightarrow y&= 3(x-2)^2. && \text{(moved 3 units right)} \\
\end{alignat*}`

{{% hbox %}}

{{% note Example %}}
Let $P_1$ be the parabola $y= x^2 + ax + b$. If you reflect $P_1$ about the origin, and then translate the result by -1 unit horizontally and 8 units vertically, you obtain $P_2: y=-x^2+5x+11$. Find the values of $a$ and $b$.

{{% note Solution %}}
To reflect a graph about the origin, we need to substitute
`$$\begin{cases}
  x \rightarrow -x, \\
  y \rightarrow -y,
\end{cases}$$`

so $P_1$ becomes
`\begin{align*}
  -y &= (-x)^2 + a(-x) + b \\
  \iff y &= -x^2 + ax - b. \tag{$\cdots P_*$}
\end{align*}` 

Then, we need to move $P_*$ 1 unit left and 8 units up, so we need to substitute
`$$\begin{cases}
  x \rightarrow x+1, \\
  y \rightarrow y-8.
\end{cases}$$`

Thus
`\begin{align*}
  y-8 &= -(x+1)^2 + a(x+1) - b \\
  \iff y &= -x^2 - 2x - 1 + ax + a - b + 8 \\
  &= -x^2 + (a-2)x + (a-b+7).
\end{align*}`

Because this equation is equivalent to $y=-x^2+5x+11$, we have
`$$\begin{cases}
  a-2 = 5, \\
  a-b+7 = 11.
\end{cases}$$`

From the first equation, we find $\boldsymbol{ a=7 }$, and substituting this to the second equation gives
`\begin{align*}
  &7-b+7 = 11 \\
  &\iff -b = -3 \\
  &\iff \boldsymbol{ b } \boldsymbol{ = 3 }.
\end{align*}`

Alternative solution. You can deduce the series of transformations from $P_2$ to $P_1$ by backtracking:

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/refl-multi.jpg" alt="Transformations between P1 and P2." >}}

Therefore, starting from $P_2$:
{{% mn 171 tips %}}
(1) Translation to the right by 1 unit and down by 8 units.
{{% /mn %}}
`\begin{align*}
  y+8 &= -(x-1)^2+5(x-1)+11 \tag{1} \\
  &= -x^2+2x-1 + 5x - 5 + 11 \\
  &= -x^2 + 7x +5 \\
  \iff y &= -x^2 + 7x - 3,
\end{align*}`

and then
{{% mn 188 tips %}}
(2) Reflection about the origin.
{{% /mn %}}
`\begin{align*}
  -y &= -(-x)^2 + 7(-x) - 3 \tag{2} \\
  &= -x^2 - 7x - 3 \\
  \iff y &= x^2 + 7x + 3.
\end{align*}`

Therefore, we find $\boldsymbol{ a=7 }$ and $\boldsymbol{ b=3 }.$


{{% /hbox %}}

## Practice Questions

1. For the following reflections of the graph of $y = -x^2 + 4x -1$, find their equations.
    1. Reflection over the x-axis.
    2. Reflection over the y-axis.
    3. Reflection over the origin.

{{% details title="Answer" %}}

1. 
    1. $y = x^2 - 4x + 1$
    2. $y = -x^2 - 4x - 1$
    3. $y = x^2 + 4x + 1$

{{% /details %}}

2. Find the vertices of the following reflections of the graph of $y = \dfrac{1}{2}x^2 - x + \dfrac{3}{2}.$
    1. Reflection over the x-axis.
    2. Reflection over the y-axis.
    3. Reflection over the origin.

{{% details title="Answer" %}}

2. 
    1. $(1,-1)$
    2. $(-1,1)$
    3. $(-1,-1)$

{{% note Solution %}}
The equation of the original parabola in vertex form is
{{% mn q2 tips %}}
(1)
$\dfrac{1}{2}x^2 - x + \dfrac{3}{2} \\\\\\\\[0.5em]
=\dfrac{1}{2} (x^2 - 2x ) + \dfrac{3}{2} \\\\\\\\[0.5em]
=\dfrac{1}{2} \left\\\\{ (x-1)^2 - 1 \right\\\\} + \dfrac{3}{2} \\\\\\\\[0.5em]
=\dfrac{1}{2} (x-1)^2 + 1.$
{{% /mn %}}
`\begin{align*}
  y &= \dfrac{1}{2}x^2 - x + \dfrac{3}{2} \\
  &= \dfrac{1}{2} (x-1)^2 + 1. \tag{1}
\end{align*}`

Hence the vertex is $(1, 1)$. Therefore, the reflection of $(1,1)$
- over the x-axis is $\boldsymbol{ (1, -1) }.$
- over the y-axis is $\boldsymbol{ (-1, 1) }.$
- over the origin is $\boldsymbol{ (-1, -1) }.$

{{% /details %}}

3. If you translate the graph of $y=x^2$ horizontally by $p$ units and vertically by $q$ units, and reflect the result over the x-axis, it becomes the graph of $y = -x^2 - 3x + 3$. Find the values of $p$ and $q$.

{{% details title="Answer" %}}

3. $p = -\dfrac{3}{2}, ~q = -\dfrac{21}{4}$

{{% note Solution %}}

We start by moving the graph of $y=x^2$:
`\begin{align*}
  &y - q &= (x-p)^2 \\
  &\iff y &= (x-p)^2 + q.
\end{align*}`

Then, if we flip this graph over the x-axis,
`\begin{align*}
  -y &= (x-p)^2 + q \\
  \iff y &= -(x-p)^2 - q \\
  &= -x^2 + 2px - p^2 - q.
\end{align*}`

Because this equation is identical to $y = -x^2 - 3x + 3$, we find
`$$\begin{cases}
  2p = -3, &\quad \cdots\tcirc{1} \\
  -p^2 - q = 3. &\quad\cdots\tcirc{2}
\end{cases}$$`

From $\tcirc{1}$, $\boldsymbol{ p = -\dfrac{3}{2} }$, and substituting this to $\tcirc{2}$ gives
`\begin{align*}
  & -\left(-\dfrac{3}{2}\right)^2 - q = 3 \\
  & \iff -\dfrac{9}{4} - q = 3 \\
  & \iff q = -\dfrac{9}{4} - 3 \\
  & \iff \boldsymbol{ q = -\dfrac{21}{4} }.
\end{align*}`

***Alternative solution.***

The vertex of $y= x^2$ is $(0,0)$, and from the vertex form of $y = -x^2 - 3x + 3$
{{% mn q3 tips %}}
(1) $-x^2 - 3x + 3 \\\\\\\\[0.5em]
=-(x^2+3x)+3 \\\\\\\\[0.5em]
=-\left\\\\{ \left(x + \frac{3}{2} \right)^2 - \frac{9}{4} \right\\\\} + 3 \\\\\\\\[0.5em]
= -\left(x+\frac{3}{2} \right)^2 + \frac{21}{4}.
$
{{% /mn %}}
`\begin{align*}
  y &= -x^2 - 3x + 3 \\
  &= -\left( x + \dfrac{3}{2} \right)^2 + \dfrac{21}{4}, \tag{1}
\end{align*}`
its vertex is $\left( -\dfrac{3}{2}, \dfrac{21}{4} \right)$.

If you translate $(0,0)$ according to the instructions, it moves to $(p,q)$. Then, if you reflect the point about the x-axis, it becomes $(p,-q)$. Hence we find
`$$\begin{cases}
  p = -\dfrac{3}{2}, \\[0.5em]
  -q = \dfrac{21}{4}.
\end{cases}$$`

Therefore, $\boldsymbol{ p = -\dfrac{3}{2} }$ and $\boldsymbol{ q = -\dfrac{21}{4} }.$

{{% /details %}}