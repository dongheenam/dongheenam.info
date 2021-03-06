---
title: Applications of Linear Inequalities
slug: applications
description: Solving linear inequalities with variable coefficients. Solving word questions with inequalities.

date: 2020-10-12 21:30:46.934 +1100
lastMod: 2020-12-22 19:58:41.305 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - inequality
  - algebra

menu:
  math1-numbers:
    parent: Linear Inequalities
    name: Applications of Inequalities
    weight: 15

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 15
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 10
  - Solve linear inequalities and graph their solutions on a number line [(ACMNA236)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11761&elaborations=true&cd=ACMNA236&searchTerm=ACMNA236#dimension-content).

{{% /details %}}

## Introduction

Now that we are fairly familiar with linear inequalities, we will take a next step and look at some advanced questions on inequalities. In this lesson, we will learn:

  - How to solve inequalities with more than one variables.
  - Strategies for solving word problems using linear inequalities.

## Inequalities with Variable Coefficients

The equation $$ ax + 1 = -3a -2 $$ has two variables ($a$ and $x$) and hence cannot be solved. However, we can always treat one of the variables as constant and express one variable in terms of the other:

\begin{alignat}{2}
  && ax + 1 & = -3a -2 \\\\
  \implies && ax &= -3a -3 \\\\
  \implies && x &= \frac{-3a-3}{a}.
\end{alignat}

What is the problem with this work? Well, it should be fine for most of the time, but you cannot determine the value of $\dfrac{-3a-3}{a}$ when $a=0$, hence the value of $x$ is not set for this case! This is because when we divided both sides by $a$, we *assumed* that $a$ is not equal to zero. Now, what happens when $a=0?$ Have a look at the complete solution below.

{{% box %}}
{{% note example %}}
Solve $ax + 1 = -3a -2$ with respect to $x$.

{{% note solution %}}
We will first assume $a=0$. Then

\begin{alignat}{2}
  && 0\cdot x + 1 &= -3\cdot 0 - 2 \\\\
  \implies && 1 &= -2,
\end{alignat}
which is *always false*. Hence there are *no solutions* when $a=0$.

{{% mn 67 tips %}}
$(1)$ Note that because we assumed $a$ is not zero, we can divide both sides by $a$.
{{% /mn %}}
We will then assume $a\ne 0$. Then
\begin{alignat}{2}
  && ax + 1 & = -3a -2 \\\\
  \implies && ax &= -3a -3 \\\\
  \implies && x &= \frac{-3a-3}{a}. \tag{1}
\end{alignat}

Therefore, when $a$ is nonzero, $\boldsymbol{ x=\dfrac{-3a-3}{a} = -3 - \dfrac{3}{a} }$.

{{% /box %}}

You can clearly see the solution changes as the value of $a$ changes. This is also true for inequalities, but you should also take into account that the inequality sign changes when you multiply or divide by a negative number!

{{% box %}}
{{% note example %}}
Solve $a(x+1)>x+a^2$ with respect to $x$.

{{% note solution %}}
The inequality simplifies to

\begin{align}
  & ax + a > x + a^2 \\\\
  \implies & ax - x > a^2 - a \\\\
  \implies & (a-1)x > a(a-1). \qquad \cdots \tcirc{1}
\end{align}

The next step is to divide both sides by $(a-1)$, so we need to consider the case of $\text{(i) } a-1>0$, $\text{(ii) } a-1=0$, and $\text{(iii) } a-1<0$.

$\text{(i)} \quad$ When $a-1>0 \implies a>1$, we are dividing both sides by a positive number, so

\begin{align}
  \tcirc{1} \implies & x > a.
\end{align}

$\text{(ii)} \quad$ When $a-1=0 \implies a=1$, we *cannot divide* both sides by $a-1$. Instead, we can substitute $a=1$ into $\tcirc{1}$:

\begin{align}
  \tcirc{1} \implies & 0 \cdot x > 1 \cdot 0 \\\\
  \implies & 0 > 0.
\end{align}

Because this inequality is always false, there are no solutions of $x$ in this case.

$\text{(iii)} \quad$ When $a-1<0 \implies a<1$, we are dividing both sides by a negative number, so *the inequality sign changes*.

\begin{align}
  \tcirc{1} \implies & x \hl{<} a.
\end{align}

Therefore, the solution for $x$ is

\begin{cases}
  \boldsymbol{ x>a }, \quad & \text{if $a>1$}, \\\\
  \textbf{no solutions}, & \text{if $a=1$}, \\\\
  \boldsymbol{ x<a }, \quad & \text{if $a<1$}.
\end{cases}

{{% /box %}}

<p></p>

{{% box %}}
{{% note example %}}
Find the value of $a$ if the solution for the inequality $ax<4-2x<2x$ with respect to $x$ is $1<x<4$.

{{% note solution %}}
We first solve the simultaneous inequality 

\begin{cases}
  ax < 4-2x, \\\\
  4-2x < 2x,
\end{cases}

to see what the solutions are in terms of $a$. From the first inequality,

\begin{align}
  & ax + 2x < 4 \\\\
  \implies & (a+2)x < 4, \qquad \cdots \tcirc{1}
\end{align}

and from the second inequality,

\begin{align}
  & 4-2x < 2x \\\\
  \implies & 4 < 4x \\\\
  \implies & 1 < x. \qquad \cdots \tcirc{2}
\end{align}

By comparing the solution $(1<x<4)$ with $\tcirc{2}$, we can clearly see that $\tcirc{1}$ should lead to $x<4$. Because we need to divide both sides of $\tcirc{1}$ by $(a+2)$ to proceed, it is natural for us to divide the cases by the sign of $(a+2)$.

$\text{(i)  } \quad$ When $a+2>0$, $\quad \tcirc{1} \implies x < \dfrac{4}{a+2}$.

$\text{(ii) } \quad$ When $a+2=0$, $\quad \tcirc{1} \implies 0 < 4$ (no solutions).

$\text{(iii)} \quad$ When $a+2<0$, $\quad \tcirc{1} \implies x > \dfrac{4}{a+2}$.

Since $\tcirc{1}$ should apply an upper limit of $x$, only $\text{(i)}$ is a suitable choice. Hence we find, $a+2>0 \implies a>-2$ and

\begin{alignat}{2}
  && \dfrac{4}{a+2} &= 4 \\\\
  \implies && 4 &= 4(a+2) \\\\
  \implies && 1 &= a+2 \\\\
  \implies && a &= -1.
\end{alignat}

Therefore, the value of $a$ is $\boldsymbol{ -1 }$.

{{% /box %}}

{{% note question %}} Try [Practice Questions](#practice-questions) 1 and 2 before moving on.

## Problem-solving with Inequalities

The most important step for solving word problems is converting the problem to a mathematical expression.

{{% box %}}
{{% note example %}}
You would like to share the apples you have with a group of children. If you give four apples per person, there are 19 leftover apples. If you give seven apples per person, the last child receives less than four apples. Find the number of children and the total number of apples.

{{% note solution %}}

1. Let's set the number of children as $x$.
2. Because you have 19 apples left if you share four apples per child, the total number of apples is $$ 4x + 19. $$
3. With the $4x+19$ apples, you can give 7 apples to every child except the last one. In other words, you can give 7 apples to $(x-1)$ children. At this point, the number of apples you have would be $$ 4x+19 - 7(x-1). \quad \cdots \tcirc{1} $$
4. Because every child except the last one does receive 7 apples, the number of apples you had should not be smaller than $7(x-1)$, and hence $\tcirc{1}$ is greater or equal to zero. Also, $\tcirc{1}$ is equal to the number of apples the last child would get, so it would also be less than four.
5. Putting everything together, we find $$ 0 \le 4x+19 - 7(x-1) \lt 4. $$
6. Solving this inequality gives
\begin{align}
  & 0 \le 4x+19 - 7(x-1) \lt 4 \\\\
  \implies & 0 \le 4x+19 - 7x + 7 \lt 4 \\\\
  \implies & 0 \le -3x + 26 \lt 4 \\\\
  \implies & -26 \le -3x \lt -22 \\\\
  \implies & \frac{22}{3} \lt x \le \frac{26}{3}.
\end{align}
7. The number of children has to be a natural number, and the only natural number that is in between $\dfrac{22}{3}$ and $\dfrac{26}{3}$ is $8$ $\left(=\dfrac{24}{8}\right)$. Therefore there are $\textbf{8 children}$, and the number of apples is $$ 4\cdot 8 + 19 = \boldsymbol{51}. $$ 



{{% /box %}}

If you are still not so sure, follow the tips below.

{{% box %}}
{{% note tips %}}
Basics of solving word problems:

1. Set what you need to solve for as a variable ($x$).
2. Translate the condition on the variable to an inequality.
3. Solve the inequality.
4. Review the condition on the variable and deduce the solution.

{{% /box %}}


## Practice Questions

1. Solve the inequality $mx>x+m^2+m-2$ for $x$, for all possible values of constant $m$.

2. When the inequality $2bx\le 4x+1 \le 5$ is equivalent to $-5\le x\le 1$, find the possible range of $b$.

{{% details title="Answer" %}}

1. $$\begin{cases}
  x>m+2, \quad & \text{if $m>1$}, \\\\
  \text{no solutions}, & \text{if $m=1$}, \\\\
  x<m+2, \quad & \text{if $m<1$}.
\end{cases}$$

2. $b=\dfrac{19}{10}$.

{{% note solution %}}

1. We will first simplify the inequality in terms of $x$.
\begin{align}
  & mx>x+m^2+m-2 \\\\
  \implies & mx-x>m^2+m-2 \\\\
  \implies & (m-1)x > (m-1)(m+2). && \cdots \tcirc{1}
\end{align}

We need to divide both sides by $(m-1)$, if possible. Hence we will look at the cases when $(m-1)$ is positive, when it equals zero, and when it is negative.

$\text{(i)  } \quad$ When $m-1>0$, $\quad \tcirc{1} \implies x > m+2$.

$\text{(ii) } \quad$ When $m-1=0$, $\quad \tcirc{1} \implies 0 > 0$ (always false).

$\text{(iii)} \quad$ When $m-1<0$, $\quad \tcirc{1} \implies x < m+2$.

Therefore, the solution is

\begin{cases}
  \boldsymbol{ x>m+2 }, & \text{if $m>1$}, \\\\
  \textbf{no solutions}, & \text{if $m=1$}, \\\\
  \boldsymbol{ x<m+2 }, & \text{if $m<1$}.
\end{cases}

<br>

2. Divide the inequality into two:
\begin{cases}
  2bx\le 4x+1,\\\\
  4x+1 \le 5,
\end{cases}
and solve them separately. From the second inequality,

\begin{align}
  & 4x+1 \le 5 \\\\
  \implies & 4x \le 4 \\\\
  \implies & x \le 1. && \quad \cdots \tcirc{1}
\end{align}

Then, from the first inequality,
\begin{align}
  & 2bx\le 4x+1 \\\\
  \implies & (2b-4)x \le 1 \\\\
  \implies & (b-2)x \le \frac{1}{2}. \quad \cdots \tcirc{2}
\end{align}

If we compare $\tcirc{1}$ with $-5\le x\le 1$, $\tcirc{2}$ should be equivalent to $x\ge -5$. It means that the inequality sign has to flip, which means $(b-2)$ has to be negative:

\begin{align}
  \tcirc{2} \implies & x \hl{\ge} \frac{1}{2(b-2)}, \\\\
  \implies & x \ge -5,
\end{align}

so $\dfrac{1}{2(b-2)} = -5$. We solve this equation to find the value of $b$:

\begin{alignat}{2}
  && \frac{1}{2(b-2)} &= -5 \\\\
  \implies && 1 &= -5 \cdot 2(b-2) \\\\
  \implies && 1 &= -10b + 20 \\\\
  \implies && 10b &= 19 \\\\
  \implies && \boldsymbol{ b } & \boldsymbol{ = \dfrac{19}{10} }.
\end{alignat}

We can also confirm this solution matches the previous assumption ($b-2<0$) we made.

{{% /details %}}


3. Alice and Tom own 52 pencils together. Alice hands over one third of her pencils to Tom, but she still has more pencils. Tom then takes three extra pencils from Alice, and he finally has more pencils than she does. Find the number of pencils Alice had originally.

{{% details title="Answer" %}}

3. $42$

{{% note solution %}}

Because we need to find the number of pencils Alice had, so let's set this number as $n$. The two had 52 pencils together, so the number of Tom's pencils is $$ 52-n. $$

Alice then gives one third of her pencils $(=n/3)$ to Tom. At this point, Alice has $ \dfrac{2}{3} n$, and Tom has $ 52-n + \dfrac{1}{3}n $ pencils. Because Alice still has more pencils, $$ \dfrac{2}{3} n > 52-n + \dfrac{1}{3}n. \quad \cdots \tcirc{1} $$

After Alice gives three more pencils to Tom, Alice has $\dfrac{2}{3} n - 3$ pencils, and Tom has $ 52-n + \dfrac{1}{3}n + 3$ pencils. Now, Tom has more pencils, so $$ \dfrac{2}{3} n - 3 < 52-n + \dfrac{1}{3}n + 3. \quad \cdots \tcirc{2} $$

Now we have two inequalities to solve. Solving $\tcirc{1}$ gives
\begin{align}
  \tcirc{1} \implies & \dfrac{2}{3} n > 52 - \dfrac{2}{3} n \\\\
  \implies & \dfrac{4}{3} n > 52 \\\\
  \implies & n > 52 \times \dfrac{3}{4} \\\\
  \implies & n > 39.
\end{align}

Then, solving $\tcirc{2}$ gives
\begin{align}
  \tcirc{2} \implies & \dfrac{2}{3} n - 3 < 55 - \frac{2}{3} n \\\\
  \implies & \dfrac{4}{3} n < 58 \\\\
  \implies & n < 58 \times \dfrac{3}{4} \\\\
  \implies & n < 43.5.
\end{align}

We find $ 39 < n < 43.5 $. Because Alice could give one third of her pencils, the number of pencils Alice had must be divisible by $3$. The only multiple of $3$ that is in between $39$ and $43.5$ is $42$, so Alice had $\boldsymbol{42}$ pencils at first.

{{% /details %}}

4. You need to get to the shopping mall $15$ kilometres away. You start by running at $5~\text{km}/\text{s}$, but you get tired and finish the rest of the trip walking at $3~\text{km}/\text{s}$. If you only have four hours, for how many kilometres do you need to run?

{{% details title="Answer" %}}

4. $7.5$

{{% note solution %}}

Suppose you cover $d~\text{km}$ by running and $(15-d)~\text{km}$ by walking. Then, the amount of time you spend running is $\dfrac{d}{5}$ hours,{{% sn speed %}}Remember that $(\text{distance}) $ $= (\text{speed})\times(\text{time})${{% /sn %}} and the amount of time you spend walking is $\dfrac{15-d}{3}$. Hence the total time is $$ \dfrac{d}{5} + \dfrac{15-d}{3} $$ hours. Because this needs to be no greater than $4$ hours,

{{% mn q4 tips %}}
$(1)$ Multiplying both sides by the least common multiple of the denominators $(15)$.
{{% /mn %}}
\begin{align}
  & \dfrac{d}{5} + \dfrac{15-d}{3} \le 4 \\\\
  \implies & 3d + 5(15-d) \le 60 \tag{1} \\\\
  \implies & 3d + 75 - 5d \le 60 \\\\
  \implies & -2d \le 60 - 75 \\\\
  \implies & -2d \le -15 \\\\
  \implies & d \ge \dfrac{15}{2}.
\end{align}

Therefore, you need to run for at least $\boldsymbol{ 7.5 }$ kilometres.

{{% /details %}}