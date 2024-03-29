---
title: Number Line and Absolute Values
description: Definition and properties of the absolute value of a real number.
slug: absolute-values

date: 2020-07-12 20:27:13.297 +1000
lastMod: 2020-12-15 10:27:44.751 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - number line
  - absolute value

menu:
  math1:
    parent: Real Numbers
    name: Absolute Values
    weight: 12

weight: 12
---

## Introduction

In the [previous lesson](../types-of-numbers), we discussed numbers for counting and numbers for measuring, and we realised that they form ***real numbers*** ($\mathbb{R}$) altogether. This is not the end of the story because we have not talked about the number lines yet! In this lesson, we will learn:

- the coordinate representation of numbers: the number line.
- the definition and properties of the absolute value of a real number.


## The Number Line

Bring your memory back to primary school and draw a number line in your mind! It would probably look something like this:

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/num-nl.svg" style="background: #fffff8" caption="The number line. Image by [Hakunamenta](https://commons.wikimedia.org/wiki/File:Number-line.svg) via Wikimedia Commons / [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) / Cropped" %}}

Zero in the middle, positive numbers on the right, and negative numbers on the left, right? Then we can start placing numbers on the line -- integers, rational numbers, and even irrational numbers!

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/num-nl-2.jpg" caption="Rational and irrational numbers on the number line" %}}


### Distance and absolute value

How can you find the distance between two numbers on the number line? For example, how far are 2 and 5 apart? It is pretty straightforward: 5 is five units right from zero, and 3 is three units right from zero, so the distance between 2 and 5is $$ 5-2=3. $$ Likewise, the distance between 13 and 6 is the same as the difference between the two: 7. What about the distance from -1 to 4? Surprisingly, 4 take -1 is 5, so is the distance! We found a new rule here: to find out how far two real numbers are apart, we need to subtract one from another.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/num-distance.jpg" caption="calculating the distance between two numbers" %}}

How can we generalise this result to the distance between any two real numbers, $a$ and $b$? Some might say $a-b$, but it is not true when $b$ is greater than $a$: if $a=3$ and $b=4$, then $a-b=-1$. The distance cannot be negative, so we have to take $a$ from $b$ in this case. In summary, we get the following property.

{{% hbox %}}
{{% note Theorem %}}
For real numbers $a$ and $b$, the distance between $a$ and $b$ is:
$$d = \begin{cases}
  a-b \quad & \text{if $a\ge b$,} \cr
  b-a \quad & \text{if $a<b$.}
\end{cases}$$

{{% /hbox %}}

As you can see, this is quite long and messy. Mathematicians developed a new symbol to describe distance -- guess what, it is the *absolute value*!

{{% hbox %}}
{{% note Definition %}}
*Define $|a-b|$ as the **distance** between $a$ and $b$. That is,*
$$
|a-b|=
\begin{cases}
  a-b \quad & \text{if $a\ge b$,} \cr
  b-a \quad & \text{if $a<b$.}
\end{cases}
$$

We read $|a-b|$ as *the absolute value of a-b*.
{{% /hbox %}}

If we set $b=0$ and focus on $a$ only, we have a little more popular version of the absolute value notation.

{{% hbox %}}
{{% note Definition %}}
*Define $|a|$ as the **absolute value** of $a$. $|a|$ equals the distance of $a$ from $0$, which means,*
$$ |a|=
\begin{cases}
  a \quad & \text{if $a\ge 0$,} \cr
  -a \quad & \text{if $a<0$.}
\end{cases}
$$

{{% note Example %}}
If the number is positive, it equals its absolute value. If the number is negative, multiply it by $-1$.
  - $\left|7\right| = 7$
  - $\left|\sqrt{2}\right| = \sqrt{2}$
  - $\left|-3\right| = -(-3) = 3$
  - $\left| -\dfrac{2}{7} \right| = -\left( -\dfrac{2}{7} \right) = \dfrac{2}{7}$

{{% /hbox %}}

You should be able to see what taking the absolute value of a number means -- it just removes the negative sign if there is one.


### Properties of absolute value

Once we meet a new friend, we like to know more about them. Likewise, let's have a look at how the absolute value symbol behaves in different scenarios!

{{% hbox %}}
{{% note Theorem %}}
For any real numbers $a$ and $b$,
  - $|a|^2 = a^2$,
  - $|ab| = |a|\cdot|b|$,
  - $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$, if $b\ne 0$.

{{% /hbox %}}

{{% details title="Proof" %}}

{{% enum 1 %}} $ |a|^2 = a^2 $

$a$ has to be either positive, negative, or zero. The identity is obviously true when $a=0$ (both sides equal zero), so we can consider the first two cases.

- If $a$ is positive, then
\begin{align*}
  |a|^2 &= |a| \cdot |a| \cr
  &= a \cdot a \cr
  &= \boldsymbol{ a^2 }.
\end{align*}
- If $a$ is negative, then
\begin{align*}
  |a|^2 &= |a| \cdot |a| \cr
  &= (-a) \cdot (-a) \cr
  &= \boldsymbol{ a^2 }.
\end{align*}

Therefore, for every case, $|a|^2 = a^2$. $\quad \square$

{{% enum 2 %}} $ |ab| = |a|\cdot|b| $

Likewise, we will divide it into four cases and see if the identity holds.

- When both $a$ and $b$ are positive, $ab$ is also positive. Then $|a|=a$, $|b|=b$, and $|ab|=ab$. Thus
\begin{align*}
  |a| \cdot |b| = a\cdot b = ab = |ab|.
\end{align*}
- When $a$ is positive but $b$ is negative, $ab$ is negative. Then $|a|=a$, $|b|=-b$, and $|ab|=-ab$. Thus
\begin{align*}
  |a| \cdot |b| = a\cdot (-b) = -ab = |ab|.
\end{align*}
- If we switch $a$ and $b$ for Case 2, you can prove the identity when $a<0$ and $b>0$.
- When both $a$ and $b$ are negative, $ab$ is positive. Then $|a|=-a$, $|b|=-b$, and $|ab|=ab$. Thus
\begin{align*}
  |a| \cdot |b| = -a\cdot (-b) = ab = |ab|.
\end{align*}

Therefore, for every case, $|ab| = |a|\cdot|b|$. $\quad \square$

{{% enum 3 %}} $ \left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|} $

From the second identity,
\begin{align*}
  \left|\dfrac{a}{b}\right| &= \left| a \cdot \dfrac{1}{b} \right| \cr
  &= |a| \cdot \left| \dfrac{1}{b} \right|.
\end{align*}

So we only need to prove $\left| \dfrac{1}{b} \right| = \dfrac{1}{|b|}$. This is indeed true, because when $b$ is positive, $\dfrac{1}{b}$ is also positive, so
\begin{align*}
  \left| \dfrac{1}{b} \right| = \dfrac{1}{b} = \dfrac{1}{|b|},
\end{align*}

and when $b$ is negative, $\dfrac{1}{b}$ is also negative, so
\begin{align*}
  \left| \dfrac{1}{b} \right| = - \dfrac{1}{b} = \dfrac{1}{-b} = \dfrac{1}{|b|}.
\end{align*}

Therefore,
\begin{align*}
  \left|\dfrac{a}{b}\right| &= \left| a \cdot \dfrac{1}{b} \right| \cr
  &= |a| \cdot \left| \dfrac{1}{b} \right| \cr
  &= |a| \cdot \dfrac{1}{|b|} \cr
  &= \dfrac{|a|}{|b|}. && \square
\end{align*}

{{% /details %}}

Finally, we will have a look at questions that involve absolute values.

{{% hbox %}}
{{% note Example %}}
Find the value of $|3-\pi|$.

{{% note Solution %}}
We know that $\pi$ is greater than $3$, so $3-\pi<0$. Therefore
\begin{align*}
  |3-\pi| = -(3-\pi) = \boldsymbol{ \pi - 3 }. 
\end{align*}

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}}
When $x>0$ and $y<0$, simplify $|xy^2| \times \left| \dfrac{2x}{y^3} \right|$.

{{% note Solution %}}
$x$ is positive and $y$ is negative, so $xy^2$ is a positive number (because there is an even power of $y$), and $\dfrac{2x}{y^3}$ is a negative number (because there is an odd power of $y$). Therefore
\begin{align*}
  & |xy^2| \times \left| \dfrac{2x}{y^3} \right| \cr
  &= xy^2 \times \left( - \dfrac{2x}{y^3} \right) \cr
  &= \boldsymbol{ -\dfrac{2x^2}{y} }.
\end{align*}

***Alternative solution.*** We can also use the three identities to remove the absolute value symbols as much as possible.
\begin{alignat*}{2}
  & |xy^2| \times \left| \dfrac{2x}{y^3} \right| \cr
  &= |x| \cdot |y^2| \times \dfrac{|2x|}{|y^3|} \quad && \tag{2nd \\& 3rd identity} \cr
  &= |x| \cdot |2x| \times \dfrac{|y^2|}{|y^3|} \cr
  &= | 2x^2 | \times \left| \dfrac{y^2}{y^3} \right| && \tag{2nd \\& 3rd identity} \cr
  &= 2x^2 \times \left| \dfrac{1}{y} \right| && \tag{1st identity} \cr
  &= 2x^2 \times \dfrac{1}{|y|} && \tag{3rd identity} \cr
  &= 2x^2 \times \left( -\dfrac{1}{y} \right) && \tag{$\because y<0$} \cr
  &= \boldsymbol{ -\dfrac{2x^2}{y} }.
\end{alignat*}

{{% /hbox %}}

## Practice Questions

1. Find the values of the following expressions.
    1. $|-6|$
    2. $|\sqrt{2}-1|$
    3. $|2\sqrt{3}-4|$

{{% details title="Answer" %}}
1. 
    1. $6$
    2. $\sqrt{2}-1$
    3. $4-2\sqrt{3}$

{{% note Solution %}}

{{% enum b %}} Because $\sqrt{2}>1$, $\sqrt{2}-1>0$. Therefore

$$ |\sqrt{2}-1| = \boldsymbol{ \sqrt{2}-1 }. $$

{{% enum c %}} Because $\sqrt{3}<2$, $2\sqrt{3}<4$ and $2\sqrt{3}-4<0$. Therefore

$$ |2\sqrt{3}-4| = \boldsymbol{ 4-2\sqrt{3} }. $$

{{% /details %}}

2. Find the distance between the following two points on the number line.
    1. $A(3)$ and $B(-2)$
    2. $P(-4)$ and $Q(-11)$

{{% details title="Answer" %}}
2. 
    1. $5$
    2. $7$

{{% note Solution %}}

{{% enum a %}} The distance between $A$ and $B$ is $|3-(-2)| = \boldsymbol{ 5 }$.

{{% enum b %}} The distance between $P$ and $Q$ is $|-4-(-11)| = |-4+11| = \boldsymbol{ 7 }$.

{{% /details %}}


3. Find the value of $T=|x-1| - 2|3-x|$, if 
    1. $x=2$,
    2. $x=3$.

{{% details title="Answer" %}}
3. 
    1. $-1$
    2. $2$

{{% note Solution %}}

{{% enum a %}} When $x=2$,

\begin{align*}
  T &= |x-1| - 2|3-x| \cr
  &= |2-1| - 2|3-2| \cr
  &= |1| - 2|1| \cr
  &= 1- 2 \cr
  &= \boldsymbol{ -1 }.
\end{align*}

{{% enum b %}} When $x=3$,

\begin{align*}
  T &= |x-1| - 2|3-x| \cr
  &= |3-1| - 2|3-3| \cr
  &= |2| - 2\cdot 0 \cr
  &= \boldsymbol{ 2 }.
\end{align*}

{{% /details %}}

4. Find the value of $U=|2x+1| - |-x|$, if
    1. $x=2$
    2. $x=-\dfrac{1}{2}$.

{{% details title="Answer" %}}
4. 
    1. $3$
    2. $-\dfrac{1}{2}$

{{% note Solution %}}

{{% enum a %}} When $x=2$,

\begin{align*}
  U &= |2x+1| - |-x| \cr
  &= |2\cdot2 + 1| - |-2| \cr
  &= |5| - |-2| \cr
  &= 5 - 2 \cr
  &= \boldsymbol{ 3 }.
\end{align*}

{{% enum b %}} When $x=-\dfrac{1}{2}$,

\begin{align*}
  U &= |2x+1| - |-x| \cr
  &= \left| 2\cdot \left(- \dfrac{1}{2} \right) + 1 \right| - \left| -\left(-\dfrac{1}{2}\right) \right| \cr
  &= \left| 0 \right| - \left| \dfrac{1}{2} \right| \cr
  &= 0 - \dfrac{1}{2} \cr
  &= \boldsymbol{ -\dfrac{1}{2} }.
\end{align*}

{{% /details %}}