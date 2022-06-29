---
title: "Terms and Polynomials"
description: "The definition of a term, degree, and coefficient. The definition of an expression and a polynomial expression. How to arrange a polynomial. What is the degree of a polynomial."
slug: "terms-and-polynomials"

date: 2020-05-12 20:52:56 +10:00
lastMod: 2022-04-10 16:52:20.908 +1000

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial

menu:
  math1:
    parent: Polynomials
    name: Terms and Polynomials
    weight: 11

weight: 11
---

## Introduction

***Poly-*** means many: ***poly***gons have many angles and sides, ***poly***morphic animals go through many different forms, and ***poly***glot people can speak many languages. Similarly, a ***poly***nomial is an expression with many terms. So we need to know what an expression is and what a term is before understanding what a polynomial is.

In this lesson, we will study:

- The definition of a term, degree, and coefficient.
- The definition of an expression and a polynomial expression.
- How to arrange a polynomial.
- What is the degree of a polynomial.

## Terms

{{% hbox %}}
{{% note Definition %}}
*A **term** is a number, a variable, or numbers or variables multiplied each other.*

{{% note Example %}}
Below are all terms.

- $3$ (a number)
- $y$ (a variable)
- $-7ab^2$ (... multiplied)

{{% /hbox %}}

The definition of terms brings us two important properties: coefficient and degree.

### Coefficient and degree

{{% hbox %}}
{{% note Definition %}}
*The **coefficient** of a term is the number part. The **degree** of a term is the number of variables.*

{{% note Example %}}
For the term $-42xy^2$,
- the coefficient is -42.
- the degree is 3 $(x, y, y)$.

{{% /hbox %}}

The coefficient of $a$ is 1 because $a=1a$. Likewise, the coefficient of $-ab$ is -1 because $-ab=-1ab$.

The degree of a number other than zero is $0$ (because there are no variables!). We cannot tell the degree of $0$.

{{% details title="Degree of 0?" %}}

The degree of say, $5$, is zero because $$ 5 = 5x^0. $$ This logic does not work for $0$ obviously: $$ 0 = 0x^0 = 0x^1 = 0x^2 = \cdots. $$ That is why we cannot decide the degree of $0$, but [some mathematicians say](https://en.wikipedia.org/wiki/Degree_of_a_polynomial#Degree_of_the_zero_polynomial) the degree of $0$ is -1. Interesting!



{{% /details %}}

### Focusing on one variable

Sometimes, you need to work on only one variable, and you want to find the degree only in that variable. For this case, you can treat all the other variables as plain numbers.

{{% hbox %}}
{{% note Example %}}
For a term $ 24xy^2z$,

- when you focus on $x$, $24xy^2z = (24y^2z)x$. \
  $\iff$ Its coefficient in terms of $x$ is $24y^2z$, and its degree is 1.
- when you focus on $y$, $24xy^2z = (24xz)y^2$. \
  $\iff$ Its coefficient in terms of $y$ is $24xz$, and its degree is 2.

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 and 2 before moving on.

## Expressions and Polynomials

We can think of many ways of combining two or more terms together. Adding, subtracting, multiplying, dividing, taking power, and so on. When you combine terms together, it becomes an expression.

{{% hbox %}}
{{% note Definition %}}
*An **expression** is a term or many terms combined together.*

{{% note Example %}}
Below are all expressions.

- $36h^2jk$ (a term)
- $8 + 3x$ (two terms added)
- $(10xy)^{8-z}$ (one to the power of another)
- $\sqrt{2+3q}$ (square root of a term)

{{% /hbox %}}

A polynomial is a special case when you only use addition and subtraction when making an expression.

{{% hbox %}}
{{% note Definition %}}
*A **polynomial** expression is a term or many terms added or subtracted together.*

{{% note Example %}}
Below are all polynomials.

- $ -6xy $
- $ 8x+x^2 $
- $ m^2 + 2mn - 4 $

Below are NOT polynomials.

- $ \displaystyle \frac{1+x}{2x} $ (divided)
- $ 2- \sqrt{ab} $ (root)
- $ 1 + 10^N $ (power)

{{% /hbox %}}

One important point is, expressions with roots or fractions as coefficients can still be polynomials. This is because algebra is the study of variables, and we are only interested in how the variables behave.

{{% hbox %}}
{{% note Example %}}
Below are also polynomials.

- $\dfrac{2}{3} x^2 + \dfrac{1}{2} x - 1$ (fractional coefficients)
- $y^2 - \sqrt{2} y + 4$ (irrational coefficients)

{{% /hbox %}}

### Like terms

Say we have a very long polynomial, like this one:
$$x^2 - xy + 2 + 7x - 3xy - 6y + 4 - 3x.$$
It is often useful to simplify this polynomial. The basic technique is combining the like terms.

{{% hbox %}}
{{% note Definition %}}
*In a polynomial, **like terms** have the same variable part.* 

{{% note Example %}}
For the polynomial $ x^2 - xy + 2 + 7x - 3xy - 6y + 4 - 3x, $

- $-xy$ and $-3xy$ are like terms.
- $7x$ and $-3x$ are like terms.
- $2$ and $4$ are like terms.
- $x^2$ and $7x$ are ***not*** like terms.

{{% /hbox %}}

Like terms can be combined into a single term:
`\begin{align*}
& x^2 -xy +2 +7x -3xy - 6y +4 -3x \\
&= x^2 +(-xy-3xy) +(7x-3x) - 6y +(2+4) \\
&= x^2 + (-1-3)xy + (7-3)x - 6y + (2+4) \\
&= x^2 -4xy +4x - 6y +6.
\end{align*}`

{{% details title="How?" %}}

How many apples are there if you add two apples to three apples? There are five apples. Likewise, $2x + 3x = 5x$.

Is there a simpler way of saying five apples and a banana? Not really. So you cannot simplify $5x + y$ any further.

{{% /details %}}

### Degree of a polynomial

We defined the degree of a term before. How do we define the degree of a polynomial? It is pretty simple: just look at the term with the highest degree.

{{% hbox %}}
{{% note Definition %}}
*The **degree** of a polynomial equals the highest degree of all terms.*

{{% note Example %}}

- $\hl{x^2} - 2x + 1$ has degree 2.
- $6v - \hl{ wv^3 } -5$ has degree 4.

{{% /hbox %}}

{{% details title="Simplify first!" %}}
Look at the following two polynomials:
`$$\begin{cases}
a^2+2a+4-a^2, \\
2a+4.
\end{cases}$$`

You might say the first polynomial has a degree of 2, and the second one has a degree of 1. This is confusing because those two polynomials are, in fact, equal! $$a^2+2a+4-a^2 = 2a+4. $$ So, to avoid confusion, we ***must simplify the polynomials first*** before measuring its degree.

{{% /details %}}

You can also work out the degree of a polynomial in terms of a single variable -- treat all other variables as plain numbers.

{{% hbox %}}
{{% note Example %}}
Polynomial $3x^2y - 7xy + 6$ has:

- degree of 2 in $x$ and
- degree of 1 in $y$.

{{% /hbox %}}

### Special names for polynomials

There are special categories for polynomials with specific degrees:

{{% hbox %}}
{{% note Definition %}}

- ***Linear** polynomials have degree 1.*
- ***Quadratic** polynomials have degree 2.*
- ***Cubic** polynomials have degree 3.*
- ***Quartic** polynomials have degree 4.*

{{% /hbox %}}

Polynomials with degrees higher than 4 do have names, for example, ***septic*** for degree 7. However, they are less common, so let's not worry about their names for now.

### Constant term

{{% hbox %}}
{{% note Definition %}}
*The **constant terms** of a polynomial are the terms with only numbers. In other words, any terms with degree 0 are constant terms.*

{{% note Example %}}

- $a^2 -3ab+6b-4$ has a constant term $-4$.
- $b^2-\sqrt{3}b+\sqrt{2}-1$ has two constant terms $\sqrt{2}-1$.

{{% note Example %}} For the polynomial $b^3 + 7a^2 - 3ab - 6$,

- the constant terms in $a$ are $b^3-6$, and
- the constant terms in $b$ are $7a^2-6$.

{{% /hbox %}}

### Arranging polynomials

It is often convenient to sort a polynomial neatly. Arranging a polynomial in ***ascending*** (increasing) order means listing the terms from the lowest to the highest in degree. On the other hand, arranging a polynomial in ***descending*** (decreasing) order means listing the terms from the highest to the lowest in degree. Many mathematicians arrange polynomials in descending order before working on them, but it is up to you.

{{% hbox %}}
{{% note Example %}}
Polynomial $-3+x^2-6x+x^3$ can be arranged as:

- $-3-6x+x^2+x^3$ (ascending)
- $x^3+x^2-6x-3$ (descending)

{{% /hbox %}}

## Practice Questions

1. Find the coefficients and the orders of the following term.
    1. $3x^4y^5$
    2. $-2a^3bc^2$

{{% details title="Answer" %}}

1.  
    1. Coefficient is 3, order is 9.
    2. Coefficient is -2, order is 7.

{{% /details %}}

2. Find the coefficients and the orders of $7p^2q^3$,
    1. in terms of $p$;
    2. in terms of $q$.

{{% details title="Answer" %}}

2.  
    1. Coefficient in $p$ is $7q^3$, order in $p$ is 2.
    2. Coefficient in $q$ is $7p^2$, order in $q$ is 3.

{{% /details %}}

3. Find the constant term and degree in $x$.
    1. $-x^2+5x-4$
    2. $5x^2+3xy^2+y^2$
    3. $y^2-2ay+6xy+x^3+4a$

{{% details title="Answer" %}}

3.  
    1. Constant term is $-4$, degree is 2.
    2. Constant term is $y^2$, degree is 2.
    3. Constant term is $y^2-2ay+4a$, degree is 3.

{{% /details %}}

4. Simplify the following polynomials and find their degrees.
    1. $x^4 + ax^3y + 2bxy^2 - 4bxy^2 + 3x^4$
    2. $3p^2 - 2pq + q - 2p^2 + p - p^2$

{{% details title="Answer" %}}

4.  
    1. $4x^4 + ax^3y - 2bxy^2$, degree is 5.
    2. $ -2pq + p + q $, degree is 2.

{{% /details %}}

5. Simplify and arrange the polynomials in descending order.
    1. $3x^2 - 12xy + 4 + 3x^2 - 2x + 5$
    2. $2x^2 + 2y^2 - 3xy + 4y^2 + 2xy - x^2$

{{% details title="Answer" %}}

5.  
    1. $6x^2 - 12xy - 2x + 9$.
    2. $x^2 + 6y^2 - xy$.

{{% /details %}}