---
title: Finding Integer Solutions
slug: integer-solutions
description: Solving linear inequalities in the integer domain.

date: 2020-10-03 07:23:43.103 +1000
lastMod: 2020-12-21 21:56:52.651 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - inequality
  - integer
  - algebra

menu:
  math1:
    parent: Linear Inequalities
    name: Finding Integer Solutions
    weight: 14

weight: 14
---

## Introduction

Previously we discussed how to [solve inequalities](../solving-inequalities) without any conditions, which means solving them for all real numbers. However, what would be different if the domain is a smaller set, for example, the set of integers or natural numbers? In this lesson, we will learn:

- How to solve linear inequalities in the integer domain.
- Problem-solving techniques that involve solving integer inequalities.


## Finding Integer Solutions

To solve an inequality for integers, we need first to find the solution of an inequality like usual, and then count the integers that lie inside the solution. The second step is pretty straightforward -- for example, can you list all integers greater than $-2$ but less than $3$?  $$ \text{$x$ is an integer and $-2<x<3$} \iff x = -1,\\, 0,\\, 1,\\, \text{or }\\, 2. $$

{{% details title="Inequality signs" %}}

Be careful of the inequality signs! The range $x>7$ does not include $7$, because $x$ is strictly greater than $7$: $$ x>7 \iff  x = 8,\\, 9,\\, 10,\\, \cdots. $$ On the other hand, $x\ge 7$ does include $7$: $$ x\ge 7 \iff x = 7,\\, 8,\\, 9,\\, \cdots. $$ This sounds quite obvious, but it gets easily confusing when you solve more advanced questions.


{{% /details %}}

{{% hbox %}}
{{% note Example %}}
Find all natural numbers $n$ that satisfy $5n-7<2n+5$.

{{% note Solution %}}
We will first solve $5n-7<2n+5$:
\begin{align*}
  & 5n-7<2n+5 \cr
  & \iff 3n < 12 \cr
  & \iff n < 4.
\end{align*}

Because $n$ is a natural number, the values of $n$ that satisfy $n<4$ are $\\textbf{1, 2 and 3}$.

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 and 2 before moving on.


## Using the Integer Solutions

In the previous example, we found three natural numbers that satisfy $x<4$. Now, let's flip this around: which inequalities have exactly three natural number solutions?

{{% mn 71 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-ex1.png" %}} The possible range of $k$.
{{% /mn %}} Say the inequality has the form $x<k$, where we can move $k$ around. If $k$ is even slightly bigger than $4$, then $4$ ends up being included in the solution, so the upper limit of $k$ is 4. On the other hand, if $k=3$, then there are only two solutions, so $k$ cannot be smaller or equal to 3. Therefore, we find the range of $k$ must be $$ 3 \lt k \le 4. $$

Here are more examples to have a look!

{{% hbox %}}
{{% note Example %}}
If the largest integer that satisfies the inequality $x<\dfrac{3a-2}{4}$ is 5, find the range of $a$.

{{% note Solution %}}
{{% mn 83 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-ex2.png" %}} The possible range for $x$, as a function of $a$.
{{% /mn %}} Because 5 is included, $\dfrac{3a-2}{4}$ cannot be 5, but it may be 6. Thus the possible range of $a$ is $$ 5\lt \dfrac{3a-2}{4} \le 6. $$

Solving this inequality gives
\begin{align*}
  & 5\lt \dfrac{3a-2}{4} \le 6 \cr
  & \iff 20 \lt 3a-2 \le 24 \cr
  & \iff 22 \lt 3a \le 26 \cr
  & \iff \boldsymbol{ \frac{22}{3} \lt a \le \frac{26}{3} }.
\end{align*}

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}}
Suppose $k$ is an integer greater than 2, and an integer $x$ satisfies $5-x\le 4x\lt 2x+k$.
  1. Find the range of $x$ in terms of $k$.
  2. When there are exactly five possible values of $x$, find the range of $k$.

{{% note Solution %}}

{{% enum 1 %}}
We can first split the inequality into two parts:

$$\begin{cases}
  5-x\le 4x, \cr
  4x\lt 2x+k,
\end{cases}$$

and solve the inequalities one by one. The first inequality gives
\begin{align*}
  & 5-x\le 4x \cr
  & \iff 5 \le 5x \cr
  & \iff 1 \le x, \tag{$ \cdots\tcirc{1}$}
\end{align*}

and the second inequality gives
\begin{align*}
  & 4x\lt 2x+k \cr
  & \iff 2x \lt k \cr
  & \iff x \lt \frac{k}{2}, \tag{$ \cdots\tcirc{2}$}
\end{align*}

{{% mn 129 %}}{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-ex3.png" %}} The possible range for $x$, as a function of $k$.{{% /mn %}} Because $k>2$ from the question, $\dfrac{k}{2}>1$. Thus the range of $x$ is $\boldsymbol{ 1 \le x \lt \dfrac{k}{2} }$.

{{% enum 2 %}}
Since $x\ge 1$ from $\tcirc{1}$, the solutions of $x$ can should be 1, 2, 3, 4 and 5. Thus, $$ 5 \lt \dfrac{k}{2} \le 6, $$ which leads to $\boldsymbol{ 10 \lt k \le 12 }$.

{{% /hbox %}}


## Practice Questions

1. What is the largest integer that satisfies $4(x-2)+5(6-x)>7?$

{{% details title="Answer" %}}
1. 14

{{% note Solution %}}
If we solve the inequality,

\begin{align*}
  & 4(x-2)+5(6-x)>7 \cr
  & \iff 4x - 8 + 30 - 5x > 7 \cr
  & \iff -x + 22 > 7 \cr
  & \iff 15 > x.
\end{align*}

Therefore, the largest integer $x$ that satisfy $x<15$ is $\boldsymbol{14}$.
{{% /details %}}

2. Solve the following simultaneous inequality for integers:
$$\begin{cases}
  x - 3(x-4) \le 12, \cr
  4 + 2(3-x) \gt 5x - 10.
\end{cases}$$

{{% details title="Answer" %}}
2. $x=0\text{, 1, or 2}$

{{% note Solution %}}
From the first inequality,

\begin{align*}
  & x - 3(x-4) \le 12 \cr
  & \iff x - 3x + 12 \le 12 \cr
  & \iff -2x \le 0 \cr
  & \iff x \ge 0, \tag{$ \cdots\tcirc{1}$}
\end{align*}

and from the second inequality,
\begin{align*}
  & 4 + 2(3-x) \gt 5x - 10 \cr
  & \iff 4 + 6 - 2x \gt 5x - 10 \cr
  & \iff 10 - 2x \gt 5x - 10 \cr
  & \iff -7x \gt -20 \cr
  & \iff x \lt \frac{20}{7}. \tag{$ \cdots\tcirc{2}$}
\end{align*}

{{% mn q2 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-q2.png" %}} The diagram representing the ranges of $x\ge 1$ and $x\gt 2$.
{{% /mn %}} In the figure right, we drew the ranges $\tcirc{1}$ and $\tcirc{2}$ on the number line. You can see that $0$, $1$ and $2$ are included inside both ranges but $3$ is not. Therefore the answer is $\boldsymbol{x=0}\textbf{, 1, or 2}$.

{{% hr %}}

{{% /details %}}

3. The smallest possible integer $x$ that satisfies the inequality $$ 3x+1>2a $$ is $4$. Find all possible values of $a$, if $a$ is also an integer.

{{% details title="Answer" %}}

3. 5 and 6

{{% note solution %}}
We first treat $a$ as a constant(number) and solve the inequality:
\begin{align*}
  & 3x+1>2a \cr
  & \iff 3x > 2a-1 \cr
  & \iff x > \frac{2a-1}{3}.
\end{align*}

{{% mn q3 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-q3.png" %}} The diagram representing the range of $\dfrac{2a-1}{3}$.
{{% /mn %}} Because the smallest integer solution is 4, the range of $\dfrac{2a-1}{3}$ should be $$ 3 \le \dfrac{2a-1}{3} \lt 4. $$ Thus,
\begin{align*}
  & 3 \le \dfrac{2a-1}{3} \lt 4 \cr
  & \iff 9 \le 2a-1 \lt 12 \cr
  & \iff 10 \le 2a \lt 13 \cr
  & \iff 5 \le a \lt \frac{13}{2}.
\end{align*}

{{% mn q32 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-q32.png" %}} The diagram representing the range of $a$.
{{% /mn %}} The integers that are in this range are $\textbf{5 and 6}$.

{{% hr %}}

{{% /details %}}

4. If there are exactly five integer solutions to the simultaneous inequality (in terms of $x$) $$ \begin{cases} 6x-4>3x+5, \cr 2x-1\\le x+a, \end{cases} $$ what is the range of $a$?{{% mn ref4 refs %}}From Setsunan Univ.{{% /mn %}}

{{% details title="Answer" %}}

4. $7 \le a \lt 8$

{{% note Solution %}}
From the first inequality,
\begin{align*}
  & 6x-4>3x+5 \cr
  & \iff 3x > 9 \cr
  & \iff x > 3, \tag{$ \cdots\tcirc{1}$}
\end{align*}

and if we treat $a$ as a constant and solve the second inequality,
\begin{align*}
  & 2x-1\le x+a \cr
  & \iff x \le a+1. \tag{$ \cdots\tcirc{2}$}
\end{align*}

{{% mn q4 %}}
{{% img-raw loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-int-q4.png" %}} The diagram representing the range of $x$.
{{% /mn %}} We know there are exactly five integer solutions for $\tcirc{1}$ and $\tcirc{2}$, and the smallest integer solution for $\tcirc{1}$ is 4. Hence the solutions should be 4, 5, 6, 7 and 8, or in other words, the largest integer solution for $\tcirc{2}$ should be 8. Hence,

\begin{align*}
  & 8 \le a+1 \lt 9 \cr
  & \iff \boldsymbol{ 7 \le a \lt 8 }.
\end{align*}

{{% hr %}}

{{% /details %}}