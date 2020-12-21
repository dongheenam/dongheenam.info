---
title: Simultaneous Inequalities
slug: simultaneous-inequalities
description: Solving simultaneous inequalities using a diagram.

date: 2020-10-01 08:51:34.622 +1000
lastMod: 2020-12-20 20:07:28.447 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - inequality
  - algebra

menu:
  math1-numbers:
    parent: Linear Inequalities
    name: Simultaneous Inequalities
    weight: 13

weight: 13
---

## Introduction

In this lesson, we will learn how to solve simultaneous linear inequalities.


## Solving Simultaneous Inequalities

Let's say we now have two conditions on $x$:

\begin{cases}
  x\ge 1, && \quad \cdots \tcirc{1} \\\\
  x\gt 2. && \quad \cdots \tcirc{2}
\end{cases}

What is the range of $x$ that satisfy both $\tcirc{1}$ and $\tcirc{2}$? Well, you can see from the diagram, the correct range is {{% mn 41 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex1.png" %}} The diagram representing the ranges of $x\ge 1$ and $x\gt 2$.
{{% /mn %}} $$ \boldsymbol{ x \gt 2 }. $$ One useful tip is to draw diagrams like the one on the right -- it makes finding the solution much easier!

{{% box %}}
{{% note example %}}
Solve the following simultaneous inequalities.
1. $\begin{cases} 5x+1\le 8(x+2) \\\\ 2x-3\lt 1-(x-5) \end{cases}$
2. $\begin{cases} x+7\lt 1-2x \\\\ 6x+2\ge 2 \end{cases}$

{{% note solution %}}

1. From the first inequality,

\begin{align}
  & 5x+1\le 8(x+2) \\\\
  \implies & 5x+1\le 8x+16 \\\\
  \implies & -3x \le 15 \\\\
  \implies & x \ge -5. && \quad \cdots \tcirc{1}
\end{align}

And from the second inequality,

\begin{align}
  & 2x-3\lt 1-(x-5) \\\\
  \implies & 2x-3 \lt 1-x+5 \\\\
  \implies & 2x-3 \lt 6-x \\\\
  \implies & 3x \lt 9 \\\\
  \implies & x \lt 3. && \quad \cdots \tcirc{2}
\end{align}

{{% mn 72 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex2.png" %}} The diagram representing the ranges.
{{% /mn %}} The range of $x$ that satisfies both $\tcirc{1}$ and $\tcirc{2}$ is $\boldsymbol{ -5\le x \lt 3 }$.

<br>

2. From the first inequality,

\begin{align}
  & x+7\lt 1-2x \\\\
  \implies & 3x\lt -6 \\\\
  \implies & x\lt -2. && \quad \cdots \tcirc{3}
\end{align}

And from the second inequality,

\begin{align}
  & 6x+2\ge 2 \\\\
  \implies & 6x\ge 0 \\\\
  \implies & x\ge 0. && \quad \cdots \tcirc{4}
\end{align}

{{% mn 92 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex3.png" %}} The diagram representing the ranges.
{{% /mn %}} From the diagram, we can see that there do not exist values of $x$ that both satisfy $\tcirc{3}$ and $\tcirc{4}$. Therefore, *there are no solutions*.

{{% /box %}}

<p></p>

{{% box %}}
{{% note example %}}
Solve the inequality $-2x+1<3x+4<2(3x-4)$.

{{% note solution %}}
The given inequality can be simply rewritten as

\begin{cases}
  -2x+1<3x+4, \\\\
  3x+4<2(3x-4).
\end{cases}

From the first inequality,

\begin{align}
  & -2x+1<3x+4 \\\\
  \implies & -5x < 3 \\\\
  \implies & x > -\frac{3}{5}. && \quad \cdots \tcirc{1}
\end{align}

And from the second inequality,

\begin{align}
  & 3x+4<2(3x-4) \\\\
  \implies & 3x+4<6x-8 \\\\
  \implies & 12 < 3x \\\\
  \implies & x>4. && \quad \cdots \tcirc{2}
\end{align}

{{% mn 131 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex4.png" %}} The diagram representing the ranges.
{{% /mn %}} Therefore, the range of $x$ that satisfies both $\tcirc{1}$ and $\tcirc{2}$ is $\boldsymbol{ x \gt 4 }$.

<hr style="visibility: hidden" />

{{% /box %}}

{{% details title="No solutions?" %}}
When you are solving inequalities, you sometimes end up two contradicting conditions, just like the previous example question. In this case, simply state there are *no solutions*. This is one of the few moments in mathematics when you can say I cannot answer the question and you are actually correct!

<p></p>

{{% /details %}}


## Practice Questions

1. Solve the following inequalities simultaneously.
    1. $\begin{cases} 2(1-x)\gt -6-x \\\\ 2x-3\gt-9 \end{cases}$
    2. $\begin{cases} 3(x-4)\le x-3 \\\\ 6x-2(x+1)\lt 10 \end{cases}$

{{% details title="Answer" %}}
1. 
    1. $-3 \lt x \lt 8$
    2. $x\lt 3$

{{% note solution %}}

$\text{a.} \quad$ From the first inequality,

\begin{align}
  & 2(1-x)\gt -6-x \\\\
  \implies & 2-2x\gt -6-x \\\\
  \implies & 8\gt x \\\\
  \implies & \boldsymbol{ x \lt 8 }. && \quad \cdots \tcirc{1}
\end{align}

And from the second inequality,

\begin{align}
  & 2x-3\gt-9 \\\\
  \implies & 2x\gt -6 \\\\
  \implies & \boldsymbol{ x \gt -3 }. && \quad \cdots \tcirc{2}
\end{align}

{{% mn q1a %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q1a.png" %}} The diagram representing the ranges.
{{% /mn %}} Therefore, the range of $x$ that satisfies both inequalities is $\boldsymbol{ -3 \lt x \lt 8 }$.

<br>

$\text{b.} \quad$ From the first inequality,

\begin{align}
  & 3(x-4)\le x-3 \\\\
  \implies & 3x-12 \le x-3 \\\\
  \implies & 2x\le 9 \\\\
  \implies & x\le\frac{9}{2}. && \quad \cdots \tcirc{3}
\end{align}

And from the second inequality,

\begin{align}
  & 6x-2(x+1)\lt 10 \\\\
  \implies & 6x-2x-2 \lt 10 \\\\
  \implies & 4x-2\lt 10 \\\\
  \implies & 4x\lt 12 \\\\
  \implies & x\lt 3. && \quad \cdots \tcirc{4}
\end{align}

{{% mn q1b %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q1b.png" %}} The diagram representing the ranges.
{{% /mn %}} Therefore, the range of $x$ that satisfies both inequalities is $\boldsymbol{ x\lt 3 }$.

<hr style="visibility: hidden" />

{{% /details %}}


2. Solve the following inequalities.
    1. $x+9\le3-5x\le2(x-2)$
    2. $\dfrac{4(x-2)}{3}<\dfrac{5}{2}x+2\le-3(1-x)$

{{% details title="Answer" %}}
2. 
    1. No solutions
    2. $x\ge 10$

{{% note solution %}}

$\text{a.} \quad$ We split the inequality into two parts like this: $$ \begin{cases} x+9\le3-5x, \\\\ 3-5x\le2(x-2). \end{cases} $$

Then, from $x+9\le3-5x$,

\begin{align}
  & x+9\le3-5x \\\\
  \implies & 6x\le -6 \\\\
  \implies & x\le -1, && \quad \cdots \tcirc{1}
\end{align}

and from $3-5x\le2(x-2)$,

\begin{align}
  & 3-5x\le2(x-2) \\\\
  \implies & 3-5x\le 2x-4 \\\\
  \implies & -7x \le -7 \\\\
  \implies & x \ge 1. && \quad \cdots \tcirc{2}
\end{align}

{{% mn q2a %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q2a.png" %}} The diagram representing the ranges.
{{% /mn %}} Therefore, there are *no solutions*.

<br>

$\text{b.} \quad$ Likewise, let's split the inequality into two parts as: $$ \begin{cases} \dfrac{4(x-2)}{3}<\dfrac{5}{2}x+2, \\\\ \dfrac{5}{2}x+2\le-3(1-x). \end{cases} $$

From the first inequality,

{{% mn q2b tips %}}
$(1)$ Multiplying both sides by the least common multiple, $6$
{{% /mn %}}
\begin{align}
  & \dfrac{4(x-2)}{3}<\dfrac{5}{2}x+2 \\\\
  \implies & 8(x-2)< 15x + 12 \tag{1} \\\\
  \implies & 8x - 16 < 15x + 12 \\\\
  \implies & -7x < 28 \\\\
  \implies & x > -4. && \cdots \tcirc{3}
\end{align}

And from the second inequality,

{{% mn q2b2 tips %}}
$(2)$ Multiplying both sides by $2$
{{% /mn %}}
\begin{align}
  & \dfrac{5}{2}x+2\le-3(1-x) \\\\
  \implies & 5x + 4 \le -6(1-x) \tag{2} \\\\
  \implies & 5x + 4 \le -6 + 6x \\\\
  \implies & 10 \le x \\\\
  \implies & x \ge 10. && \quad \cdots \tcirc{4}
\end{align}

{{% mn q2b3 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q2b.png" %}} Therefore, the range of $x$ that satisfies both inequalities is $\boldsymbol{ x\ge 10 }$.

<hr style="visibility: hidden" />

{{% /details %}}

