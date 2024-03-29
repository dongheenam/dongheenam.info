---
title: "Multiplying Polynomials"
description: "How to use the distributive law to multiply polynomials with terms and other polynomials."
slug: "multiplying-polynomials"

date: 2020-05-16 17:25:30 +1000
lastMod: 2022-04-10 19:52:13.430 +1000

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - index notation
  - index law
  - distributive law

menu:
  math1:
    parent: Polynomials
    name: Multiplying
    weight: 13

weight: 13
---

## Introduction

In this lesson, we will learn:

- How to use the distributive law to multiply polynomials with terms and other polynomials.

## Indices and Index Laws

### Index notation

Before we start multiplying '$x$'s and '$y$'s, let's review indices first. Just like multiplication is repeated addition, the index notation is repeated multiplication.

{{% hbox %}}

{{% note Definition %}} *For a positive integer $m$ and a number $a$,* {{% mn %}}You can read $a^m$ 'a to the power of m', 'a to the m-th power', or 'a to the m(-th)'.{{% /mn %}}
$$a^m = \\underbrace{a \\times a \\times \\cdots \\times a}\_{m \\, \\text{times}}.$$

{{% /hbox %}}



{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-index.jpg" caption="Comparing multiplication with exponentiation" %}}

We call $a$ the ***base*** and $m$ the ***index*** (or ***exponent***, ***power***).

You may see $a^1=a$ for any $a$ because there is only one $a$ to multiply. Finally, there are a few special names for certain indices:

{{% hbox %}}
{{% note Definition %}}
*$a^2$ is read 'a **squared**'. $a^3$ is read 'a **cubed**'.*

{{% /hbox %}}

### Index laws

While we can always go back to the first principle, it is convenient to discover some patterns and work with them. When it comes to index notation, those patterns are called ***index laws***. There are quite a few of them, but we will only refer to what is relevant here.

{{% hbox %}}
{{% note Theorem %}}
For any positive integers $m$ and $n$, and any numbers $a$ and $b$,

\begin{align*}
  & a^m \cdot a^n = a^{m+n}, \cr
  & \left( a^m \right)^n = a^{m n}, \cr
  & (ab)^n = a^n b^n.
\end{align*}
{{% /hbox %}}


{{% details title="Proofs... sort of" %}}
Strictly speaking, they are not proofs but specific examples for each index law. You should still see why the index laws work, and you can easily expand the logic to full proof!

\begin{align*}
a^2 \times a^3
&= (\underbrace{a\times a}\_\text{2 times}) \times (\underbrace{a\times a\times a}\_\text{3 times}) \cr
&= \underbrace{a\times a \times a \times a \times a}\_\text{5 times}) \cr
&= a^5 = a^{2+3}.
\end{align*}

\begin{align*}
\left( a^2 \right)^3
&=( \underbrace{a\times a}\_\text{2 times}) )^3 \cr
&= ( \underbrace{ (\underbrace{a\times a}\_\text{2 times}) \times (\underbrace{a\times a}\_\text{2 times}) \times (\underbrace{a\times a}\_\text{2 times}) }\_\text{3 times}) \cr
&= (\underbrace{a\times a \times a \times a \times a \times a}\_\text{6 times}) \cr
&= a^6 = a^{2\times 3}.
\end{align*}

\begin{align*}
(a\times b)^3
&= (\underbrace{ (a\times b) \times (a\times b) \times (a\times b) }\_\text{3 times}) \cr
&= (\underbrace{a \times a \times a}\_\text{3 times}) \times (\underbrace{b \times b \times b }_\text{3 times}) \cr
&= a^3 b^3.
\end{align*}

{{% /details %}}

One final note before the fun stuff starts -- because the multiplication symbol $\times$ is quite bulky, we will often use '$\cdot$' to indicate multiplying.

{{% hbox %}}
{{% note Definition %}}
*The **'dot' symbol** $\boldsymbol{\cdot}$ means multiplying. In other words,*
$$ g\times h = g\cdot h = g h. $$

$g\cdot h$ is read as either 'g dot h', or simply 'g h'.
{{% /hbox %}}

## Multiplying Two Terms

We will start with multiplying a single term with another. Remember, keep practicing until you get used to the index laws!

{{% hbox %}}
{{% note Example %}}
Calculate $\left(-xy^2 \right)^2 \left(-3x^2y \right)$.

{{% note Solution %}}
Before multiplying two brackets together, we need to first calculate the power with the third index law $(ab)^n = a^n b^n$.
\begin{align*}
&\left(-xy^2 \right)^2 \left(-3x^2y \right) \cr
&= (-1)^{\hl 2} x^{\hl 2} y^{\hl 4} \times \left(-3x^2y \right) \cr
&= x^2 y^4 \times \left(-3x^2y \right).
\end{align*}
From here, we multiply them together with the first index law $a^m a^n = a^{m+n}$.
\begin{align*}
& x^2 y^4 \times \left(-3x^2y \right) \cr
&= -3 x^{\hl{2+2}} y^{\hl{4+1}} \cr
&= \boldsymbol{-3x^4y^5.}
\end{align*}

{{% /hbox %}}

Here is a bit more complicated example.

{{% hbox %}}
{{% note Example %}}
Simplify $-a^2b \left( -3a^2 b c^2 \right)^3$.

{{% note Solution %}}
{{% mn "ex1" "tips" %}}
(1) $(AB)^n = A^n B^n$<br>
(2) $A^m \cdot A^n = A^{m+n}$
{{% /mn %}}
\begin{align*}
&-a^2b \left( -3a^2 b c^2 \right)^3 \cr
&= -a^2b \times (-3)^{\hl 3} a^{\hl 6} b^{\hl 3} c^{\hl 6} \tag{1} \cr
&= (-1)\cdot(-3)^3 a^{\hl{2+6}} b^{\hl{1+3}} c^6 \tag{2} \cr
&= \boldsymbol{27a^8b^4c^6.}
\end{align*}

{{% /hbox %}}

{{% details title="Powers of $\boldsymbol{-1}$" %}}
If you observe the first few powers of $-1$:

\begin{alignat*}{2}
(-1)^1 & &&= -1 \cr
(-1)^2 &= (-1)^1 \cdot (-1) &&= +1 \cr
(-1)^3 &= (-1)^2 \cdot (-1) &&= -1 \cr
(-1)^4 &= (-1)^3 \cdot (-1) &&= +1 \cr
\vdots & & &
\end{alignat*}

you should be able to find:
- $(-1)^m = -1$ if $m$ is odd, and
- $(-1)^m = +1$ if $m$ is even.

So what is the value of $(-1)^{2020}$? Well, it is $+1$!
{{% /details %}}

Because you need to do many calculations at once, it is easy to make mistakes. One trick is to deal one thing at a time: calculate the signs first, then the coefficients, and finally the variables.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-mult.jpg" alt="Multiplying two complicated terms" %}}

Try [Practice Question](#practice-questions) 1 before moving on.

## Multiplying a Term with a Polynomial

Let's move on to how to calculate an expression of the form $(\text{term})\times(\text{polynomial})$.

{{% hbox %}}
{{% note Definition %}}
***Expanding** means to express many terms and polynomials multiplied together as a single polynomial.*
$$(x+y)(x+2y)^2 \xrightarrow{\text{expand}} x^3 + 5x^2y + 8xy^2 + 4y^3.$$
{{% /hbox %}}



{{% hbox %}}
{{% note Example %}}
Expand $3abc(a+4b-2c)$.

{{% note Solution %}}
Remember the distributive law? We will extend it a little bit to look like this:

$$ \hl{A}(B+C+D) = \hl{A}B + \hl{A}C + \hl{A}D. $$ 

So,
\begin{align*}
& \underline{3abc}(a+4b-2c) \cr
&= \underline{3abc}\cdot a + \underline{3abc}\cdot 4b + \underline{3abc}\cdot (-2c) \cr
&= \boldsymbol{3a^2bc + 12ab^2c - 6abc^2.}
\end{align*}

{{% /hbox %}}

Below is a bit more advanced question. Note I calculated $(-xy)^2$ first before using the distributive law.

{{% hbox %}}
{{% note Example %}}
Expand $(-xy)^2(3x^2-2y-4)$.

{{% note Solution %}}
{{% mn "ex2" "tips" %}}
(1) $(ab)^n = a^n b^n$<br>
(2) $A(B+C+D)=$ $ AB+AC+AD$
{{% /mn %}}
\begin{align*}
& (-xy)^2(3x^2-2y-4) \cr
&= \hl{(-1)^2x^2y^2} (3x^2-2y-4) \tag{1} \cr
&= \underline{x^2y^2} (3x^2-2y-4) \cr
&= \underline{x^2y^2}\cdot 3x^2 + \underline{x^2y^2}\cdot (-2y) + \underline{x^2y^2}\cdot(-4) \tag{2} \cr
&= \boldsymbol{3x^4y^2 - 2x^2y^3 - 4x^2y^2.}
\end{align*}

{{% /hbox %}}

Try [Practice Question](#practice-questions) 2 before moving on.

## Multiplying Two Polynomials

Multiplying one polynomial with another polynomial is very similar to multiplying with a term.

{{% hbox %}}
{{% note Example %}}
Expand $(a+3b)(2a-b)$.

{{% note Solution %}}
Because the distributive law $$ \hl{A}(B+C) = \hl{A}B + \hl{A}C $$ also works when $A$ is a polynomial, we can apply the distributive law to our question:

\begin{align*}
& \underline{(a+3b)}(2a-b) \cr
&= \underline{(a+3b)}\cdot 2a + \underline{(a+3b)}\cdot (-b) \cr
&= 2a(a+3b) - b(a+3b).
\end{align*}

Then, we can remove the brackets to finish the expansion.

\begin{align*}
& \underline{2a}(a+3b) -\underline{b}(a+3b) \cr
&= \underline{2a}\cdot a + \underline{2a}\cdot 3b -\underline{b}\cdot a -\underline{b}\cdot 3b \cr
&= 2a^2 + 6ab - ab - 3b^2 \cr
&= \boldsymbol{2a^2 + 5ab - 3b^2.}
\end{align*}

{{% /hbox %}}



{{% hbox %}}

{{% note Example %}}
Expand $(3x+2)(1+4x^2-3x)$.

{{% note Solution %}}
Before starting, let's focus on the second polynomial in the question: $1+4x^2-3x$. I usually sort them in descending order first because I make fewer errors this way:

\begin{align*}
& (3x+2)(1+4x^2-3x) \cr
&= (3x+2)(\hl{4x^2-3x+1}).
\end{align*}

Then we can expand the bracket, one by one:

\begin{align*}
& (3x+2)(4x^2-3x+1) \cr
&= (3x+2)\cdot 4x^2 + (3x+2)\cdot(-3x) + (3x+2) \cr
&= 4x^2(3x+2) - 3x(3x+2) + 3x+2 \cr
&= 4x^2\cdot 3x + 4x^2\cdot 2 - 3x\cdot 3x - 3x\cdot 2 + 3x + 2 \cr
&= 12x^3 + 8x^2 - 9x^2 - 6x + 3x + 2 \cr
&= \boldsymbol{12x^3 -x^2 -3x + 2.}
\end{align*}

{{% /hbox %}}

{{% details title="Shortcuts" %}}

Once you are used to expanding, you can save some time by expanding both brackets simultaneously. See the work below.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-mult2.jpg" alt="Faster ways to expand two brackets" %}}

{{% /details %}}

## Practice Questions

1. Calculate the following.
    1. $4pqr^2 \left(-2p^2q \right)^3$
    2. $\left( 6c^2 \right)^2 (-2cd^3)$
    3. $(-ab)^2 (-2a^3b)$
    4. $(-2x^4y^2z^3) (-3x^2y^2z^4)$

{{% details title="Answer" %}}

1.  1. $-32p^7q^4r^2$
    2. $-72c^5d^3$
    3. $-2a^5b^3$
    4. $6x^6y^4z^7$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
& 4pqr^2 \left(-2p^2q \right)^3 \cr
&= 4pqr^2 (-2)^{\hl 3} p^{\hl 6} q^{\hl 3} \cr
&= 4\cdot(-8)p^{\hl{1+6}}q^{\hl{1+3}}r^2 \cr
&= \boldsymbol{-32p^7q^4r^2.}
\end{align*}

{{% enum b %}}
\begin{align*}
& \left( 6c^2 \right)^2 (-2cd^3) \cr
&= 6^{\hl 2} c^{\hl 4} (-2cd^3) \cr
&= 36\cdot(-2) c^{\hl{4+1}} d^3 \cr
&= \boldsymbol{-72c^5d^3.}
\end{align*}

{{% enum c %}}
\begin{align*}
& (-ab)^2 (-2a^3b) \cr
&= (-1)^{\hl 2} a^{\hl 2} b^{\hl 2} (-2a^3b) \cr
&= -2 a^{\hl{2+3}} b^{\hl{2+1}} \cr
&= \boldsymbol{-2a^5b^3.}
\end{align*}

{{% enum d %}}
\begin{align*}
& (-2x^4y^2z^3) (-3x^2y^2z^4) \cr
&= (-2)\cdot(-3)x^{\hl{4+2}}y^{\hl{2+2}}z^{\hl{3+4}} \cr
&= \boldsymbol{6x^6y^4z^7.}
\end{align*}

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

{{% enum a %}}
\begin{align*}
& -\underline{s^2t} (t^2 + 1) \cr
&= -\underline{s^2t} \cdot t^2 -\underline{s^2t} \cdot 1 \cr
&= \boldsymbol{-s^2t^3 - s^2t.}
\end{align*}

{{% enum b %}}
\begin{align*}
& \underline{2a^2bc} (a-3b^2+2c) \cr
&= \underline{2a^2bc}\cdot a + \underline{2a^2bc}\cdot(-3b^2) + \underline{2a^2bc}\cdot 2c \cr
&= \boldsymbol{2a^3bc - 6a^2b^3c + 4a^2bc^2.}
\end{align*}

{{% enum c %}}
{{% mn q2c tips %}} (1) $(-2x)^3$ $=(-2)^3x^3$ $=-8x^3$ {{% /mn %}}
\begin{align*}
& (-2x)^3 (3x^2 - 2x + 4) \cr
&= \hl{-\underline{8x^3}} (3x^2 - 2x + 4) \tag{1} \cr
&= -\underline{8x^3}\cdot 3x^2 -\underline{8x^3}\cdot(-2x) -\underline{8x^3}\cdot 4 \cr
&= \boldsymbol{-24x^5 + 16x^4 - 32x^3.}
\end{align*}

{{% enum d %}}
{{% mn q2d tips %}} (2) $(-3x)(4y)$ $=-12xy$ {{% /mn %}}
\begin{align*}
& (-3x)(4y)(x^2-y^2) \cr
&= \hl{-\underline{12xy}}(x^2-y^2) \tag{2} \cr
&= -\underline{12xy}\cdot x^2 -\underline{12xy}\cdot(-y^2) \cr
&= \boldsymbol{-12x^3y + 12xy^3.}
\end{align*}

{{% /details %}}

3. Expand the following expressions.
    1. $(x+3)(2x+1)$
    2. $(2a-1)(a^2+3a)$
    3. $(6-x)(x^2+y^2)$
    4. $(x^2+x+1)(2x-3)$

{{% details title="Answer" %}} 

3. 
    1. $2x^2 + 7x + 3$
    2. $2a^3 + 5a^2 - 3a$
    3. $-x^3 + 6x^2 - xy^2 + 6y^2$
    4. $2x^3 - x^2 - x - 3$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
& (\underline{x+3})(2x+1) \cr
&= 2x(\underline{x+3}) + (\underline{x+3}) \cr
&= 2x^2 + 6x + x + 3 \cr
&= \boldsymbol{2x^2 + 7x + 3.}
\end{align*}

{{% enum b %}}
\begin{align*}
& (\underline{2a-1})(a^2+3a) \cr
&= a^2(\underline{2a-1}) + 3a(\underline{2a-1}) \cr
&= 2a^3 - a^2 + 6a^2 - 3a \cr
&= \boldsymbol{ 2a^3 + 5a^2 - 3a .}
\end{align*}

{{% enum c %}}
\begin{align*}
& (\underline{6-x})(x^2+y^2) \cr
&= x^2(\underline{6-x}) + y^2(\underline{6-x}) \cr
&= 6x^2-x^3 + 6y^2 - xy^2 \cr
&= \boldsymbol{ -x^3 + 6x^2 - xy^2 + 6y^2 .}
\end{align*}

{{% enum d %}}
\begin{align*}
& (x^2+x+1)(\underline{2x-3}) \cr
&= x^2(\underline{2x-3}) + x(\underline{2x-3}) + (\underline{2x-3}) \cr
&= 2x^3 - 3x^2 + 2x^2 - 3x + 2x - 3 \cr
&= \boldsymbol{ 2x^3 - x^2 - x - 3 .}
\end{align*}

{{% /details %}}

4. Expand the following expressions.
    1. $(2x-3y-1)(2x-y-3)$
    2. $(3x+x^3-1)(2x^2-x-6)$

{{% details title="Answer" %}} 

4.  1. $4x^2 -8xy + 3y^2 -8x + 10y + 3$
    2. $2x^5 - x^4 - 5x^2 - 17x + 6$

{{% note Solution %}}

{{% enum a %}}
\begin{align*}
& (\underline{2x-3y-1})(2x-y-3) \cr
&= 2x(\underline{2x-3y-1}) -y(\underline{2x-3y-1}) -3(\underline{2x-3y-1}) \cr
&= 4x^2 - 6xy - 2x - 2xy + 3y^2 + y -6x + 9y + 3 \cr
&= \boldsymbol{ 4x^2 -8xy + 3y^2 -8x + 10y + 3. }
\end{align*}

{{% enum b %}}
\begin{align*}
& (3x+x^3-1)(2x^2-x-6) \cr
&= (x^3+3x-1)(\underline{2x^2-x-6}) \cr
&= x^3(\underline{2x^2-x-6}) + 3x(\underline{2x^2-x-6}) - (\underline{2x^2-x-6}) \cr
&= 2x^5 - x^4 - 6x^3 + 6x^3 - 3x^2 - 18x - 2x^2 + x + 6 \cr
&= \boldsymbol{ 2x^5 - x^4 - 5x^2 - 17x + 6. }
\end{align*}

{{% /details %}}
