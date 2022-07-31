---
title: "Review: Factorisation"
description: "Review questions for polynomial factorisation."
slug: "review-2"

date: 2020-06-11 09:48:27 +1000
lastMod: 2020-12-13 20:02:17.545 +1100

type: docs
toc: false
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation

menu:
  math1:
    parent: Polynomials
    name: ✏️ Review 2
    weight: 22

weight: 22
---

1. Factorise the following expressions.
    1. $xy - yz + zw - wx$
    2. $12x^2y - 27yz^2$
    3. $x^2 - x + \dfrac{1}{4}$
    4. $18x^2 + 39x - 7$

{{% details title="Answer" %}}

1.  
    1. $(x-z)(y-w)$
    2. $3y(2x+3z)(2x-3z)$
    3. $\left( x-\dfrac{1}{2} \right)^2$
    4. $(3x+7)(6x-1)$

{{% note Solution %}}
We use [the distributive law](../factorising-common-factor/#factorising-with-distributive-law) and [quadratic identities](../factorising-identities-1/#factorising-with-quadratic-identities).

{{% enum a %}}
\begin{align*}
&xy - yz + zw - wx \cr
&= y(x-z) + w(z-x) \cr
&= y(x-z) - w(x-z) \cr
&= \boldsymbol{ (x-z)(y-w) }.
\end{align*}

{{% enum b %}}
\begin{align*}
&12x^2y - 27yz^2 \cr
&= 3y(4x^2 - 9z^2) \cr
&= 3y\left\\{ (2x)^2 - (3z)^2\right\\} \cr
&= \boldsymbol{ 3y(2x+3z)(2x-3z) }.
\end{align*}

{{% enum c %}}
{{% mn q1c tips %}}
(1) Identity 1: $a^2-2ab+b^2$ $=(a-b)^2$
{{% /mn %}}
\begin{align*}
&x^2 - x + \dfrac{1}{4} \cr
&= x^2 - \hl{2\cdot\dfrac{1}{2}}x + \left( \dfrac{1}{2} \right)^2 \cr
&= \boldsymbol{ \left( x-\dfrac{1}{2} \right)^2 }. \tag{1}
\end{align*}

{{% enum d %}}
$$ 18x^2 + 39x - 7 = \boldsymbol{ (3x+7)(6x-1) } \\\\[0.5em]
\rlap{\kern1.1em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  3 && 7 & \rightarrow & 42 \\\\[0.7em]
  6 && -1 & \rightarrow & -3 \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ -39 }
\end{array}
$$

{{% /details %}}

2. Factorise the following expressions.
    1. $3a^3 - 81b^3$
    2. $125s^4 + 8st^3$
    3. $t^3 - t^2 + \dfrac{t}{3} - \dfrac{1}{27}$
    4. $p^3 + 3p^2 - 4p - 12$

{{% details title="Answer" %}}

2.  
    1. $3(a-3b)(a^2+3b+9b^2)$
    2. $s(5s+2t)(25s^2 - 10st + 4t^2 )$
    3. $(t-\dfrac{1}{3})^3$
    4. $(p+3)(p+2)(p-2)$

{{% note Solution %}}
We use [the distributive law](../factorising-common-factor/#factorising-with-distributive-law) and [cubic identities](../factorising-identities-2/#factorising-with-cubic-identities).

{{% enum a %}}
{{% mn q2a tips %}}
(1) Identity 5: $a^3-b^3$ $=(a-b)(a^2+ab+b^2)$
{{% /mn %}}
\begin{align*}
&3a^3 - 81b^3 \cr
&= 3\left(a^3-27b^3\right) \cr
&= 3\left\\{ a^3 - (3b)^3\right\\} \cr
&= \boldsymbol{ 3(a-3b)(a^2+3b+9b^2) }. \tag{1}
\end{align*}

{{% enum b %}}
{{% mn q2b tips %}}
(2) Identity 5: $a^3+b^3$ $=(a+b)(a^2-ab+b^2)$
{{% /mn %}}
\begin{align*}
& 125s^4 + 8st^3 \cr
&= s(125s^3 + 8t^3) \cr
&= s\left\\{ (5s)^3 + (2t)^3\right\\} \cr
&= \boldsymbol{ s(5s+2t)(25s^2 - 10st + 4t^2 ) }. \tag{2}
\end{align*}

{{% enum c %}}
{{% mn q2c tips %}}
(3) Identity 4: $a^3-3a^2b+3ab^2-b^3$ $=(a-b)^3$
{{% /mn %}}
\begin{align*}
& t^3 - t^2 + \dfrac{t}{3} - \dfrac{1}{27} \cr
&= t^3 - \hl{3\cdot\dfrac{1}{3}}t^2 + \hl{3\cdot\dfrac{1}{9}}t - \dfrac{1}{27} \cr
&= \boldsymbol{ (t-\dfrac{1}{3})^3 }. \tag{3}
\end{align*}

{{% enum d %}}
{{% mn q2d tips %}}
(4) Identity 2: $a^2-b^2$ $=(a+b)(a-b)$
{{% /mn %}}
\begin{align*}
& p^3 + 3p^2 - 4p - 12 \cr
&= p^2(\underline{p+3}) - 4(\underline{p+3}) \cr
&= (\underline{p+3})(p^2 - 4) \cr
&= \boldsymbol{ (p+3)(p+2)(p-2) }. \tag{4}
\end{align*}

{{% /details %}}

3. Factorise the following expressions.
    1. $x^2 - 2xy + y^2 - x + y$
    2. $81x^4 - y^4$
    3. $4x^4 - 37x^2y^2 + 9y^4$
    4. $\left( x^2 - x \right)^2 - 8x^2 + 8x + 12$

{{% details title="Answer" %}}

3.  
    1. $(x-y)(x-y-1)$
    2. $(9x^2 + y^2)(3x+y)(3x-y)$
    3. $(x+3y)(x-3y)(2x+y)(2x-y)$
    4. $(x-2)(x+1)(x-3)(x+2)$

{{% note Solution %}}
[Substitution](../advanced-factorising-1/#factorising-by-substitution) is useful here.

{{% enum a %}}
{{% mn q3a tips %}}
(1) Identity 1: $a^2-2ab+b^2$ $=(a-b)^2$<br>
(2) Factored out $(x-y)$
{{% /mn %}}
\begin{align*}
& x^2 - 2xy + y^2 - x + y \cr
&= \hl{(x^2 - 2xy + y^2) - (x - y)} \cr
&= (x-y)^2 - (x-y) \tag{1} \cr
&= \boldsymbol{ (x-y)(x-y-1) }. \tag{2}
\end{align*}

{{% enum b %}}
{{% mn q3b tips %}}
(3) $X^2-Y^2$ $=(X+Y)(X-Y)$, where $X=(3x)^2$ and $Y=y^2$
{{% /mn %}}
\begin{align*}
& 81x^4 - y^4 \cr
&= 3^4x^4 - y^4 \cr
&= (3x)^4 - y^4 \cr
&=\left\\{ (3x)^2 + y^2\right\\}\left\\{ (3x)^2 - y^2\right\\} \tag{3} \cr
&=\left\\{ (3x)^2 + y^2\right\\}(3x + y)(3x-y) \cr
&= \boldsymbol{ (9x^2 + y^2)(3x+y)(3x-y) }.
\end{align*}

{{% enum c %}}
{{% mn q3c tips %}}
(4)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q3c.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
& 4x^4 - 37x^2y^2 + 9y^4 \cr
&= 4 \hl{ \left( x^2 \right)^2 } - 37y^2 \hl{x^2} + 9y^4 \cr
&= (\hl{x^2}-9y^2)(4\hl{x^2}-y^2) \tag{4} \cr
&= \boldsymbol{ (x+3y)(x-3y)(2x+y)(2x-y) }.
\end{align*}

{{% enum d %}}
{{% mn q3d tips %}}
(5) $\square^2 -8\square + 12$ $=(\square-2)(\square-6)$
{{% /mn %}}
\begin{align*}
& \left( x^2 - x \right)^2 - 8x^2 + 8x + 12 \cr
&= \left(\underline{x^2 - x} \right)^2 - 8 (\underline{x^2 - x}) + 12 \cr
&= (\underline{x^2-x}-2)(\underline{x^2-x}-6) \tag{5} \cr
&= \boldsymbol{ (x-2)(x+1)(x-3)(x+2) }.
\end{align*}

{{% /details %}}

4. Factorise the following.
    1. $x^6 - 1$
    2. $(x+y)^6 - (x-y)^6$
    3. $x^6 - 19x^3 - 216$
    4. $x^6 - 2x^3 + 1$

{{% details title="Answer" %}}

4.  
    1. $(x+1)(x-1)(x^2+x+1)(x^2-x+1)$
    2. $4xy(x^2+3y^2)(3x^2+y^2)$
    3. $(x-2)(x+3)(x^2+2x+4)(x^2-3x+9)$
    4. $(x-1)^2(x^2+x+1)^2$

{{% note Solution %}}
We combine [the cubic identity](../factorising-identities-2/#factorising-with-cubic-identities) with [the substitution technique](../advanced-factorising-1/#factorising-by-substitution) to solve them.

{{% enum a %}}
{{% mn q4a tips %}}
(1) $A^2-1$ $=(A+1)(A-1)$, where $A=x^3$
{{% /mn %}}
\begin{align*}
& x^6 - 1 \cr
&= \left( x^3 \right)^2 - 1^2 \tag{1} \cr
&= (x^3 + 1)\times(x^3 - 1) \cr
&= (x+1)(x^2-x+1)\times (x-1)(x^2+x+1) \cr
&= \boldsymbol{ (x+1)(x-1)(x^2+x+1)(x^2-x+1) }.
\end{align*}

***Alternative solution.***
{{% mn q4a2 tips %}}
(2) See [factorising biquadratic polynomials](../advanced-factorising-2#biquadratic-polynomials) for more details
{{% /mn %}}
\begin{align*}
& x^6 - 1 \cr
&= \left( x^2 \right)^3 - 1^3 \cr
&= (x^2-1)(x^4+x^2+1) \cr
&= (x^2-1)\left\\{ x^4 \hl{+ 2x^2} + 1 \hl{- x^2}\right\\} \tag{2} \cr
&= (x^2-1)\left\\{ \left(x^2 + 1 \right)^2 - x^2\right\\} \cr
&= (x^2-1)(x^2+x+1)(x^2-x+1) \cr
&= \boldsymbol{ (x+1)(x-1)(x^2+x+1)(x^2-x+1) }.
\end{align*}

{{% enum b %}}
{{% mn q4b tips %}}
(3) $A^2-B^2$ $=(A+B)(A-B)$, where $A=(x+y)^3$ and $B=(x-y)^3$<br>
(4) Expanded $(x+y)^3$ and $(x-y)^3$
{{% /mn %}}
\begin{align*}
& (x+y)^6 - (x-y)^6 \cr
&=\left\\{ (x+y)^3\right\\}^2 -\left\\{ (x-y)^3\right\\}^2 \cr
&=\left\\{ (x+y)^3 + (x-y)^3\right\\} \times\left\\{ (x+y)^3 - (x-y)^3\right\\} \tag{3} \cr
&= (x^3 + \underline{3x^2y} + 3xy^2 + \underline{y^3} + x^3 - \underline{3x^2y} + 3xy^2 - \underline{y^3} ) \cr
&\phantom{=} \times (\underline{x^3} + 3x^2y + \underline{3xy^2} + y^3 - \underline{x^3} + 3x^2y - \underline{3xy^2} + y^3 ) \tag{4} \cr
&= (2x^3 + 6xy^2) \times (6x^2y + 2y^3) \cr
&= 2x(x^2 + 3y^2) \times 2y(3x^2 + y^2) \cr
&= \boldsymbol{ 4xy(x^2+3y^2)(3x^2+y^2) }.
\end{align*}

{{% enum c %}}
{{% mn q4c tips %}}
(5) $-216$ = $-6^3$ = $-2^3\cdot 3^3$ = $-8\cdot 27$
{{% /mn %}}
\begin{align*}
& x^6 - 19x^3 - 216 \cr
&= \left( x^3 \right)^2 - 19x^3 - 216 \cr
&= (x^3 - 8)(x^3 + 27) \tag{5} \cr
&= (x^3 - 2^3)\times(x^3 + 3^3) \cr
&= (x-2)(x^2+2x+4)\times(x+3)(x^2-3x+9) \cr
&= \boldsymbol{ (x-2)(x+3)(x^2+2x+4)(x^2-3x+9) }.
\end{align*}

{{% enum d %}}
{{% mn q4d tips %}}
(6) $A^2-2A+1$ $=(A-1)^2$, where $A = x^3$
{{% /mn %}}
\begin{align*}
& x^6 - 2x^3 + 1 \cr
&= \left(x^3\right)^2 - 2x^3 + 1 \cr
&= (x^3 - 1)^2 \tag{6} \cr
&=\left\\{ (x-1)(x^2+x+1)\right\\}^2 \cr
&= \boldsymbol{ (x-1)^2(x^2+x+1)^2 }.
\end{align*}

{{% /details %}}

5. Factorise the following. {{% mn ref2 ref %}}a. From Kanazawa Inst. of Tech.<br>b. From Kyoto Sangyo Univ.<br>d. From Yamanashi Gakuin Univ.<br>e. From Kokushikan Univ.{{% /mn %}}
    1. $(2x+5y)(2x+5y+8)-65$
    2. $(x+3y-1)(x+3y+3)(x+3y+4)+12$
    3. $3(2x-3)^2 - 4(2x+1) + 12$
    4. $2(x+1)^4 +2(x-1)^4 + 5(x^2-1)^2$
    5. $(x+1)(x+2)(x+3)(x+4)+1$

{{% details title="Answer" %}}

5. 
    1. $(2x+5y-5)(2x+5y+13)$
    2. $(x+3y)(x+3y+1)(x+3y+5)$
    3. $(2x-5)(6x-7)$
    4. $(3x^2+2x+3)(3x^2-2x+3)$
    5. $(x^2 + 5x + 5)^2$

{{% note Solution %}}

{{% enum a %}}
{{% mn q5a tips %}}
(1) Substitute $2x+5y = P$
{{% /mn %}}
\begin{align*}
& (2x+5y)(2x+5y+8)-65 \cr
&= P(P+8) - 65 \tag{1} \cr
&= P^2 + 8P - 65 \cr
&= (P-5)(P+13) \cr
&= \boldsymbol{ (2x+5y-5)(2x+5y+13) }.
\end{align*}

{{% enum b %}}
{{% mn q5b tips %}}
(2) Substitute $x+3y = Q$
{{% /mn %}}
\begin{align*}
& (x+3y-1)(x+3y+3)(x+3y+4)+12 \cr
&= (Q-1)(Q+3)(Q+4) + 12 \tag{2} \cr
&= (Q^2 + 2Q - 3)(Q+4) + 12 \cr
&= Q(Q^2 + 2Q - 3) + 4(Q^2 + 2Q - 3) + 12 \cr
&= Q^3 + 2Q^2 - 3Q + 4Q^2 + 8Q - 12 + 12 \cr
&= Q^3 + 6Q^2 + 5Q \cr
&= Q(Q^2 + 6Q + 5) \cr
&= Q(Q+1)(Q+5) \cr
&= \boldsymbol{ (x+3y)(x+3y+1)(x+3y+5) }.
\end{align*}

{{% enum c %}}
{{% mn q5c tips %}}
(3) Substitute $2x-3 = R$<br>
(4)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q5c.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
& 3(2x-3)^2 - 4(2x+1) + 12 \cr
&= 3(2x-3)^2 - 4(2x-3+4) + 12 \cr
&= 3R^2 - 4(R+4) + 12 \tag{3} \cr
&= 3R^2 - 4R - 16 + 12 \cr
&= 3R^2 - 4R - 4 \cr
&= (R-2)(3R + 2) \tag{4} \cr
&= \{ (2x-3)-2 \}\{ 3(2x-3) + 2 \} \cr
&= (2x-5)(6x-9+2) \cr
&= \boldsymbol{ (2x-5)(6x-7) }.
\end{align*}

{{% hr %}}

{{% enum d %}} Did you notice $(x^2-1)^2 = (x+1)^2(x-1)^2$? We will substitute $(x+1)^2=A$ and $(x-1)^2=B$ to continue!
{{% mn q5d tips %}}
(5)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q5d.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& 2(x+1)^4 + 2(x-1)^4 + 5(x^2-1)^2 \cr
&= 2(x+1)^4 + 2(x-1)^4 + 5(x+1)^2(x-1)^2 \cr
&= 2A^2 + 2B^2 + 5AB \cr
&= 2A^2 + 5AB + 2B^2 \cr
&= (2A+B)(A+2B). \tag{5}
\end{align*}

From here, we will substitute $x$ back and complete the factorisation.
\begin{align*}
\dots &= \{ 2(x+1)^2 + (x-1)^2 \} \{ (x+1)^2 + 2(x-1)^2 \} \cr
&= \{ 2(x^2 + 2x + 1) + (x^2 - 2x + 1) \} \cr
&\phantom{=} \times \{ (x^2 + 2x + 1) + 2(x^2 - 2x + 1) \} \cr
&= ( 2x^2 + 4x + 2 + x^2 - 2x + 1) \cr
&\phantom{=} \times (x^2+2x+1+2x^2-4x+2) \cr
&= \boldsymbol{ (3x^2+2x+3)(3x^2-2x+3) }.
\end{align*}

{{% enum e %}} If we swap the brackets and multiply them two by two, we can find a common factor of $x^2 + 5x$.
{{% mn q5e tips %}}
(6) $x^2 + 5x = T$
{{% /mn %}}

\begin{align*}
& (x+1)(x+2)(x+3)(x+4)+1 \cr
&= \hl{(x+1)(x+4) \times (x+2)(x+3)} + 1 \cr
&= (x^2 + 5x+ 4) \times (x^2 + 5x + 6) + 1 \cr
&= (T+4)(T+6) + 1 \tag{6} \cr
&= T^2 + 10T + 24 + 1 \cr
&= T^2 + 10T + 25 \cr
&= (T+5)^2 \cr
&= \boldsymbol{ (x^2 + 5x + 5)^2 }.
\end{align*}

{{% /details %}}

6.  
    1. Factorise $a^3 + b^3 + c^3 - 3abc$.
    2. Use the result for (a) to factorise $a^3+6ab-8b^3+1$.

*Hint: Complete the cube $(a+b)^3$ first.*

{{% details title="Answer" %}}

6. 
    1. $(a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$
    2. $(a-2b+1)(a^2+4b^2 +2ab - a + 2b + 1)$

{{% note Solution %}}

{{% enum a %}} To make $(a+b)^3$ from $a^3+b^3$, we need two additional terms: $3a^2b$ and $3ab^2$. So we 'borrow' them to complete the perfect cube equation. Note the sum of the terms in red equals zero.

\begin{align*}
& a^3 + b^3 + c^3 - 3abc \cr
&= \underline{a^3 \hl{+3a^2b+3ab^2} + b^3} \hl{-3a^2b-3ab^2} + c^3 - 3abc \cr
&= \underline{(a+b)^3} - 3a^2b - 3ab^2 + c^3 - 3abc \cr
&= (a+b)^3 - 3ab(a+b) + c^3 - 3abc \cr
&= (a+b)^3 + c^3 - 3ab(a+b) - 3abc \cr
&= \underbrace{(a+b)^3 + c^3}_\triangle - 3ab(a+b+c).
\end{align*}

We can use the cubic identity $A^3+B^3 = (A+B)(A^2-AB+B^2)$ for $\triangle$:

\begin{align*}
\dots &= \underbrace{\{ (a+b)+c \} \{ (a+b)^2 - (a+b)c + c^2 \}}_\triangle - 3ab(a+b+c) \cr
&= \underline{(a+b+c)} \{ (a+b)^2 - (a+b)c + c^2 \} - 3ab\underline{(a+b+c)} \cr
&= \underline{(a+b+c)} \{ (a+b)^2 - (a+b)c + c^2 - 3ab\} \cr
&= (a+b+c)(a^2 + 2ab + b^2 - ac - bc + c^2 - 3ab ) \cr
&= \boldsymbol{ (a+b+c)(a^2+b^2+c^2 - ab - bc - ca) }.
\end{align*}

***Alternative solution.*** An alternative method is to divide $a^3+b^3+c^3$ by $a+b+c$, to find the quotient $a^2+b^2+c^2 - ab - bc - ca$ and remainder $3abc$, or in other words,
$$
\underbrace{a^3+b^3+c^3}\_\text{dividend} = \underbrace{(a+b+c)}\_\text{divisor} \underbrace{(a^2+b^2+c^2 - ab - bc - ca)}\_\text{quotient} + \underbrace{3abc}\_\text{remainder}.
$$

You can easily find the answer from here. The problem with this solution is that we have not discussed how to divide one polynomial from another yet, and the division is quite tricky.

{{% enum b %}} Since

\begin{align*}
& a^3 + 6ab - 8b^3 + 1 \cr
&= a^3 + (-2b)^3 + 1^3 - 3\cdot a\cdot (-2b)\cdot 1,
\end{align*}

we can use the result of (a). Then
\begin{align*}
\cdots &= \{ a + (-2b) + 1 \} \{ a^2 + (-2b)^2 + 1^2 - a\cdot (-2b) - (-2b)\cdot 1 - 1\cdot a \} \cr
&= (a-2b+1)(a^2+4b^2+1 + 2ab +2b - a) \cr
&= \boldsymbol{ (a-2b+1)(a^2+4b^2 +2ab - a + 2b + 1) }.
\end{align*}

{{% /details %}}

7. Simplify the expressions below. {{% mn ref7 refs %}}a. From Nara Univ.{{% /mn %}}
    1. $(a+b+c)^2 - (b+c-a)^2 + (c+a-b)^2 - (a+b-c)^2$
    2. $(a+b+c)(-a+b+c)(a-b+c)$ $+(a+b+c)(a-b+c)(a+b-c)$ $+(a+b+c)(a+b-c)(-a+b+c)$ $-(-a+b+c)(a-b+c)(a+b-c)$

*Hint: Substitute $a+b+c=A$, $b+c-a=B$, and so on.*

{{% details title="Answer" %}}

7. 
    1. $8ac$
    2. $8abc$

{{% note Solution %}}

{{% enum a %}} If we substitute $a+b+c=A$, $b+c-a=B$, $c+a-b=C$, and $a+b-c=D$,

\begin{align*}
& (a+b+c)^2 - (b+c-a)^2 + (c+a-b)^2 - (a+b-c)^2 \cr
&= A^2-B^2 + C^2-D^2 \cr
&= (A+B)(A-B) + (C+D)(C-D) \cr
&=\left\\{ (a+b+c) + (b+c-a)\right\\}\left\\{ (a+b+c) - (b+c-a)\right\\} \cr
&\phantom{=} +\left\\{ (c+a-b) + (a+b-c)\right\\}\left\\{ (c+a-b) - (a+b-c)\right\\} \cr
&= (2b+2c)\cdot 2a \cr
&\phantom{=} +2a \cdot (2c-2b) \cr
&= 4a(b+c) + 4a(c-b) \cr
&= 4a\{ (b+c) + (c-b) \} \cr
&= \boldsymbol{ 8ac }.
\end{align*}

{{% enum b %}} Likewise, if we substitute $a+b+c=A$, $b+c-a=B$, $c+a-b=C$, and $a+b-c=D$,
{{% mn q7b tips %}}
(1) $B+D$ $= (b+c-a) + (a+b-c)$ $= 2b$, <br>
$A-C$ $= (a+b+c) - (c+a-b)$ $= 2b$<br>
(2) $(X+Y)(X-Y)$ $=X^2-Y^2$<br>
($\lozenge$) [Proof](../advanced-expanding/#creating-patterns-for-the-identities)
{{% /mn %}}

\begin{align*}
& (a+b+c)(-a+b+c)(a-b+c) + \cdots \cr
&= ABC + ACD + ABD - BCD \cr
&= \hl{ AC(B+D) + BD(A-C) } \cr
&= AC \cdot \hl{2b} + BD \cdot \hl{2b} \tag{1} \cr
&= 2b(AC + BD) \cr
&= 2b\{(a+b+c)(c+a-b) + (b+c-a)(a+b-c) \} \cr
&= 2b\{(\underline{a+c}+b)(\underline{a+c}-b) + (b+\underline{c-a})(b+\underline{a-c}) \} \cr
&= 2b\left\\{ (\underline{a+c})^2 - b^2 + b^2 - (\underline{a-c})^2\right\\} \tag{2} \cr
&= 2b\left\\{ (a+c)^2 - (a-c)^2\right\\} \cr
&= 2b\cdot 4ac \tag{$\lozenge$} \cr
&= \boldsymbol{ 8abc }.
\end{align*}

{{% /details %}}

8. Factorise the following expressions. {{% mn ref8 refs %}}a. From Tsukuba Int'l Univ.<br>b. From Hosei Univ.<br>c. From Gifu Women's Univ.{{% /mn %}}
    1. $x^2y - 2xyz - y - xy^2 + x - 2z$
    2. $8x^3 + 12x^2y + 4xy^2 + 6x^2 + 9xy + 3y^2$
    3. $x^3y + x^2y^2 + x^3 + x^2y - xy - y^2 - x - y$

{{% details title="Answer" %}}

8. 
    1. $(xy+1)(x-y-2z)$
    2. $(4x+3)(y^2 + 4xy + 2x^2)$
    3. $(x+y)(y+1)(x+1)(x-1)$

{{% note Solution %}}

{{% enum a %}} $z$ is the variable with the lowest order, so we will try to [rearrange the polynomial](../advanced-factorising-1/#rearranging-the-polynomial) in terms of $z$.
{{% mn q8a tips %}}
(1) Common factor of $(x-y)$<br>
(2) Common factor of $(xy+1)$
{{% /mn %}}

\begin{align*}
& x^2y - 2xyz - y - xy^2 + x - 2z \cr
&= (-2xy - 2)\hl{z} + x^2y -y - xy^2 + x \cr
&= -2z(xy+1) + x^2y - xy^2 + x - y \cr
&= -2z(xy+1) + xy(\underline{x-y}) + (\underline{x-y}) \cr
&= -2z(\underline{xy+1}) + (\underline{xy+1})(x-y) \tag{1} \cr
&= \boldsymbol{ (xy+1)(x-y-2z) }. \tag{2}
\end{align*}

{{% enum b %}} We will rearrange the expression in terms of $y$.
{{% mn q8b tips %}}
(3) Common factor of $(4x+3)$
{{% /mn %}}

\begin{align*}
& 8x^3 + 12x^2y + 4xy^2 + 6x^2 + 9xy + 3y^2 \cr
&= (4x+3)\hl{y^2} + (12x^2+9x)\hl{y} + 8x^3 + 6x^2 \cr
&= (\underline{4x+3})y^2 + 4x(\underline{4x+3})y + 2x^2(\underline{4x+3}) \cr
&= \boldsymbol{ \underline{(4x+3)}(y^2 + 4xy + 2x^2) }. \tag{3}
\end{align*}

{{% enum c %}} We will rearrange the expression in terms of $x$.
{{% mn q8c tips %}}
(4) Common factor of $(x+y)$<br>
(5) Group the terms inside the bracket to find another common factor of $(x+y)$
{{% /mn %}}

\begin{align*}
& x^3y + x^2y^2 + x^3 + x^2y - xy - y^2 - x - y \cr
&= (y+1)\hl{x^3} + (y^2+y)\hl{x^2} - (y+1)\hl{x} - y^2 - y \cr
&= (\underline{y+1})x^3 + (\underline{y+1})x^2y - (\underline{y+1})x - (\underline{y+1})y \cr
&= (\underline{y+1})(x^3 + x^2y - x - y) \tag{4} \cr
&= (y+1)\{\hl{x^2(x+y) - (x+y)} \} \tag{5} \cr
&= (y+1)(x+y)(x^2 - 1) \cr
&= \boldsymbol{ (y+1)(x+y)(x+1)(x-1) }.
\end{align*}

***Alternative solution.*** You can also group the terms two by two to find the common factor.
{{% mn q8c2 tips %}}
(6) Group the terms inside the bracket to find another common factor of $(y+1)$
{{% /mn %}}

\begin{align*}
& x^3y + x^2y^2 + x^3 + x^2y - xy - y^2 - x - y \cr
&= x^2y(\underline{x+y}) + x^2(\underline{x+y}) - y(\underline{x+y}) - (\underline{x+y}) \cr
&= (\underline{x+y})(x^2y + x^2 - y - 1) \cr
&= (x+y)\{ \hl{ x^2(y+1) - (y+1) } \} \tag{6} \cr
&= (x+y)(y+1)(x^2 - 1) \cr
&= \boldsymbol{ (x+y)(y+1)(x+1)(x-1) }.
\end{align*}

{{% /details %}}

9. Factorise the following expressions. {{% mn ref9 refs %}}a. From Tohoku Gakuin Univ.<br>b. From Matsuyama Univ.<br>c. From Hosei Univ.{{% /mn %}}
    1. $(a+b)x^2 - 2ax + a - b$
    2. $a^2 + (2b-3)a - (3b^2 + b - 2)$
    3. $3x^2 - 2y^2 + 5xy + 11x + y + 6$
    4. $24x^2 -54y^2 - 14x + 141y - 90$

{{% details title="Answer" %}}

9.  
    1. $(x-1)(ax + bx - a + b)$
    2. $(a+3b-2)(a-b-1)$
    3. $(3x-y+2)(x+2y+3)$
    4. $(4x+6y-9)(6x-9y+10)$

{{% note Solution %}}
The questions can be solved with [the cross-multiplication method](../advanced-factorising-2/#quadratic-in-two-variables).

{{% enum a %}} Notice $(a+b)+(a-b) = 2a$.

$$
\begin{align*}
(a+b)x^2 - 2ax + a - b &= (x - 1)\{ (a+b)x - (a-b) \} \cr
&= \boldsymbol{ (x-1)(ax + bx - a + b) }.
\end{align*} \\\\[0.5em]
\rlap{\kern4em\raisebox{0.65em}{$\huge\times$} }
\begin{array}{rcrrr}
  (a+b) && -(a-b) & \rightarrow & -a+b \\\\[0.7em]
  1 && -1 & \rightarrow & -a-b \\\\[0.2em]
  \hline \\\\[-0.9em]
  &&&& \boldsymbol{ -2a }
\end{array}
$$

{{% enum b %}}
{{% mn q9b tips %}}
(1)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9b.JPG" alt="cross-multiplication" %}}<br>
(2)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9b2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}
\begin{align*}
& a^2 + (2b-3)a - (3b^2 + b - 2) \cr
&= a^2 + (2b-3)a - \hl{(3b-2)(b+1)} \tag{1} \cr
&= \{ a + (3b-2) \}\{ a - (b+1) \} \tag{2} \cr
&= \boldsymbol{ (a+3b-2)(a-b-1) .}
\end{align*}

{{% hr %}}

{{% enum c %}} We will [rearrange the polynomial](../advanced-factorising-1/#rearranging-the-polynomials) in terms of $x$ first.
{{% mn q9c tips %}}
(3)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9c.JPG" alt="cross-multiplication" %}}<br>
(4)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9c2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& 3x^2 - 2y^2 + 5xy + 11x + y + 6 \cr
& 3\hl{x^2} + (5y+11)\hl{x} - 2y^2 + y + 6 \cr
&= 3\hl{x^2} + (5y+11)\hl{x} - (2y^2 - y - 6) \cr
&= 3\hl{x^2} + (5y+11)\hl{x} - (2y+3)(y-2) \tag{3} \cr
&= \{ 3\hl{x} - (y-2) \}\{ \hl{x} + (2y+3) \} \tag{4} \cr
&= \boldsymbol{ (3x-y+2)(x+2y+3) }.
\end{align*}

{{% hr %}}

{{% enum d %}} The numbers are a bit too big to work with comfortably. Thankfully some of them are divisible by $3$, so we factor it out first{{% sn div3 %}}A number is divisible by $3$ if the sum of all digits is divisible by $3$. For example, $252$ is divisible by $3$ ($252 = 3\times 84$) because $2+5+2=9$ is divisible by $3$.{{% /sn %}}. We also know that there is no $y$ in the coefficient of $x$, which means it is easier to apply the cross-multiplication method to $y$ first.
{{% mn q9d tips %}}
(5)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9d.JPG" alt="cross-multiplication" %}}<br>
(6)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q9d2.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& 24x^2 - 54y^2 - 14x + 141y - 90 \cr
&= 24x^2 - 14x - 54y^2 + 141y - 90 \cr
&= 24x^2 - 14x - 3(18y^2 - 47y + 30) \cr
&= 24x^2 - 14x - 3\hl{(2y-3)(9y-10)} \tag{5} \cr
&= \{ 4x + 3(2y-3) \}\{ 6x -(9y-10) \} \tag{6} \cr
&= \boldsymbol{ (4x+6y-9)(6x-9y+10) }.
\end{align*}

{{% hr %}}

{{% /details %}}

10. Factorise the following expressions. {{% mn ref10 refs %}}a. From Setsunan Univ.<br> b. From Chukyo Univ.{{% /mn %}}
    1. $a^3 + a^2b - a(c^2+b^2) + bc^2 - b^3$
    2. $a(b+c)^2 + b(c+a)^2 + c(a+b)^2 - 4abc$
    3. $a^2b - ab^2 - b^2c + bc^2 - c^2a - ca^2 + 2abc$

{{% details title="Answer" %}}

10. 
    1. $(a-b)(a+b+c)(a+b-c)$
    2. $(a+b)(b+c)(c+a)$
    3. $(a-b)(b-c)(c+a)$

{{% note Solution %}}

{{% enum a %}} The degree is the lowest in $c$, so we will rearrange the polynomial in terms of $c$.
{{% mn q10a tips %}}
(1) Rearranged in terms of $c$<br>
(2) Taken out the common factor $(a-b)$
{{% /mn %}}

\begin{align*}
& a^3 + a^2b - a(c^2+b^2) + bc^2 - b^3 \cr
&= a^3 + a^2b - ac^2 - ab^2 + bc^2 - b^3 \cr
&= (b-a)\hl{c^2} + a^3 - b^3 - ab^2 + a^2b \tag{1} \cr
&= -(a-b)c^2 + \hl{(a-b)(a^2+ab+b^2)} - ab^2 + a^2b \cr
&= -(\underline{a-b})c^2 + (\underline{a-b})(a^2+ab+b^2) + ab(\underline{a-b}) \tag{2} \cr
&= (\underline{a-b})\{ - c^2 + (a^2+ab+b^2) + ab \} \cr
&= (a-b)\{ (a^2 + 2ab + b^2) - c^2 \} \cr
&= (a-b)\{ (a+b)^2 - c^2 \} \cr
&= \boldsymbol{ (a-b)(a+b+c)(a+b-c) }.
\end{align*}

{{% enum b %}} We will rearrange the polynomial in terms of $a$. To do that, we need to expand two of the perfect squares first.
{{% mn q10b tips %}}
(3) Rearranged in terms of $a$<br>
(4) Taken out the common factor $(b+c)$
{{% /mn %}}

\begin{align*}
& a(b+c)^2 + b(c+a)^2 + c(a+b)^2 - 4abc \cr
&= a(b+c)^2 + \hl{b(c^2 + 2ac + a^2) + c(a^2 + 2ab + b^2)} - 4abc \cr
&= a(b+c)^2 + bc^2 + \underline{2abc} + a^2b + a^2c + \underline{2abc} + b^2c - \underline{4abc} \cr
&= a(b+c)^2 + bc^2 + a^2b + a^2c + b^2c \cr
&= (b+c) \hl{a^2} + (b+c)^2\hl{a} + bc^2 + b^2c \tag{3} \cr
&= (\underline{b+c})a^2 + (\underline{b+c})(b+c)a + bc(\underline{b+c}) \cr
&= (\underline{b+c})\{ a^2 + (b+c)a + bc \} \tag{4} \cr
&= \boldsymbol{ (a+b)(b+c)(c+a) }.
\end{align*}

{{% enum c %}} We will rearrange the polynomial in terms of $a.$
{{% mn q10c tips %}}
(5) Rearranged in terms of $a$<br>
(6) Taken out the common factor $(b-c)$
{{% /mn %}}

\begin{align*}
& a^2b - ab^2 - b^2c + bc^2 - c^2a - ca^2 + 2abc \cr
&= (b-c)\hl{a^2} + (- b^2 + 2bc - c^2)\hl{a} - b^2c + bc^2 \tag{5} \cr
&= (b-c)a^2 - (b^2-2bc+c^2)a - bc(b-c) \cr
&= (\underline{b-c})a^2 - (\underline{b-c})^2a - bc(\underline{b-c}) \cr
&= (\underline{b-c})\{ a^2 - (b-c)a - bc \} \tag{6} \cr
&= \boldsymbol{ (a-b)(b-c)(c+a) }.
\end{align*}

{{% /details %}}

11. Factorise the following polynomials. {{% mn ref11 refs %}}b. From Tsukuba Int'l Univ.{{% /mn %}}
    1. $(x+y)(y+z)(z+x) + xyz$
    2. $6a^2b - 5abc - 6a^2c + 5ac^2 - 4bc^2 + 4c^3$
    3. $(a^2 - 1)(b^2 - 1) - 4ab$

{{% details title="Answer" %}}

11. 
    1. $(xy + yz + zx)(x+y+z)$
    2. $(3a-4c)(2a+c)(b-c)$
    3. $( ab + a + b - 1 )( ab - a - b - 1 )$

{{% note Solution %}}

{{% enum a %}} We will expand the brackets and rearrange the polynomial in terms of $z$.
{{% mn q11a tips %}}
(1)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q11a.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& (x+y)(\hl{z}+y)(\hl{z}+x) + xy\hl{z} \cr
&= (x+y)\{ \hl{z^2} + (x+y)\hl{z} + xy \} + xy\hl{z} \cr
&= (x+y)\hl{z^2} + (x+y)^2\hl{z} + xy(x+y) + xy\hl{z} \cr
&= (x+y)\hl{z^2} + \{ (x+y)^2 + xy \} \hl{z} + xy(x+y) \cr
&= \{ (x+y)\hl{z} + xy \} \{ \hl{z} + (x+y) \} \tag{1} \cr
&= \boldsymbol{ (xy + yz + zx)(x+y+z) }.
\end{align*}

{{% hr %}}

{{% enum b %}} The polynomial is only linear in $b$, so we will rearrange the polynomial in terms of $b$.
{{% mn q11b tips %}}
(2)<br>
{{% img-raw src="courses/jpn-maths-1/numbers-and-expressions/poly-12q11b.JPG" alt="cross-multiplication" %}}
{{% /mn %}}

\begin{align*}
& 6a^2\hl{b} - 5a\hl{b}c - 6a^2c + 5ac^2 - 4\hl{b}c^2 + 4c^3 \cr
&= (6a^2 - 5ac - 4c^2)\hl{b} - 6a^2c + 5ac^2 + 4c^3 \cr
&= (6a^2 - 5ac - 4c^2)b - (6a^2 - 5ac - 4c^2)c \cr
&= (6a^2 - 5ac - 4c^2)(b-c) \cr
&= \boldsymbol{ (3a-4c)(2a+c)(b-c) }. \tag{2}
\end{align*}

{{% hr %}}

{{% enum c %}} Once we expand the brackets, we can find two perfect squares! Note we split $-4ab$ into $-2ab-2ab$ in order to do that.

\begin{align*}
& (a^2 - 1)(b^2 - 1) - 4ab \cr
&= a^2b^2 - a^2 - b^2 + 1 -4ab \cr
&= a^2b^2 \hl{-2ab} + 1 - a^2 \hl{-2ab} - b^2 \cr
&= (ab)^2 - 2ab + 1^2 - (a^2 + 2ab + b^2) \cr
&= (ab-1)^2 - (a+b)^2 \cr
&= \{ (ab-1)+(a+b) \} \{ (ab-1)-(a+b) \} \cr
&= \boldsymbol{ ( ab + a + b - 1 )( ab - a - b - 1 ) } .
\end{align*}

{{% /details %}}
