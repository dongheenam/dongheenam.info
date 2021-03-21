---
title: "Advanced Techniques for Expanding"
description: "How to use substitution to help expand an expression. How to swap the order of multiplication to easily expand an expression."
slug: "advanced-expanding"

date: 2020-05-23 14:17:23 +1000
lastMod: 2020-12-07 20:55:23.168 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - polynomial identity
  - Year 9
  - Year 10

menu:
  math1-numbers:
    parent: Polynomials
    name: Advanced Expanding
    weight: 15

weight: 15
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 9
  - Apply the distributive law to the expansion of algebraic expressions, including binomials, and collect like terms where appropriate [(ACMNA213)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11760&elaborations=true&cd=ACMNA213).
- Mathematics Year 10
  - Expand binomial products and factorise monic quadratic expressions using a variety of strategies [(ACMNA233)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA233).

{{% /details %}}

## Introduction

You have familiarised yourself with polynomial identities in the [previous lesson](../expanding-with-identities). We will now practise how to use the identities to expand more complicated expressions!

In this lesson, you will learn:

- How to use substitution to help expand an expression.
- How to swap the order of multiplication to easily expand an expression.

## Expanding by Substitution

Say you would like to expand this expression.

{{% note Example %}}
Expand $(x+y+z)(x-y-z)$.

Of course, you can brute force it by using the distributive law:

{{% note Solution %}}

\begin{align}
& (x+y+z)(x-y-z) \\\\
&= x(x-y-z) + y(x-y-z) + z(x-y-z) \\\\
&= x^2 - xy - xz + xy - y^2 - yz + xz - yz - z^2 \\\\
&= \boldsymbol{ x^2 - y^2 - z^2 - 2yz. }
\end{align}

But could there be another way? Can we use the identities we learnt before? In fact, we can!

{{% box %}}
{{% note Solution %}}
If we have a closer look, you can see there is a common part inside the two brackets:

\begin{align}
& (x+y+z)(x-y-z) \\\\
&= \left\\{ x + (\underline{y+z})\right\\}\left\\{x - (\underline{y+z}) \right\\}.
\end{align}

It becomes more obvious when you substitute $y+z$ with $A$:
\begin{align}
& \left\\{ x + (\underline{y+z})\right\\}\left\\{x - (\underline{y+z}) \right\\} \\\\
&= ( x + A )( x - A ).
\end{align}

This is indeed equal to

{{% mn ex1 tips %}}
$(1)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$
{{% /mn %}}
\begin{align}
& x^2 - A^2 \tag{1} \\\\
&= x^2 - (y+z)^2.
\end{align}

Then you can use the perfect square identity to complete the task.

{{% mn ex2 tips %}}
$(2)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$
{{% /mn %}}
\begin{align}
& x^2 - (y+z)^2 \\\\
&= x^2 - \hl{(y^2 + 2yz + z^2)} \tag{2} \\\\
&= x^2 - y^2 - 2yz - z^2 \\\\
&= \boldsymbol{ x^2 - y^2 - z^2 - 2yz }.
\end{align}

{{% /box %}}

{{% details title="By Substitution?" %}}
Although the title says so, I recommend you do not actually substitute the common parts. If you just put them in brackets and treat them as a single variable, you can save a lot of time. For example,

\begin{align}
& (x+y+z)(x-y-z) \\\\
&= \left\\{x + (y+z) \right\\}\left\\{x - (y+z) \right\\} \\\\
&= x^2 - (y+z)^2 \\\\
&= x^2 - (y^2 + 2yz + z^2) \\\\
&= \boldsymbol{ x^2 - y^2 - z^2 - 2yz }.
\end{align}

{{% /details %}}

The key trick is to find the expressions in common. In the example question below, we can easily see both brackets have $x^2-x$ in there, so I grouped them together and went ahead.

{{% box %}}
{{% note Example %}}
Expand $(x^2-x+3)(x^2-x-4)$.

{{% note Solution %}}

{{% mn ex3 tips %}}
$(3)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br><br>
$(4)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
& (x^2-x+3)(x^2-x-4) \\\\
&= \left\\{ (\underline{x^2-x}) + 3 \right\\}\left\\{ (\underline{x^2-x}) - 4 \right\\} \\\\
&= (x^2-x)^2 - (x^2-x) - 12 \tag{3} \\\\
&= x^4 - 2x^3 + x^2 - x^2 + x - 12 \tag{4} \\\\
&= \boldsymbol{ x^4 - 2x^3 + x - 12 .}
\end{align}

{{% /box %}}

Here is yet another example.

{{% box %}}
{{% note Example %}}
Expand $(a+b+c)^2$.

{{% note Solution %}}
Here we group $b$ and $c$ together:

\begin{align}
& (a+b+c)^2 \\\\
&= \left\\{ a + (\underline{b+c}) \right\\}^2
\end{align}

We can use the perfect square identity twice to expand the expression!

\begin{align}
& \left\\{ a + (\underline{b+c}) \right\\}^2 \\\\
&= a^2 + 2a(\underline{b+c}) + (\underline{b+c})^2 \\\\
&= a^2 + 2a(b+c) + (b^2 + 2bc + c^2) \\\\
&= a^2 + 2ab + 2ac + b^2 + 2bc + c^2 \\\\
&= \boldsymbol{ a^2 + b^2 + c^2 + 2ab + 2bc + 2ca }.
\end{align}

{{% /box %}}

The answer, $$ (a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca, $$ is a very useful identity. If you can, remember it as well.

{{% details title="The order of letters" %}}

<p></p>

When there are a set of variables, say $a$, $b$, and $c$, people tend to sort them in a circulating order, $a\rightarrow b\rightarrow c\rightarrow a$. Write $ab+ac+bc$ as $ab+bc+ca$, and enjoy the feeling of being a mathematician!

{{% /details %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 1 before moving on.

## Swapping the Order of Multiplication

Let's have a look at this example.

{{% note Example %}}
Expand $(x+y)(x^2+y^2)(x-y)$.

Again, you can expand the brackets one by one, but we would like to find a better way. Have a closer look at the first and the third brackets: $$ \hl{(x+y)}(x^2+y^2)\hl{(x-y)}. $$
They look quite familiar; if you multiply them, you get $x^2 - y^2$. But can we swap the brackets? The answer is yes because when you are multiplying, the order does not really matter (remember the [associative and commutative laws](..adding-polynomials)!).

{{% note Solution %}}

{{% mn ex4 tips %}}
$(1)$-$(2)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$
{{% /mn %}}
\begin{align}
& (x+y)(x^2+y^2)(x-y) \\\\
&= \hl{(x+y)(x-y)}(x^2+y^2) \\\\
&= \hl{(x^2-y^2)}(x^2+y^2) \tag{1} \\\\
&= \left(x^2\right)^2 - \left(y^2\right)^2 \\\\
&= \boldsymbol{ x^4 - y^4 .} \tag{2}
\end{align}

What happens if you multiply them from the left? See the brute force solution:

{{% details title="Brute force solution" %}}

\begin{align}
& (x+y)(x^2+y^2)(x-y) \\\\
&= \left\\{ (x^2+y^2)x + (x^2+y^2)y \right\\} (x-y) \\\\
&= ( x^3 + xy^2 + x^2y + y^3 )(x-y) \\\\
&= x( x^3 + xy^2 + x^2y + y^3 ) -y( x^3 + xy^2 + x^2y + y^3 ) \\\\
&= x^4 + x^2y^2 + x^3y + xy^3 -x^3y - xy^3 - x^2y^2 - y^4 \\\\
&= \boldsymbol{ x^4 - y^4 .}
\end{align}

{{% /details %}}

Below are more examples. Remember, think smart!

{{% box %}}
{{% note Example %}}
Expand

1. $ (x+1)(x-2)(x^2-x+1)(x^2+2x+4) $
2. $ (p + 2q)^2(p-2q)^2 $

{{% note Solution %}}

1. This is similar to the previous example. If you swap the second and third brackets, you should be able to recognise the cubic identities.

{{% mn ex229 tips %}}
$(1)$ Identity 5: $(a\pm b)(a^2\mp ab + b^2)$ $=a^3\pm b^3$<br><br>
$(2)$ Identity 4: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$
{{% /mn %}}
\begin{align}
& (x+1)(x-2)(x^2-x+1)(x^2+2x+4) \\\\
&= \hl{ (x+1)(x^2-x+1) \times (x-2)(x^2+2x+4) } \\\\
&= (x^3 + 1) \times (x^3 - 8) \tag{1} \\\\
&= \left( x^3 \right)^2 - 7x^3 - 8 \tag{2} \\\\
&= \boldsymbol{ x^6 - 7x^3 - 8 .}
\end{align}

---

2. Make use of the third index law $(ab)^m = a^m b^m$, to group them as

$$ (p + 2q)^2(p-2q)^2 = \hl{ \left\\{ (p+2q)(p-2q) \right\\}^2 }. $$

Then we can use the second identity $ (x+y)(x-y) = x^2-y^2 $:

\begin{align}
& \left\\{ (p+2q)(p-2q) \right\\}^2 \\\\
&= ( p^2 - 4q^2 )^2 \\\\
&= \boldsymbol{ p^4 - 8p^2q^2 + 16q^4 }.
\end{align}

{{% /box %}}

{{% details title="Don't like my solutions?" %}}

<p></p>

You may find the solutions contain unnecessary steps -- that is completely fine! These are the tricks I found quite useful, you might have a better idea. Have a read and only note what you think works well.

{{% /details %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 2 before moving on.

## Creating Patterns for the Identities

At first sight, the expressions below don't look like we can use the identities. However, we can change them a little bit so that the polynomial identities can be applied.

{{% box %}}
{{% note Example %}}
Expand:

1. $(x-1)(x-2)(x-3)(x-4)$
2. $(x+y+z)^2 + (x+y-z)^2$
3. $(a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$

{{% note Solution %}}

1. Because $(-1)+(-4)=(-2)+(-3)=-5$, if we multiply $(x-1)(x-4)$ together and $(x-2)(x-3)$ together, the results will have $x^2-5x$ in common:

{{% mn ex284 tips %}}
$(1)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$
{{% /mn %}}
\begin{align}
& (x-1)(x-2)(x-3)(x-4) \\\\
&= \hl{ (x-1)(x-4) \times (x-2)(x-3) } \\\\
&= (\underline{x^2-5x}+4)\times(\underline{x^2-5x}+6). \tag{1}
\end{align}

We can now use the substitution technique and Identity 3: $$ (x+a)(x+b) = x^2 + (a+b)x + ab $$ to finish the expansion.

{{% mn ex294 tips %}}
$(2)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br><br>
$(3)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
& \left\\{ (\underline{x^2-5x})+4 \right\\}\left\\{ (\underline{x^2-5x})+6\right\\} \\\\
&= (\underline{x^2-5x})^2 + 10(x^2-5x) + 24 \tag{2} \\\\
&= (x^4 - 10x^3 + 25x^2) + 10x^2 - 50x + 24 \tag{3} \\\\
&= \boldsymbol{ x^4 - 10x^3 + 35x^2 - 50x + 24 .}
\end{align}

---

2. We will use the following identity to expand this expression:

\begin{align}
(a+b)^2 + (a-b)^2 = 2a^2 + 2b^2. \tag{$\blacklozenge$}
\end{align}

Then,

{{% mn ex315 tips %}}
$(4)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$
{{% /mn %}}
\begin{align}
& (x+y+z)^2 + (x+y-z)^2 \\\\
&= \left\\{ (\underline{x+y}) + z \right\\}^2 + \left\\{ (\underline{x+y}) - z \right\\}^2 \\\\
&= 2(\underline{x+y})^2 + 2z^2 \tag{$\blacklozenge$}\\\\
&= 2(x^2 + 2xy + y^2) + 2z^2 \tag{4} \\\\
&= \boldsymbol{ 2x^2 + 2y^2 + 2z^2 + 4xy .}
\end{align}

---

3. There does not seem to be any patterns, so we will try rearranging the expressions in terms of $a$:

\begin{align}
& (a+b+c)(a^2+b^2+c^2 - ab - bc - ca) \\\\
&= \left\\{ \hl{a} + (b+c) \right\\} \left\\{ \hl{a^2} - (b+c) \hl{a} + (b^2 - bc + c^2) \right\\}.
\end{align}

This has the form $$ (\hl{a} + \square)(\hl{a^2} - \square \hl{a} + \triangle^2). $$

Expanding it gives

\begin{align}
& \hl{a^3} + (b+c) \hl{a^2} - (b+c) \hl{a^2} \\\\
& + (b^2 - bc + c^2) \hl{a} - (b+c)^2 \hl{a} + (b+c)(b^2-bc+c^2).
\end{align}

Now, you realise the $a^2$ term disappears. Also, the coefficient for $a$ is:
{{% mn ex348 tips %}}
$(5)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$
{{% /mn %}}
\begin{align}
& (b^2 - bc + c^2) - (b+c)^2 \\\\
&= b^2 - bc + c^2 - (b^2 + 2bc + c^2) \tag{5} \\\\
&= b^2 - bc + c^2 - b^2 - 2bc - c^2 \\\\
&= -3bc,
\end{align}

and the constant term is
{{% mn ex360 tips %}}
$(6)$ Identity 5: $(a+b)(a^2-ab+b^2)$ $=a^3+b^3$
{{% /mn %}}
\begin{align}
(b+c)(b^2-bc+c^2) = b^3 + c^3. \tag{6}
\end{align}

Putting everything together, we have

\begin{align}
& \hl{a^3} - 3bc\cdot \hl{a} + (b^3 + c^3) \\\\
&= \boldsymbol{ a^3 + b^3 + c^3 - 3abc .}
\end{align}

{{% /box %}}

{{% details title="Proof of $(\blacklozenge)$" %}}
From the two identities

\begin{align}
(x+y)^2 &= x^2 + 2xy + y^2, \\\\
(x-y)^2 &= x^2 - 2xy + y^2,
\end{align}

you can pull out two more useful identities. If you add them together, the $xy$ term will disappear, and if you subtract one from the other, the squared terms will disappear. You will get:

\begin{align}
(x+y)^2 + (x-y)^2 &= 2x^2 + 2y^2, \tag{$\blacklozenge$} \\\\
(x+y)^2 - (x-y)^2 &= 4xy. \tag{$\lozenge$}
\end{align}

You will find these results very useful later on.

{{% /details %}}

## Practice Questions

1. Expand the following expressions.
   1. $(x+y+3)(x+y-3)$
   2. $(a-2b+c)(a+2b-c)$
   3. $(x^2-3x-1)(x^2-x-1)$
   4. $(a+2b-c)^2$

{{% details title="Answer" %}}

1.  1. $x^2 + 2xy + y^2 - 9$
    2. $a^2 - 4b^2 - c^2 + 4bc$
    3. $x^4 - 4x^3 + x^2 + 4x + 1$
    4. $a^2 + 4b^2 + c^2 + 4ab - 4bc - 2ca$

{{% note Solution %}}

{{% mn q1a tips %}}
$(1)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br><br>
$(2)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$<br><br>
$(3)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br><br>
$(4)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
\text{a.} \quad & (x+y+3)(x+y-3) \\\\
&= \left\\{ (\underline{x+y}) + 3 \right\\} \left\\{ (\underline{x+y}) - 3 \right\\} \\\\
&= (\underline{x+y})^2 - 9 \tag{1} \\\\
&= \boldsymbol{ x^2 + 2xy + y^2 - 9 .} \tag{2}
\end{align}
\begin{align}
\text{b.} \quad & (a-2b+c)(a+2b-c) \\\\
&= \left\\{ a - (\underline{2b-c}) \right\\} \left\\{ a +(\underline{2b-c}) \right\\} \\\\
&= a^2 - (\underline{2b-c})^2 \tag{3} \\\\
&= a^2 - (4b^2 - 4bc + c^2) \tag{4} \\\\
&= \boldsymbol{ a^2 - 4b^2 - c^2 + 4bc .}
\end{align}

{{% mn q1c tips %}}
$(5)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br><br>
$(6)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$<br><br>
$(7)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$<br><br>
$(8)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$
{{% /mn %}}
\begin{align}
\text{c.} \quad & (x^2-3x-1)(x^2-x-1) \\\\
&= \left\\{ (\underline{x^2-1}) - 3x \right\\}\left\\{ (\underline{x^2-1}) - x \right\\} \\\\
&= (x^2-1)^2 - 4x(x^2-1) + 3x^2 \tag{5} \\\\
&= x^4 - 2x^2 + 1 - 4x^3 + 4x + 3x^2 \tag{6} \\\\
&= \boldsymbol{ x^4 - 4x^3 + x^2 + 4x + 1 .}
\end{align}
\begin{align}
\text{d.} \quad & (a+2b-c)^2 \\\\
&= \left\\{ (\underline{a+2b}) - c \right\\}^2 \\\\
&= (\underline{a+2b})^2 - 2c (\underline{a+2b}) + c^2 \tag{7} \\\\
&= (a^2 + 4ab + 4b^2) - 2ca - 4bc + c^2 \tag{8} \\\\
&= \boldsymbol{ a^2 + 4b^2 + c^2 + 4ab - 4bc - 2ca .}
\end{align}

{{% note "Alt. Solution" %}}

You can also solve (d) with the identity $$ (a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca: $$

\begin{align}
\text{d.} \quad & (a+2b-c)^2 \\\\
&= a^2 + (2b)^2 + (-c)^2 + 2\cdot a\cdot 2b + 2\cdot 2b\cdot (-c) + 2\cdot (-c) \cdot a \\\\
&= \boldsymbol{ a^2 + 4b^2 + c^2 + 4ab - 4bc - 2ca .}
\end{align}

{{% /details %}}

2. Expand the following.
   1. $(x+3)(x-3)(x^2+9)$
   2. $(x-1)(x-2)(x+1)(x+2)$
   3. $(a+b)^3(a-b)^3$
   4. $(x+2)(x^3+8)(x^2-2x+4)$

{{% details title="Answer" %}} 2. 1. $x^4 - 81$ 2. $x^4 - 5x^2 + 4$ 3. $a^6 - 3a^4b^2 + 3a^2b^4 - b^6$ 4. $x^6 + 16x^3 + 64$

{{% note Solution %}}

{{% mn q2a tips %}}
$(1)$-$(3)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br><br>
$(4)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$
{{% /mn %}}
\begin{align}
\text{a.} \quad & (x+3)(x-3)(x^2+9) \\\\
&= (x+3)(x-3)\times (x^2+9) \\\\
&= (x^2 - 9) \times (x^2 + 9) \tag{1} \\\\
&= \left( x^2 \right)^2 - 81 \tag{2} \\\\
&= \boldsymbol{ x^4 - 81 .}
\end{align}
\begin{align}
\text{b.} \quad & (x-1)(x-2)(x+1)(x+2) \\\\
&= \hl{(x-1)(x+1) \times (x-2)(x+2)} \\\\
&= (x^2 - 1 ) \times (x^2 - 4) \tag{3} \\\\
&= \left( x^2 \right)^2 - 5x^2 + 4 \tag{4} \\\\
&= \boldsymbol{ x^4 - 5x^2 + 4 .}
\end{align}

{{% mn q2c tips %}}
$(5)$ Index law 3: $(ab)^n$ $=a^n b^n$<br><br>
$(6)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br><br>
$(7)$ Identity 4: $(a-b)^3$ $=a^3 -3a^2b + 3ab^2 - b^3$
{{% /mn %}}
\begin{align}
\text{c.} \quad & (a+b)^3(a-b)^3 \\\\
&= \hl{\left\\{ (a+b)(a-b) \right\\}^3 } \tag{5} \\\\
&= (a^2 - b^2)^3 \tag{6} \\\\
&= \left( a^2 \right)^3 - 3\left( a^2 \right)^2 b^2 + 3 a^2 \left( b^2 \right)^2 - \left( b^2 \right)^3 \tag{7} \\\\
&= \boldsymbol{ a^6 - 3a^4b^2 + 3a^2b^4 - b^6 .}
\end{align}

{{% mn q2d tips %}}
$(8)$ Identity 5: $(a+b)(a^2-ab+b^2)$ $=a^3-b^3$<br><br>
$(9)$ Identity 4: $(a+b)^3$ $=a^3 +3a^2b + 3ab^2 +b^3$
{{% /mn %}}
\begin{align}
\text{d.} \quad & (x+2)(x^3+8)(x^2-2x+4) \\\\
&= (x+2)\hl{(x^2-2x+4) \times (x^3 + 8)} \\\\
&= (x^3 + 8) \times (x^3 + 8) \tag{8} \\\\
&= (x^3 + 8)^2 \\\\
&= \left( x^3 \right)^2 + 16x^3 + 64 \tag{9} \\\\
&= \boldsymbol{ x^6 + 16x^3 + 64 .}
\end{align}

{{% /details %}}

3. Expand the following expressions.
   1. $(x+2)(x-3)(x+1)(x-4)$
   2. $(x-2)(x+1)(x^2-x)$
   3. $(a+b+c)^2 - (a+b-c)^2$ $+$ $(a-b+c)^2 - (a+b-c)^2$
   4. $(x+y+z)(-x+y+z)$$(x-y+z)(x+y-z)$

{{% details title="Answer" %}} 3. 1. $x^4 - 4x^3 - 7x^2 + 22x + 24$ 2. $x^4 - 2x^3 - x^2 + 2x$ 3. $-4ab + 4bc + 8ca$ 4. $-x^4 -y^4 -z^4 + 2x^2y^2 + 2y^2z^2 + 2z^2x^2$

{{% note Solution %}}

{{% mn q3a tips %}}
$(1)$-$(2)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br><br>
$(3)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
\text{a.} \quad & (x+2)(x-3)(x+1)(x-4) \\\\
&= \hl{(x+2)(x-4) \times (x-3)(x+1)} \\\\
&= (\underline{x^2 - 2x} - 8) \times (\underline{x^2 - 2x} - 3 ) \tag{1} \\\\
&= (\underline{x^2 - 2x})^2 - 11(\underline{x^2 - 2x}) + 24 \tag{2} \\\\
&= x^4 - 4x^3 + 4x^2 - 11x^2 + 22x + 24 && \tag{3} \\\\
&= \boldsymbol{ x^4 - 4x^3 - 7x^2 + 22x + 24 .}
\end{align}

{{% mn q3b tips %}}
$(4)$ If we set $x^2-x = A$, $(A-2)A$ $=A^2 - 2A$<br><br>
$(5)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
\text{b.} \quad & (x-2)(x+1)(x^2-x) \\\\
&= (x-2)(x+1) \times (x^2-x) \\\\
&= (\underline{x^2 - x} - 2) \times (\underline{x^2-x}) \\\\
&= (x^2-x)^2 - 2(x^2 -x) \tag{4} \\\\
&= x^4 - 2x^3 + x^2 - 2x^2 + 2x && \tag{5} \\\\
&= \boldsymbol{ x^4 - 2x^3 - x^2 + 2x .}
\end{align}

{{% mn q3c tips %}}
$(\lozenge)$ $(A+B)^2 - (A-B)^2$ $=4AB$
{{% /mn %}}
\begin{align}
\text{c.} \quad & (a+b+c)^2 - (a+b-c)^2 + (a-b+c)^2 - (a+b-c)^2 \\\\
&= \left\\{(\underline{a+b})+c \right\\}^2 - \left\\{(\underline{a+b}) -c \right\\}^2 \\\\
&\phantom{=}+ \left\\{ a + (\underline{-b+c}) \right\\}^2 - \left\\{ a - (\underline{-b+c}) \right\\}^2 \\\\
&= 4(\underline{a+b})c \\\\
&\phantom{=}+ 4a(\underline{-b+c}) \tag{$\lozenge$} \\\\
&= 4ac + 4bc - 4ab + 4ac \\\\
&= \boldsymbol{ -4ab + 4bc + 8ca .}
\end{align}

{{% mn q3d tips %}}
$(6)$ $(a+b)(a-b)$ $=a^2-b^2$<br><br>
$(7)$ $(-\hl{x^2}+\square)$ $\times$ $(\hl{x^2}+\triangle)$ form<br><br>
$(\blacklozenge)$ $(a+b)^2+(a-b)^2$ $=2(a^2+b^2)$<br><br>
$(8)$ Index law 3: $a^n b^n$ $=(ab)^n$<br><br>
$(9)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$
{{% /mn %}}
\begin{align}
\text{d.} \quad & (x+y+z)(-x+y+z)(x-y+z)(x+y-z) \\\\
&= \left\\{ (\underline{y+z})+x \right\\}\left\\{ (\underline{y+z})-x \right\\} \\\\
&\phantom{=} \times \left\\{ x - (\underline{y-z}) \right\\}\left\\{ x + (\underline{y-z}) \right\\} \\\\
&= \left\\{ (\underline{y+z}) - x^2 \right\\} \times \left\\{ x^2 - (\underline{y-z})^2 \right\\} \tag{6} \\\\
&= \left\\{ -\hl{x^2} + (y+z)^2 \right\\} \times \left\\{ \hl{x^2} - (y-z)^2 \right\\} \tag{7} \\\\
&= -\hl{x^4} + \left\\{ (y-z)^2 + (y+z)^2 \right\\} \hl{x^2} - (y+z)^2(y-z)^2 \\\\
&= -x^4 + (\hl{2y^2 + 2z^2}) x^2 - (y+z)^2(y-z)^2 \tag{$\blacklozenge$} \\\\
&= -x^4 + (2y^2 + 2z^2)x^2 - \left\\{ (y+z)(y-z) \right\\}^2 \tag{8} \\\\
&= -x^4 + 2x^2y^2 + 2x^2z^2 - (y^2-z^2)^2 \tag{9} \\\\
&= -x^4 + 2x^2y^2 + 2x^2z^2 - (y^4 - 2y^2z^2 + z^4) \\\\
&= -x^4 + 2x^2y^2 + 2x^2z^2 - y^4 + 2y^2z^2 - z^4 \\\\
&= \boldsymbol{ -x^4 -y^4 -z^4 + 2x^2y^2 + 2y^2z^2 + 2z^2x^2 .}
\end{align}

{{% /details %}}
