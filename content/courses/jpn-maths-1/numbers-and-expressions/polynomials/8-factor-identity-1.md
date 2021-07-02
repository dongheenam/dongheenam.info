---
title: "Factorising with Polynomial Identities 1"
description: "How to factorise a polynomial with quadratic identities."
slug: "factorising-identities-1"

date: 2020-05-27 16:30:27 +1000
lastMod: 2020-12-13 08:02:37.087 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - algebra
  - polynomial
  - factorisation
  - polynomial identity
  - AC Year 10
  - AC Specialist

menu:
  math1-numbers:
    parent: Polynomials
    name: Factorising with Identities 1
    weight: 18

weight: 18
---

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 10
  - Expand binomial products and factorise monic quadratic expressions using a variety of strategies [(ACMNA233)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&year=11761&elaborations=true&cd=ACMNA233).

{{% /details %}}

## Introduction

We reviewed the basic principle of factorisation. Now it is time to use the polynomial identities to start factorising the polynomials! In this lesson, we will learn:

- How to factorise a polynomial with quadratic identities.

## Factorising with Quadratic Identities

Do you remember the [quadratic identities](../expanding-identities/#quadratic-identities)? I will show you how each of the identities can be used to factorise a polynomial. We will start with the perfect squares identities.

### Perfect squares

For you to use these identities, there must be two squares, $a^2$ and $b^2$, and the third term must equal either $2ab$ or $-2ab$.

{{% box %}}

{{% note theorem %}} Polynomial identity 1:

\begin{align}
a^2 + 2ab + b^2 &= (a+b)^2, \\\\
a^2 - 2ab + b^2 &= (a-b)^2.
\end{align}

{{% note example %}}
Factorise the following.

1. $g^2 + 12g + 36$
2. $16s^2 - 24st + 9t^2$

{{% note solution %}}

\begin{align}
\text{1.} \quad & g^2 + 12g + 36 \\\\
&= g^2 + 2\cdot 6 \cdot g + 6^2 \\\\
&= \boldsymbol{ (g+6)^2 .}
\end{align}

\begin{align}
\text{2.} \quad & 16s^2 - 24st + 9t^2 \\\\
&= (4s)^2 - 2\cdot 4s \cdot 3t + (3t)^2 \\\\
&= \boldsymbol{ (4s-3t)^2 .}
\end{align}

{{% /box %}}

{{% details title="When do we use the identities?" %}}
It is often more difficult to decide whether you can use the identities than to use them. Here are some examples when you _cannot_ use the identity.

- $x^2 + x + 1$: the second term is not $2ab$.
- $a^2 + 4a - 4$: the two squares have different signs.
- $3t^2 - 6t + 1$: the first term is not a square.

{{% /details %}}

### Difference of squares

This may be the easiest to notice. As soon as you see two squares subtracted from one another, apply the formula!

{{% box %}}

{{% note theorem %}} Polynomial identity 2:
$$(a+b)(a-b) = a^2 - b^2.$$

{{% note example %}}
Factorise the following.

1. $A^2 - 16$
2. $36x^2 - 49y^2$
3. $27 - 3p^2q^2$

{{% note solution %}}

\begin{align}
\text{1.} \quad & A^2 - 16 \\\\
&= A^2 - 4^2 \\\\
&= \boldsymbol{ (A+4)(A-4) .}
\end{align}
\begin{align}
\text{2.} \quad & 36x^2 - 49y^2 \\\\
&= (6x)^2 - (7y)^2 \\\\
&= \boldsymbol{ (6x+7y)(6x-7y) .}
\end{align}

Part {{% roman 3 %}} does not look that obvious because $3$ and $27$ are not square numbers. But they do have a common factor. Factor them out first, and you should be able to apply the identity.

\begin{align}
\text{3.} \quad & 27 - 3p^2q^2 \\\\
&= 3 ( 9 - p^2q^2 ) \\\\
&= 3 \left\\{ 3^2 - (pq)^2 \right\\} \\\\
&= \boldsymbol{ 3(3+pq)(3-pq) .}
\end{align}

{{% /box %}}

{{% note Questions %}}
Try [Practice Questions](#practice-questions) 1 and 2 before moving on.

## Quadratic Trinomials

Here is my favourite! A quadratic _trinomial_ is a quadratic polynomial with exactly three terms, so it has the form $$ px^2 + qx + r. $$ A lot of these can be factorised into two linear polynomials using the third identity. We will start with trinomials with $p=1$ (_monic_ trinomials) and then move on to more general cases where $p\ne 1$.

### Monic trinomials

We use this polynomial identity:

{{% note definition %}} Polynomial identity 3-1:
$$x^2 + (a+b)x + ab = (x+a)(x+b). $$

So, we can factorise $ x^2 + px + q $, if we can find $a$ and $b$ such that $a+b=p$ and $ab=q$.

{{% box %}}
{{% note example %}}
Factorise $x^2 + 5x + 6$.

{{% note solution %}}We need to find two numbers, whose sum is $5$ and product is $6$: they are $2$ and $3$. Thus, $$x^2 + 5x + 6 = (x+2)(x+3).$$
{{% /box %}}

Here are some more examples, but the theory is the same. Find $a$ and $b$!

{{% box %}}
{{% note example %}}
Factorise the following quadratic polynomials.

1. $x^2 + 7x + 12$
2. $u^2 - 4u - 12$
3. $p^2 - 9pq + 20q^2$

{{% note solution %}}

\begin{align}
\text{a.} \quad & x^2 + 7x + 12 \\\\
&= x^2 + (3+4)x + 3\cdot 4 \\\\
&= \boldsymbol{ (x+3)(x+4) .}
\end{align}
\begin{align}
\text{b.} \quad & u^2 - 4u - 12 \\\\
&= u^2 + (-6+2)u -6\cdot 2 \\\\
&= \boldsymbol{ (u-6)(u+2) .}
\end{align}
\begin{align}
\text{c.} \quad & p^2 - 9pq + 20q^2 \\\\
&= p^2 + (-4q-5q)p -4q\cdot(-5q) \\\\
&= \boldsymbol{ (p-4q)(p-5q) .}
\end{align}

{{% /box %}}

{{% details title="Difficult finding the pair?" %}}
Instead of thinking of the sum and the product together, it is easier to first find all the number pairs that multiply to $r$, then choose the pair that adds up to $q$. For example, say you want to factorise $$ y^2 - y - 6. $$
You can first find all pairs whose product is $-6$:
\begin{alignat}{2}
& (-1, 6), \quad & (-2, 3), \\\\
& (1, -6), \quad & (2, -3).
\end{alignat}

Which of these number pairs add up to $-1$? It is $(2,-3)$. Therefore $$ y^2 - y - 6 = (y+2)(y-3). $$

{{% /details %}}

{{% note Questions %}}
Try [Practice Question](#practice-questions) 3 before moving on.

### Non-monic trinomials

For the quadratics with $p\ne 1$, we have to use this identity instead:

{{% note definition %}} Polynomial identity 5-2:
$$ acx^2 + (ad+bc)x + cd = (ax+b)(cx+d). $$

This is a little bit complicated, because to factorise $px^2 + qx + r$, you need to find four numbers, $a$, $b$, $c$, and $d$ that satisfy
\begin{align}
ac &= p, \\\\
ad+bc &= q, \\\\
bd &= r.
\end{align}
Luckily, we have a useful strategy to find the four numbers quickly: the _cross-multiplication method_.

{{% box %}}

{{% note example %}}
Suppose we want to factorise $6x^2 + 5x - 4 $. The _cross-multiplication method_ goes like this:

<ol>
  <li>Find all combinations of <em>positive</em> factors that multiply to $p$: $(1, 6), (2, 3)$.</li>

  <li>Find all combinations of factors that multiply to $r$: $(1,-4), (4,-1), (2,-2)$.</li>

  <li>Choose one pair from each of steps 1 and 2. Cross-multiply them to see whether the sum equals $q$. For example, if we choose $(1,6)$ and $(1,-4)$:
  $$
  \rlap{\phantom{6\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcrr}
    6 && 1 & \rightarrow & 1\cdot 1 = & 1 \\[0.5em]
    1 && -4 & \rightarrow & 6\cdot(-4) = &-24 \\[0.5em]
    \hline
    &&&&& \boldsymbol{ -23 }
  \end{array}
  $$
  </li>

  <li>If we did not get $q$, choose a different pair and repeat.
  $$
  \rlap{\phantom{6\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcrr}
    2 && 1 & \rightarrow & 3\cdot 1 = & 3 \\[0.5em]
    3 && -4 & \rightarrow & 2\cdot(-4) = &-8 \\[0.5em]
    \hline
    &&&&& \boldsymbol{ -5 }
  \end{array}
  $$
  
  </li>
  <li>The last one was very close - try again with opposite signs:
  $$
  \rlap{\phantom{6\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcrr}
    2 && -1 & \rightarrow & 3\cdot (-1) = & -3 \\[0.5em]
    3 && 4 & \rightarrow & 2\cdot 4 = & 8 \\[0.5em]
    \hline
    &&&&& \boldsymbol{ 5 }
  \end{array}
  $$
  </li>
  <li>Once the sum equals $q$, read the numbers horizontally. The top two numbers become one term and the bottom two another: $$ 6x^2 + 5x - 4 = \boldsymbol{ (2x-1)(3x+4) .} $$</li>
</ol>

{{% /box %}}

{{% details title="How does this work?" %}}
The method helps you find the value of $ad+bc$ once you choose $a$, $b$, $c$, and $d$. Here is the visualisation of the cross-multiplication method.

{{% figure class="fullwidth" src="courses/jpn-maths-1/numbers-and-expressions/poly-cross-mult.png" caption="Theory behind the cross-multiplication method works" %}}

{{% /details %}}

{{% details title="Why only positive pairs?" %}}
_Short answer:_ this is because you can always find an answer while keeping both $a$ and $b$ positive.

_Long answer:_ Say, for the example above, you use $(-2,-3)$ instead for the factors of $p$. Then the combination of numbers that give you $q=5$ is this one,

$$
  \rlap{\phantom{-2\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcrr}
    -2 && 1 & \rightarrow & -3\cdot 1 = & -3 \\\\[0.5em]
    -3 && -4 & \rightarrow & -2\cdot (-4) = & 8 \\\\[0.5em]
    \hline &&&&& \boldsymbol{ 5 }
  \end{array}
$$

which corresponds to $(-2x+1)(-3x-4)$. It is easy to show that this answer is the same as the one we found in the example:

\begin{align}
(-2x+1)(-3x-4) &= \left\\{ (2x-1)\cdot(-1) \right\\} (-3x-4) \\\\
&= (2x-1)\left\\{ (-1)\cdot (-3x-4) \right\\} \\\\
&= (2x-1)(3x+4).
\end{align}

Regardless of keeping the first set of pairs positive or negative, we get the same answer. That is why can only consider the positive combinations for $p$.

What if the coefficient of the quadratic term is negative, like $-3x^2+2x+5$? Well, you can factor out the negative sign first:
$$-3x^2+2x+5 = -(3x^2-2x-5),$$
and factorise it.

{{% /details %}}

{{% details title="Still too many pairs to try out?" %}}
Here is another tip I find very useful: the numbers need to be _coprime_ (the largest common denominator is $1$) in the horizontal direction. Say you wanted to try out this one:

$$
  \rlap{\phantom{2\;} \raise{0.8em}{\huge \times}}
  \begin{array}{rcrcrr}
    2 && 4 & \rightarrow & 3\cdot 4 = & -12 \\\\[0.5em]
    3 && -1 & \rightarrow & 2\cdot (-1) = & -2 \\\\[0.5em]
    \hline &&&&& \boldsymbol{ 10 }
  \end{array}
$$

This one obviously does not work, but what does this combination represent? It is this polynomial $$ (2x+4)(3x-1) = 6x^2 + 10x - 4, $$
which does have a common factor: $$ 2(x+2)(3x-1) = 2(3x^2 + 5x - 2). $$
So if we see the expanded polynomial and check there are no common factors, we can be sure that there should be no common factors within each ‘block’!

{{% /details %}}

We will present you three more examples and a handful of practice questions.

{{% box %}}
{{% note example %}}
Factorise the following quadratic polynomials.

1. $3x^2 + 5x + 2$
2. $12x^2 - 16x - 3$
3. $6a^2 + 23ab - 48b^2$

{{% note solution %}}

\begin{align}
\text{1.} \quad & 3x^2 + 5x + 2 = \boldsymbol{ (3x+2)(x+1) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
3 && 2 & \rightarrow & 2 \\\\[0.5em]
1 && 1 & \rightarrow & 3 \\\\[0.5em]
\hline &&&& \boldsymbol{ 5 }
\end{array}
\end{align}
\begin{align}
\text{2.} \quad & 12x^2 - 16x - 3 = \boldsymbol{ (2x-3)(6x+1) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && -3 & \rightarrow & -18 \\\\[0.5em]
6 && 1 & \rightarrow & 2 \\\\[0.5em]
\hline &&&& \boldsymbol{ -16 }
\end{array}
\end{align}
\begin{align}
\text{3.} \quad & 6a^2 + 23ab - 48b^2 = \boldsymbol{ (2a-3b)(3a+16b) } \\\\[0.5em]
& \rlap{\phantom{2\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && -3b & \rightarrow & -9b \\\\[0.5em]
3 && 16b & \rightarrow & 32b \\\\[0.5em]
\hline &&&& \boldsymbol{ 23b }
\end{array}
\end{align}

{{% /box %}}

## Practice Questions

1. Factorise the following expressions.
    1. $x^2 + 14x + 49$
    2. $y^2 - 4y + 4$
    3. $4x^2 - 20xy + 25y^2$
    4. $b^4 + 6b^2 + 9$

2. Factorise the following expressions.
    1. $r^2 - 25$
    2. $4x^2 - 9y^2$
    3. $t^4 - 1$
    4. $(m-n)^2 - p^2$

{{% details title="Answer" %}}

1.  
    1. $(x+7)^2$
    2. $(y-2)^2$
    3. $(2x-5y)^2$
    4. $(b^2 + 3)^2$
2.  
    1. $(r+5)(r-5)$
    2. $(2x+3y)(2x-3y)$
    3. $(t^2 + t)(t+1)(t-1)$
    4. $(m-n+p)(m-n-p)$

{{% note solution %}}

1.  <br>
    \begin{align}
    \text{a.} \quad & x^2 + 14x + 49 \\
    &= x^2 + 2\cdot7\cdot x + 7^2 \\
    &= \boldsymbol{ (x+7)^2 .}
    \end{align}
    \begin{align}
    \text{b.} \quad & y^2 - 4y + 4 \\
    &= y^2 - 2\cdot 2\cdot y + 2^2 \\
    &= \boldsymbol{ (y-2)^2 .}
    \end{align}
    \begin{align}
    \text{c.} \quad & 4x^2 - 20xy + 25y^2 \\
    &= (2x)^2 - 2\cdot 2x \cdot 5y + (5y)^2 \\
    &= \boldsymbol{ (2x-5y)^2 .}
    \end{align}
    \begin{align}
    \text{d.} \quad & b^4 + 6b^2 + 9 \\
    &= \left( b^2 \right)^2 + 2\cdot 3 \cdot b^2 + 3^2 \\
    &= \boldsymbol{ (b^2 + 3)^2 .}
    \end{align}

2.  <br>
    \begin{align}
    \text{a. } \quad & r^2 - 25 \\
    &= r^2 - 5^2 \\
    &= \boldsymbol{ (r+5)(r-5) .}
    \end{align}
    \begin{align}
    \text{b. } \quad & 4x^2 - 9y^2 \\
    &= (2x)^2 - (3y)^2 \\
    &= \boldsymbol{ (2x+3y)(2x-3y) .}
    \end{align}
    \begin{align}
    \text{c.} \quad & t^4 - 1 \\
    &= \left( t^2 \right)^2 - 1^2 \\
    &= (t^2 + 1)(t^2 - 1) \\
    &= \boldsymbol{ (t^2+1)(t+1)(t-1) .}
    \end{align}

{{% /details %}}

3. Factorise the following expressions.
    1. $x^2 - 3x + 2$
    2. $y^2 + 4y - 12$
    3. $t^2 + 5t - 36$
    4. $a^2 + 10a + 21$
    5. $x^2 - xy - 12y^2$
    6. $a^2 + 3ab - 18b^2$

{{% details title="Answer" %}}

3. 
    1. $(x-1)(x-2)$
    2. $(y-2)(y+6)$
    3. $(t-4)(t+9)$
    4. $(a+3)(a+7)$
    5. $(x-4y)(x+3y)$
    6. $(a+6b)(a-3b)$

{{% note Solution %}}

\begin{align}
\text{a.} \quad & x^2 - 3x + 2 \\\\
&= x^2 + (-1-2)x -1\cdot(-2) \\\\
&= \boldsymbol{ (x-1)(x-2) .}
\end{align}
\begin{align}
\text{b.} \quad & y^2 + 4y - 12 \\\\
&= y^2 + (-2+6)y -2\cdot 6 \\\\
&= \boldsymbol{ (y-2)(y+6) .}
\end{align}
\begin{align}
\text{c.} \quad & t^2 + 5t - 36 \\\\
&= t^2 + (-4+9)t -4\cdot 9 \\\\
&= \boldsymbol{ (t-4)(t+9) .}
\end{align}
\begin{align}
\text{d.} \quad & a^2 + 10a + 21 \\\\
&= a^2 + (3+7)a + 3\cdot 7 \\\\
&= \boldsymbol{ (a+3)(a+7) .}
\end{align}
\begin{align}
\text{e.} \quad & x^2 - xy - 12y^2 \\\\
&= x^2 + (-4y+3y)x -4y\cdot 3y \\\\
&= \boldsymbol{ (x-4y)(x+3y) .}
\end{align}
\begin{align}
\text{f.} \quad & a^2 + 3ab - 18b^2 \\\\
&= a^2 + (6b-3b)a + 6b\cdot(-3b) \\\\
&= \boldsymbol{ (a+6b)(a-3b) .}
\end{align}

{{% /details %}}

4. Factorise the following.
    1. $2x^2 + 3x + 1$
    2. $3x^2 + 10x + 3$
    3. $2x^2 - 9x + 4$
    4. $6x^2 + x - 1$
    5. $12a^2 - 7a - 12$
    6. $8x^2 - 2xy - 3y^2$
    7. $10p^2 - 19pq + 6q^2$
    8. $6a^2 - ab - 12b^2$

{{% details title="Answer" %}}

4. 
    1. $(2x+1)(x+1)$
    2. $(3x+1)(x+3)$
    3. $(2x-1)(x-4)$
    4. $(2x+1)(3x-1)$
    5. $(3a-4)(4a+3)$
    6. $(2x+y)(4x-3y)$
    7. $(2p-3q)(5p-2q)$
    8. $(2a-3b)(3a+4b)$

{{% note solution %}}

\begin{align}
\text{a.} \quad & 2x^2 + 3x + 1 = \boldsymbol{ (2x+1)(x+1) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && 1 & \rightarrow & 1 \\\\[0.5em]
1 && 1 & \rightarrow & 2 \\\\[0.5em]
\hline &&&& \boldsymbol{ 3 }
\end{array}
\end{align}
\begin{align}
\text{b.} \quad & 3x^2 + 10x + 3 = \boldsymbol{ (3x+1)(x+3) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
3 && 1 & \rightarrow & 1 \\\\[0.5em]
1 && 3 & \rightarrow & 9 \\\\[0.5em]
\hline &&&& \boldsymbol{ 10 }
\end{array}
\end{align}
\begin{align}
\text{c.} \quad & 2x^2 - 9x + 4 = \boldsymbol{ (2x-1)(x-4) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && -1 & \rightarrow & -1 \\\\[0.5em]
1 && -4 & \rightarrow & -8 \\\\[0.5em]
\hline &&&& \boldsymbol{ 5 }
\end{array}
\end{align}
\begin{align}
\text{d.} \quad & 6x^2 + x - 1 = \boldsymbol{ (2x+1)(3x-1) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && 1 & \rightarrow & 3 \\\\[0.5em]
3 && -1 & \rightarrow & -2 \\\\[0.5em]
\hline &&&& \boldsymbol{ 1 }
\end{array}
\end{align}
\begin{align}
\text{e.} \quad & 12a^2 - 7a - 12 = \boldsymbol{ (3a-4)(4a+3) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
3 && -4 & \rightarrow & -16 \\\\[0.5em]
4 && 3 & \rightarrow & 9 \\\\[0.5em]
\hline &&&& \boldsymbol{ -7 }
\end{array}
\end{align}
\begin{align}
\text{f.} \quad & 8x^2 - 2xy - 3y^2 = \boldsymbol{ (2x+y)(4x-3y) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && y & \rightarrow & 4y \\\\[0.5em]
4 && -3y & \rightarrow & -6y \\\\[0.5em]
\hline &&&& \boldsymbol{ -2y }
\end{array}
\end{align}
\begin{align}
\text{g.} \quad & 10p^2 - 19pq + 6q^2 = \boldsymbol{ (2p-3q)(5p-2q) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && -3q & \rightarrow & -15q \\\\[0.5em]
5 && -2q & \rightarrow & -4q \\\\[0.5em]
\hline &&&& \boldsymbol{ 19q }
\end{array}
\end{align}
\begin{align}
\text{h.} \quad & 6a^2 - ab - 12b^2 = \boldsymbol{ (2a-3b)(3a+4b) } \\\\[0.5em]
& \rlap{\phantom{3\;} \raise{0.8em}{\huge \times}}
\begin{array}{rcrcr}
2 && -3b & \rightarrow & -9b \\\\[0.5em]
3 && 4b & \rightarrow & 8b \\\\[0.5em]
\hline &&&& \boldsymbol{ -b }
\end{array}
\end{align}

{{% /details %}}
