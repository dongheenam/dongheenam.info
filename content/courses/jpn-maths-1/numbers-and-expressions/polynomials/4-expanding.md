---
title: "Expanding Polynomials with Identities"
description: "How to expand expressions with quadratic identities. How to expand expressions with cubic identities."
slug: "expanding-identities"

date: 2020-05-22 17:28:25 +1000
lastMod: 2022-04-10 21:09:35.894 +1000

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - polynomial identity

menu:
  math1:
    parent: Polynomials
    name: Expanding with Identities
    weight: 14

weight: 14
---

## Introduction

Expanding expressions is fun but can be horribly painful. There are useful formulae we can use to speed up the process.

In this lesson, we will learn:

- How to expand expressions with quadratic identities.
- How to expand expressions with cubic identities.{{% sn cubic %}}Cubic identities are part of the Mathematics II course, but we will introduce them here along with quadratic identities.{{% /sn %}}

## Identities and Proofs

Identities are a special kind of equations. The biggest difference is that, while equations can be ***sometimes*** true, identities should be ***always*** true.

{{% hbox %}}
{{% note Definition %}}
*An **identity** is an equation that is always true.*
{{% /hbox %}}

For example, $ x - 2 = 0 $ is an equation. We know that there is a specific value of $x$ that satisfies the equation, that is, $x=2$. Finding the values of $x$ that make the equation true is called ***solving for*** $x$.

This is an example of an identity: $ x^1 \times x^2 = x^3 $ (this is from one of the index laws!). Regardless of the value of $x$, this identity is ***always*** true.

An identity is a mathematical argument. Like in conversation and writing, to make sure an argument is true, you need to prove it. Same in mathematics: if we want to say a mathematical argument is true, we need to ***mathematically*** prove it!

{{% hbox %}}
{{% note Definition %}}
*A **mathematical proof** is a set of logic that shows a mathematical argument (identity, law, theorem, ...) is true.*
{{% /hbox %}}

So how do we prove an identity? The most straightforward way is to manipulate the left-hand side to make it identical to the right-hand side. We have already done something similar for [the index laws](../multiplying-polynomials/#index-laws). Scroll down to see more examples of simple proofs.

## Quadratic Identities

Here are some of the useful identities for expanding brackets. Note that the results are all quadratic polynomials. That is why they are called, well, _quadratic_ identities.

{{% hbox %}}
{{% note "Identity 1" %}} ***Perfect squares***.
`\begin{align*}
(a+b)^2 &= a^2 + 2ab + b^2, \tag{1-1} \\
(a-b)^2 &= a^2 - 2ab + b^2. \tag{1-2}
\end{align*}`
{{% note "Identity 2" %}} ***Difference of squares***.
$$ (a+b)(a-b) = a^2 - b^2. \tag{2} $$
{{% note "Identity 3" %}} ***Product of two linear polynomials***.
`\begin{align*}
(x+a)(x+b) &= x^2 + (a+b)x + ab, \tag{3-1} \\
(ax+b)(cx+d) &= acx^2 + (ad+bc)x + bd. \tag{3-2}
\end{align*}`

{{% /hbox %}}

{{% details title="Proofs" %}}
We will expand the left-hand sides to see if we arrive on the other side. Once we get to the other side, put a little box symbol{{% sn box %}}Mathematicians often use a box symbol $\Box$ to indicate the end of a proof. Pretty cool, isn't it!{{% /sn %}} to indicate the proof is finished!

{{% enum 1 %}}
`\begin{align*}
(a+b)^2 &= (\underline{a+b})(a+b) \\
&= a(\underline{a+b}) + b(\underline{a+b}) \\
&= a^2 + ab + ab + b^2 \\
&= a^2 + 2ab + b^2. && \Box
\end{align*}`

Switch $b$ with $-b$ and it becomes the proof for $(a-b)^2=a^2-2ab+b^2$.

{{% enum 2 %}}
`\begin{align*}
(\underline{a+b})(a-b) &= a(\underline{a+b}) - b(\underline{a+b}) \\
&= a^2 + ab - ab - b^2 \\
&= a^2 - b^2. && \Box
\end{align*}`

{{% enum 3 %}}
`\begin{align*}
& (\underline{ax+b})(cx+d) \\
&= cx (\underline{ax+b}) + d (\underline{ax+b}) \\
&= ac x^2 + bc x + ad x + bd \\
&= ac x^2 + (bc+ad)x + bd. && \Box
\end{align*}`

When $a=c=1$, we achieve $(x+a)(x+b)=x^2+(a+b)x+ab$.

{{% /details %}}

Let's look at examples where the identities are in action.

{{% hbox %}}
{{% note Example %}}
Expand:
1. $(a+2)^2$
2. $(3x-4y)^2$
3. $(2p+q)(2p-q)$
4. $(x+3)(x-5)$
5. $(4x+y)(7y-3x)$

{{% note Solution %}}

{{% enum 1 %}}
{{% mn ex1 tips %}}
(1) Identity 1-1<br>
{{% /mn %}}
`\begin{align*}
& (a+2)^2 \\
&= a^2 + 2\cdot a \cdot 2 + 2^2 \tag{1} \\
&= \boldsymbol{a^2 + 4a + 4. }
\end{align*}`
{{% enum 2 %}}
{{% mn ex2 tips %}}
(2) Identity 1-2
{{% /mn %}}
`\begin{align*}
& (3x-4y)^2 \\
&= (3x)^2 - 2\cdot 3x \cdot 4y + (4y)^2 \tag{2} \\
&= \boldsymbol{ 9x^2 - 24xy + 16y^2. }
\end{align*}`
{{% enum 3 %}}
{{% mn ex3 tips %}}
(3) Identity 2
{{% /mn %}}
`\begin{align*}
& (2p+q)(2p-q) \\
&= (2p)^2 - q^2 \tag{3} \\
&= \boldsymbol{ 4p^2 - q^2. }
\end{align*}`
{{% enum 4 %}}
{{% mn ex4 tips %}}
(4) Identity 3-1
{{% /mn %}}
`\begin{align*}
& (x+3)(x-5) \\
&= x^2 + (3-5)x + 3\cdot(-5) \tag{4} \\
&= \boldsymbol{ x^2 - 2x - 15. }
\end{align*}`
{{% enum 5 %}}
{{% mn ex5 tips %}}
(5) Rearrange polynomials to $(ax+b)(cx+d)$ form<br>
(6) Identity 3-2
{{% /mn %}}
`\begin{align*}
& (4x+y)(7y-3x) \\
&= (4x+y)(\hl{-3x+7y}) \tag{5} \\
&= 4\cdot(-3)x^2 + \left\{ 4\cdot 7y + y\cdot(-3) \right\} x + y\cdot 7y \tag{6} \\
&= \boldsymbol{ -12x^2 +25xy + 7y^2. }
\end{align*}`

{{% /hbox %}}

{{% details title="Alternative solution for Q5" %}}
In the solution above, we solved it as a polynomial of $x$. Of course, you can focus on $y$ and use the identity.

`\begin{align*}
(4x+y)(7y-3x) &= (\hl{y} + 4x)(7\hl{y}-3x) \\
&= 7\hl{y^2} + \{ -3x + 28x \}\hl{y} - 12x^2 \\
&= \boldsymbol{ 7y^2 + 25xy - 12x^2 }.
\end{align*}`

{{% /details %}}

Try [Practice Questions](#practice-questions) 1 and 2 before moving on.

## Cubic Identities

This is another set of identities that involve cubic polynomials. They are in fact a part of the Mathematics II curriculum, but we will put them together with quadratic identities. They are not that much more difficult!

{{% hbox %}}

{{% note "Identity 4" %}} ***Perfect cubes***.
`\begin{align*}
(a\hl{+}b)^3 &= a^3 \hl{+} 3a^2b + 3ab^2 \hl{+} b^3, \tag{4-1} \\
(a\hl{-}b)^3 &= a^3 \hl{-} 3a^2b + 3ab^2 \hl{-} b^3. \tag{4-2}
\end{align*}`
{{% note "Identity 5" %}} ***Sums and differences of cubes***.
`\begin{align*}
(a\hl{+}b)(a\hl{-}ab+b^2) &= a^3 \hl{+} b^3, \tag{5-1} \\
(a\hl{-}b)(a\hl{+}ab+b^2) &= a^3 \hl{-} b^3. \tag{5-2}
\end{align*}`

{{% /hbox %}}

{{% details title="Proofs" %}}

We only show one of each set of identities. You can easily repeat the exercise, with $-b$ instead of $+b$, to prove the other ones. Try it!

{{% enum 4 %}}
{{% mn id4 tips %}}
(1) Identity 1
{{% /mn %}}
`\begin{align*}
& (a+b)^3 \\
&= (a+b) \cdot (a+b)^2 \\
&= (a+b) \cdot (a^2 + 2ab + b^2) \tag{1} \\
&= a^2 (a+b) + 2ab (a+b) + b^2 (a+b) \\
&= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3 \\
&= a^3 + 3a^2b + 3ab^2 + b^3. && \Box
\end{align*}`

{{% enum 5 %}}
`\begin{align*}
& (a+b)(a^2-ab+b^2) \\
&= a^2 (a+b) - ab(a+b) + b^2 (a+b) \\
&= a^3 + a^2b - a^2b - ab^2 + ab^2 - b^3 \\
&= a^3 - b^3. && \Box
\end{align*}`

{{% /details %}}

This is a set of example questions. Note the shape of the expressions!

{{% hbox %}}
{{% note Example %}}
Expand:
1. $(a+1)^3$
2. $(x+2)(x^2-2x+4)$
3. $(2z-3w)(4z^2 + 6zw + 9w^2)$
4. $(3y-2x)^3$

{{% note Solution %}}
{{% mn ex-cubic tips %}}
(1) Identity 4<br>
(2) Identity 5<br>
(3) Identity 5<br>
(4) Identity 4
{{% /mn %}}

{{% enum 1 %}}
`\begin{align*}
& (a+1)^3 \\
&= \boldsymbol{ a^3 + 3a^2 + 3a + 1. } \tag{1}
\end{align*}`
{{% enum 2 %}}
`\begin{align*}
& (x+2)(x^2-2x+4) \\
&=(x+2)(x^2-x\cdot 2 + 2^2 ) \\
&= x^3 - 2^3 \tag{2} \\
&= \boldsymbol{ x^3 - 8. }
\end{align*}`
{{% enum 3 %}}
`\begin{align*}
& (2z-3w)(4z^2 + 6zw + 9w^2) \\
&= (2z - 3w) \left\{ (2z)^2 + 2z\cdot 3w + (3w)^2 \right\} \\
&= (2z)^3 - (3w)^3 \tag{3} \\
&= \boldsymbol{ 8z^3 - 27w^3 .}
\end{align*}`
{{% enum 4 %}}
`\begin{align*}
& (3y-2x)^3 \\
&= (3y)^3 - 3\cdot (3y)^2\cdot 2x + 3\cdot 3y \cdot (2x)^2 - (2x)^3 \tag{4} \\
&= \boldsymbol{ 27y^3 - 54y^2x + 36yx^2 - 8x^3 .}
\end{align*}`

{{% /hbox %}}

{{% details title="Signs!" %}}

The signs in the identities can be quite confusing!

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-cubic.jpg" alt="Signs in the cubic identities" %}}

Another convenient method to remember them is to use $\pm$ ("plus-minus") and $\mp$ ("minus-plus") signs:

{{% hbox %}}

{{% note "Identity 4" %}} Perfect cubes
$$ (a\pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3 $$

{{% note "Identity 5" %}} Sums and differences of cubes
$$ (a \pm b)(a^2 \mp ab + b^2) = a^3 \pm b^3 $$

{{% /hbox %}}

You can see that the plus-minus signs share the signs, so when one is positive, all the others are positive. The minus-plus signs are like the opposite: when the $\pm$s are positive, $\mp$s are all negative!

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-pm.jpg" alt="Plus-minus symbol" caption="Cubic identities rewritten with plus-minus and minus-plus symbols" %}}

{{% /details %}}

## Practice Questions

1. Expand the following expressions using the quadratic identities.
    1. $(3x+5y)^2$
    2. $(7f-2g)^2$
    3. $(2xy-3)^2$
    4. $(x+5y)(x-5y)$
    5. $(3c^2 - 2d)(3c^2 + 2d)$

{{% details title="Answer" %}}

1.  
    1. $9x^2 + 30xy + 25y^2$
    2. $49f^2 - 28fg + 4g^2$
    3. $4x^2y^2 - 12xy + 9$
    4. $x^2 - 25y^2$
    5. $9c^4 - 4d^2$

{{% note Solution %}}
Parts (a) to (c) use the first identity.

{{% enum a %}}
`\begin{align*}
& (3x+5y)^2 \\
&= (3x)^2 + 2\cdot 3x\cdot 5y + (5y)^2 \\
&= \boldsymbol{ 9x^2 + 30xy + 25y^2 }.
\end{align*}`
{{% enum b %}}
`\begin{align*}
& (7f-2g)^2 \\
&= (7f)^2 - 2\cdot 7f \cdot 2g + (2g)^2 \\
&= \boldsymbol{ 49f^2 - 28fg + 4g^2 }.
\end{align*}`
{{% enum c %}}
`\begin{align*}
& (2xy-3)^2 \\
&= (2xy)^2 - 2\cdot 2xy \cdot 3 + 3^2 \\
&= \boldsymbol{ 4x^2y^2 - 12xy + 9 .}
\end{align*}`

Parts (d) and (e) use the second identity.

{{% enum d %}}
`\begin{align*}
& (x+5y)(x-5y) \\
&= x^2 - (5y)^2 \\
&= \boldsymbol{ x^2 - 25y^2 }.
\end{align*}`
{{% enum e %}}
`\begin{align*}
& (3c^2 - 2d)(3c^2 + 2d) \\
&= (3c^2)^2 - (2d)^2\\
&= \boldsymbol{ 9c^4 - 4d^2 }.
\end{align*}`

{{% /details %}}

2. Expand the following expressions using the quadratic identities.
    1. $(x-2y)(3y+x)$
    2. $(x^2 - 4)(x^2 + 3)$
    3. $(3a-2)(4a+1)$
    4. $(2p-3q)(4p+2q)$

{{% details title="Answer" %}}

2.  
    1. $x^2 + xy - 6y^2$
    2. $x^4 - x^2 - 12$
    3. $12a^2 - 5a - 2$
    4. $8p^2 - 8pq - 6q^2$

{{% note Solution %}}
We use the third identity for all parts.

{{% enum a %}}
{{% mn q2 tips %}}
(1) Rearrange the terms to $(x+a)(x+b)$ form
{{% /mn %}}
`\begin{align*}
& (x-2y)(3y+x) \\
&= (x-2y)(\hl{x+3y}) \tag{1} \\
&= x^2 + (-2y+3y)x -2y\cdot 3y \\
&= \boldsymbol{ x^2 + xy - 6y^2 .}
\end{align*}`
{{% enum b %}}
`\begin{align*}
& (x^2 - 4)(x^2 + 3) \\
&= \left(x^2\right)^2 + (-4+3)x^2 -4\cdot 3 \\
&= \boldsymbol{ x^4 - x^2 - 12 .}
\end{align*}`
{{% enum c %}}
`\begin{align*}
& (3a-2)(4a+1) \\
&= 12a^2 + (3 - 8)a - 2 \\
&= \boldsymbol{ 12a^2 - 5a - 2 .}
\end{align*}`
{{% enum d %}}
`\begin{align*}
& (2p-3q)(4p+2q) \\
&= 8p^2 + (4q-12q)p -3q\cdot 2q \\
&= \boldsymbol{ 8p^2 - 8pq - 6q^2 .}
\end{align*}`

{{% /details %}}

3. Expand the following expressions.
    1. $(2x+1)^3$
    2. $(x-4y)^3$
    3. $(2p-q)(4p^2+2pq+q^2)$
    4. $(d+5)(d^2-5d+25)$

{{% details title="Answer" %}}

3. 
    1. $8x^3 + 12x^2 + 6x + 1$
    2. $x^3 - 12x^2y + 48xy^2 - 64y^3$
    3. $8p^3 - q^3$
    4. $d^3 + 125$

{{% note Solution %}}
Parts (a) and (b) use the fourth identity.

{{% enum a %}}
`\begin{align*}
& (2x+1)^3 \\
&= (2x)^3 + 3(2x)^2 + 3(2x) + 1 \\
&= \boldsymbol{ 8x^3 + 12x^2 + 6x + 1. }
\end{align*}`
{{% enum b %}}
`\begin{align*}
& (x-4y)^3 \\
&= x^3 - 3x^2\cdot 4y + 3x (4y)^2 - (4y)^3 \\
&= \boldsymbol{ x^3 - 12x^2y + 48xy^2 - 64y^3 .}
\end{align*}`

Parts (c) and (d) use the fifth identity.

{{% enum c %}}
`\begin{align*}
& (2p-q)(4p^2+2pq+q^2) \\
&= (2p - q)\left\{ (2p)^2 + 2p\cdot q + q^2 \right\} \\
&= (2p)^3 - q^3 \\
&= \boldsymbol{ 8p^3 - q^3 .}
\end{align*}`
{{% enum a %}}
`\begin{align*}
& (d+5)(d^2-5d+25) \\
&= (d+5)(d^2 - d\cdot 5 + 5^2 ) \\
&= d^3 + 5^3 \\
&= \boldsymbol{ d^3 + 125. }
\end{align*}`

{{% /details %}}
