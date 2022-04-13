---
title: Linear Equations with Absolute Values
slug: absolute-value-equations
description: Solving linear equations with variables inside an absolute value symbol.

date: 2021-02-07 16:54:29.540 +1100
lastMod: 2021-02-07 16:54:29.540 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - linear equation
  - absolute value
  - algebra

menu:
  math1-numbers:
    parent: Linear Inequalities
    name: Equations with Absolute Values
    weight: 16

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 16
---


## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Number Line and Absolute Values](../../numbers/absolute-values)

{{% /details %}}

Now that we are pretty familiar with inequalities, we will look into solving linear equations and inequalities with absolute values! In this lesson, we will learn:
- How to solve linear equations with single or multiple absolute value symbols.


## Removing Absolute Value Symbol

Let's remember the definition of absolute values:{{% sn abs %}}Please refer to [this lesson](../../numbers/absolute-values) if you need some revision on absolute values.{{% /sn %}}

{{% hbox %}}
{{% note Definition %}} For any real number $A$,
`\begin{align*}
  |A| = \begin{cases} A~ &\text{if $A\ge 0$,} \\ -A~ &\text{if $A<0$.} \end{cases}
\end{align*}`

{{% /hbox %}}

So, when removing the absolute value symbol, we need to think about two possible cases: when the inside expression is positive, and the inside expression is negative.

{{% hbox %}}

{{% note Example %}} Solve the following equations.
1. $|x - 1| = 2$
2. $|x+4| = 5x$

{{% note Solution %}}

{{% enum 1 %}}
Because $x-1=0$ when $x=1$, we will find a solution when $x\ge 1$, and then find another solution when $x<1$.

{{% ol i %}}
{{% li %}}
When $x\ge 1$, $\hl{x-1} = 2$, then $x=3$.
{{% /li %}}
{{% li %}}
When $x\le 1$, $\hl{x-1}=-2$, then $x=-1$.
{{% /li %}}
{{% /ol %}}

Therefore, $\boldsymbol{x = -1, 3}$.{{% sn chk1 %}}When $x=-1$, $|x-1|$ $=|-2|$ $=2$. When $x=3$, $|x-1|$ $=|2|$ $=2$.{{% /sn %}}

{{% enum 2 %}}
$x+4 = 0$ When $x=-4$, so we will set two cases based on this value.

{{% ol i %}}
{{% li %}}
When When $x\ge -4$,
`\begin{align*}
  & \hl{x + 4 = 5x} \\
  \iff& 4x = 4 \\
  \iff& x = 1.
\end{align*}`
{{% /li %}}
{{% li %}}
When $x< -4$,
`\begin{align*}
  & \hl{x + 4 = -5x} \\
  \iff& 6x = -4 \\
  \iff& x = -\dfrac{2}{3}.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Note we assumed $x<-4$, but $-\dfrac{2}{3}$ is not in this range. Thus, $x=-\dfrac{2}{3}$ ***cannot be a solution.***{{% sn chk2 %}}When $x=-\dfrac{2}{3}$, $|x+4|=5x$ $\iff \left|\dfrac{10}{3} \right| = -\dfrac{10}{3}$. Because the left-hand side is positive and the right-hand side is negative, this cannot be true.{{% /sn %}}

Therefore, from {{% enum i %}} and {{% enum ii %}}, $\boldsymbol{ x = 1 }$.

{{% hr %}}

{{% /hbox %}}

{{% details title="Alternative Solution for solving $|x-1|=2$" %}}

Because the value of $|A|$ is either $A$ or $-A$, you can use the following shortcut:
`\begin{align*}
  \text{for $c>0$,} \quad \boldsymbol{ |A| = c \iff A = \pm c. }
\end{align*}`

Thus, for the equation $|x-1|=2$,
`\begin{align*}
  & |x-1| = 2 \\
  & \iff \hl{x-1 = \pm 2} \\
  & \iff x = 1 \pm 2 \\
  & \iff \boldsymbol{ x = 3,~-1 }.
\end{align*}`

This is yet another solution. The definition of $|a-b|$ is the ***distance*** between $a$ and $b$. So, finding $x$ that satisfies $|x-1| = 2$ is to find numbers that are exactly 2 units away from 1. From $1$, if you move 2 units to the right, you arrive at 3, and if you move 2 units to the left, you arrive at -1. Therefore, the answers are -1 and 3.

{{% /details %}}

Attempt [Practice Question](#practice-questions) 1 before moving on.

## Equations with Multiple Absolute Values

If there are more than one absolute values, you need to separate the cases for each breakpoint where one of the inside expressions change its sign.{{% sn mult %}}Also have a look at [Removing Square Roots](../../numbers/removing-roots-2/#square-root-of-a-polynomial).{{% /sn %}}

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-1.jpg" caption="Three possible ranges of $x$ for the equation $|x+2| + |x-1| = 4$" %}}

Then, we can proceed to solve the linear equations for the three different cases.

{{% hbox %}}

{{% note Example %}} Solve $|x+2| + |x-1| = 4$.

{{% note Solution %}} 

{{% ol  %}}
{{% li %}}
When $x<-2$, the equation becomes $\hl{-(x+2)-(x-1) = 4}$. Then
`\begin{align*}
  & -(x+2)-(x-1) = 4 \\
  & \iff -2x -1 = 4 \\
  & \iff x = -\dfrac{5}{2}.
\end{align*}`
{{% /li %}}
{{% li %}}
When $-2\le x < 1$, the equation becomes $\hl{(x+2)-(x-1) = 4}$. Then
`\begin{align*}
  & (x+2)-(x-1) = 4 \\
  & \iff 3 = 4.
\end{align*}`
Therefore there are ***no solutions***.
{{% /li %}}
{{% li %}}
When $x \ge 1$, the equation becomes $\hl{(x+2)+(x-1) = 4}$. Then
`\begin{align*}
  & (x+2)+(x-1) = 4 \\
  & \iff 2x + 1 = 4 \\
  & \iff x = \dfrac{3}{2}.
\end{align*}`
{{% /li %}}
{{% /ol %}}

From cases {{% enum i %}} to {{% enum iii %}}, the solutions are $\boldsymbol{ x = \dfrac{3}{2},~-\dfrac{5}{2} }.$

{{% /hbox %}}

Below is a slightly different example. The principle is still the same: divide the cases!

{{% hbox %}}
{{% note Example %}} Solve $\big| |x-4| - 3\big| = 2$.{{% mn refex2 refs %}}From Tokyo Univ. of Pharm. and Life Sci.{{% /mn %}}

{{% note Solution %}} We will first remove the inner absolute symbol.

{{% ol i %}}
{{% li %}}
When $x\ge 4$, the equation becomes $| \hl{(x-4)} -3 | = 2$. Then
`\begin{align*}
  &|x-7| = 2 \\
  & \iff x-7 = \pm 2 \\
  & \iff x = 7 \pm 2,
\end{align*}`
which implies $x = 9$ or $5$. Note that both solutions satisfy our assumption of $x\ge 4$.
{{% /li %}}
{{% li %}}
When $x< 4$, the equation becomes $| \hl{-(x-4)} -3 | = 2$. Then
`\begin{align*}
  &|-x + 4 - 3| = 2 \\
  & \iff |-x+1| = 2 \\
  & \iff -x+1 = \pm 2 \\
  & \iff x = 1 \mp 2,
\end{align*}`
which implies $ x = -1$ or $3$. Note that both solutions satisfy $x<4$.
{{% /li %}}
{{% /ol %}}

From {{% enum i %}} and {{% enum ii %}}, the solutions are $\\boldsymbol{ x = -1,~ 3,~ 5,~ 9 }.$

***Alternative solution.*** We can also remove the outer absolute symbol first:
`\begin{align*}
  & \big| |x-4| - 3\big| = 2 \\
  & \iff |x-4| - 3 = \pm 2 \\
  & \iff |x-4| = 3 \pm 2 \\
  & \iff |x-4| = \text{$5$ or $1$}.
\end{align*}`

Now, if $|x-4|=5$,
`\begin{align*}
  & x - 4 = \pm 5 \\
  & \iff x = 4 \pm 5 \\
  & \iff x = \text{$9$ or $-1$},
\end{align*}`

and if $|x-4|=1$,
`\begin{align*}
  & x - 4 = \pm 1 \\
  & \iff x = 4 \pm 1 \\
  & \iff x = \text{$5$ or $3$}.
\end{align*}`

Therefore, the solutions are $\boldsymbol{ x = -1,~ 3,~ 5,~ 9 }.$


{{% /hbox %}}

## Practice Questions

1. Solve the following equations.
    1. $|x+5| = 3$
    2. $|3x-2| = 6$
    3. $2|x-1| = 3x$

{{% details title="Answer" %}}

1. 
    1. $x = -8,~-2$
    2. $x = -\dfrac{4}{3},~\dfrac{8}{3}$
    3. $x = \dfrac{2}{5}$

{{% note Solution %}}

{{% enum a %}}
The sign of $x+5$ changes at $x=-5$, so we look at the following two possibilities:{{% sn q1 %}}We can also use the fact that $|x+5| = 3$ then $x+5 = \pm 3$.{{% /sn %}}

{{% ol i %}}
{{% li %}}
When $x\ge -5$, $x + 5 = 3$, so $x = -2$.
{{% /li %}}
{{% li %}}
When $x< -5$, $x + 5 = -3$, so $x = -8$.
{{% /li %}}
{{% /ol %}}

Therefore, from {{% enum i %}} and {{% enum ii %}}, $\boldsymbol{ x = -8,~-2 }$.

{{% enum b %}}
The sign of $3x-2$ changes at $x=\dfrac{2}{3}$, so we look at the following two possibilities:{{% sn q1 %}}We can also let $3x - 2 = \pm 6$.{{% /sn %}}

{{% ol i %}}
{{% li %}}
When $x\ge \dfrac{2}{3}$, $3x - 2 = 6$, so $x = \dfrac{8}{3}$.
{{% /li %}}
{{% li %}}
When $x< \dfrac{2}{3}$, $3x - 2 = -6$, so $x = -\dfrac{4}{3}$.
{{% /li %}}
{{% /ol %}}

Therefore, from {{% enum i %}} and {{% enum ii %}}, $\boldsymbol{ x = -\dfrac{4}{3},~\dfrac{8}{3} }$.

{{% enum c %}}
The sign of $x-1$ changes at $x=1$, so we look at when $x\ge 1$, and then when $x<1$.

{{% ol i %}}
{{% li %}}
When $x\ge 1$, $2(x-1) = 3x$, then
`\begin{align*}
  & 2x - 2 = 3x \\
  & \iff x = -2.
\end{align*}`

Note that $x=-2$ is ***not a solution***, because we already assumed $x\ge 1$.
{{% /li %}}
{{% li %}}
When $x< 1$, $-2(x-1) = 3x$, then
`\begin{align*}
  & -2x + 2 = 3x \\
  & \iff 5x = 2 \\
  & \iff x = \dfrac{2}{5}.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Therefore, from {{% enum i %}} and {{% enum ii %}}, $\boldsymbol{ x = \dfrac{2}{5}. }$

{{% /details %}}

2. Solve the following equations.
    1. $2|x+1|-|x-3| = 2x$
    2. $\big||x-1|-2\big|-3 = 0$

{{% details title="Answer" %}}
2. 
    1. $ x = -\dfrac{5}{3},~1,~5 $
    2. $ x = -4,~6 $

{{% note Solution %}} 

{{% enum a %}}
The expressions inside the absolute symbols change their signs at $x=-1$ and $x=3$.

{{% ol i %}}
{{% li %}}
When $x < -1$, $ \hl{-2(x+1)+(x-3)} = 2x $,
`\begin{align*}
  & -2x - 2 + x - 3 = 2x \\
  & \iff 3x = -5 \\
  & \iff x = -\dfrac{5}{3}.
\end{align*}`

This solution satisfies the condition $x < -1$.
{{% /li %}}
{{% li %}}
When $-1 \le x < 3$, $ 2(x+1)\hl{+(x-3)} = 2x $,
`\begin{align*}
  & 2x + 2 + x - 3 = 2x \\
  & \iff x = 1.
\end{align*}`

This solution satisfies the condition $-1 \le x < 3$.
{{% /li %}}
{{% li %}}
When $x \ge 3$, $ 2(x+1)-(x-3) = 2x $,
`\begin{align*}
  & 2x + 2 -x + 3 = 2x \\
  & \iff x = 5.
\end{align*}`

This solution satisfies the condition $x \ge 3$.
{{% /li %}}
{{% /ol %}}

Therefore, the solutions are $\boldsymbol{ x = -\dfrac{5}{3},~1,~5 }.$

{{% enum b %}} If we remove the outer absolute symbol first,

`\begin{align*}
  & \big||x-1|-2\big|-3 = 0 \\
  & \iff \big||x-1|-2\big| = 3 \\
  & \iff |x-1| -2 = \pm 3 \\
  & \iff |x-1| = 2 \pm 3 \\
  & \iff |x-1| = \text{$5$ or $-1$}.
\end{align*}`

Because the absolute value of a number cannot be less than zero, the only possibility is $|x-1| = 5$. Then
`\begin{align*}
  & x-1 = \pm 5 \\
  & \iff x = 1 \pm 5 \\
  & \iff x = \text{$6$ or $-4$}.
\end{align*}`

Therefore, the solutions are $\boldsymbol{ x = -4,~6 }.$

***Alternative solution.***
We can also remove the inner absolute value symbol first:

{{% ol i %}}
{{% li %}}
When $x < 1$, $ \big| \hl{-(x-1)} - 2 \big| -3 = 0 $, then
`\begin{align*}
  & | -x+1 -2 | = 3 \\
  & \iff | -x -1 | = 3 \\
  & \iff -x -1 = \pm 3 \\
  & \iff x = -1 \mp -3 \\
  & \iff x = \text{$2$ or $-4$.}
\end{align*}`

Because we assumed $x<1$, the only valid solution is $x=-4$.
{{% /li %}}
{{% li %}}
When $x \ge 1$, $ \big| \hl{(x-1)} - 2 \big| -3 = 0 $, then
`\begin{align*}
  & | x-1 -2 | = 3 \\
  & \iff |x-3| = 3 \\
  & \iff x-3 = \pm 3 \\
  & \iff x = 3 \pm 3 \\
  & \iff x = \text{$6$ or $0$.}
\end{align*}`

Because we assumed $x\ge 1$, the only valid solution is $x=6$.
{{% /li %}}
{{% /ol %}}

Therefore, from {{% enum i %}} and {{% enum ii %}}, the solutions are $\boldsymbol{ x = -4,~6 }.$

{{% /details %}}