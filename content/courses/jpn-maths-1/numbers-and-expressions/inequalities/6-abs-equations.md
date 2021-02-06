---
title: Linear Equations with Absolute Values
slug: absolute-value-equations
description: Solving linear equations with variables inside an absolute value symbol.

date: 2021-01-23 21:53:15.779 +1100
lastMod: 2021-01-23 21:53:15.779 +1100

type: docs
toc: true
math: true
draft: true

tags:
  - inequality
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

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Number Line and Absolute Values](../../numbers/absolute-values)

{{% /details %}}

## Introduction

Now that we are pretty familiar with the concept of inequalities, we will look into solving linear equations and inequalities with absolute values! In this lesson, we will learn:
- How to solve linear equations with single or multiple absolute value symbols.


## Removing Absolute Value Symbol

Let's remember the definition of absolute values:{{% sn abs %}}Please refer to [this lesson](../../numbers/absolute-values) if you need some revision on absolute values.{{% /sn %}}

{{% box %}}
{{% note Definition %}} For any real number $A$,
\begin{align}
  |A| = \begin{cases} A~ &\text{if $A\ge 0$,} \\\\ -A~ &\text{if $A<0$.} \end{cases}
\end{align}

{{% /box %}}

So, when removing the absolute value symbol, we need to think about two possible cases: when the inside expression is positive, and when the inside expression is negative.

{{% box %}}

{{% note Example %}} Solve the following equations.
1. $|x - 1| = 2$
2. $|x+4| = 5x$

{{% note Solution %}}

1. Because $x-1=0$ when $x=1$, we will find a solution when $x\ge 1$, and then find another solution when $x<1$.
\begin{align}
  \text{(i). When $x\ge 1$,}
\end{align}
$\hl{x-1=2}$, then $x=3$.
\begin{align}
  \text{(ii). When $x< 1$,}
\end{align}
$\hl{x-1=-2}$, then $x=-1$.<br><br>
Therefore, $\boldsymbol{x = -1, 3}$.{{% sn chk1 %}}When $x=-1$, $|x-1|$ $=|-2|$ $=2$. When $x=3$, $|x-1|$ $=|2|$ $=2$.{{% /sn %}}

<br>

2. $x+4 = 0$ When $x=-4$, so we will set two cases based on this value.
\begin{align}
  \text{(i).}~ & \text{When $x\ge -4$,}
\end{align}
\begin{align}
  & \hl{x + 4 = 5x} \\\\
  \implies& 4x = 4 \\\\
  \implies& x = 1.
\end{align}
\begin{align}
  \text{(ii).}~ & \text{When $x< -4$,}
\end{align}
\begin{align}
  & \hl{x + 4 = -5x} \\\\
  \implies& 6x = -4 \\\\
  \implies& x = -\dfrac{2}{3}.
\end{align}
Note we assumed $x<-4$, but $-\dfrac{2}{3}$ is not in this range. Thus, $x=-\dfrac{2}{3}$ *cannot be a solution.*{{% sn chk2 %}}When $x=-\dfrac{2}{3}$, $|x+4|=5x$ $\implies \left|\dfrac{10}{3} \right| = -\dfrac{10}{3}$. Because the left-hand side is positive and the right-hand side is negative, this cannot be true.{{% /sn %}}<br><br>
Therefore, from $\text{(i)}$ and $\text{(ii)}$, $\boldsymbol{ x = 1 }$.

{{% /box %}}

{{% details title="Alternative Solution for solving $|x-1|=2$" %}}

Because the value of $|A|$ is either $A$ or $-A$, you can use the following shortcut:
\begin{align}
  \text{for $c>0$,} \quad \boldsymbol{ |A| = c \implies A = \pm c. }
\end{align}
Thus, for the equation $|x-1|=2$,
\begin{align}
  & |x-1| = 2 \\\\
  \implies & \hl{x-1 = \pm 2} \\\\
  \implies & x = 1 \pm 2 \\\\
  \implies & \boldsymbol{ x = 3,~-1 }.
\end{align}

This is yet another solution. The definition of $|a-b|$ is the *distance* between $a$ and $b$. So, finding $x$ that satisfies $|x-1| = 2$ is to find numbers that are exactly $2$ units away from $1$. From $1$, if you move $2$ units to the right, you arrive at $3$, and if you move $2$ units to the left, you arrive at $-1$. Therefore, the answers are $-1$ and $3$.

{{% /details %}}

{{% note Questions %}} Attempt [Practice Question](#practice-questions) 1 before moving on.

## Equations with Multiple Absolute Values

If there are more than one absolute values, you need to separate the cases for each break point where one of the inside expressions change its sign.{{% sn mult %}}Also have a look at [Removing Square Roots](../../numbers/removing-roots-2/#square-root-of-a-polynomial).{{% /sn %}}

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-1.jpg" caption="Three possible ranges of $x$ for the equation $|x+2| + |x-1| = 4$" %}}

Then, we can proceed to solve the linear equations for the three different cases.

{{% box %}}

{{% note Example %}} Solve $|x+2| + |x-1| = 4$.

{{% note Solution %}} 

$\text{(i). }$ When $x<-2$, the equation becomes $\hl{-(x+2)-(x-1) = 4}$. Then
\begin{align}
  & -(x+2)-(x-1) = 4 \\\\
  \implies & -2x -1 = 4 \\\\
  \implies & x = -\dfrac{5}{2}.
\end{align}

$\text{(ii). }$ When $-2\le x < 1$, the equation becomes $\hl{(x+2)-(x-1) = 4}$. Then
\begin{align}
  & (x+2)-(x-1) = 4 \\\\
  \implies & 3 = 4.
\end{align}
Therefore there are *no solutions*.

$\text{(iii). }$ When $x \ge 1$, the equation becomes $\hl{(x+2)+(x-1) = 4}$. Then
\begin{align}
  & (x+2)+(x-1) = 4 \\\\
  \implies & 2x + 1 = 4 \\\\
  \implies & x = \dfrac{3}{2}.
\end{align}

From cases $\text{(i)}$ to $\text{(iii)}$, the solutions are $\boldsymbol{ x = \dfrac{3}{2},~-\dfrac{5}{2} }.$

{{% /box %}}

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

$\hspace{0.5em} \text{a.} \quad$ The sign of $x+5$ changes at $x=-5$, so we look at the following two possibilities:{{% sn q1 %}}We can also use the fact that $|x+5| = 3$ then $x+5 = \pm 3$.{{% /sn %}}

$\text{(i). }$ When $x\ge -5$, $x + 5 = 3$, so $x = -2$.

$\text{(ii). }$ When $x< -5$, $x + 5 = -3$, so $x = -8$.

Therefore, from $\text{(i)}$ and $\text{(ii)}$, $\boldsymbol{ x = -8,~-2 }$.<br>

$\hspace{0.5em} \text{b.} \quad$ The sign of $3x-2$ changes at $x=\dfrac{2}{3}$, so we look at the following two possibilities:{{% sn q1 %}}We can also let $3x - 2 = \pm 6$.{{% /sn %}}

$\text{(i). }$ When $x\ge \dfrac{2}{3}$, $3x - 2 = 6$, so $x = \dfrac{8}{3}$.

$\text{(ii). }$ When $x< \dfrac{2}{3}$, $3x - 2 = -6$, so $x = -\dfrac{4}{3}$.

Therefore, from $\text{(i)}$ and $\text{(ii)}$, $\boldsymbol{ x = -\dfrac{4}{3},~\dfrac{8}{3} }$.<br>

$\hspace{0.5em} \text{c.} \quad$ The sign of $x-1$ changes at $x=1$, so we look at when $x\ge 1$, and then when $x<1$.

$\text{(i). }$ When $x\ge 1$, $2(x-1) = 3x$, then
\begin{align}
  & 2x - 2 = 3x \\\\
  \implies & x = -2.
\end{align}
Note that $x=-2$ is *not a solution*, because we already assumed $x\ge 1$.

$\text{(ii). }$ When $x< 1$, $-2(x-1) = 3x$, then
\begin{align}
  & -2x + 2 = 3x \\\\
  \implies & 5x = 2 \\\\
  \implies & x = \dfrac{2}{5}.
\end{align}

Therefore, from $\text{(i)}$ and $\text{(ii)}$, $\boldsymbol{ x = \dfrac{2}{5}. }$

{{% /details %}}