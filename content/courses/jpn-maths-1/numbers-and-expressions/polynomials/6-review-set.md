---
title: "Review: Polynomials and Expansion"
description: "Review questions for polynomial arithmetic and expansion."
slug: review-1

date: 2020-05-25 15:24:17 +1000
lastMod: 2020-12-10 07:57:00.199 +1100

type: docs
toc: false
math: true
draft: false

tags:
  - algebra
  - polynomial

menu:
  math1:
    parent: Polynomials
    name: ✏️ Review 1
    weight: 16

weight: 16
---

1. If $P=-2x^2+2x-5$, $Q=3x^2-x$, and $R=-x^2-x+5$, calculate:
   $$3P - \left\[ 2 \{ Q - (2R - P) \} - 3(Q-R) \right\].$$

{{% details title="Answer" %}}

1. $0$

{{% note Solution %}}
{{% mn sol1 %}}Refer to [Adding and Subtracting Polynomials](../adding-polynomials) for more help.{{% /mn %}}Before we substitute the polynomials, we simplify the expression first.
`\begin{align*}
& 3P - \left[ 2 \{ Q - (2R - P) \} - 3(Q-R) \right] \\
&= 3P - \left\{ 2 ( Q - 2R + P ) - 3(Q-R) \right\} \\
&= 3P - \left( 2Q - 4R + 2P - 3Q + 3R \right) \\
&= 3P - ( 2P - Q - R ) \\
&= 3P + Q - 2P + R \\
&= P + Q + R.
\end{align*}`
Now we substitute $P$, $Q$, and $R$ :
`\begin{align*}
P+Q+R &= (-2x^2+2x-5) + (3x^2-x) + (-x^2-x+5) \\
&= (-2x^2 + 3x^2 - x^2) + (2x - x - x) + (-5 + 5) \\
&= \boldsymbol{ 0 }.
\end{align*}`

{{% /details %}}

2. Calculate the following. {{% mn ref2 ref %}}a. From Jobu Univ.{{% /mn %}}
    1. $5xy^2 \times (-2x^2y)^3$
    2. $2a^2b \times (-3ab)^2 \times (-a^2b^2)^3$
    3. $(-2a^2b)^3 (3a^3b^2)^2$
    4. $(-2ax^3y)^2(-3ab^2xy^3)$

{{% details title="Answer" %}}

2. 
    1. $-40x^7y^5$
    2. $-18a^{10}b^9$
    3. $-72a^{12}b^7$
    4. $-12a^3b^2x^7y^5$

{{% note Solution %}}
{{% mn sol2 %}}Refer to [Multiplying Polynomials](../multiplying-polynomials) for more help.{{% /mn %}}Use the three index laws to simplify the expressions.

{{% enum a %}}
`\begin{align*}
& 5xy^2 \times (-2x^2y)^3 \\
&= 5xy^2 \times (-2)^3 x^{2 \times 3} y^3 \\
&= 5xy^2 \times (-8)x^6y^3 \\
&= -40 x^{1+6} y^{2+3} \\
&= \boldsymbol{ -40x^7y^5 .}
\end{align*}`
{{% enum b %}}
`\begin{align*}
& 2a^2b \times (-3ab)^2 \times (-a^2b^2)^3 \\
&= 2a^2b \times (-3)^2a^2b^2 \times (-1)^3 a^{2\times 3} b^{2\times 3} \\
&= 2a^2b \times 9a^2b^2 \times (-1) a^6b^6 \\
&= -18a^{2+2+6}b^{1+2+6} \\
&= \boldsymbol{ -18a^{10}b^9 .}
\end{align*}`
{{% enum c %}}
`\begin{align*}
& (-2a^2b)^3 \times (3a^3b^2)^2 \\
&= (-2)^3 a^{2\times 3} b^3 \times 3^2 a^{3\times 2} b^{2\times 2} \\
&= -8a^6b^3 \times 9 a^6b^4 \\
&= -72a^{6+6}b^{3+4} \\
&= \boldsymbol{ -72a^{12}b^7 .}
\end{align*}`
{{% enum d %}}
`\begin{align*}
& (-2ax^3y)^2 \times (-3ab^2xy^3) \\
&= (-2)^2a^2x^{3\times 2}y^2 \times (-3ab^2xy^3) \\
&= 4a^2x^6y^2 \times (-3ab^2xy^3) \\
&= -12a^{2+1}b^2x^{6+1}y^{2+3} \\
&= \boldsymbol{ -12a^3b^2x^7y^5 .}
\end{align*}`

{{% /details %}}

3. Expand the following expressions.{{% mn ref3 ref %}}a. From Hakodate Univ.<br>b. From Kinki Univ.<br>d. From Hakodate Univ.{{% /mn %}}
    1. $(a-b+c)(a-b-c)$
    2. $(2x^2-x+1)(x^2+3x-3)$
    3. $(3a-4b)^3$
    4. $(x^3+x-3)(x^2-2x+2)$

{{% details title="Answer" %}}

3. 
    1. $a^2 + b^2 - c^2 - 2ab$
    2. $2x^4 + 5x^3 - 8x^2 + 6x - 3$
    3. $27a^3 - 108a^2b + 144ab^2 - 64b^3$
    4. $x^5 - 2x^4 + 3x^3 - 5x^2 + 8x - 6$

{{% note Solution %}}
{{% mn sol3 %}}Refer to [Advanced Techniques for Expanding](../advanced-expanding) for more help.{{% /mn %}} For (a) and (c), we will use the quadratic identities.

{{% enum a %}}
{{% mn q3a tips %}}
(1) Identity 2: $(A+B)(A-B)$ $=A^2-B^2$<br>
(2) Identity 1: $(A-B)^2$ $=A^2-2AB+B^2$
{{% /mn %}}
`\begin{align*}
& (a-b+c)(a-b-c) \\
&= \left\{ (\underline{a-b})+c \right\}\left\{ (\underline{a-b})-c \right\} \\
&= (\underline{a-b})^2 - c^2 \tag{1} \\
&= a^2 - 2ab + b^2 - c^2 && \tag{2} \\
&= \boldsymbol{ a^2 + b^2 - c^2 - 2ab .}
\end{align*}`
{{% enum b %}}
`\begin{align*}
& (2x^2-x+1)(\underline{x^2+3x-3}) \\
&= 2x^2(\underline{x^2+3x-3}) -x(\underline{x^2+3x-3}) +(\underline{x^2+3x-3}) \\
&= 2x^4 + 6x^3 - 6x^2 -x^3 - 3x^2 + 3x + x^2 + 3x - 3 \\
&= \boldsymbol{ 2x^4 + 5x^3 - 8x^2 + 6x - 3 .}
\end{align*}`
{{% enum c %}}
{{% mn q3c tips %}}
(3) Identity 4: $(A-B)^3$ $=A^3-3A^2B+3AB^2-B^3$
{{% /mn %}}
`\begin{align*}
& (3a-4b)^3 \\
&= (3a)^3 - 3(3a)^2\cdot 4b + 3\cdot 3a \cdot (4b)^2 - (4b)^3 \tag{3} \\
&= 27a^3 - 3\cdot 9a^2 \cdot 4b + 3\cdot 3a \cdot 16b^2 - 64b^3 \\
&= \boldsymbol{ 27a^3 - 108a^2b + 144ab^2 - 64b^3 .}
\end{align*}`
{{% enum d %}}
`\begin{align*}
& (x^3+x-3)(\underline{x^2-2x+2}) \\
&= x^3(\underline{x^2-2x+2}) + x(\underline{x^2-2x+2}) - 3(\underline{x^2-2x+2}) \\
&= x^5 - 2x^4 + 2x^3 + x^3 - 2x^2 + 2x - 3x^2 + 6x - 6 \\
&= \boldsymbol{ x^5 - 2x^4 + 3x^3 - 5x^2 + 8x - 6 .}
\end{align*}`

{{% /details %}}

4. Expand the following.
    1. $(x^2 - 2xy + 4y^2)(x^2 + 2xy + 4y^2)$
    2. $(x+y)(x-y)(x^2+y^2)(x^4+y^4)$
    3. $(1+a)(1-a^3+a^6)(1-a+a^2)$
    4. $t(t-1)(t-2)(t-3)$

{{% details title="Answer" %}}

4.  
    1. $x^4 + 4x^2y^2 + 16y^4$
    2. $x^8 - y^8$
    3. $1 + a^9$
    4. $t^4 - 6t^3 + 11t^2 - 6t$

{{% note Solution %}}

{{% mn sol4 %}}Refer to [Advanced Techniques for Expanding](../advanced-expanding) for more help.{{% /mn %}} All of the expressions can be expanded easily with some tricks.

{{% enum a %}}
{{% mn q4a tips %}}
(1) Identity 2: $(A+B)(A-B)$ $=A^2-B^2$<br>
(2) Identity 1: $(A+B)^2$ $=A^2+2AB+B^2$
{{% /mn %}}
`\begin{align*}
& (x^2 - 2xy + 4y^2)(x^2 + 2xy + 4y^2) \\
&= \left\{ (\underline{x^2+4y^2})-2xy \right\}\left\{ (\underline{x^2+4y^2})+2xy \right\} \\
&= (\underline{x^2+4y^2})^2 - (2xy)^2 \tag{1} \\
&= x^4 + 8x^2y^2 + 16y^4 - 4x^2y^2 \tag{2} \\
&= \boldsymbol{ x^4 + 4x^2y^2 + 16y^4 .}
\end{align*}`
{{% enum b %}}
{{% mn q4b tips %}}
(3)-(6) Identity 2: $(A+B)(A-B)$ $=A^2-B^2$
{{% /mn %}}
`\begin{align*}
& (x+y)(x-y)(x^2+y^2)(x^4+y^4) \tag{3} \\
&= \hl{(x^2-y^2)}(x^2+y^2)(x^4+y^4) \tag{4} \\
&= \hl{(x^4-y^4)}(x^4+y^4) \tag{5} \\
&= \boldsymbol{ x^8 - y^8 .} \tag{6}
\end{align*}`
{{% enum c %}}
{{% mn q4c tips %}}
(7) Identity 5: $(A+B)(A^2-AB+B^2)$ $=A^3+B^3$<br>
(8) $(1+\Box)(1-\Box+\Box^2)$ form
{{% /mn %}}
`\begin{align*}
& (1+a)(1-a^3+a^6)(1-a+a^2) \\
&= \hl{ (1+a)(1-a+a^2) \times (1-a^3+a^6) } \\
&= (1+a^3) \times (1-a^3+a^6) \tag{7} \\
&= (1+a^3)\left\{ 1-a^3+\left(a^3\right)^3 \right\} \tag{8} \\
&= 1 + \left( a^3 \right)^3 \\
&= \boldsymbol{ 1 + a^9 .}
\end{align*}`
{{% enum d %}}
{{% mn q4d tips %}}
(9) $\Box (\Box + 2)$ form<br>
(10) Identity 1: $(A-B)^2$ $=A^2-2AB+B^2$
{{% /mn %}}
`\begin{align*}
& t(t-1)(t-2)(t-3) \\
&= \hl{t(t-3)\times(t-1)(t-2)} \\
&= (\underline{t^2 - 3t}) \times (\underline{t^2 - 3t} + 2) \tag{9} \\
&= (\underline{t^2 - 3t})^2 + 2(\underline{t^2 - 3t}) \tag{10} \\
&= t^4 - 6t^3 + 9t^2 + 2t^2 - 6t \\
&= \boldsymbol{ t^4 - 6t^3 + 11t^2 - 6t .}
\end{align*}`

{{% /details %}}

5. What is the coefficient of {{% enum a "margin: 0" %}} $x^5$ and {{% enum b "margin: 0" %}} $x^3$, when you expand
   $$(x^3 + 3x^2 + 2x + 7)(x^3 + 2x^2 - x + 1)?$$

{{% details title="Answer" %}}
5. 
    1. $5$
    2. $9$

{{% note Solution %}} It would take too long to expand the entire expression and find the terms of $x^5$ and $x^3$. Instead, we can use the fact that every term in the left polynomial is multiplied with every term in the right polynomial exactly once. From $$ (x^3 + 3x^2 + 2x + 7)\times \hl{(x^3 + 2x^2 - x + 1)}, $$ the combinations that give $x^5$ are $x^3\cdot\hl{2x^2}$ and $3x^2\cdot\hl{x^3}$. So the coefficient of $x^5$ is $$ 2\cdot 1 + 3\cdot 1 = \boldsymbol{5}. $$ Likewise, the combinations that give $x^3$ are $x^3\cdot\hl{1}$, $3x^2\cdot\hl{(-x)}$, $2x\cdot\hl{2x^2}$, and $7\cdot\hl{x^3}$, and hence the coefficient of $x^3$ is $$ 1\cdot 1+3\cdot(-1) + 2\cdot 2 + 7\cdot 1 = \boldsymbol{9}. $$

{{% /details %}}

6. Find the coefficient of $xyz$ in the expansion of
   $$(2x+3y+z)(x+2y+3z)(3x+y+2z).$$

{{% details title="Answer" %}}

6. $54$

{{% note Solution %}} The reasoning is similar to Question 5. The term with $xyz$ appears only when you multiply one term with $x$, one with $y$, and one with $z$. $2x\cdot 3z \cdot y$ and $3y\cdot x \cdot 2z$ are two examples. Remember, we can choose one term from each bracket. There are six combinations in total:
`\begin{alignat*}{3}
& 2x \cdot 2y \cdot 2z, \quad && 2x \cdot 3z \cdot y, \quad && 3y \cdot x \cdot 2z, \\
& 3y \cdot 3z \cdot 3x, && z \cdot x \cdot y, && z \cdot 2y \cdot 3x.
\end{alignat*}`
Therefore the coefficient of $xyz$ is $$ 8 + 6 + 6 + 27 + 1 + 6 = \boldsymbol{ 54 }. $$

{{% /details %}}

7. Calculate the following expressions.
    1. $(x-b)(x-c)(b-c)$ $+$ $(x-c)(x-a)(c-a)$ $+$ $(x-a)(x-b)(a-b)$
    2. $(x+y+2z)^3$ $-$ $(y+2z-x)^3$ $-$ $(2z+x-y)^3$ $-$ $(x+y-2z)^3$

{{% details title="Answer" %}}

7. 
    1. $a^2b - ab^2 + b^2c - bc^2 + c^2a - ca^2$
    2. $48xyz$

{{% note Solution %}}

{{% enum a %}}
{{% mn sol7 %}}Refer to [Advanced Techniques for Expanding](../advanced-expanding) for more help.{{% /mn %}}
You can see that there are exactly two brackets with $x$ in them for each expression. Let's only expand those first.

`\begin{align*}
& (x-b)(x-c)(b-c) \\
&\phantom{=} + (x-c)(x-a)(c-a) \\
&\phantom{=} + (x-a)(x-b)(a-b) \\
&= (b-c)\times (x-b)(x-c) \\
&\phantom{=} + (c-a) \times (x-c)(x-a) \\
&\phantom{=} + (a-b) \times (x-a)(x-b) \\
&= (b-c) \times \left\{ \hl{x^2} - (b+c)\hl{x} + bc \right\} \\
&\phantom{=} + (c-a) \times \left\{ \hl{x^2} - (c+a)\hl{x} + ca \right\} \\
&\phantom{=} + (a-b) \times \left\{ \hl{x^2} - (a+b)\hl{x} + ab \right\} \\
&= (b-c)\hl{x^2} - (b-c)(b+c)\hl{x} + bc(b-c) \\
&\phantom{=} + (c-a)\hl{x^2} - (c-a)(c+a)\hl{x} + ca(c-a) \\
&\phantom{=} + (a-b)\hl{x^2} - (a-b)(a+b)\hl{x} + ab(a-b). \tag*{$=\tcirc{1}$}
\end{align*}`

Now, the coefficient of $x^2$ is $$ (b-c)+(c-a)+(a-b) = 0, $$ and the coefficient of $x$ is also
`\begin{align*}
& - (b-c)(b+c) - (c-a)(c+a) - (a-b)(a+b) \\
&= -(b^2 - c^2) - (c^2 - a^2) - (a^2-b^2) \\
&= (c^2 - b^2) + (a^2 - c^2) + (b^2 - a^2) \\
&= 0.
\end{align*}`

Only the constant term in $x$ survives! Therefore,
`\begin{align*}
\tcirc{1} &= bc(b-c) + ca(c-a) + ab(a-b) \\
&= b^2c - bc^2 + c^2a - ca^2 + a^2b - ab^2 \\
&= \boldsymbol{ a^2b - ab^2 + b^2c - bc^2 + c^2a - ca^2 .}
\end{align*}`

{{% enum b %}} To avoid confusion, we substitute $y+2z=P$ and $ y-2z=Q $. 

Then,
{{% mn 7b tips %}}
`$$\begin{split} (1) \quad &-(P-x)^3 \\\\ &= -1\cdot(P-x)^3 \\\\ &=(-1)^3\cdot(P-x)^3 \\\\ &= \left( (-1)\cdot(P-x) \right)^3 \\\\ &= (x-P)^3\end{split}$$`
{{% /mn %}}
`\begin{align*}
& (x+y+2z)^3 - (y+2z-x)^3 - (2z+x-y)^3 - (x+y-2z)^3 \\
&= (x+P)^3 - (P-x)^3 - (x-Q)^3 - (x+Q)^3 \\
&= (x+P)^3 \hl{+ (x-P)^3} - (x-Q)^3 - (x+Q)^3. \tag{1}
\end{align*}`

Using the cubic identity to expand the four cubes,
`\begin{align*}
& (x+P)^3 + (x-P)^3 - (x-Q)^3 - (x+Q)^3 \\
&= ( x^3 + 3x^2P + 3xP^2 + P^3 ) \\
&\phantom{=} +( x^3 - 3x^2P + 3xP^2 - P^3 ) \\
&\phantom{=} -( x^3 - 3x^2Q + 3xQ^2 - Q^3 ) \\
&\phantom{=} -( x^3 + 3x^2Q + 3xQ^2 + Q^3 ) \\
&=\phantom{+} x^3 + 3x^2P + 3xP^2 + P^3 \\
&\phantom{=} + x^3 - 3x^2P + 3xP^2 - P^3 \\
&\phantom{=} - x^3 + 3x^2Q - 3xQ^2 + Q^3 \\
&\phantom{=} - x^3 - 3x^2Q - 3xQ^2 - Q^3 \\
&= 6xP^2 - 6xQ^2.
\end{align*}`

Now, we would like to [factor out](../factorising-common-factor/) $6x$ to help simplify things a little bit:
{{% mn 7b2 tips %}}
($\lozenge$) $(A+B)^2 - (A-B)^2$ $=4AB$
{{% /mn %}}
`\begin{align*}
& 6xP^2 - 6xQ^2 \\
&= 6x(P^2 - Q^2) \\
&= 6x\left\{ (y+2z)^2 - (y-2z)^2 \right\} \\
&= 6x( 4\cdot y \cdot 2z ) \tag{from $\lozenge$} \\
&= \boldsymbol{ 48xyz. }
\end{align*}`
For the proof of $(\lozenge)$, see [Advanced Expanding](../advanced-expanding#create-patterns-for-the-identities).

{{% /details %}}
