---
title: Properties of Inequalities
slug: properties
description: Definition of an inequality. Properties of inequalities to find the range of values for an expression.

date: 2020-09-14 21:12:48.415 +1000
lastMod: 2020-12-20 08:22:50.561 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - inequality
  - algebra

menu:
  math1:
    parent: Linear Inequalities
    name: Properties of Inequalities
    weight: 11

weight: 11
---

## Introduction

We use ***equations*** to find the value of an unknown. For example, to find the side length of a square with an area of $4~\text{cm}^2$,

1. set the length of the square to be $x$,
2. then, from the given information, we know $x^2=4$,
3. and finally, we solve this equation and get $x=2$ (because the length cannot be negative),
4. to realise the side length is $2~\text{cm}$.

Sometimes, the information we have on an unknown is insufficient to find its exact value, but only the ***possible range*** of its values. That's right; we will practise how to manipulate ***inequalities***.

In this lesson, we will learn:

  - The definition of inequalities and their properties useful for solving the inequalities.
  - Find the range of possible values of an expression, given the range of values of the variables that make up the expression.


## Inequalities

Inequalities are mathematical representations of a relation such as, *"the length of this book is longer than half of its width add 10 cm"*. We use four symbols to show non-equal relations between two expressions: $<$, $>$, $\le$ and $\ge$.

{{% hbox %}}
{{% note Definition %}}

  - *$\boldsymbol{a<b}$ means $a$ is **(strictly) smaller than** $b$.*
  - *$\boldsymbol{a\le b}$ means $a$ is **smaller than or equal to** $b$.*
  - *$\boldsymbol{a>b}$ means $a$ is **(strictly) larger than** $b$.*
  - *$\boldsymbol{a\ge b}$ means $a$ is **larger than or equal to** $b$.*

A short-hand way of saying, for example, $a<b$ and $b<c$ is $\boldsymbol{a<b<c}$.

{{% /hbox %}}

Also, note that some people prefer $\geqq$ instead of $\ge$, and $\leqq$ instead of $\le$. They have the same meaning.


### Properties

Now, let's say, $1<4$. Obviously, if I add 7 to both 1 and 4, it will not change the inequality sign. In other words, $$ 1<4 \iff 1+7<4+7. $$ Likewise, if I take 5 from both 1 and 4, the relationship will not change: $$ 1<4 \iff 1-5<4-5. $$

{{% hbox %}}
{{% note Theorem %}}
For any real numbers $a, b,$ and $c,$
  - if $a<b$ then $a\hl{+c}<b\hl{+c}$.
  - if $a<b$ then $a\hl{-c}<b\hl{-c}$.

It also holds for other inequality signs. For example, if $a\ge b$ then $a+c\ge b+c$.

{{% /hbox %}}

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/ineq-prop1.jpg" alt="Examples of the properties of inequalities 1" caption="Visual examples of the adding and subtracting rules" %}}

Then what about multiplying or dividing? First of all, it is obvious that multiplying or dividing by a ***positive*** number preserves the inequality sign:
\begin{align*}
  1<4 &\iff 1\times 5 < 4\times 5 , \cr
  1<4 &\iff \frac{1}{3} < \frac{4}{3}.
\end{align*}

However, when we multiply 1 and 4 by say, -1, they become -1 and -4: $$ 1 < 4 \iff -1 > -4. $$ This means multiplying or dividing by a negative number ***flips*** the inequality sign.

{{% hbox %}}
{{% note Theorem %}}
When $c>0$, for any real numbers $a$ and $b$,
  - if $a<b$ then $ac<bc$.
  - if $a<b$ then $\dfrac{a}{c}<\dfrac{b}{c}$.

However, when $c<0$,
  - if $a<b$ then $ac\hl{>}bc$.
  - if $a<b$ then $\dfrac{a}{c}\hl{>}\dfrac{b}{c}$.

{{% /hbox %}}

{{% details title="What if $a$ is positive, but $b$ is negative?" %}}

While all the examples we talked about assumed both $a$ and $b$ are positive, it holds regardless of the signs. For example, from $-2 < 5$, $-2\cdot(-3)=6$ and $5\cdot(-3)=-15$, so $$ -2<5 \iff -2\cdot(-3)>5\cdot(-3). $$



{{% /details %}}

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/ineq-prop2.jpg" alt="Examples of the properties of inequalities 2" caption="Visual examples of the multiplying and dividing rules" %}}

## Estimating the Value of Expressions

Let's use the properties we discovered to find the possible range of values for a given expression.

{{% hbox %}}
{{% note Example %}}
When $-3<x<5$ and $-1<y<4$, find the range of the following expressions.
  1. $x-1$
  2. $2x$
  3. $-y$
  4. $x+y$
  5. $2x-3y$

{{% note Solution %}}

{{% enum 1 %}}
{{% mn 133 tips %}}(1) Subtract 1 from each side.{{% /mn %}}
\begin{align*}
  & \phantom{\iff} -3 < x < 5 \cr
  & \iff -3-1<x-1<5-1 \tag{1} \cr
  & \iff \boldsymbol{ -4<x-1<4 }.
\end{align*}

{{% enum 2 %}}
{{% mn 143 tips %}}
(2) Multiply each side by 2.
{{% /mn %}}
\begin{align*}
  & \phantom{\iff} -3<x<5 \cr
  & \iff -3\cdot 2 < 2x < 5\cdot 2 \tag{2} \cr
  & \iff \boldsymbol{ -6 < 2x < 10 }.
\end{align*}

{{% enum 3 %}}
Multiply each side of $-1<y<4$ by -1: 
{{% mn 143 tips %}}
(3) Multiply each side by -1. Note the direction of the inequality signs change.
{{% /mn %}}
\begin{align*}
  & -1<y<4 \cr
  \iff & -1\cdot(-1) \hl{>} -y \hl{>} 4\cdot(-1) \tag{3} \cr
  \iff & \boldsymbol{ -4<-y<1 }.
\end{align*}

{{% enum 4 %}}
Because $x$ is greater than $-3$ and $y$ is greater than $-1$, $x+y$ must be greater than $-3-1=-4$. Likewise, because $x$ is smaller than $5$ and $y$ is smaller than $4$, $x+y$ must be smaller thean $5+4=9$. Therefore $$ \boldsymbol{ -4<x+y<9 }. $$

***Alternative solution.***
A more rigorous approach goes like this:
\begin{align*}
  & -3 < x < 5 \cr
  \iff & -3+y < x+y < 5+y.
\end{align*}

Then, from $-1<y<4$, $-3-1<-3+y$ and $5+y<5+4$, so
\begin{align*}
  \dots \iff & -3-1 < -3+y < x+y < 5+y < 5+4 \cr
  \implies & \boldsymbol{ -4 < x+y < 9 }.
\end{align*}
{{% enum 5 %}}
First of all, let's calculate the ranges of $2x$ and $-3y$:

\begin{align*}
  -3<x<5 & \iff -6 < 2x < 10, \cr
  -1<y<4 & \iff 3 \hl{>} -3y \hl{>} -12.
\end{align*}

Then we can use the same logic as Part (d), because $2x-3y=2x+(-3y)$:
\begin{align*}
  & -6-12 < 2x-3y < 10+3 \cr
  \iff & \boldsymbol{ -18<2x-3y < 13 }.
\end{align*}
{{% /hbox %}}

{{% details title="Range of $x-y$" %}}

You might say, for the solution of Part 5, you could subtract the range of $3y$ from the range of $2x$:
\begin{align*}
  & -6 \lt 2x \lt 10, \cr
  & -3 \lt 3y \lt 12 \cr
  \iff & -6-(-3) \lt 2x-3y \lt 10-12 \cr
  \iff & \boldsymbol{ -3 \lt 2x-3y \lt -2 } \quad (?)
\end{align*}

You can see this method is wrong, but why is it wrong? Think this way: if you pick a number from each group and subtract one from another, how can you make the answer the largest? It is when you subtract the smallest possible number from the largest possible number, so
\begin{align*}
  & 2x-3y \lt 10 - (-3) \cr
  \iff & 2x-3y \lt 13.
\end{align*}

Likewise, you hit the lower bound of the possible answers when you subtract the largest possible from the smallest possible:
\begin{align*}
  & 2x-3y \gt -6 - 12 \cr
  \iff & 2x-3y \gt -18.
\end{align*}

Therefore, $-18 \lt 2x-3y \lt 13$! I find this method much less straightforward than adding $-3y$ to $2x$. I will add its negative instead whenever we have to subtract a variable from another.

{{% /details %}}

Try [Practice Question](#practice-questions) 1 before moving on.


## Rounding and Inequalities

When we round a number, we usually round down when the digit is less than 5, and we round up when it is greater than or equal to 5. For example, the nearest integer to 1.46 is 1, and the nearest integer to 1.504 is 2. With this rule, you can tell the range of numbers $x$, which are rounded to 2 is $$ 1.5 \le x \lt 2.5. $$ Note the difference in the inequality signs because 1.5 rounds to 2 but 2.5 does not. In other words, when you round a number to its nearest integer and the result is 2, the possible range of the original value is $$ 4.5 \le x \lt 5.5. $$


{{% hbox %}}
{{% note Theorem %}}
When the nearest integer to a real number $x$ is $n$, the range of $x$ is $\boldsymbol{ n-0.5 \hl{\le} x \hl{\lt} n+0.5 }. $

{{% /hbox %}}

{{% hbox %}}
{{% note Example %}}
When you round $x$ and $y$ to the nearest integer, they become $6$ and $4$, respectively. Find the possible values of:
  1. $3x-4y$
  2. $xy$

{{% note Solution %}}
The range of $x$ is $$ 5.5\le x \lt 6.5, \tag{$\cdots\tcirc{1}$} $$ and the range of $y$ is $$ 3.5 \le y \lt 4.5. \tag{$\cdots\tcirc{2}$} $$

{{% enum 1 %}} If we multiply all sides in $\tcirc{1}$ by $3$, $$ 16.5 \le 3x \lt 19.5. \tag{$\cdots\tcirc{3}$} $$ Likewise, if we multiply all sides of $\tcirc{2}$ by $-4$,

\begin{align*}
  & -14 \ge -4y \gt -18 \cr
  \iff & -18 \lt -4y \le -14. \tag{$\cdots\tcirc{4}$}
\end{align*}

Therefore, because $3x-4y=3x+(-4y)$, we can add $\tcirc{3}$ and $\tcirc{4}$ side-by-side to get
\begin{align*}
  & 16.5+(-18) \hl{\lt} 3x+(-4y) \hl{\lt} 19.5+(-14) \cr
  \iff & \boldsymbol{ -1.5 \lt 3x-4y \lt 5.5 }.
\end{align*}

Refer to the tip below for the change of inequality signs.

{{% enum 2 %}} If we multiply all sides of $\tcirc{1}$ by $y$, $$ 5.5y \le xy \lt 6.5y. $$

Now, what is the smallest possible value for $5.5y$? Because $y\ge 3.5$, $$ 5.5y\ge 5.5\cdot 3.5 = 19.25. $$ Likewise, the largest possible value for $6.5y$ is $$ 6.5y \lt 6.5\cdot 4.5 = 29.25. $$ Therefore,
\begin{align*}
  & 19.25 \le 5.5y \le xy \lt 6.5y \lt 29.25 \cr
  \implies & \boldsymbol{ 19.25 \le xy \lt 29.25 }.
\end{align*}

{{% /hbox %}}

{{% details title="Combining two inequalities with different signs" %}}

When $x<1$ and $y\le 2$, then $xy$ cannot be $2$ because $y$ is strictly less than $2$. Thus $$ x<1, \\; y\le 2 \iff xy < 2. $$

In general, combining two inequalities results in an equal sign *only when both inequalities have equal signs*.

{{% /details %}}


## Practice Questions

1. When $-1<x<2$ and $1<y<3$, find the range of possible values the following expression can have. {{% mn ref1 refs %}}From Kurashiki Univ. of Sci. and the Arts.{{% /mn %}}
    1. $x+3$
    2. $-2y$
    3. $-\dfrac{x}{5}$
    4. $5x-3y$

{{% details title="Answer" %}}
1. 
    1. $2<x+3<5$
    2. $-6<-2y<-2$
    3. $-\dfrac{2}{5}< -\dfrac{x}{5} < \dfrac{1}{5}$
    4. $-14 < 5x-3y < 7$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
  -1<x<2 & \iff -1+3<x+3<2+3 \cr
  &\iff \boldsymbol{ 2<x+3<5 }.
\end{align*}
{{% enum b %}}
\begin{align*}
  1<y<3 &\iff 1\cdot(-2) \hl{>} -2y \hl{>} 3\cdot(-2) \cr
  &\iff -2>-2y>-6 \cr
  &\iff \boldsymbol{ -6<-2y<-2 }.
\end{align*}
{{% enum c %}}
\begin{align*}
  -1<x<2 &\iff \frac{-1}{-5} \hl{>} \frac{x}{-5} \hl{>} \frac{2}{-5} \cr
  &\iff \frac{1}{5} > -\frac{x}{5} > -\frac{2}{5} \cr
  &\iff \boldsymbol{ -\frac{2}{5}< -\frac{x}{5} < \frac{1}{5} }.
\end{align*}

{{% enum d %}}
The possible ranges of $5x$ and $-3y$ are
\begin{align*}
  -1<x<2 &\iff -5<5x<10, \cr
  1<y<3 &\iff -9<3y<-3.
\end{align*}

Hence, the range of $5x-3y=5x+(-3y)$ is
\begin{align*}
  & (-5)+(-9) < 5x+(-3y) < 10+(-3) \cr
  \iff & \boldsymbol{ -14 < 5x-3y < 7 }.
\end{align*}

{{% /details %}}


2. When you round $x$ to the nearest integer, it becomes $3$, and when you round $y$ to the nearest integer, it becomes $7$. Find the possible values of the following expressions.
    1. $x-y$
    2. $\dfrac{x}{5}+\dfrac{y}{2}$
    3. $2xy$

{{% details title="Answer" %}}
2. 
    1. $-5 \lt x-y \lt -3$
    2. $3.75 \le \dfrac{x}{5}+\dfrac{y}{2} \lt 4.45$
    3. $32.5 \le 2xy \lt 52.5$

{{% note Solution %}}

The ranges of $x$ and $y$ are:
\begin{align*}
  & 2.5 \le x \lt 3.5, \tag{$\cdots\tcirc{1}$} \cr
  & 6.5 \le y \lt 7.5. \tag{$\cdots\tcirc{2}$} 
\end{align*}

{{% enum a %}} Because $x-y=x+(-y)$, we need to find the range of $-y$:

\begin{align*}
  -\tcirc{2} \iff & -6.5 \hl{\ge} -y \hl{\gt} -7.5 \cr
  \iff & -7.5 \lt -y \le -6.5.
\end{align*}

Then, adding $\tcirc{1}$ with $-\tcirc{2}$ gives

\begin{align*}
  & 2.5-7.5 \hl{\lt} x-y \hl{\lt} 3.5-6.5 \cr
  \iff & \boldsymbol{ -5 \lt x-y \lt -3 }.
\end{align*}

 Dividing $\tcirc{1}$ by $5$, we get

\begin{align*}
  & \frac{2.5}{5} \le \frac{x}{5} \lt \frac{3.5}{5} \cr
  \iff & 0.5 \le \frac{x}{5} \lt 0.7, \tag{$\cdots\tcirc{3}$}
\end{align*}

and dividing $\tcirc{2}$ by $2$, we get

\begin{align*}
  & \frac{6.5}{2} \le \frac{y}{2} \lt \frac{7.5}{2} \cr
  \iff & 3.25 \le \frac{y}{2} \lt 3.75. \tag{$\cdots\tcirc{4}$}
\end{align*}

Finally, adding $\tcirc{3}$ and $\tcirc{4}$ gives us the range of $\dfrac{x}{5}+\dfrac{y}{2}$:

\begin{align*}
  & 0.5+3.25 \le \dfrac{x}{5}+\dfrac{y}{2} \lt 0.7+3.75 \cr
  \iff & \boldsymbol{ 3.75 \le \dfrac{x}{5}+\dfrac{y}{2} \lt 4.45 }.
\end{align*}

{{% enum c %}}
Multiplying $2y$ on all sides of $\tcirc{1}$ gives

\begin{align*}
  & 5y \le 2xy \lt 7y. \tag{$\cdots\tcirc{5}$}
\end{align*}

Now, because $y \ge 6.5$, the smallest possible value for $5y$ is
\begin{align*}
  & 5y \le 5 \cdot 6.5 \cr
  \iff & 5y \le 32.5,
\end{align*}

and because $y \lt 7.5$, the largest possible value for $7y$ is
\begin{align*}
  & 7y \lt 7 \cdot 7.5 \cr
  \iff & 7y \lt 52.5.
\end{align*}

Therefore, the range of $2xy$ is
\begin{align*}
  \tcirc{5} \iff & 32.5 \le 5y \le 2xy \lt 7y \lt 52.5 \cr
  \iff & \boldsymbol{ 32.5 \le 2xy \lt 52.5 }.
\end{align*}

{{% /details %}}