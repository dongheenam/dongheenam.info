---
title: "Advanced Techniques for Factorising 2"
description: "How to factorise expressions quadratic in two variables, and bi-quadratic polynomials."
slug: "advanced-factorising-2"

date: 2020-06-03 18:09:08 +1000
lastMod: 2020-12-13 07:54:54.499 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation

menu:
  math1:
    parent: Polynomials
    name: "Advanced Factorising 2"
    weight: 21

weight: 21
---

## Introduction

Now that we have all the basic tools for factorisation, we will look into a few different techniques for factorising polynomial expressions in this lesson.

## Quadratic in Two Variables

Let's now have a look at polynomials that look like this one: $$ x^2 - xy - 2y^2 - x - 7y - 6, $$ which is quadratic in both $x$ and $y$.

you will be using [the cross-multiplication method](../factorising-quadratic-identities/#general-cases) a lot here.

{{% hbox %}}
{{% note Example %}}
Factorise $x^2 - xy - 2y^2 - x - 7y - 6$.

{{% note Solution %}}
We will first rearrange the expression in terms of $x$ and factorise the terms without $x$ (the underlined ones).

\begin{align*}
& x^2 - xy - 2y^2 - x - 7y - 6 \cr
&= \hl{x^2} + (-y-1)\hl{x} - 2y^2 - 7y - 6 \cr
&= \hl{x^2} - (y+1)\hl{x} - \underline{(2y^2 + 7y + 6)} \cr
&= \hl{x^2} - (y+1)\hl{x} - \underline{(y+2)(2y+3)}. \tag{$=\tcirc{1}$}
\end{align*}

Here is how the last step is done:
$$ 2y^2 + 7y + 6 = (y+2)(2y+3) \\\\[0.5em]
\rlap{\kern1.1em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  1 && 2 & \rightarrow & 4 \\\\[0.7em]
  2 && 3 & \rightarrow & 3 \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ 7 }
\end{array}
$$

Now, you can use the cross-multiplication again, but in terms of $x$ this time:
$$ \hl{x^2} - (y+1)\hl{x} - (y+2)(2y+3) = \{ \hl{x} - (2y+3) \}\{ \hl{x} + (y+2) \} \\\\[0.5em]
\rlap{\kern1.1em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  1 && -(2y+3) & \rightarrow & -2y-3 \\\\[0.7em]
  1 && (y+2) & \rightarrow & y+2 \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ -y-1 }
\end{array}
$$

and of course $-y-1 = -(y+1)$, which is the coefficient of $x$. Therefore,
\begin{align*}
\tcirc{1} &= \{ \hl{x} - (2y+3) \}\{ \hl{x} + (y+2) \} \cr
&= \boldsymbol{ (x-2y-3)(x+y+2) }.
\end{align*}

{{% /hbox %}}

{{% details title="Alternative solution" %}}

Here is another solution that starts with rearranging in $y$ instead. You may notice that this solution is a little more complicated because the coefficient in $y^2$ is not $1$. If you can, try to save the quadratic term with the coefficient of 1 for later.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-advanced-crossmult.png" alt="alternative solution" %}}

{{% /details %}}

This is another example!

{{% hbox %}}
{{% note Example %}}
Factorise $3x^2 + 7xy + 2y^2 - 5x - 5y + 2$.

{{% note Solution %}}
We will rearrange in terms of $x$, but if you want, you can do it in $y$.
\begin{align*}
& 3x^2 + 7xy + 2y^2 - 5x - 5y + 2 \cr
&= 3\hl{x^2} + (7y-5)\hl{x} + \underline{2y^2 - 5y + 2} \cr
&= 3\hl{x^2} + (7y-5)\hl{x} + \underline{(2y-1)(y-2)} \tag{1} \cr
&= \{ 3\hl{x} + (y-2) \}\{ \hl{x} + (2y-1) \} \tag{2} \cr
&= \boldsymbol{ (3x+y-2)(x+2y-1) }.
\end{align*}

$$ (1): 2y^2 - 5y + 2 = (2y-1)(y-2) \\\\[0.5em]
\rlap{\kern1.1em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  2 && -1 & \rightarrow & -1 \\\\[0.7em]
  1 && -2 & \rightarrow & -4 \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ -5 }
\end{array}
$$

$$ (2): 3\hl{x^2} + (7y-5)\hl{x} + (2y-1)(y-2) = \{ 3\hl{x} + (y-2) \}\{ \hl{x} + (2y-1) \} \\\\[0.5em]
\rlap{\kern1.1em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  3 && (y-2) & \rightarrow & y-2 \\\\[0.7em]
  1 && (2y-1) & \rightarrow & 6y-3 \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ 7y-5 }
\end{array}
$$

{{% /hbox %}}

Try [Practice Question](#practice-questions) 1 before moving on.

## Biquadratic Polynomials

***Bi*** means two, so a ***bi***quadratic polynomial of $x$ is a polynomial quadratic in $x^2$. 

{{% hbox %}}

{{% note Definition %}}
*A **biquadratic polynomial** is a quartic polynomial ([degree of 4](../../terms-and-polynomials/#degree-of-a-polynomial)) without cubic or linear terms. In other words, biquadratic polynomials has the following form:* $$ px^4 + qx^2 + r . $$

{{% /hbox %}}

For example, $x^4 + 2x^2 - 3$ is a biquadratic polynomial. What is so special about them? Biquadratic polynomials can be easily converted to a quadratic polynomial with a simple substitution. If we substitute $x^2=t$ from our example, it becomes $$ x^4 + 2x^2 - 3 = t^2 + 2t - 3, $$ which we can factorise with the quadratic identities.

{{% hbox %}}
{{% note Example %}}
Factorise $x^4 + 2x^2 - 3$.

{{% note Solution %}}
We substitute $x^2$ with $t$:
{{% mn 338 tips %}}
(1) $t = x^2$
{{% /mn %}}

\begin{align*}
x^4 + 2x^2 - 3 &= t^2 + 2t - 3 \tag{1} \cr
&= (t+3)(t-1) \cr
&= (x^2+3)(x^2-1)\\
&= \boldsymbol{ (x^2+3)(x+1)(x-1) }.
\end{align*}

{{% /hbox %}}

However not all biquadratics can be factorised this way. Have a look at this example:

{{% hbox %}}
{{% note Example %}}
Factorise $a^4 + a^2 + 1$.

Of course, we cannot factorise $t^2+t+1$, but this polynomial can be factorised! The trick is we can pull out $(\square^2 - \triangle^2)$ form by completing the square. Have a look at the solution below.

{{% note Solution %}}
{{% mn 360 tips %}}
(1) Identity 1: $a^2 + 2ab + b^2 $ $=(a+b)^2$<br>
(2) Identity 2: $\square^2-\triangle^2$ $=(\square+\triangle)(\square-\triangle)$
{{% /mn %}}

\begin{align*}
& a^4 + a^2 + 1 \cr
&= \underline{a^4 \hl{+2a^2} + 1} \hl{-a^2} \cr
&= \underline{\left(a^2 + 1\right)^2} - a^2 \tag{1} \cr
&=\left\\{\left(a^2 + 1\right)+a\right\\}\left\\{\left(a^2 + 1\right)-a\right\\} \tag{2} \cr
&= \boldsymbol{ (a^2+a+1)(a^2-a+1) }.
\end{align*}

{{% /hbox %}}

{{% details title="Choosing the 'right' square" %}}

You may realise you can also make $(a^2-1)^2$ instead of $(a^2+1)^2$ from the question above. However, you cannot continue with the other square because the leftover term is not itself a perfect square:

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/poly-biquadratic.jpg" alt="two possible perfect squares" %}}

So make sure you complete the 'right' square!

{{% /details %}}

{{% hbox %}}
{{% note Example %}}
Factorise the following.

1. $x^4 - 7x^2y^2 + y^4$
2. $4x^4 + 1$

{{% note Solution %}}

{{% enum 1 %}}
\begin{align*}
& x^4 -7x^2y^2 + y^4 \cr
&= x^4 \hl{+2x^2y^2} + y^4 \hl{- 9x^2y^2} \cr
&= \left(x^2 + y^2\right)^2 - (3xy)^2 \cr
&= \boldsymbol{ (x^2 + 3xy + y^2)(x^2 - 3xy + y^2) }.
\end{align*}
{{% enum 2 %}}
\begin{align*}
& 4x^4 + 1 \cr
&= 4x^4 \hl{+ 4x^2} + 1 \hl{- 4x^2} \cr
&= \left(2x^2+1\right)^2 - (2x)^2 \cr
&= \boldsymbol{ (2x^2+2x+1)(2x^2-2x+1) }.
\end{align*}

{{% /hbox %}}

## Practice Questions

1. Factorise the following polynomials.
    1. $2x^2 + 5xy + 3y^2 + 2x + 4y - 4$
    2. $x^2 - 2xy - 3y^2 + 6x - 10y + 8$
    3. $6x^2 + 5xy + y^2 + 2x - y - 20$

{{% details title="Answer" %}}

1.  
    1. $(2x+3y-2)(x+y+2)$
    2. $(x-3y+2)(x+y+2)$
    3. $(3x+y-5)(2x+y+4)$

{{% note Solution %}}

{{% enum a %}}
{{% mn q1a tips %}}
(1)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5a.JPG" alt="cross-multiplication" %}}<br>
(2)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5a2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
& 2x^2 + 5xy + 3y^2 + 2x + 4y - 4 \cr
&= 2\hl{x^2} + (5y+2)\hl{x} + \underline{3y^2+4y-4} \tag{1} \cr
&= 2\hl{x^2} + (5y+2)\hl{x} + \underline{(y+2)(3y-2)} \tag{2} \cr
&= \{ 2\hl{x} + (3y-2) \}\{ \hl{x} + (y+2) \} \cr
&= \boldsymbol{ (2x+3y-2)(x+y+2) }.
\end{align*}

{{% hr %}}

{{% enum b %}}
{{% mn q1b tips %}}
(3)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5b.JPG" alt="cross-multiplication" %}}<br>
(4)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5b2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
\text{b.} \quad & x^2 - 2xy - 3y^2 + 6x - 10y + 8 \cr
&= \hl{x^2} + (-2y+6)\hl{x} - 3y^2 - 10y + 8 \cr
&= \hl{x^2} + (-2y+6)\hl{x} - \underline{(3y^2+10y-8)} \cr
&= \hl{x^2} + (-2y+6)\hl{x} - \underline{(3y-2)(y+4)} \tag{3} \cr
&= \{ \hl{x} -(3y-2) \}\{ \hl{x} +(y+2) \} \tag{4} \cr
&= \boldsymbol{ (x-3y+2)(x+y+2) }.
\end{align*}

{{% hr %}}

{{% enum c %}} Because the coefficient of $y^2$ is $1$, it is easier to rearrange the expression in terms of $y$.
{{% mn q1c tips %}}
(5)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5c.JPG" alt="cross-multiplication" %}}<br>
(6)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5c2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& 6x^2 + 5xy + y^2 + 2x - y - 20 \cr
&=\hl{y^2} + (5x-1)\hl{y} + 6x^2 + 2x - 20 \cr
&=\hl{y^2} + (5x-1)\hl{y} + 2\underline{(3x^2+x-10)} \tag{5} \cr
&=\hl{y^2} + (5x-1)\hl{y} + 2\underline{(3x-5)(x+2)} \tag{6} \cr
&=\{ \hl{y} + (3x-5) \}\{ \hl{y} + 2(x+2) \} \cr
&= \boldsymbol{ (3x+y-5)(2x+y+4) }.
\end{align*}

{{% hr %}}

{{% /details %}}

2. Factorise the following polynomials.
    1. $2t^4 - 3t^2 + 1$
    2. $x^4 - 13x^2 + 36$
    3. $x^4 + 2x^2 + 9$
    4. $x^4 + 3x^2 + 4$

{{% details title="Answer" %}} 

2. 
    1. $(t+1)(t-1)(2t^2-1)$
    2. $(x+2)(x-2)(x+3)(x-3)$
    3. $(x^2+2x+3)(x^2-2x+3)$
    4. $(x^2+x+2)(x^2-x+2)$

{{% note Solution %}}

{{% enum a %}}
{{% mn q2a tips %}}
(1)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-11q2a.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
& 2t^4 - 3t^2 + 1 \cr
&= 2\left(t^2\right)^2 - 3t^2 + 1 \cr
&= (t^2-1)(2t^2-1) \tag{1} \cr
&= \boldsymbol{ (t+1)(t-1)(2t^2-1) }.
\end{align*}

{{% hr %}}

{{% enum b %}}
{{% mn q2b tips %}}
(2)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-11q2b.JPG" alt="cross-multiplication" %}}<br>
$(3)$ Identity 2: $a^2-b^2$ $=(a+b)(a-b)$
{{% /mn %}}
\begin{align*}
& x^4 - 13x^2 + 36 \cr
&= \left( x^2 \right)^2 - 13x^2 + 36 \tag{2} \cr
&= (x^2-4)(x^2-9) \cr
&= \boldsymbol{ (x+2)(x-2)(x+3)(x-3) }. \tag{3}
\end{align*}

{{% hr %}}

{{% enum c %}}
\begin{align*}
& x^4 +2x^2 + 9 \cr
&= \underline{x^4 \hl{+6x^2}+9} \hl{-4x^2} \cr
&= \underline{\left(x^2+3\right)^2 } - (2x)^2 \cr
&= \boldsymbol{ (x^2+2x+3)(x^2-2x+3) }.
\end{align*}

{{% enum d %}}
\begin{align*}
& x^4 \hl{+ 3x^2} + 4 \cr
&= \underline{x^4 \hl{+4x^2} + 4} \hl{-x^2} \cr
&= \underline{\left(x^2+2\right)^2 } - x^2 \cr
&= \boldsymbol{(x^2+x+2)(x^2-x+2) }.
\end{align*}

{{% /details %}}
