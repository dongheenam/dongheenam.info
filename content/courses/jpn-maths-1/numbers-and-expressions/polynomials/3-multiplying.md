---
title: "Multiplying Polynomials"
summary: "How to use the distributive law to multiply polynomials with terms and other polynomials."
slug: "multiplying-polynomials"

date: 2020-05-16 17:25:30 +1000
lastMod: 2020-12-06 15:23:50.557 +1100

type: docs
math: true
draft: false

tags:
  - algebra
  - polynomial
  - index notation
  - index law
  - distributive law
  - Year 10

menu:
  math1-numbers:
    parent: Polynomials
    name: Multiplying
    weight: 13

weight: 13
---

## Introduction

In this lesson, we will learn:
  - How to use the distributive law to multiply polynomials with terms and other polynomials.

### Links to Australian Curriculum

  - Mathematics Year 7
    - Extend and apply the laws and properties of arithmetic to algebraic terms and expressions [(ACMNA117)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11758&elaborations=true&cd=ACMNA177&searchTerm=ACMNA177#dimension-content).
  - Mathematics Year 8
    - Simplify algebraic expressions involving the four operations[(ACMNA192)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11759&elaborations=true&cd=ACMNA192&searchTerm=ACMNA192#dimension-content).
  - Mathematics Year 10
    - Simplify algebraic products and quotients using index laws [(ACMNA231)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA231).
    - Expand binomial products and factorise monic quadratic expressions using a variety of strategies [(ACMNA233)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA233).

## Indices and Index Laws

### Index notation

Before we start multiplying '$x$'s and '$y$'s, let's review on indices first. Just like multiplication is adding many times, the index notation is multiplying many times but written in a short way.

{{% note Definition %}}
For a positive integer $m$ and a number $a$, {{% mn %}}You can read $a^m$ as $a$ to the power of $m$, $a$ to the $m$-th power, or $a$ to the $m$(-th).{{% /mn %}}

$$a^m = \\underbrace{a \\times a \\times \\cdots \\times a}\_{m \\, \\text{times}}.$$

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-index.jpg" caption="Comparing multiplication with exponentiation" %}}

We call $a$ the *base* and $m$ the *index* (or exponent, power).

You may see that when there is only one $a$ to multiply, it just becomes itself, so $a^1=a$ for any $a$. Finally, there are a few special names for certain indices:

{{% note Definition %}}
$a^2$ is read as $a$ *squared*. $a^3$ is read as $a$ *cubed*.

### Index laws

While we can always go back to the first principle, it is convenient to discover some patterns and work with it. When it comes to index notation, those patterns are called *index laws*. There are quite a few of them, but we will only refer to what is relevant here.

{{% note Theorem %}}
For any positive integers $m$ and $n$, and any numbers $a$ and $b$,
  - $a^m a^n = a^{m+n}$,
  - $\\left( a^m \\right)^n = a^{m n}$,
  - $(ab)^n = a^n b^n$.

{{% details title="Proofs... sort of" %}}
Strictly speaking, they are not proofs but specific examples for each index law. You should still be able to see why the index laws work, and you can easily expand the logic to a full proof!

1. $a^2 a^3 = a^{2+3}$

\begin{align}
  a^2 \times a^3
  &= (\underbrace{a\times a}\_{2 \\, \text{times}}) \times (\underbrace{a\times a\times a}\_{3 \\, \text{times}})  \\\\
  &= \underbrace{a\times a \times a \times a \times a}\_{5 \\, \text{times}} \\\\
  &= a^5 = a^{2+3}.
\end{align}

2. $\\left( a^2 \\right)^3 = a^{2\times 3}$

\begin{align}
  \left( a^2 \right)^3 
  &=( \underbrace{a\times a}\_{2 \\, \text{times}} )^3 \\\\
  &= \underbrace{ \underbrace{a\times a}\_{2 \\, \text{times}} \times \underbrace{a\times a}\_{2 \\, \text{times}} \times \underbrace{a\times a}\_{2 \\, \text{times}} }\_{3 \\, \text{times}} \\\\
  &= \underbrace{a\times a \times a \times a \times a \times a}_{6 \\, \text{times}} \\\\
  &= a^6 = a^{2\times 3}.
\end{align}

3. $(ab)^3 = a^3 b^3$

\begin{align}
  (a\times b)^3 
  &= \underbrace{ (a\times b) \times (a\times b) \times (a\times b) }\_{3 \\, \text{times}} \\\\
  &= (\underbrace{a \times a \times a}\_{3 \\, \text{times}}) \times (\underbrace{b \times b \times b }\_{3 \\, \text{times}}) \\\\
  &= a^3 b^3.
\end{align}

{{% /details %}}

One final note before the fun stuff starts -- because the multiplication symbol $\times$ is quite bulky, we will often use '$\cdot$' to indicate multiplying.

{{% note Definition %}}
The *'dot' symbol* $\boldsymbol{\cdot}$ means multiplying. In other words,
$$ g\times h = g\cdot h = g h. $$

$g\cdot h$ is read as either *$g$ dot $h$*, or simply $g$ $h$.

## Multiplying Two Terms

We will start with multiplying a single term with another. It is very important you become very familiar with the three index laws. Remember, keep practicing until you get used to it!

{{% box %}}
{{% note Example %}}
Calculate $\left(-xy^2 \right)^2 \left(-3x^2y \right)$.

{{% note Solution %}}
Before multiplying two brackets together, we need to first calculate the power with the third index law $(ab)^n = a^n b^n$.

\begin{align}
  &\left(-xy^2 \right)^2 \left(-3x^2y \right) \\\\
  &= (-1)^{\hl 2} x^{\hl 2} y^{\hl 4} \times \left(-3x^2y \right) \\\\
  &= x^2 y^4 \times \left(-3x^2y \right).
\end{align}

From here, we multiply them together with the first index law $a^m a^n = a^{m+n}$.

\begin{align}
  & x^2 y^4 \times \left(-3x^2y \right) \\\\
  &= -3 x^{\hl{2+2}} y^{\hl{4+1}} \\\\
  &= \boldsymbol{-3x^4y^5.}
\end{align}

{{% /box %}}

Here is a bit more complicated example.

{{% box %}}
{{% note Example %}}
Simplify $-a^2b \\left( -3a^2 b c^2 \\right)^3$.

{{% note Solution %}}
{{% mn "ex1" "tips" %}}
$(1)$ $(ab)^n = a^n b^n$<br>
$(2)$ $a^m a^n = a^{m+n}$
{{% /mn %}}
\begin{align}
  &-a^2b \left( -3a^2 b c^2 \right)^3 \\\\
  &= -a^2b \times (-3)^{\hl 3} a^{\hl 6} b^{\hl 3} c^{\hl 6} \tag{1} \\\\
  &= (-1)\cdot(-3)^3 a^{\hl{2+6}} b^{\hl{1+3}} c^6 \tag{2} \\\\
  &= \boldsymbol{27a^8b^4c^6.}
\end{align}

{{% /box %}}

{{% details title="Powers of $\boldsymbol{-1}$" %}}
If you observe the first few powers of $-1$:

\begin{alignat}{2}
  (-1)^1 & &&= -1 \\\\
  (-1)^2 &= (-1)^1 \cdot (-1) &&= +1 \\\\
  (-1)^3 &= (-1)^2 \cdot (-1) &&= -1 \\\\
  (-1)^4 &= (-1)^3 \cdot (-1) &&= +1 \\\\
  \vdots &  &  &
\end{alignat}

you should be able to find:
  - $(-1)^m = -1$ if $m$ is odd, and
  - $(-1)^m = +1$ if $m$ is even.

So what is the value of $(-1)^{2020}$? Well, it is $+1$!
{{% /details %}}

Because you need to do quite a number of calculations, it is very easy to make mistakes. One trick is to deal one thing at a time: calculate the signs first, then the coefficients, and finally the variables.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-mult.jpg" caption="Multiplying two complicated terms" %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 1 before moving on.

## Multiplying a Term with a Polynomial

Let's move on to how to calculate an expression of the form $(\text{term})\times(\text{polynomial})$.

{{% note Definition %}}
*Expanding* means to express many terms and polynomials multiplied together as a single polynomial. For example,

$$(x+y)(x+2y)^2 \\xrightarrow{\text{expand}} x^3 + 5x^2y + 8xy^2 + 4y^3.$$

{{% box %}}
{{% note Example %}}
Expand $3abc(a+4b-2c)$.

{{% note Solution %}}
Remember the distributive law? We will extend it a little bit to look like this: $$ \hl{A}(B+C+D) = \hl{A}B + \hl{A}C + \hl{A}D. $$ So,

\begin{align}
  & \underline{3abc}(a+4b-2c) \\\\
  &= \underline{3abc}\cdot a + \underline{3abc}\cdot 4b + \underline{3abc}\cdot (-2c) \\\\
  &= \boldsymbol{3a^2bc + 12ab^2c - 6abc^2.}
\end{align}

{{% /box %}}

Below is a bit more advanced question. Note I calculated $(-xy)^2$ first before using the distributive law.

{{% box %}}
{{% note Example %}}
Expand $(-xy)^2(3x^2-2y-4)$.

{{% note Solution %}}
{{% mn "ex2" "tips" %}}
$(1)$ $(ab)^n = a^n b^n$<br>
$(2)$ $A(B+C+D)=$ $ AB+AC+AD$
{{% /mn %}}
\begin{align}
  & (-xy)^2(3x^2-2y-4) \\\\
  &= \hl{(-1)^2x^2y^2} (3x^2-2y-4) \tag{1} \\\\
  &= \underline{x^2y^2} (3x^2-2y-4) \\\\
  &= \underline{x^2y^2}\cdot 3x^2 + \underline{x^2y^2}\cdot (-2y) + \underline{x^2y^2}\cdot(-4) \tag{2} \\\\
  &= \boldsymbol{3x^4y^2 - 2x^2y^3 - 4x^2y^2.}
\end{align}

{{% /box %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 2 before moving on.

## Multiplying Two Polynomials

Multiplying one polynomial with another polynomial is very similar to multiplying with a term.

{{% box %}}
{{% note Example %}}
Expand $(a+3b)(2a-b)$.

{{% note Solution %}}
Because the distributive law $$ \\hl{A}(B+C) = \\hl{A}B + \\hl{A}C $$ also works when $A$ is a polynomial, we can apply the distributive law to our question:

\begin{align}
  & \underline{(a+3b)}(2a-b) \\\\
  &= \underline{(a+3b)}\cdot 2a + \underline{(a+3b)}\cdot (-b) \\\\
  &= 2a(a+3b) - b(a+3b).
\end{align}

Then, we can remove the brackets to finish the expansion.

\begin{align}
  & \underline{2a}(a+3b) -\underline{b}(a+3b) \\\\
  &= \underline{2a}\cdot a + \underline{2a}\cdot 3b -\underline{b}\cdot a -\underline{b}\cdot 3b \\\\
  &= 2a^2 + 6ab - ab - 3b^2 \\\\
  &= \boldsymbol{2a^2 + 5ab - 3b^2.}
\end{align}

<br>

{{% note Example %}}
Expand $(3x+2)(1+4x^2-3x)$.

{{% note Solution %}}
Before starting, let's focus on the second polynomial in the question: $1+4x^2-3x$. I usually sort them in the descending order first because I make less errors this way:

\begin{align}
  & (3x+2)(1+4x^2-3x) \\\\
  &= (3x+2)(\hl{4x^2-3x+1}).
\end{align}

Then we can expand the bracket, one by one:

\begin{align}
  & (3x+2)(4x^2-3x+1) \\\\
  &= (3x+2)\cdot 4x^2 + (3x+2)\cdot(-3x) + (3x+2) \\\\
  &= 4x^2(3x+2) - 3x(3x+2) + 3x+2 \\\\
  &= 4x^2\cdot 3x + 4x^2\cdot 2 - 3x\cdot 3x - 3x\cdot 2 + 3x + 2 \\\\
  &= 12x^3 + 8x^2 - 9x^2 - 6x + 3x + 2 \\\\
  &= \boldsymbol{12x^3 -x^2 -3x + 2.}
\end{align}


{{% /box %}}

{{% details title="Shortcuts" %}}

Once you are used to expanding, you can save some time by expanding both brackets at the same time. See the work below.

{{% figure class="fullwidth" src="courses/jpn-maths-1/numbers-and-expressions/poly-mult2.jpg" alt="Faster ways to expand two brackets" %}}

{{% /details %}}


## Practice Questions

1. Calculate the following.
    1. $4pqr^2 \left(-2p^2q \right)^3$
    2. $\left( 6c^2 \right)^2 (-2cd^3)$
    3. $(-ab)^2 (-2a^3b)$
    4. $(-2x^4y^2z^3) (-3x^2y^2z^4)$

{{% details title="Answer" %}}
1. 
    1. $-32p^7q^4r^2$
    2. $-72c^5d^3$
    3. $-2a^5b^3$
    4. $6x^6y^4z^7$

{{% note Solution %}}

\begin{align}
\text{a.} \quad & 4pqr^2 \left(-2p^2q \right)^3 \\\\
  &= 4pqr^2 (-2)^{\hl 3} p^{\hl 6} q^{\hl 3} \\\\
  &= 4\cdot(-8)p^{\hl{1+6}}q^{\hl{1+3}}r^2 \\\\
  &= \boldsymbol{-32p^7q^4r^2.}
\end{align}

\begin{align}
\text{b.} \quad & \left( 6c^2 \right)^2 (-2cd^3) \\\\
  &= 6^{\hl 2} c^{\hl 4} (-2cd^3) \\\\
  &= 36\cdot(-2) c^{\hl{4+1}} d^3 \\\\
  &= \boldsymbol{-72c^5d^3.}
\end{align}

\begin{align}
\text{c.} \quad & (-ab)^2 (-2a^3b) \\\\
  &= (-1)^{\hl 2} a^{\hl 2} b^{\hl 2} (-2a^3b) \\\\
  &= -2 a^{\hl{2+3}} b^{\hl{2+1}} \\\\
  &= \boldsymbol{-2a^5b^3.}
\end{align}

\begin{align}
\text{d.} \quad & (-2x^4y^2z^3) (-3x^2y^2z^4) \\\\
  &= (-2)\cdot(-3)x^{\hl{4+2}}y^{\hl{2+2}}z^{\hl{3+4}} \\\\
  &= \boldsymbol{6x^6y^4z^7.}
\end{align}

{{% /details %}}

2. Expand the following.
    1. $-s^2t (t^2 + 1)$
    2. $2a^2bc(a-3b^2+2c)$
    3. $(-2x)^3 (3x^2 - 2x + 4)$
    4. $(-3x)(4y)(x^2-y^2)$

{{% details title="Answer" %}}
2. 
    1. $-s^2t^3 - s^2t$
    2. $2a^3bc - 6a^2b^3c + 4a^2bc^2$
    3. $-24x^5 + 16x^4 - 32x^3$
    4. $-12x^3y + 12xy^3$

{{% note Solution %}}

\begin{align}
\text{a.} \quad & -\underline{s^2t} (t^2 + 1) \\\\
  &= -\underline{s^2t} \cdot t^2 -\underline{s^2t} \cdot 1 \\\\
  &= \boldsymbol{-s^2t^3 - s^2t.}
\end{align}

\begin{align}
\text{b.} \quad & \underline{2a^2bc} (a-3b^2+2c) \\\\
  &= \underline{2a^2bc}\cdot a + \underline{2a^2bc}\cdot(-3b^2) + \underline{2a^2bc}\cdot 2c \\\\
  &= \boldsymbol{2a^3bc - 6a^2b^3c + 4a^2bc^2.}
\end{align}

{{% mn q2c tips %}} $(1)$ $(-2x)^3$ $=(-2)^3x^3$ $=-8x^3$ {{% /mn %}}
\begin{align}
\text{c.} \quad & (-2x)^3 (3x^2 - 2x + 4) \\\\
  &= \hl{-\underline{8x^3}} (3x^2 - 2x + 4) \tag{1} \\\\
  &= -\underline{8x^3}\cdot 3x^2 -\underline{8x^3}\cdot(-2x) -\underline{8x^3}\cdot 4 \\\\
  &= \boldsymbol{-24x^5 + 16x^4 - 32x^3.}
\end{align}

{{% mn q2d tips %}} $(2)$ $(-3x)(4y)$ $=-12xy$ {{% /mn %}}
\begin{align}
\text{d.} \quad & (-3x)(4y)(x^2-y^2) \\\\
  &= \hl{-\underline{12xy}}(x^2-y^2) \tag{2} \\\\
  &= -\underline{12xy}\cdot x^2 -\underline{12xy}\cdot(-y^2) \\\\
  &= \boldsymbol{-12x^3y + 12xy^3.}
\end{align}

{{% /details %}}

3. Expand the following expressions.
    1. $(x+3)(2x+1)$
    2. $(2a-1)(a^2+3a)$
    3. $(6-x)(x^2+y^2)$
    4. $(x^2+x+1)(2x-3)$

4. Expand the following expressions.
    1. $(2x-3y-1)(2x-y-3)$
    2. $(3x+x^3-1)(2x^2-x-6)$

{{% details title="Answer" %}}
3. 
    1. $2x^2 + 7x + 3$
    2. $2a^3 + 5a^2 - 3a$
    3. $-x^3 + 6x^2 - xy^2 + 6y^2$
    4. $2x^3 - x^2 - x - 3$
4. 
    1. $4x^2 -8xy + 3y^2 -8x + 10y + 3$
    2. $2x^5 - x^4 - 5x^2 - 17x + 6$

{{% note Solution %}}

3. 

\begin{align}
\text{a.} \quad & (\underline{x+3})(2x+1) \\\\
  &= 2x(\underline{x+3}) + (\underline{x+3}) \\\\
  &= 2x^2 + 6x + x + 3 \\\\
  &= \boldsymbol{2x^2 + 7x + 3.}
\end{align}

\begin{align}
\text{b.} \quad & (\underline{2a-1})(a^2+3a) \\\\
  &= a^2(\underline{2a-1}) + 3a(\underline{2a-1}) \\\\
  &= 2a^3 - a^2 + 6a^2 - 3a \\\\
  &= \boldsymbol{ 2a^3 + 5a^2 - 3a .}
\end{align}

\begin{align}
\text{c.} \quad & (\underline{6-x})(x^2+y^2) \\\\
  &= x^2(\underline{6-x}) + y^2(\underline{6-x}) \\\\
  &= 6x^2-x^3 + 6y^2 - xy^2 \\\\
  &= \boldsymbol{ -x^3 + 6x^2 - xy^2 + 6y^2 .}
\end{align}

\begin{align}
\text{d.} \quad & (x^2+x+1)(\underline{2x-3}) \\\\
  &= x^2(\underline{2x-3}) + x(\underline{2x-3}) + (\underline{2x-3}) \\\\
  &= 2x^3 - 3x^2 + 2x^2 - 3x + 2x - 3 \\\\
  &= \boldsymbol{ 2x^3 - x^2 - x - 3 .}
\end{align}

4. 

\begin{align}
\text{a.} \quad & (\underline{2x-3y-1})(2x-y-3) \\\\
  &= 2x(\underline{2x-3y-1}) -y(\underline{2x-3y-1}) -3(\underline{2x-3y-1}) \\\\
  &= 4x^2 - 6xy - 2x - 2xy + 3y^2 + y -6x + 9y + 3 \\\\
  &= \boldsymbol{ 4x^2 -8xy + 3y^2 -8x + 10y + 3. }
\end{align}

\begin{align}
\text{b.} \quad & (3x+x^3-1)(2x^2-x-6) \\\\
  &= (x^3+3x-1)(\underline{2x^2-x-6}) \\\\
  &= x^3(\underline{2x^2-x-6}) + 3x(\underline{2x^2-x-6}) - (\underline{2x^2-x-6}) \\\\
  &= 2x^5 - x^4 - 6x^3 + 6x^3 - 3x^2 - 18x - 2x^2 + x + 6 \\\\
  &= \boldsymbol{ 2x^5 - x^4 - 5x^2 - 17x + 6. }
\end{align}

{{% /details %}}