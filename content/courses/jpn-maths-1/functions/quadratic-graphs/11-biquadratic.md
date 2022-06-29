---
title: "Minima and Maxima of Biquadratic Functions"
slug: biquadratic-function
description: "Finding the minimum and maximum of quartic functions that can be easily transformed into quadratic functions."

date: 2021-07-15 21:18:20.778 +1000

toc: true
type: docs
math: true
desmos: true

tags:
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1:
    name: Extrema of Biquadratic Functions
    parent: Quadratic Graphs
    weight: 21

weight: 31
---


## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Advanced Techniques for Factorising](../../../numbers-and-expressions/polynomials/advanced-factorising-2/)

{{% /details %}}

Do you remember [biquadratic polynomials](../../../numbers-and-expressions/polynomials/advanced-factorising-2/#biquadratic-polynomials)? They are quartic (degree 4) polynomials of the following form: $$ px^4 + qx^2 + r. $$ Because they are closely linked to quadratics, we can also calculate their minimum and maximum using our knowledge of quadratic functions. In this lesson, we will:
- find the minimum and maximum of biquadratic functions.
- find the minimum and maximum of quartic functions by substitution.

## Biquadratic Functions

You can easily convert biquadratic functions into quadratic functions by a simple substitution: $$ px^2 + qx^2 + r = pt^2 + qt + r, $$ where $t = x^2$. Therefore, we can treat them as a quadratic in $t$ and find their extrema. Note that there is a *natural domain* of $t\ge 0$, because $t$ is a square of a real number!

{{% hbox %}}

{{% note Example %}} Find the minimum of $y = x^4 - 6x^2 + 10$.

{{% note Solution %}} We substitute $\hl{ x^2 = t }$, where $t\ge 0$. Then
`\begin{align*}
  y &= t^2 - 6t + 10 \\
  &= t^2 - 6t + 9 + 1 \\
  &= (t-3)^2 + 1. \tag{$=\tcirc{1}$}
\end{align*}`
The vertex is $(3,1)$. Therefore, the function has the minimum of $\boldsymbol{ 1 }$ when $t=x^2=3$, or $\boldsymbol{ x = \pm \sqrt{3} }$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/extbiq-ex1.png" caption="Minimum of $y = t^2 - 6t + 10$." >}}

{{% /hbox %}}


## Quartic Functions and Substitution

Functions such as $$ y = (x^2-2x)^2 + 4(x^2-2x) + 1 $$ are not biquadratic, but we can use the same principle. For example, if we substitute $x^2 - 2x = t$, then
`\begin{align*}
  y &= (x^2-2x)^2 + 4(x^2-2x) + 1 \\
  &= t^2 +4t + 1,
\end{align*}`
so it becomes a parabola.

Just be careful of its domain since the possible values of $t = x^2 - 2x$ are not every real number!

{{% hbox %}}

{{% note Example %}}
Find the minimum and maximum of $y = (x^2-2x-1)^2 -6(x^2-2x-1) +5$ when $-1\le x \le 1$.

{{% note Solution %}}
We would like to let $\hl{ x^2 - 2x - 1 = t }$ to convert $y$ into a quadratic function of $t$. Let's first find the range of $t$:
`\begin{align*}
  t &= x^2 - 2x - 1 \\
  &= (x-1)^2 - 2, \tag{$=\tcirc{1}$}
\end{align*}`
and because $-1 \le x \le 1$, the minimum of $t$ is the vertex, $t=-2$ when $x=1$, and the maximum of $t$ is when $x=-1$, $ t = (-2)^2 - 2 = 2$.

Thus, the range of $t$ is $\hl{ -2 \le t \le 2 }$.

Next, we calculate the extrema of $y$ in terms of $t$:
{{% mn ex2 tips %}}
(1) Substituting $t = x^2 - 2x - 1$
{{% /mn %}}
`\begin{align*}
  y &= (x^2-2x-1)^2 -6(x^2-2x-1) +5 \\
  &= t^2 - 6t + 5 \tag{1} \\
  &= (t-3)^2 - 4. \tag{$=\tcirc{2}$}
\end{align*}`

Note the vertex is outside the domain. Hence the minimum of $y$ is when $t=2$, $$ y = (-1)^2 - 4 = -3, $$ and the maximum of $y$ is when $t = -2$, $$ y = (-5)^2 - 4 = 21. $$

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extbiq-ex2.png" caption="(Left) Range of $t = x^2 - 2x - 1$.<br>(Right) Range of $y = t^2 - 6t + 5$." >}}

We now know the extremum values of $y$ and we need to calculate when it occurs. The minimum occurs when $t=2$, and
`\begin{align*}
  & t = 2 \\
  & \iff x^2 - 2x - 1 = 2 \\
  & \iff x^2 - 2x - 3 = 0 \\
  & \iff x = 3, -1. 
\end{align*}`

Because $-1\le x \le 1$, $x = -1$. The maximum occurs when $t=-2$, and 
`\begin{align*}
  & t= - 2 \\
  & \iff x^2 - 2x - 1 = -2 \\
  & \iff x^2 - 2x + 1 = 0 \\
  & \iff x = 1. 
\end{align*}`

Therefore, we conclude $y = (x^2-2x-1)^2 -6(x^2-2x-1) +5 $ has:
`$$\begin{cases}
  \textbf{minimum of } \boldsymbol{ -3 } & \textbf{ when } \boldsymbol{ x=-1 }, \\
  \textbf{maximum of } \boldsymbol{ 21 } & \textbf{ when } \boldsymbol{ x=1 }.
\end{cases}$$`

{{% /hbox %}}


## Practice Questions

1. Find the minimum and maximum of the function $f(x) = -2x^4 - 8x^2$.

{{% details title="Answer" %}}

1. maximum of 0 when $x=0$, no minimum

{{% note Solution %}}
Substituting $x^2 = t$ gives
`\begin{align*}
  f(x) &= -2x^4 - 8x^2 \\
  &= -2t^2 - 8t \\
  &= -2 (t^2 + 4t) \\
  &= -2 \left\{ (t+2)^2 -4 \right\} \\
  &= -2(t+2)^2 + 8. \tag{$=\tcirc{1}$}
\end{align*}`

Because $t$ is a square of a real number, this function has an implied domain of $t \ge 0$. The vertex, $(-2, 8)$, is outside the domain, so the function is simply decreasing over the entire domain. 

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/extbiq-q1.png" caption="Maximum of $y = -2t^2 - 8t$." >}}

Hence, the maximum is $\boldsymbol{ f(t=0) = f(x=0) = 0 }$, and there is ***no minimum***.

{{% /details %}}

2. Find the minimum and maximum of the function $y = (x^2-6x)^2 + 12(x^2-6x) + 30$, where $1 \le x \le 5$.

{{% details title="Answer" %}}

2. minimum of -6 when $x=3\pm\sqrt{3}$, maximum of 3 when $x=3$

{{% note Solution %}}
Because $x^2-6x$ is repeating, we will first substitute $x^2 - 6x = t$. We need to first find the range of $t$ for $1 \le x \le 5$. If we complete the square,
`\begin{align*}
  t &= x^2 - 6x + 9 - 9 \\
  &= (x-3)^2 - 9, \tag{$=\tcirc{1}$}
\end{align*}`
so the minimum of $t$ is $-9$ when $x=3$, and the maximum of $t$ is $-5$ when $x=1$ or $5$. Thus $-9 \le t \le -5$.

Then, from the vertex form of $y$ in terms of $t$:
`\begin{align*}
  y &= t^2 + 12t + 30 \\
  &= (t+6)^2 - 6, \tag{$=\tcirc{2}$}
\end{align*}`
the vertex is inside the domain.

The minimum is hence $-6$ when $t=-6$. The maximum occurs at the farthest point from the vertex, so it is $3$ when $t=-9$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extbiq-q2.png" caption="(Left) Range of $t = x^2 - 6x$.<br>(Right) Range of $y = t^2 + 12t + 30$." >}}

There is one more left to find: on which values of $x$ does the function reach its extrema? When $t=-6$,
{{% mn q2 tips %}}
(1) From $\tcirc{1}$
{{% /mn %}}
`\begin{align*}
  & (x-3)^2 - 9 = -6 \tag{1} \\
  & \iff (x-3)^2 = 3 \\
  & \iff x-3 = \pm \sqrt{3} \\
  & \iff x = 3 \pm \sqrt{3}.
\end{align*}`

Hence $y$ reaches its minimum of ***-6*** when $\boldsymbol{ x=3\pm\sqrt{3} }$.

When $t=-9$,
`\begin{align*}
  & (x-3)^2 - 9 = -9 \\
  & \iff (x-3)^2 = 0 \\
  & \iff x-3 = 0 \\
  & \iff x = 3.
\end{align*}`

Hence $y$ reaches its maximum of ***3*** when $\boldsymbol{ x=3 }$.

{{% /details %}}