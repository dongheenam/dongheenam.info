---
title: Evaluating Expressions with Square Roots 2
slug: expressions-square-roots-2
description: Evaluating complex expressions using the properties of square roots.

date: 2020-08-13 18:36:19.853 +1000
lastMod: 2020-12-19 11:38:21.774 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - real number
  - square root
  - polynomial identity
  - fraction
  - algebra

menu:
  math1:
    parent: Real Numbers
    name: Expressions with Roots 2
    weight: 17

weight: 17
---

## Introduction

Following the previous lesson, we will look at more strategies for evaluating expressions, especially symmetric ones!

## Symmetric Expressions

In geometry, symmetry refers to shapes that do not change when you reflect or rotate them. Likewise, we can also define symmetry in algebra.

{{% hbox %}}
{{% note Definition %}}
A ***symmetric expression*** is the expression that remains the same when any of the two variables in the expression are swapped.

{{% note Example %}}

- $x^2 + y^2$ is a symmetric expression because $x^2+y^2 = y^2+x^2$.
- $\dfrac{1}{x} + \dfrac{1}{y} + \dfrac{1}{z}$ is a symmetric expression because $$ \dfrac{1}{x} + \dfrac{1}{y} + \dfrac{1}{z} = \dfrac{1}{y} + \dfrac{1}{x} + \dfrac{1}{z} = \dfrac{1}{z} + \dfrac{1}{y} + \dfrac{1}{x} = \cdots. $$
- $x-y+z$ is _not_ a symmetric expression because, if you swap $x$ and $y$, $$ x-y+z \ne y-x+z. $$

{{% /hbox %}}

The beauty of symmetric expressions comes from that you can always express them in terms of the sum of all variables, the sum of two different variables multiplied, the sum of three different variables multiplied, and so on. Here are the two simplest cases:

- Any symmetric expressions in $x$ and $y$ can be expressed in terms of $x+y$ and $xy$.
- Any symmetric expressions in $x$, $y$ and $z$ can be expressed in terms of $x+y+z$, $xy+yz+zx$ and $xyz$.

Here are some example questions that use this property of symmetric expressions.

{{% hbox %}}
{{% note Example %}}
When $x+y+z=xy+yz+zx=2\sqrt{2}+1$ and $xyz=1$, find the value of the following expressions.

1. $\dfrac{1}{x} + \dfrac{1}{y} + \dfrac{1}{z}$
2. $x^2 + y^2 + z^2$
3. $x^3 + y^3 + z^3$

{{% note Solution %}}

{{% enum 1 %}}
\begin{align*}
\dfrac{1}{x} + \dfrac{1}{y} + \dfrac{1}{z}
&= \frac{yz}{xyz} + \frac{xz}{xyz} + \frac{xy}{xyz} \cr
&= \frac{xy+yz+zx}{xyz} \cr
&= \frac{2\sqrt{2}+1}{1} = \boldsymbol{ 2\sqrt{2} + 1. }
\end{align*}

{{% enum 2 %}} Because $ (x+y+z)^2 = \hl{x^2+y^2+z^2} + 2(xy+yz+zx) $,

\begin{align*}
x^2+y^2+z^2 &= (x+y+z)^2 - 2(xy+yz+zx) \cr
&= (2\sqrt{2}+1)^2 - 2(\sqrt{2}+1) \cr
&= (2\sqrt{2}+1)(2\sqrt{2}+1-2) \cr
&= (2\sqrt{2}+1)(2\sqrt{2}-1) \cr
&= 8 - 1 = \boldsymbol{ 7. }
\end{align*}

{{% enum 3 %}} We will use the following identity{{% sn iden %}}The proof can be found from Question 6 of the [previous Review Set](../../polynomials/review-2/).{{% /sn %}}

\begin{align*}
&\hl{x^3 + y^3 + z^3} - 3xyz \cr
&= (x+y+z)(x^2+y^2+z^2-xy-yz-zx).
\end{align*}

Then
\begin{align*}
& x^3+y^3+z^3 \cr
&= (x+y+z)(x^2+y^2+z^2-xy-yz-zx) + 3xyz \cr
&= \big(2\sqrt{2}+1\big)\big\\{7 - \big(2\sqrt{2}+1\big)\big\\} + 3 \cr
&= \big(2\sqrt{2}+1\big)\big(6-2\sqrt{2}\big) + 3 \cr
&= 2\big(2\sqrt{2}+1\big)\big(-\sqrt{2}+3\big) + 3 \cr
&= 2\big(-4 +5\sqrt{2} + 3\big) + 3 \cr
&= 2\big(5\sqrt{2} - 1\big) + 3 \cr
&= \boldsymbol{ 10\sqrt{2} + 1. }
\end{align*}

{{% /hbox %}}

Try [Practice Question](#practice-questions) 1 before moving on.

## Reducing the Order of the Polynomial

If you are asked to simplify $$ x^4 + x^3 - x^2 + x $$ as much as possible, given that $x^2+3x+1=0$, what can you do? Well, we know $x^2=-3x-1$, so we can try expressing $x^4$ as follows:
\begin{align*}
x^4 &= \left( x^2 \right)^2 \cr
&= \hl{(-3x-1)}^2 \cr
&= 9x^2 + 6x + 1 \cr
&= 9\hl{(-3x-1)} + 6x + 1 \cr
&= -27x - 9 + 6x + 1 \cr
&= -21x - 8
\end{align*}

and $x^3$ as follows:
\begin{align*}
x^3 &= x \cdot x^2 \cr
&= x \hl{( -3x -1 )} \cr
&= -3x^2 - x \cr
&= -3\hl{(-3x-1)} - x \cr
&= 9x + 3 - x \cr
&= 8x + 3.
\end{align*}

That means that we can rewrite $x^4 + x^3 - x^2 + x$ as a linear polynomial in $x$!
\begin{align*}
& x^4 + x^3 - x^2 + x \cr
&= (-21x-8) + (8x+3) - (-3x-1) + x \cr
&= -9x -4.
\end{align*}

We will use this trick to try solving this question.

{{% hbox %}}
{{% note Example %}}
When $a=\dfrac{1+\sqrt{5}}{2}$, what is the value of $a^4+a^3+a^2+a+1$?

{{% note Solution %}}
Let's first find a quadratic equation for $a$. The easiest way to do this is to manipulate the equation in terms of the square root and square both sides.

{{% mn 146 tips %}}
(1) Squared both terms.
{{% /mn %}}
\begin{alignat*}{3}
&& a &= \dfrac{1+\sqrt{5}}{2} \cr
\iff && 2a-1 &= \sqrt{5} \cr
\implies && (2a-1)^2 &= 5 \tag{1} \cr
\iff && 4a^2 - 4a + 1 &= 5 \cr
\iff && 4a^2 &= 4a + 4 \cr
\iff && a^2 &= a + 1.
\end{alignat*}

Now we can use this to replace $a^4$ and $a^3$ with linear polynomials in $a$:
\begin{align*}
a^3 &= a \cdot a^2 \cr
&= a \cdot \hl{(a+1)} \cr
&= a^2 + a \cr
&= \hl{(a + 1)} + a = 2a + 1, \cr \cr
a^4 &= \left( a^2 \right)^2 \cr
&= \hl{(a + 1)}^2 \cr
&= a^2 + 2a + 1 \cr
&= \hl{(a + 1)} + 2a + 1 = 3a + 2.
\end{align*}

Therefore,
\begin{align*}
& a^4 + a^3 + a^2 + a + 1 \cr
&= \hl{(3a+2)} + \hl{(2a+1)} + \hl{(a+1)} + a + 1 \cr
&= 7a + 5 \cr
&= 7 \cdot \frac{1+\sqrt{5}}{2} + 5 \cr
&= \frac{7 + 7\sqrt{5}}{2} + 5 \cr
&= \boldsymbol{ \frac{17 + 7\sqrt{5}}{2} .}
\end{align*}

{{% /hbox %}}

## Practice Questions

1. For $x,y,z$ that satisfy $x+y+z=2\sqrt{3}+1$, $xy+yz+zx=2\sqrt{3}-1$ and $xyz=-1$, evaluate the following expressions.
   1. $\dfrac{2}{xy}+\dfrac{2}{yz}+\dfrac{2}{zx}$
   2. $x^2+y^2+z^2$
   3. $x^2y^2 + y^2z^2 + z^2x^2$

{{% details title="Answer" %}}

1.  1. $-4\sqrt{3}-2$
    2. $15$
    3. $15$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
& \frac{2}{xy}+\frac{2}{yz}+\frac{2}{zx} \cr
&= \frac{2z}{xyz} + \frac{2x}{xyz} + \frac{2y}{xyz} \cr
&= \frac{2(x+y+z)}{xyz} \cr
&= \frac{2\big(2\sqrt{3}+1\big)}{-1} \cr
&= \boldsymbol{ -4\sqrt{3}-2 . }
\end{align*}
{{% enum b %}}
\begin{align*}
& x^2+y^2+z^2 \cr
&= (x+y+z)^2 - 2(xy+yz+zx) \cr
&= \big(2\sqrt{3}+1\big)^2 - 2\big(2\sqrt{3}-1\big) \cr
&= 12 + 4\sqrt{3} + 1 - 4\sqrt{3} + 2 \cr
&= \boldsymbol{ 15. }
\end{align*}
{{% enum c %}}
{{% mn q1c tips %}}
(1) $A^2+B^2+C^2$ $= (A+B+C)^2$ $-$ $2(AB+BC+CA)$, where $A=xy$, $B=yz$, and $C=zx$.
{{% /mn %}}
\begin{align*}
& x^2y^2 + y^2z^2 + z^2x^2 \cr
&= (xy)^2 + (yz)^2 + (zx)^2 \cr
&= (xy+yz+zx)^2 - 2(xy\cdot yz + yz\cdot zx + zx \cdot xy) \tag{1} \cr
&= (xy+yz+zx)^2 - 2xyz(x + y + z) \cr
&= \big(2\sqrt{3}-1\big)^2 - 2\cdot(-1)\cdot \big(2\sqrt{3}+1\big) \cr
&= 12 - 4\sqrt{3} + 1 + 4\sqrt{3} + 2 \cr
&= \boldsymbol{ 15. }
\end{align*}

{{% /details %}}

2. When $t=\dfrac{1-\sqrt{3}}{2}$, evaluate the following expressions.
    1. $2t^2-2t-1$
    2. $t^8$

{{% details title="Answer" %}} 

2. 
    1. $0$
    2. $\dfrac{97 - 56\sqrt{3}}{16}$

{{% note Solution %}}
We will first express $t^2$ in terms of $t$:
\begin{alignat*}{3}
&& t &= \frac{1-\sqrt{3}}{2} \cr
\iff && 2t &= 1-\sqrt{3} \cr
\iff && \sqrt{3} &= 1-2t \cr
\implies && 3 &= 1 - 4t + 4t^2 && \quad \text{(squared both sides)} \cr
\iff && 4t^2 &= 4t + 2 \cr
\iff && 2t^2 &= 2t + 1.
\end{alignat*}

{{% enum a %}} From above, we find that $ 2t^2 - 2t - 1 = \boldsymbol{ 0 .} $

{{% enum b %}} We will first find the expression for $t^4$:

{{% mn q2bc tips %}}
(1) From $2t^2 = 2t+1$, $t^2 = t + \dfrac{1}{2}$.
{{% /mn %}}
\begin{align*}
t^4 &= \left( t^2 \right)^2 \cr
&= \hl{\left(t+\frac{1}{2}\right)}^2 \tag{1} \cr
&= t^2 + t + \frac{1}{4} \cr
&= \hl{\left(t+\frac{1}{2}\right)} + t + \frac{1}{4} \cr
&= 2t + \frac{3}{4}.
\end{align*}

Then,
\begin{alignat*}{2}
t^8 &= \left( t^4 \right)^2 \cr
&= \hl{\left(2t + \frac{3}{4}\right)}^2 \cr
&= 4t^2 + 3t + \frac{9}{16} \cr
&= 4\hl{\left(t + \frac{1}{2}\right)} + 3t + \frac{9}{16} \cr
&= 4t + 2 + 3t + \frac{9}{16} \cr
&= 7t + \frac{41}{16}.
\end{alignat*}

Because $t=\dfrac{1-\sqrt{3}}{2}$,
\begin{align*}
t^8 &= 7\cdot \frac{1-\sqrt{3}}{2} + \frac{41}{16} \cr
&= \frac{56(1-\sqrt{3})}{16} + \frac{41}{16} \cr
&= \boldsymbol{ \frac{97 - 56\sqrt{3}}{16}. }
\end{align*}

{{% /details %}}
