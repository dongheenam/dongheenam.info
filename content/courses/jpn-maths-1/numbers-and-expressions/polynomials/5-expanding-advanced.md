---
title: "Advanced Techniques for Expanding"
description: "How to use substitution to help expand an expression. How to swap the order of multiplication to easily expand an expression."
slug: "advanced-expanding"

date: 2020-05-23 14:17:23 +1000
lastMod: 2020-12-07 20:55:23.168 +1100

type: docs
math: true
draft: true

tags:
  - algebra
  - polynomial
  - polynomial identity
  - Year 9
  - Year 10

menu:
  math1-numbers:
    parent: Polynomials
    name: "Advanced Expanding"
    weight: 15

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 15
---

## Introduction

You have familiarised yourself with polynomial identities in the [previous lesson](../expanding-with-identities). We will now practise how to use the identities to expand more complicated expressions!

In this lesson, you will learn:
  - How to use substitution to help expand an expression.
  - How to swap the order of multiplication to easily expand an expression.

### Links to Australian Curriculum

- Mathematics Year 9
  - Apply the distributive law to the expansion of algebraic expressions, including binomials, and collect like terms where appropriate [(ACMNA213)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11760&elaborations=true&cd=ACMNA213).
- Mathematics Year 10
  - Expand binomial products and factorise monic quadratic expressions using a variety of strategies [(ACMNA233)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA233).


## Expanding by Substitution

Say you would like to expand this expression.

{{% note Example %}}
Expand $(x+y+z)(x-y-z)$.

Of course you can brute force it by using the distributive law:

{{% note Solution %}}

\begin{align}
  & (x+y+z)(x-y-z) \\\\
  &= x(x-y-z) + y(x-y-z) + z(x-y-z) \\\\
  &= x^2 - xy - xz + xy - y^2 - yz + xz - yz - z^2 \\\\
  &= \boldsymbol{ x^2 - y^2 - z^2 - 2yz. }
\end{align}

But could there be another way? Can we use the identities we learnt before? In fact we can!

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
$(3)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br>
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

Here is yet another example!

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
They look quite familiar; if you multiply them, you get $x^2 - y^2$. But can we swap the brackets? The answer is yes, because when you are multiplying, the order does not really matter (remember the [associative and commutative laws](..adding-polynomials)!).

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


## Practice Questions

1. Expand the following expressions.
    1. $(x+y+3)(x+y-3)$
    2. $(a-2b+c)(a+2b-c)$
    3. $(x^2-3x-1)(x^2-x-1)$
    4. $(a+2b-c)^2$

{{% details title="Answer" %}}
1. 
    1. $x^2 + 2xy + y^2 - 9$
    2. $a^2 - 4b^2 - c^2 + 4bc$
    3. $x^4 - 4x^3 + x^2 + 4x + 1$
    4. $a^2 + 4b^2 + c^2 + 4ab - 4bc - 2ca$

{{% note Solution %}}

{{% mn q1a tips %}}
$(1)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br>
$(2)$ Identity 1: $(a+b)^2$ $=a^2+2ab+b^2$<br>
$(3)$ Identity 2: $(a+b)(a-b)$ $=a^2-b^2$<br>
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
$(5)$ Identity 3: $(x+a)(x+b)$ $=x^2+(a+b)x+ab$<br>
$(6)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$<br>
$(7)$ Identity 1: $(a-b)^2$ $=a^2-2ab+b^2$<br>
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