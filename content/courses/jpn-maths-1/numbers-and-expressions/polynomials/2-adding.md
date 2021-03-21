---
title: "Adding and Subtracting Polynomials"
description: "How to add and subtract polynomials. How to simplify polynomials using the three laws of arithmetic."
slug: "adding-polynomials"

date: 2020-05-14 16:24:18 +1000
lastMod: 2020-12-06 15:21:17.556 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - distributive law
  - Year 9
  - Year 10

menu:
  math1-numbers:
    parent: Polynomials
    name: Adding and Subtracting
    weight: 12

weight: 12
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 7
  - Extend and apply the laws and properties of arithmetic to algebraic terms and expressions [(ACMNA117)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11758&elaborations=true&cd=ACMNA177&searchTerm=ACMNA177#dimension-content).
- Mathematics Year 8
  - Simplify algebraic expressions involving the four operations[(ACMNA192)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11759&elaborations=true&cd=ACMNA192&searchTerm=ACMNA192#dimension-content).

{{% /details %}}

## Introduction

In this lesson, we will learn:

- How to add and subtract polynomials.
- How to simplify polynomials using the three laws of arithmetic.

## The Laws of Arithmetic

These are the three laws of arithmetic that you may remember from earlier years:

{{% note Definition %}}

- The _commutative law_ tells you can swap the order of adding or multiplying.
- The _associative law_ tells you can group the items when adding or multiplying.
- The _distributive law_ tells multiplying the sum is the same as summing the multiplied.

We can describe the three laws in a more mathematical way. For every polynomial $A$, $B$, and $C$,

- Commutative law
  - for adding: $A+B=B+A$
  - for multiplying: $A\times B=B\times A$
- Associative law
  - for adding: $(A+B)+C=A+(B+C)$
  - for multiplying: $(A\times B)\times C = A\times (B\times C)$
- Distributive law
  - $A(B+C)=AB+AC$
  - $(A+B)C=AC+BC$

I believe many of you are already using the first two laws -- have a look at the example below.

{{% box %}}
{{% note Example %}}
Simplify $3a^2 + 7ab + 6b^2 - 3ba - b^2 + 6$.

{{% note Solution %}}
{{% mn "ex1" "tips" %}}
$(1)$ Commutative law for multiplying<br>
$(2)$ Commutative law for adding<br>
$(3)$ Associative law for adding
{{% /mn %}}

$$
\begin{align}
  & 3a^2 + 7ab + 6b^2 - 3ba - b^2 + 6 \\\\
  &= 3a^2 + 7ab + 6b^2 - 3\hl{ab} - b^2 + 6 \tag{1} \\\\
  &= 3a^2 + 7ab \hl{- 3ab + 6b^2} - b^2 + 6 \tag{2} \\\\
  &= 3a^2 + \hl{(7ab - 3ab)} + \hl{(6b^2 - b^2)} + 6 \tag{3} \\\\
  &= \boldsymbol{3a^2 + 4ab + 5b^2 + 6.}
\end{align}
$$

{{% /box %}}

{{% details title="Swapping terms" %}}
In the example above, when I swapped the order of $6b^2 - 3ab$, I carried the sign with it. Be aware that associative and commutative laws _do not work for subtraction or division_: $6b^2 - 3ab$ is not equal to $3ab - 6b^2$ in general. Instead, think of them as the _sum_ of $6b^2$ and $-3ab$:

$$ 6b^2 - 3ab = 6b^2 + (-3ab) = (-3ab) + 6b^2. $$

Likewise, you can use the laws to divisions like this way:

$$ 6b^2 \div 3ab = 6b^2 \times \dfrac{1}{3ab} = \dfrac{1}{3ab} \times 6b^2. $$

{{% /details %}}

The distributive law, on the other hand, might need some revision and training.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-dist-law.jpg" id="dist-law" caption="Visual explanation of the distributive law" %}}

## Simple Addition and Subtraction

When you add or subtract two polynomials, you need to simplify the result by [collecting the like terms](../terms-and-polynomials#like-terms).

{{% box %}}
{{% note Example %}}
For $A=3x^2-2x+1$ and $B=2x^2+7x-3$, calculate $A+B$ and $A-B$.

{{% note Solution %}}
{{% mn "ex2" "tips" %}}
$(1)$ $- (\Box + \bigtriangleup - \bigcirc) = - \Box - \bigtriangleup + \bigcirc$
{{% /mn %}}

$$
\begin{align}
  A + B &= (3x^2-2x+1) + (2x^2+7x-3) \\\\
  &= 3x^2-2x+1 + 2x^2+7x-3 \\\\
  &= (3x^2 + 2x^2) + (-2x+7x) + (1-3) \\\\
  &= \boldsymbol{5x^2+5x-2.}
\end{align}
$$

$$
\begin{align}
  A - B &= (3x^2-2x+1) - (2x^2+7x-3) \\\\
  &= 3x^2-2x+1 \hl{-2x^2-7x+3} \tag{1} \\\\
  &= (3x^2 - 2x^2) + (-2x-7x) + (1+3) \\\\
  &= \boldsymbol{x^2-9x+4.}
\end{align}
$$

{{% /box %}}

{{% details title="Removing negative brackets" %}}

This is very easy to miss: you can get rid of $+(...)$ without doing anything, but taking $-(...)$ needs attention. From the example above, you should be able to notice
$$ - (2x^2+7x-3) = \hl{-}2x^2 \hl{-}7x \hl{+}3. $$

In general, when you take off $-(...)$, _the signs of the terms inside the bracket change_.

{{% /details %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 1 before moving on.

## Advanced Addition and Subtraction

Sometimes, you need to simplify much more complicated expressions, like below.

{{% box %}}
{{% note Example %}}
When $A=x^2+3y^2-2xy$, $B=y^2+3xy-2x^2$, and $C=-3x^2+xy-4y^2$, calculate the following:

1. $-3A+2B-C$
2. $3(2A+C)-2 \\{ 2(A+C) - (B-C) \\}$

{{% note Solution %}}

1. The first step is substitution, which is pretty straightforward:

\begin{align}
-3A+2B-C
&= -3(x^2+3y^2-2xy) \\\\
&\phantom{=}+2(y^2+3xy-2x^2) \\\\
&\phantom{=}-(-3x^2+xy-4y^2).
\end{align}

Then we use the distributive law to expand the brackets. Be careful with the signs!

\begin{align}
-3(x^2+3y^2-2xy) &= \hl{-}3x^2 \hl{-}9y^2 \hl{+}6xy, \\\\
2(y^2+3xy-2x^2) &= \phantom{+}2y^2 + 6xy - 4x^2, \\\\
-(-3x^2+xy-4y^2) &= \hl{+}3x^2 \hl{-}xy \hl{+}4y^2.
\end{align}

Finally, combine the results and collect the like terms to simplify the answer.

\begin{align}
&-3x^2 -9y^2 +6xy + 2y^2 + 6xy - 4x^2 + 3x^2 -xy +4y^2 \\\\
&= (-3-4+3)x^2 + (6+6-1)xy + (-9+2+4)y^2 \\\\
&= \boldsymbol{-4x^2+11xy-3y^2.}
\end{align}

---

2. You can substitute the expressions $A$, $B$, and $C$ straight in, but that will make things horribly complicated and long. It is much better to simplify the given expression first and then substitute.

\begin{align}
& 3(2A+C)-2 \left\\{ 2(A+C) - (B-C) \right\\} \\\\
&= 3(2A+C) - 2( 2A+2C \hl{-} B \hl{+} C ) \\\\
&= 3(2A+C) - 2(2A-B+3C) \\\\
&= 6A+3C \hl{-}4A \hl{+}2B \hl{-}6C \\\\
&= 2A + 2B - 3C.
\end{align}

It looks much simpler now. Let's substitute and simplify.

\begin{align}
& 2A + 2B - 3C \\\\
&= 2(x^2+3y^2-2xy) + 2(y^2+3xy-2x^2) - 3(-3x^2+xy-4y^2) \\\\
&= 2x^2+6y^2-4xy + 2y^2+6xy-4x^2 \hl{+}9x^2 \hl{-}3xy \hl{+}12y^2 \\\\
&= (2-4+9)x^2 + (-4+6-3)xy + (6+2+12)y^2 \\\\
&= \boldsymbol{ 7x^2 - xy + 20y^2 .}
\end{align}

{{% /box %}}

{{% details title="Order of the brackets" %}}
When you have multiple brackets, like:
$$ 1 \times [ 2 + \\{ 3 \times ( 4 + 5 ) \\} ], $$

make sure you remove the _innermost_ bracket first. For this example, you calculate $(...)$ first, then $\\{...\\}$, and finally $[...]$.
\begin{align}
&1 \times [ 2 + \\{ 3 \times \hl{( 4 + 5 )} \\} ] \\\\
&= 1 \times \\{2 + \hl{(3 \times 9)} \\} \\\\
&= 1 \times \hl{(2 + 27)} \\\\
&= 1 \times 29 \\\\
&= 29.
\end{align}

Note how the brackets change their shapes, depending on the number of brackets inside them! It will help you keep track of the order because you only remove $(...)$ this way.

{{% /details %}}

## Practice Questions

1. If $A=x^2 + 3y^2 - 2xy$ and $B=y^2+3xy-2x^2$, calculate:
   1. $A+B$
   2. $A-B$
2. If $A=−2x^3+4x^2y+5y^3$, $B=x^2y−3xy^2+2y^3$, and $C=3x^3−2x^2y$, show the following in terms of $x$ and $y$.
   1. $3(A-2B) - 2(A-2B-C)$
   2. $3A - 2\\{(2A-B)-(A-3B) \\} - 3C$

{{% details title="Answer" %}}

1.  1. $-x^2 + xy + 4y^2$
    2. $3x^2 - 5xy + 2y^2$
2.  1. $4x^3 - 2x^2y + 6xy^2 + y^3$
    2. $-11x^3 + 6x^2y + 12xy^2 -3y^3$

{{% note "Solution" %}}

1. We can directly substitute the polynomials.

\begin{align}
\text{a.} \quad & A+B \\\\
&= (x^2 + 3y^2 - 2xy) + (y^2+3xy-2x^2) \\\\
&= (1-2)x^2 + (-2+3)xy + (3+1)y^2 \\\\
&= \boldsymbol{-x^2+xy+4y^2.}
\end{align}

\begin{align}
\text{b.} \quad & A-B \\\\
&= (x^2 + 3y^2 - 2xy) - (y^2+3xy-2x^2) \\\\
&= x^2 + 3y^2 - 2xy \hl{-y^2-3xy+2x^2} \\\\
&= (x^2 + 2x^2) + (-2xy - 3xy) + (3y^2 - y^2) \\\\
&= \boldsymbol{3x^2-5xy+2y^2.}
\end{align}

2. We will simplify both expressions first before substitution.

\begin{align}
\text{a.} \quad &3(A-2B) - 2(A-2B-C) \\\\
&= 3A - 6B \hl{-2A+4B+2C} \\\\
&= A - 2B + 2C \\\\
&= (−2x^3+4x^2y+5y^3) - 2(x^2y−3xy^2+2y^3) + 2(3x^3−2x^2y) \\\\
&= -2x^3 + 4x^2y + 5y^3 \hl{-2x^2y + 6xy^2 - 4y^3} + 6x^3 - 4x^2y \\\\
&= (-2+6)x^3 + (4-2-4)x^2y + 6xy^2 + (5-4)y^3 \\\\
&= \boldsymbol{4x^3 - 2x^2y + 6xy^2 + y^3.}
\end{align}

\begin{align}
\text{b.} \quad &3A - 2\\{(2A-B)-(A-3B) \\} - 3C \\\\
&= 3A - 2( 2A-B \hl{-A+3B} ) - 3C \\\\
&= 3A - 2(A+2B) - 3C \\\\
&= 3A - 2A - 4B - 3C \\\\
&= A - 4B - 3C \\\\
&= (−2x^3+4x^2y+5y^3) - 4(x^2y−3xy^2+2y^3) - 3(3x^3−2x^2y) \\\\
&= −2x^3+4x^2y+5y^3 \hl{- 4x^2y + 12xy^2 - 8y^3} \hl{- 9x^3 + 6x^2y} \\\\
&= (-2-9)x^3 + (4-4+6)x^2y + 12xy^2 + (5-8)y^3 \\\\
&= \boldsymbol{-11x^3 + 6x^2y + 12xy^2 - 3y^3.}
\end{align}

{{% /details %}}

3. When you add $3x^2 - 2x + 1$ to a polynomial, it becomes $x^2 - x$. Find this polynomial.
4. Nina attempts to solve a question by adding $a^3 + 2a^2b - 5ab^2 + 5b^3$ to a polynomial, but she instead subtracts $a^3 + 2a^2b - 5ab^2 + 5b^3$ from the polynomial and gets $-a^3 - 4a^2b + 10ab^2 - 9b^3$. Find the correct answer.

{{% details title="Answer" %}} 3. $- 2x^2 + x - 1$ 4. $a^3 + b^3$

{{% note "Solution" %}}

3. Let's call the polynomial $P$. $P$ add $3x^2 - 2x + 1$ equals $x^2 - x$, so
   $$P + (3x^2 - 2x + 1) = x^2 - x.$$

You can solve the equation for $P$:
\begin{alignat}{2}
& P + (3x^2 - 2x + 1) &&= x^2 - x \\\\
\implies & P &&= x^2 -x \hl{ -(3x^2 - 2x + 1) } \\\\
\implies & P &&\boldsymbol{= -2x^2 + x - 1.}
\end{alignat}
So the polynomial is $-2x^2 + x - 1$.

---

4. Let's call the polynomial $Q$. Nina originally wanted to calculate

$$Q + (a^3 + 2a^2b - 5ab^2 + 5b^3).$$

Instead, she calculated

$$Q - (a^3 + 2a^2b - 5ab^2 + 5b^3)$$

and got $-a^3 - 4a^2b + 10ab^2 - 9b^3$. In other words,

$$Q - (a^3 + 2a^2b - 5ab^2 + 5b^3) = -a^3 - 4a^2b + 10ab^2 - 9b^3.$$

We can solve this equation to get $Q$.

\begin{align}
Q &- (a^3 + 2a^2b - 5ab^2 + 5b^3) = -a^3 - 4a^2b + 10ab^2 - 9b^3 \\\\
\implies Q &= -a^3 - 4a^2b + 10ab^2 - 9b^3 \hl{+(a^3 + 2a^2b - 5ab^2 + 5b^3)} \\\\
&= -2a^2b + 5ab^2 - 4b^3.
\end{align}

Therefore what Nina originally wanted to calculate was:

\begin{align}
&Q + (a^3 + 2a^2b - 5ab^2 + 5b^3) \\\\
&= (-2a^2b + 5ab^2 - 4b^3) + (a^3 + 2a^2b - 5ab^2 + 5b^3) \\\\
&= \boldsymbol{a^3 + b^3.}
\end{align}

{{% /details %}}
