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
  x\ge 1, && \qdcirc{1} \\\\
  x\gt 2. && \qdcirc{2}
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

\begin{align*}
  & 5x+1\le 8(x+2) \\\\
  \iff & 5x+1\le 8x+16 \\\\
  \iff & -3x \le 15 \\\\
  \iff & x \ge -5. && \qdcirc{1}
\end{align*}

And from the second inequality,

\begin{align*}
  & 2x-3\lt 1-(x-5) \\\\
  \iff & 2x-3 \lt 1-x+5 \\\\
  \iff & 2x-3 \lt 6-x \\\\
  \iff & 3x \lt 9 \\\\
  \iff & x \lt 3. && \qdcirc{2}
\end{align*}

{{% mn 72 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex2.png" %}} The diagram representing $x\ge -5$ and $x<3$.
{{% /mn %}} The range of $x$ that satisfies both $\tcirc{1}$ and $\tcirc{2}$ is $\boldsymbol{ -5\le x \lt 3 }$.

<br>

2. From the first inequality,

\begin{align*}
  & x+7\lt 1-2x \\\\
  \iff & 3x\lt -6 \\\\
  \iff & x\lt -2. && \qdcirc{3}
\end{align*}

And from the second inequality,

\begin{align*}
  & 6x+2\ge 2 \\\\
  \iff & 6x\ge 0 \\\\
  \iff & x\ge 0. && \qdcirc{4}
\end{align*}

{{% mn 92 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex3.png" %}} The diagram representing $x \lt -2$ and $x\ge 0$.
{{% /mn %}} From the diagram, we can see that there are no values of $x$ that both satisfy $\tcirc{3}$ and $\tcirc{4}$. Therefore, *there are no solutions*.

{{% /box %}}



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

\begin{align*}
  & -2x+1<3x+4 \\\\
  \iff & -5x < 3 \\\\
  \iff & x > -\frac{3}{5}. && \qdcirc{1}
\end{align*}

And from the second inequality,

\begin{align*}
  & 3x+4<2(3x-4) \\\\
  \iff & 3x+4<6x-8 \\\\
  \iff & 12 < 3x \\\\
  \iff & x>4. && \qdcirc{2}
\end{align*}

{{% mn 131 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-ex4.png" %}} The diagram representing $x > -\dfrac{3}{5}$ and $x>4$.
{{% /mn %}} Therefore, the range of $x$ that satisfies both $\tcirc{1}$ and $\tcirc{2}$ is $\boldsymbol{ x \gt 4 }$.

<hr style="visibility: hidden" />

{{% /box %}}

{{% details title="No solutions?" %}}
When you solve inequalities, you sometimes end up with two contradicting conditions, just like the previous example question. In this case, simply state there are *no solutions*. This is one of the few moments in mathematics when you can say I cannot answer the question, and you are actually correct!



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

\begin{align*}
  & 2(1-x)\gt -6-x \\\\
  \iff & 2-2x\gt -6-x \\\\
  \iff & 8\gt x \\\\
  \iff & \boldsymbol{ x \lt 8 }. && \qdcirc{1}
\end{align*}

And from the second inequality,

\begin{align*}
  & 2x-3\gt-9 \\\\
  \iff & 2x\gt -6 \\\\
  \iff & \boldsymbol{ x \gt -3 }. && \qdcirc{2}
\end{align*}

{{% mn q1a %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q1a.png" %}} The diagram representing $x \lt 8$ and $x \gt -3$.
{{% /mn %}} Therefore, the range of $x$ that satisfies both inequalities is $\boldsymbol{ -3 \lt x \lt 8 }$.

<br>

$\text{b.} \quad$ From the first inequality,

\begin{align*}
  & 3(x-4)\le x-3 \\\\
  \iff & 3x-12 \le x-3 \\\\
  \iff & 2x\le 9 \\\\
  \iff & x\le\frac{9}{2}. && \qdcirc{3}
\end{align*}

And from the second inequality,

\begin{align*}
  & 6x-2(x+1)\lt 10 \\\\
  \iff & 6x-2x-2 \lt 10 \\\\
  \iff & 4x-2\lt 10 \\\\
  \iff & 4x\lt 12 \\\\
  \iff & x\lt 3. && \qdcirc{4}
\end{align*}

{{% mn q1b %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q1b.png" %}} The diagram representing $x\le\dfrac{9}{2}$ and $x\lt 3$.
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

\begin{align*}
  & x+9\le3-5x \\\\
  \iff & 6x\le -6 \\\\
  \iff & x\le -1, && \qdcirc{1}
\end{align*}

and from $3-5x\le2(x-2)$,

\begin{align*}
  & 3-5x\le2(x-2) \\\\
  \iff & 3-5x\le 2x-4 \\\\
  \iff & -7x \le -7 \\\\
  \iff & x \ge 1. && \qdcirc{2}
\end{align*}

{{% mn q2a %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q2a.png" %}} The diagram representing $x\le -1$ and $x\ge 1$.
{{% /mn %}} Therefore, there are *no solutions*.

<br>

$\text{b.} \quad$ Likewise, let's split the inequality into two parts as: $$ \begin{cases} \dfrac{4(x-2)}{3}<\dfrac{5}{2}x+2, \\\\ \dfrac{5}{2}x+2\le-3(1-x). \end{cases} $$

From the first inequality,

{{% mn q2b tips %}}
$(1)$ Multiplying both sides by the least common multiple, $6$
{{% /mn %}}
\begin{align*}
  & \dfrac{4(x-2)}{3}<\dfrac{5}{2}x+2 \\\\
  \iff & 8(x-2)< 15x + 12 \tag{1} \\\\
  \iff & 8x - 16 < 15x + 12 \\\\
  \iff & -7x < 28 \\\\
  \iff & x > -4. && \qdcirc{3}
\end{align*}

And from the second inequality,

{{% mn q2b2 tips %}}
$(2)$ Multiplying both sides by $2$
{{% /mn %}}
\begin{align*}
  & \dfrac{5}{2}x+2\le-3(1-x) \\\\
  \iff & 5x + 4 \le -6(1-x) \tag{2} \\\\
  \iff & 5x + 4 \le -6 + 6x \\\\
  \iff & 10 \le x \\\\
  \iff & x \ge 10. && \qdcirc{4}
\end{align*}

{{% mn q2b3 %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-sim-q2b.png" %}} Diagram representing $x>-4$ and $x\ge 10$.{{% /mn %}} Therefore, the range of $x$ that satisfies both inequalities is $\boldsymbol{ x\ge 10 }$.

<hr style="visibility: hidden" />

{{% /details %}}

