---
title: Removing Square Roots 2
slug: removing-roots-2
description: How to remove double square roots. How to evaluate the square root of a polynomial expression.

date: 2020-08-04 08:53:19.702 +1000
lastMod: 2020-12-18 13:24:43.675 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - real number
  - square root
  - polynomial identity
  - fraction
  - Year 10A

menu:
  math1-numbers:
    parent: Real Numbers
    name: Removing Square Roots 2
    weight: 15

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 15
---

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.

- Mathematics 1
  - [Factorising with Polynomial Identities 1](../../polynomials/factorising-identities-1/)

{{% /details %}}

## Introduction

In this lesson, we will practice some more tricks on removing square roots:

- How to remove double square roots.
- How to evaluate the square root of a polynomial expression.

## Double Square Roots

We can now use the [perfect square identity](../../polynomials/expanding-identities/#quadratic-identities) with square roots. For example, $$ \big(\sqrt{2}+\sqrt{3}\big)^2 = 2 + 2\sqrt{6} + 3 = 5 + 2\sqrt{6}. $$

This is where it becomes interesting: because the *definition* of $\sqrt{a}$ is the positive number whose square is $a$, and $\sqrt{2}+\sqrt{3}$ squared is $5+2\sqrt{6}$, we can say $$ \textstyle{\sqrt{5+2\sqrt{6}}} = \sqrt{2}+\sqrt{3}. $$

A square root inside another square root! If we reverse this step, we can remove some double square roots from expressions. See the examples below.

{{% box %}}
{{% note example %}}
Simplify the following expressions by removing the double square roots.
1. $\sqrt{11+2\sqrt{30}}$
2. $\sqrt{9-2\sqrt{14}}$

{{% note solution %}}
We will modify what is inside the big square root into a perfect square.

\begin{align}
  \text{1.} \quad \textstyle\sqrt{11+2\sqrt{30}} &= \textstyle\sqrt{5+6+2\sqrt{5}\sqrt{6}} \\\\
  &= \textstyle\sqrt{\hl{(\sqrt{5}+\sqrt{6})^2}} \\\\
  &= \boldsymbol{ \sqrt{5} + \sqrt{6}. }
\end{align}

\begin{align}
  \text{2.} \quad \textstyle\sqrt{9-2\sqrt{14}} &= \textstyle\sqrt{7+2-2\sqrt{7}\sqrt{\smash{2}\vphantom{6}}} \\\\
  &= \textstyle\sqrt{\hl{(\sqrt{7}-\sqrt{2})^2}} \\\\
  &= \boldsymbol{ \sqrt{7}-\sqrt{2}. }
\end{align}

{{% note note %}}
The answer for the second example is *not* $\sqrt{2}-\sqrt{7}$! This is because $\sqrt{9-2\sqrt{14}}$ is greater than zero (there is no negative sign in front), but $\sqrt{2}-\sqrt{7}<0$.

{{% /box %}}


In short, we can remove the outer root of a double square root expression of this kind:

{{% box %}}
{{% note theorem %}} For any positive real numbers $a$ and $b$,
\begin{align}
  \textstyle\sqrt{(a+b)+2\sqrt{ab}} &= \sqrt{a} + \sqrt{b}, \\\\
  \textstyle\sqrt{(a+b)-2\sqrt{ab}} &= \sqrt{a} - \sqrt{b}. (a>b)
\end{align}

{{% /box %}}

Below are two more examples. Note there are nothing in front of $\sqrt{ab}$ -- think of a way to *create* a factor of $2$.

{{% box %}}
{{% note example %}}
Remove the outer root of the double roots and simplify the expressions.
1. $\sqrt{10-\sqrt{84}}$
2. $\sqrt{6+\sqrt{35}}$

{{% note solution %}}

{{% mn 93 tips %}}
$(1)$ Be careful, $\sqrt{3}-\sqrt{7}$ is wrong!
{{% /mn %}}
1. Because $\sqrt{84}=\sqrt{2^2\cdot 21} = 2\sqrt{21}$,
\begin{align}
  \textstyle\sqrt{10-\sqrt{84}} &= \textstyle\sqrt{3+7-\hl{2\sqrt{21}}} \\\\
  &= \textstyle\sqrt{\hl{(\sqrt{7}-\sqrt{3})^2}} \\\\
  &= \boldsymbol{ \sqrt{7} - \sqrt{3}. } \tag{1}
\end{align}

{{% mn 103 tips %}}
$(2)$ Rationalising the denominator
{{% /mn %}}
2. Here, we will multiply and divide by $\sqrt{2}$:
\begin{align}
  \textstyle\sqrt{6+\sqrt{35}} &= \hl{ \dfrac{\sqrt{12+2\sqrt{35}}}{\sqrt{2}} } \\\\
  &= \dfrac{\sqrt{ 7+5 + 2\sqrt{35} }}{\sqrt{2}} \\\\
  &= \dfrac{\hl{\sqrt{7}+\sqrt{5}}}{\sqrt{2}} \\\\
  &= \dfrac{(\sqrt{7}+\sqrt{5})\cdot \sqrt{2}}{2} \tag{2} \\\\
  &= \boldsymbol{ \dfrac{\sqrt{14}+\sqrt{10}}{2}. }
\end{align}

{{% /box %}}

{{% note questions %}}Try [Practice Questions](#practice-questions) 1 before moving on.


## Square Root of a Polynomial

Now, let's take a break and have a look at square roots with variables. First of all, remember:

{{% note theorem %}}
$ \textstyle\sqrt{A^2} = |A|. $

So $\sqrt{(x-1)^2}$ is *not* equal to $x-1$ in general! Always check whether the expression inside is positive, or not!

{{% box %}}
{{% note example %}}
Calculate the value of $\sqrt{(x-1)^2}+\sqrt{(x-3)^2}$, when:
  1. $x\ge 3$
  2. $1\le x \lt 3$
  3. $x\lt 1$

{{% note solution %}}
1. When $x\ge 3$, $(x-1)\gt 0$ and $(x-3)\ge 0$ so
\begin{align}
  \sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= (x-1) + (x-3) \\\\
  &= \boldsymbol{ 2x-4. }
\end{align}

2. When $1\le x \lt 3$, $(x-1)\ge 0$ and $(x-3)\lt 0$ so
\begin{align}
  \sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= (x-1) \hl{-(x-3)} \\\\
  &= x - 1 - x + 3 \\\\
  &= \boldsymbol{ 2. }
\end{align}

3. When $x\lt 1$, $(x-1)\lt 0$ and $(x-3)\lt 0$ so
\begin{align}
  \sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= \hl{-(x-1)} \hl{-(x-3)} \\\\
  &= -x+1-x+3 \\\\
  &= \boldsymbol{ -2x+4. }
\end{align}

{{% /box %}}

{{% details title="Tips for checking the answer" %}}
It is very easy to forget $\sqrt{(\cdots)}$ is *always* positive, as long as what is inside the square root is also positive. And you should be able to tell, the answers to the example questions above are all positive. So this can be used as a check -- if you remove the square root and you get something negative, something is going wrong!

<p></p>

{{% /details %}}


## Practice Questions

1. Solve the double root and simplify the expressions.
    1. $\sqrt{6 + 4\sqrt{2}}$
    2. $\sqrt{8-\sqrt{48}}$
    3. $\sqrt{2+\sqrt{3}}$
    4. $\sqrt{9-3\sqrt{5}}$

{{% details title="Answer" %}}
1. 
    1. $2 + \sqrt{2}$
    2. $\sqrt{6}-\sqrt{2}$
    3. $\dfrac{\sqrt{2}+\sqrt{6}}{2}$
    4. $\dfrac{\sqrt{30}-\sqrt{6}}{2}$

{{% note solution %}}

$\text{a.} \quad$ Since $4\sqrt{2} = 2\cdot 2\sqrt{2} = 2\sqrt{8}$,
\begin{align}
  \textstyle\sqrt{6 + 4\sqrt{2}} &= \textstyle\sqrt{6 + \hl{2\sqrt{8}}} \\\\
  &= \textstyle\sqrt{4 + 2 + 2\sqrt{2\cdot 4}} \\\\
  &= \sqrt{4} + \sqrt{2} \\\\
  &= \boldsymbol{ 2 + \sqrt{2}. }
\end{align}

$\text{b.} \quad$ $\sqrt{48} = \sqrt{2^2\cdot 12} = 2\sqrt{12}$ and
\begin{align}
  \textstyle\sqrt{8-\sqrt{48}} &= \textstyle\sqrt{8-\hl{2\sqrt{12}}} \\\\
  &= \textstyle\sqrt{6 + 2 - 2\sqrt{6\cdot 2}} \\\\
  &= \boldsymbol{ \sqrt{6}-\sqrt{2}. }
\end{align}

$\text{c.} \quad$ We will multiply and divide the expression by $\sqrt{2}$:

{{% mn q1c tips %}}
$(1)$ Rationalising the denominator
{{% /mn %}}
\begin{align}
  \textstyle\sqrt{2+\sqrt{3}} &= \hl{\dfrac{\sqrt{4+2\sqrt{3}}}{\sqrt{2}}} \\\\
  &= \dfrac{\sqrt{1+3+2\sqrt{1\cdot 3}}}{\sqrt{2}} \\\\
  &= \dfrac{1 + \sqrt{3}}{\sqrt{2}} \\\\
  &= \boldsymbol{ \dfrac{\sqrt{2}+\sqrt{6}}{2}. } \tag{1}
\end{align}

$\text{d.} \quad$ We first change $3\sqrt{5} = \sqrt{9\cdot 5} = \sqrt{45}$ and apply the same trick as Part (c).

{{% mn q1d tips %}}
$(2)$ Rationalising the denominator
{{% /mn %}}
\begin{align}
  \textstyle\sqrt{9-3\sqrt{5}} &= \textstyle\sqrt{9-\hl{\sqrt{45}}} \\\\
  &= \hl{\dfrac{\sqrt{18-2\sqrt{45}}}{\sqrt{2}}} \\\\
  &= \dfrac{\sqrt{15 + 3 - 2\sqrt{15\cdot 3}}}{\sqrt{2}} \\\\
  &= \dfrac{\sqrt{15}-\sqrt{3}}{\sqrt{2}} \\\\
  &= \boldsymbol{ \dfrac{\sqrt{30}-\sqrt{6}}{2}. } \tag{2}
\end{align}

{{% /details %}}

2. Evaluate the value of $\sqrt{(a+2)^2}+\sqrt{a^2}$, for the following conditions.
    1. $a\ge 0$
    2. $-2\le a \lt 0$
    3. $a\lt -2$

3. When $-2\lt y\lt \dfrac{3}{4}$, simplify $\sqrt{y^2+4y+4}-\sqrt{16y^2-24y+9}$. {{% mn ref3 refs %}}From Tohoku Inst. of Tech.{{% /mn %}}

{{% details title="Answer" %}}
2. 
    1. $2a + 2$
    2. $2$
    3. $-2a - 2$
3. $5y - 1$

{{% note solution %}}

2. 

$\text{a.} \quad$ When $a\ge 0$, $a+2\ge 0$, hence

\begin{align}
  \sqrt{(a+2)^2}+\sqrt{a^2} &= (a+2) + a \\\\
  &= \boldsymbol{ 2a + 2. }
\end{align}

$\text{b.} \quad$ When $-2\le a\lt 0$, $a+2\ge 0$, hence

\begin{align}
  \sqrt{(a+2)^2}+\sqrt{a^2} &= (a+2) \hl{- a} \\\\
  &= \boldsymbol{ 2. }
\end{align}

$\text{c.} \quad$ When $a\lt -2$, $a+2\lt 0$, hence

\begin{align}
  \sqrt{(a+2)^2}+\sqrt{a^2} &= \hl{-(a+2)} \hl{- a} \\\\
  &= -a-2-a \\\\
  &= \boldsymbol{ -2a - 2. }
\end{align}

---

3. 

{{% mn q3 tips %}}
$(1)$ $-2\lt y\lt \dfrac{3}{4}$, so $y+2\gt 0$ but $4y-3\lt 0$.
{{% /mn %}}
\begin{align}
  & \sqrt{y^2+4y+4}-\sqrt{16y^2-24y+9} \\\\
  &= \sqrt{(y+2)^2} - \sqrt{(4y-3)^2} \\\\
  &= (y+2) \hl{+ (4y-3)} \tag{1} \\\\
  &= \boldsymbol{ 5y - 1 }.
\end{align}

{{% /details %}}