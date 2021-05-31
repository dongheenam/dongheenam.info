---
title: "Factorising using the Common Factor"
description: "Definition of factorisation. How to factorise a polynomial by taking out a common factor."
slug: "factorising-common-factor"

date: 2020-05-27 10:54:11 +1000
lastMod: 2020-12-10 09:35:32.365 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation
  - distributive law
  - AC Year 10

menu:
  math1-numbers:
    parent: Polynomials
    name: "Factorising Common Factor"
    weight: 17

weight: 17
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 8
  - Factorise algebraic expressions by identifying numerical factors [(ACMNA191)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11759&elaborations=true&cd=ACMNA191&searchTerm=ACMNA191#dimension-content).
- Mathematics Year 10
  - Factorise algebraic expressions by taking out a common algebraic factor [(ACMNA230)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA230).

{{% /details %}}

## Introduction

Until now, we focused on expanding brackets and revealing the polynomials they are representing. We can also find the combination of factors that represent a polynomial -- this is called _factorising_. In this lesson, we will learn:

- The definition of factorisation.
- How to factorise a polynomial by finding the common factor.

## Factors and Factorisation

You might have heard of factorising numbers, which is breaking a big number into a product of smaller numbers (primes). For example, the _factorisation_ of $42$ is $$ 42 = 2\times 3 \times 7, $$ so the _factors_ of $42$ are $2$, $3$, and $7$. Similarly, _factorising_ a polynomial means to express it as a product of smaller polynomials, which we call _factors_.

{{% note Definition %}}
_Factorisation_ is the process of writing a polynomial as a product of smaller polynomials, or _factors_.

{{% note example %}}
The factorisation of $3x^2 - 7x + 2 $ is $ (3x-1)(x-2)$.

As you might have guessed, this is the opposite of _expanding_:

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-factor.jpg" alt="relationship between factorisation and expansion" %}}

This means we can use all the identities we found so far for factorisation too!

## Factorising with Distributive Law

The distributive law says $$ \hl{A}B + \hl{A}C + \hl{A}D = \hl{A}(B+C+D). $$ How can we use this to factorise an expression, say $$ 2x^3 - 6x^2 + 8x? $$

We need to find a term, which we call here $\hl{A}$, that is included in all of the terms. After some thoughts, you may realise $\hl{2x}$ is included in all three terms of the expression:
\begin{align}
2x^3 &= \hl{2x} \times x^2, \\\\
6x^2 &= \hl{2x} \times 3x, \\\\
8x &= \hl{2x} \times 4.
\end{align}

Using this information,

\begin{align}
& 2x^3 - 6x^2 + 8x = \hl{2x} \times x^2 - \hl{2x} \times 3x + \hl{2x} \times 4 \\\\
&= \hl{2x} (x^2 - 3x + 4 ).
\end{align}

Here $\hl{2x}$ is called the _common factor_ because it is in every term of the polynomial. Let's have a look at a more complicated example:

{{% box %}}
{{% note example %}}
Factorise $12x^2y^3z - 18xz^2$.

{{% note solution %}}
The common factor of $12x^2y^3z$ and $18xz^2$ is $6xz$. So

\begin{align}
12x^2y^3z - 18xz^2 &= 6xz\times 2xy^2 - 6xz\times 3z \\\\
&= \boldsymbol{ 6xz ( 2xy^2 - 3z ) .}
\end{align}

{{% /box %}}

{{% details title="Step by Step" %}}
If you are asked to factorise a polynomial, you need to do it _as far as possible_ so that there are no common factors left. However, it is often difficult to find the largest common factor at first sight. A good practice is to factorise it step by step - numbers first, and then letter by letter. See below for an example!

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-common-factor.jpg" alt="more detailed solution for the example question" %}}

{{% /details %}}

We will show you more difficult examples.

{{% box %}}
{{% note example %}}
Factorise the following expressions.

1. $(2x-y)^2 + y - 2x$
2. $(x-y)^2 + yz - zx$

{{% note Solution %}}

1. It looks like there are no common factors, but wait, $y-2x = -(2x-y)$, so there is one!
   \begin{align}
   & (2x-y)^2 + y - 2x \\\\
   &= \underline{(2x-y)}(2x-y) - \underline{(2x-y)} \\\\
   &= \boldsymbol{ (2x-y)(2x-y-1). }
   \end{align}

2. Similarly, we can factorise the second and third terms first to find a common factor:
   \begin{align}
   & (x-y)^2 + y\underline{z} - \underline{z}x \\\\
   &= (x-y)^2 + z(y-x) \\\\
   &= (x-y)^2 - z(x-y) \\\\
   &= \underline{(x-y)}(x-y) - z\underline{(x-y)} \\\\
   &= \boldsymbol{ (x-y)(x-y-z) .}
   \end{align}

{{% /box %}}

### Practice Questions

1. Factorise the following expressions.
    1. $a^4 - 2a$
    2. $6a^2b + 4ab^2 - 2ab$
    3. $24c^2d - 36c^3d^2 + 12c^4$
    4. $9a^3x^2y - 45ax^3y^2 + 18a^2xy^3$

2. Factorise the following.
    1. $(a+b)x - (a+b)y$
    2. $p(3x-y) + 2q(y-3x)$
    3. $(a-b)x^2 - (b-a)xy$
    4. $3a(x-y) + 6b(x-y) + 9c(y-x)$

{{% details title="Answer" %}}

1.  
    1. $a (a^3 - 2)$
    2. $2ab(3a + 2b - 1)$
    3. $12c^2(2d - 3cd^2 + c^2)$
    4. $9axy(a^2x - 5x^2y + 2ay^2)$
2.  
    1. $(a+b)(x-y)$
    2. $(p-2q)(3x-y)$
    3. $x(a-b)(x+y)$
    4. $3(x-y)(a+2b-3c)$

{{% note solution %}}

1.  <br>
    \begin{align}
    \text{b.} \quad & 6a^2b + 4ab^2 - 2ab \\
    &= 2(3a^2b + 2ab^2 - ab) \\
    &= \boldsymbol{ 2ab(3a + 2b - 1) .}
    \end{align}
    \begin{align}
    \text{c.} \quad & 24c^2d - 36c^3d^2 + 12c^4 \\
    &= 12(2c^2d - 3c^3d^2 + c^4 ) \\
    &= \boldsymbol{ 12c^2(2d - 3cd^2 + c^2) .}
    \end{align}
    \begin{align}
    \text{d.} \quad & 9a^3x^2y - 45ax^3y^2 + 18a^2xy^3 \\
    &= 9(a^3x^2y - 5ax^3y^2 + 2a^2xy^3) \\
    &= \boldsymbol{ 9axy(a^2x - 5x^2y + 2ay^2) .}
    \end{align}
2.  <br>
    \begin{align}
    \text{b.} \quad & p(3x-y) + 2q(y-3x) \\
    &= p(x-y) - 2q(3x-y) \\
    &= \boldsymbol{ (p-2q)(3x-y) .}
    \end{align}
    \begin{align}
    \text{c.} \quad & (a-b)x^2 - (b-a)xy \\
    &= (a-b)x^2 + (a-b)xy \\
    &= \underline{(a-b)x} \cdot x + \underline{(a-b)x}\cdot y \\
    &= (a-b)x(x+y) \\
    &= \boldsymbol{ x(a-b)(x+y) .}
    \end{align}
    \begin{align}
    \text{d.} \quad & 3a(x-y) + 6b(x-y) + 9c(y-x) \\
    &= 3a(\underline{x-y}) + 6b(\underline{x-y}) - 9c(\underline{x-y}) \\
    &= (\underline{x-y})(3a + 6b - 9c) \\
    &= \boldsymbol{ 3(x-y)(a+2b-3c) .}
    \end{align}

{{% /details %}}
