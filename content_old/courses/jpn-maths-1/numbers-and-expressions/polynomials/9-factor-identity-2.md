---
title: "Factorising with Polynomial Identities 2"
description: "How to factorise a polynomial with cubic identities."
slug: "factorising-identities-2"

date: 2020-05-27 16:30:27 +1000
lastMod: 2020-12-13 08:02:37.087 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation
  - polynomial identity

menu:
  math1:
    parent: Polynomials
    name: Factorising with Identities 2
    weight: 19

weight: 19
---

## Introduction

Now that you mastered quadratic identities, in this lesson, we will learn:

- How to factorise a polynomial with cubic identities.

## Factorising with Cubic Identities

We don't have to guess the coefficients we [did with the trinomials](../factorising-identities-1/#quadratic-trinomials), but finding patterns can be trickier than for quadratic identities.

### Sums and differences of cubes

This is an easy one to spot: once you see two cubes and apply the formula. Just be careful with the signs!

{{% hbox %}}
{{% note "Identity 4" %}} ***Perfect cubes***.
\begin{align*}
a^3 + b^3 &= (a+b)(a^2 - ab + b^2) \cr
a^3 - b^3 &= (a+b)(a^2 + ab + b^2)
\end{align*}

{{% /hbox %}}



{{% hbox %}}

{{% note Example %}}
Factorise the following expressions.

1. $x^3 - 27$
2. $64a^3 + 125b^6$

{{% note Solution %}}

{{% enum 1 %}}
\begin{align*}
& x^3 - 27 \cr
&= x^3 - 3^3 \cr
&= (x-3)(x^2 + 3x + 3^2) \cr
&= \boldsymbol{ (x-3)(x^2 + 3x + 9) .}
\end{align*}
{{% enum 2 %}}
\begin{align*}
& 64a^3 + 125b^6 \cr
&= (4a)^3 + \left(5b^2\right)^3 \cr
&= (4a+5b^2)\left\\{ 4a - 4a\cdot 5b^2 + \left(5b^2\right)^2\right\\} \cr
&= \boldsymbol{ (4a+5b^2)(4a - 20ab^2 + 25b^4) .}
\end{align*}

{{% /hbox %}}

### Perfect cubes

If there are two extra specific terms besides the cubes, they can all be grouped into a single cube! Note there is a factor of $3$ in the middle two terms. This can be very useful to find whether the set of terms form a perfect cube or not!

{{% hbox %}}
{{% note "Identity 5" %}} ***Sums and differences of cubes***.
\begin{align*}
a^3 + 3a^2b + 3ab^2 + b^3 &= (a+b)^3 \cr
a^3 - 3a^2b + 3ab^2 - b^3 &= (a-b)^3
\end{align*}

{{% /hbox %}}



{{% hbox %}}

{{% note Example %}}
Factorise the following.

1. $x^3 + 6x^2 + 12x + 8$
2. $y^3 - 3y^2 + 3y - 1$
3. $x^3 + x^2 - 4x - 4$

{{% note Solution %}}

{{% enum 1 %}}
\begin{align*}
& x^3 + 6x^2 + 12x + 8 \cr
&= x^3 + 3\cdot 2x^2 + 3\cdot 2^2 x + 2^3 \cr
&= \boldsymbol{ (x+2)^3 .}
\end{align*}
{{% enum 2 %}}
\begin{align*}
& y^3 - 3y^2 + 3y - 1 \cr
&= y^3 - 3\cdot 1y^2 + 3\cdot 1^2 y - 1^3 \cr
&= \boldsymbol{ (y-1)^3 .}
\end{align*}

{{% enum 3 %}} We cannot apply the formula. We will instead try to find the common factor by grouping the terms two by two.

\begin{align*}
& x^3 + x^2 - 4x - 4 \cr
&= (x^3 + x^2) + (-4x - 4) \cr
&= x^2\underline{(x+1)} -4\underline{(x+1)} \cr
&= (x^2-4)\underline{(x+1)} \cr
&= \boldsymbol{ (x+2)(x-2)(x+1) .}
\end{align*}

{{% /hbox %}}

## Practice Questions

1. Factorise the following expressions.
    1. $8a^3 + 27b^3$
    2. $64x^3 - 1$
    3. $8x^3 - 36x^2 + 54x - 27$
    4. $4x^3 - 8x^2 - 9x + 18$

{{% details title="Answer" %}}

1.  
    1. $(2a+3b)(4a^2-6ab+9b^2)$
    2. $(4x-1)(16x^2+4x+1)$
    3. $(2x-3)^3$
    4. $(2x+3)(2x-3)(x-2)$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
& 8a^3 + 27b^3 \cr
&= (2a)^3 + (3b)^3 \cr
&= (2a + 3b)\left\\{ (2a)^2 - 2a\cdot 3b + (3b)^2\right\\} \cr
&= \boldsymbol{ (2a+3b)(4a^2-6ab+9b^2) .}
\end{align*}
{{% enum b %}}
\begin{align*}
& 64x^3 - 1 \cr
&= (4x)^3 - 1^3 \cr
&= (4x-1)\left\\{ (4x)^2 + 4x + 1\right\\} \cr
&= \boldsymbol{ (4x-1)(16x^2+4x+1) .}
\end{align*}
{{% enum c %}}
\begin{align*}
& 8x^3 - 36x^2 + 54x - 27 \cr
&= (2x)^3 - 3(2x)^2\cdot 3 + 3\cdot 2x \cdot 3^2 - 3^3 \cr
&= \boldsymbol{ (2x-3)^3 .}
\end{align*}

{{% enum d %}} We cannot use any of the cubic identities. Note the coefficient of $x^2$ is not a multiple of $3$!

\begin{align*}
& 4x^3 - 8x^2 - 9x + 18 \cr
&= 4x^2(\underline{x - 2}) - 9(\underline{x - 2}) \cr
&= (4x^2-9)(\underline{x - 2}) \cr
&=\left\\{ (2x)^2 - 3^2\right\\} (x-2) \cr
&= \boldsymbol{ (2x+3)(2x-3)(x-2) .}
\end{align*}

{{% /details %}}
