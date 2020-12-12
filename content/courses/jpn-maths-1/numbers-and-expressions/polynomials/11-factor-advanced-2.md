---
title: "Advanced Techniques for Factorising 2"
description: "How to factorise expressions quadratic in two variables, and bi-quartic polynomials."
slug: "advanced-factorising-2"

date: 2020-06-03 18:09:08 +1000
lastMod: 2020-12-13 07:54:54.499 +1100

type: docs
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation

menu:
  math1-numbers:
    parent: Polynomials
    name: "Advanced Factorising 2"
    weight: 21

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 21
---

## Introduction

Now that we have all the basic tools for factorisation, we will look into a few different techniques for factorising polynomial expressions in this lesson.

## Quadratic in Two Variables

Let's now have a look at polynomials that look like this one: $$ x^2 - xy - 2y^2 - x - 7y - 6, $$ which is quadratic in both $x$ and $y$. 

 you will be using [the cross-multiplication method](../factorising-quadratic-identities/#general-cases) a lot here.

{{% box %}}
{{% note example %}}
Factorise $x^2 - xy - 2y^2 - x - 7y - 6$.

{{% note solution %}}
We will first rearrange the expression in terms of $x$ and factorise the constant term (the underlined ones).

\begin{align}
  & x^2 - xy - 2y^2 - x - 7y - 6 \\\\
  &= \hl{x^2} + (-y-1)\hl{x} - 2y^2 - 7y - 6 \\\\
  &= \hl{x^2} - (y+1)\hl{x} - \underline{(2y^2 + 7y + 6)} \\\\
  &= \hl{x^2} - (y+1)\hl{x} - \underline{(y+2)(2y+3)}. && \cdots \tcirc{1}
\end{align}

Here is how the last step is done:

\begin{align}
  & 2y^2 + 7y + 6 = \boldsymbol{ (y+2)(2y+3) } \\\\[0.5em]
  & \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcr}
    1 && 2 & \rightarrow & 4 \\\\[0.5em]
    2 && 3 & \rightarrow & 3 \\\\[0.5em]
    \hline &&&& \boldsymbol{ 7 }
  \end{array}
\end{align}

Now, you can use the cross multiplication again, but in terms of $x$ this time:

\begin{align}
  & \hl{x^2} - (y+1)\hl{x} - (y+2)(2y+3) = \\{ \hl{x} - (2y+3) \\}\\{ \hl{x} + (y+2) \\} \\\\[0.5em]
  & \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcr}
    1 && -(2y+3) & \rightarrow & -2y-3 \\\\[0.5em]
    1 && (y+2) & \rightarrow & y+2 \\\\[0.5em]
    \hline &&&& \boldsymbol{ -y-1 }
  \end{array}
\end{align}

and of course $-y-1 = -(y+1)$, which is the coefficient of $x$. Therefore,

\begin{align}
  \tcirc{1} &= \\{ \hl{x} - (2y+3) \\}\\{ \hl{x} + (y+2) \\} \\\\
  &= \boldsymbol{ (x-2y-3)(x+y+2) }.
\end{align}

{{% /box %}}

{{% details title="Alternative solution" %}}

Here is another solution that starts with rearranging in $y$ instead. You may notice that this solution is a little more complicated, because the coefficient in $y^2$ is not $1$. If you can, try to save the quadratic term with coefficient of $1$ for later.

{{% figure class="fullwidth" src="courses/jpn-maths-1/numbers-and-expressions/poly-advanced-crossmult.png" alt="alternative solution" %}}

{{% /details %}}

This is another example!

{{% box %}}
{{% note example %}}
Factorise $3x^2 + 7xy + 2y^2 - 5x - 5y + 2$.

{{% note solution %}}
We will rearrange in terms of $x$, but if you want, you can do it in $y$.

\begin{align}
  & 3x^2 + 7xy + 2y^2 - 5x - 5y + 2 \\\\
  &= 3\hl{x^2} + (7y-5)\hl{x} + \underline{2y^2 - 5y + 2} \\\\
  &= 3\hl{x^2} + (7y-5)\hl{x} + \underline{(2y-1)(y-2)} \tag{1} \\\\
  &= \\{ 3\hl{x} + (y-2) \\}\\{ \hl{x} + (2y-1) \\} \tag{2} \\\\
  &= \boldsymbol{ (3x+y-2)(x+2y-1) }.
\end{align}

\begin{align}
  & (1): 2y^2 - 5y + 2 = (2y-1)(y-2) \\\\[0.5em]
  & \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcr}
    2 && -1 & \rightarrow & -1 \\\\[0.5em]
    1 && -2 & \rightarrow & -4 \\\\[0.5em]
    \hline &&&& \boldsymbol{ -5 }
  \end{array}
\end{align}
\begin{align}
  & (2): 3\hl{x^2} + (7y-5)\hl{x} + (2y-1)(y-2) = \\{ 3\hl{x} + (y-2) \\}\\{ \hl{x} + (2y-1) \\} \\\\[0.5em]
  & \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcr}
    3 && (y-2) & \rightarrow & y-2 \\\\[0.5em]
    1 && (2y-1) & \rightarrow & 6y-3 \\\\[0.5em]
    \hline &&&& \boldsymbol{ 7y-5 }
  \end{array}
\end{align}

{{% /box %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 5 before moving on.


## Biquartic Polynomials

*Bi* means two, and *quartic* means the polynomial has [degree](terms-and-polynomials/#degree-of-a-polynomial) of $4$. What is *biquartic* then? Well, it is a quartic polynomial made only with the second powers!

{{% note definition %}}
*A biquartic polynomial* is a quartic polynomial without cubic or linear terms. In other words, biquartic polynomials has the following form: $$ px^4 + qx^2 + r . $$

For example, $x^4 + 2x^2 - 3$ is a biquartic polynomial. What are so special about them? Biquartic polynomials can be easily converted to a quadratic polynomial with a simple substitution. If we substitute $x^2=t$ from our example, it becomes $$ x^4 + 2x^2 - 3 = t^2 + 2t - 3, $$ which we can factorise with the quadratic identities.

{{% box %}}
{{% note example %}}
Factorise $x^4 + 2x^2 - 3$.

{{% note solution %}}
We substitute $x^2$ with $t$:

{{% mn 338 tips %}}
$(1)$ $t = x^2$
{{% /mn %}}
\begin{align}
  x^4 + 2x^2 - 3 &= t^2 + 2t - 3 \tag{1} \\\\
  &= (t+3)(t-1) \\\\
  &= (x^2+3)(x^2-1)\\\\
  &= \boldsymbol{ (x^2+3)(x+1)(x-1) }.
\end{align}

{{% /box %}}

However not all biquartics can be factorised this way. Have a look at this example:

{{% box %}}
{{% note example %}}
Factorise $a^4 + a^2 + 1$.

Of course we cannot factorise $t^2+t+1$, but this polynomial can be factorised! The trick is we can pull out $(\square^2 - \triangle^2)$ form by completing the square. Have a look at the solution below.

{{% note solution %}}

{{% mn 360 tips %}}
$(1)$ Identity 1: $a^2 + 2ab + b^2 $ $=(a+b)^2$<br><br>
$(2)$ Identity 2: $\square^2-\triangle^2$ $=(\square+\triangle)(\square-\triangle)$
{{% /mn %}}
\begin{align}
  & a^4 + a^2 + 1 \\\\
  &= \underline{a^4 \hl{+2a^2} + 1} \hl{-a^2} \\\\
  &= \underline{\left(a^2 + 1\right)^2} - a^2 \tag{1} \\\\
  &= \left\\{\left(a^2 + 1\right)+a\right\\}\left\\{\left(a^2 + 1\right)-a\right\\} \tag{2} \\\\
  &= \boldsymbol{ (a^2+a+1)(a^2-a+1) }.
\end{align}

{{% /box %}}

{{% details title="Choosing the 'right' square" %}}

You may realise you can also make $(a^2-1)^2$ instead of $(a^2+1)^2$ from the question above. However, you cannot continue with the other square, because the leftover term is not itself a perfect square:

{{% figure class="fullwidth" src="courses/jpn-maths-1/numbers-and-expressions/poly-biquartic.png" alt="two possible perfect squares" %}}

So make sure you complete the 'right' square!

{{% /details %}}

{{% box %}}
{{% note example %}}
Factorise the following.
  1. $x^4 - 7x^2y^2 + y^4$
  2. $4x^4 + 1$

{{% note solution %}}

\begin{align}
  \text{1.} \quad & x^4 -7x^2y^2 + y^4 \\\\
  &= x^4 \hl{+2x^2y^2} + y^4 \hl{- 9x^2y^2} \\\\
  &= \left(x^2 + y^2\right)^2 - (3xy)^2 \\\\
  &= \boldsymbol{ (x^2 + 3xy + y^2)(x^2 - 3xy + y^2) }.
\end{align}
\begin{align}
  \text{2.} \quad & 4x^4 + 1 \\\\
  &= 4x^4 \hl{+ 4x^2} + 1 \hl{- 4x^2} \\\\
  &= \left(2x^2+1\right)^2 - (2x)^2 \\\\
  &= \boldsymbol{ (2x^2+2x+1)(2x^2-2x+1) }.
\end{align}

{{% /box %}}


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

{{% note solution %}}

{{% mn q1a tips %}}
$(1)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5a.JPG" alt="cross-multiplication" %}}<br>
$(2)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5a2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align}
  \text{a.} \quad & 2x^2 + 5xy + 3y^2 + 2x + 4y - 4 \\\\
  &= 2\hl{x^2} + (5y+2)\hl{x} + \underline{3y^2+4y-4} \tag{1} \\\\
  &= 2\hl{x^2} + (5y+2)\hl{x} + \underline{(y+2)(3y-2)} \tag{2} \\\\
  &= \\{ 2\hl{x} + (3y-2) \\}\\{ \hl{x} + (y+2) \\} \\\\
  &= \boldsymbol{ (2x+3y-2)(x+y+2) }.
\end{align}

---

{{% mn q1b tips %}}
$(3)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5b.JPG" alt="cross-multiplication" %}}<br>
$(4)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5b2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align}
  \text{b.} \quad & x^2 - 2xy - 3y^2 + 6x - 10y + 8 \\\\
  &= \hl{x^2} + (-2y+6)\hl{x} - 3y^2 - 10y + 8 \\\\
  &= \hl{x^2} + (-2y+6)\hl{x} - \underline{(3y^2+10y-8)} \\\\
  &= \hl{x^2} + (-2y+6)\hl{x} - \underline{(3y-2)(y+4)} \tag{3} \\\\
  &= \\{ \hl{x} -(3y-2) \\}\\{ \hl{x} +(y+2) \\} \tag{4} \\\\
  &= \boldsymbol{ (x-3y+2)(x+y+2) }.
\end{align}

---

$\text{c.} \quad$ Because the coefficient of $y^2$ is $1$, it is easier to rearrange the expression in terms of $y$.

{{% mn q1c tips %}}
$(5)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5c.JPG" alt="cross-multiplication" %}}<br>
$(6)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-9q5c2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align}
  \text{c.} \quad & 6x^2 + 5xy + y^2 + 2x - y - 20 \\\\
  &=\hl{y^2} + (5x-1)\hl{y} + 6x^2 + 2x - 20 \\\\
  &=\hl{y^2} + (5x-1)\hl{y} + 2\underline{(3x^2+x-10)} \tag{5} \\\\
  &=\hl{y^2} + (5x-1)\hl{y} + 2\underline{(3x-5)(x+2)} \tag{6} \\\\
  &=\\{ \hl{y} + (3x-5) \\}\\{ \hl{y} + 2(x+2) \\} \\\\
  &= \boldsymbol{ (3x+y-5)(2x+y+4) }.
\end{align}

---

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

{{% note solution %}}

{{% mn q2a tips %}}
$(1)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-11q2a.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align}
  \text{a.} \quad & 2t^4 - 3t^2 + 1 \\\\
  &= 2\left(t^2\right)^2 - 3t^2 + 1 \\\\
  &= (t^2-1)(2t^2-1) \tag{1} \\\\
  &= \boldsymbol{ (t+1)(t-1)(2t^2-1) }.
\end{align}

---

{{% mn q2b tips %}}
$(2)$<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-11q2b.JPG" alt="cross-multiplication" %}}<br>
$(3)$ Identity 2: $a^2-b^2$ $=(a+b)(a-b)$
{{% /mn %}}
\begin{align}
  \text{b.} \quad & x^4 - 13x^2 + 36 \\\\
  &= \left( x^2 \right)^2 - 13x^2 + 36 \tag{2} \\\\
  &= (x^2-4)(x^2-9) \\\\
  &= \boldsymbol{ (x+2)(x-2)(x+3)(x-3) }. \tag{3}
\end{align}

---

\begin{align}
  \text{c.} \quad & x^4 +2x^2 + 9 \\\\
  &= \underline{x^4 \hl{+6x^2}+9} \hl{-4x^2} \\\\
  &= \underline{\left(x^2+3\right)^2 } - (2x)^2 \\\\
  &= \boldsymbol{ (x^2+2x+3)(x^2-2x+3) }.
\end{align}
\begin{align}
  \text{d.} \quad & x^4 \hl{+ 3x^2} + 4 \\\\
  &= \underline{x^4 \hl{+4x^2} + 4} \hl{-x^2} \\\\
  &= \underline{\left(x^2+2\right)^2 } - x^2 \\\\
  &= \boldsymbol{(x^2+x+2)(x^2-x+2) }.
\end{align}

{{% /details %}}