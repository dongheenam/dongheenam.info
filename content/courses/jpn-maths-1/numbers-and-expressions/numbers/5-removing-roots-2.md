---
title: Removing Square Roots 2
slug: removing-roots-2
description: How to remove double square roots. How to evaluate the square root of a polynomial expression.

date: 2020-08-04 08:53:19.702 +1000
lastMod: 2020-12-22 19:07:21.314 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - real number
  - square root
  - polynomial identity
  - fraction

menu:
  math1-numbers:
    parent: Real Numbers
    name: Removing Square Roots 2
    weight: 15

weight: 15
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.

- Mathematics 1
  - [Factorising with Polynomial Identities 1](../../polynomials/factorising-identities-1/)

{{% /details %}}

In this lesson, we will practice some more tricks on removing square roots:

- How to remove double square roots.
- How to evaluate the square root of a polynomial expression.

## Double Square Roots

We can now use the [perfect square identity](../../polynomials/expanding-identities/#quadratic-identities) with square roots. For example, $$ \big(\sqrt{2}+\sqrt{3}\big)^2 = 2 + 2\sqrt{6} + 3 = 5 + 2\sqrt{6}. $$

This is where it becomes interesting: because the definition of $\sqrt{a}$ is the positive number whose square is $a$, and $\sqrt{2}+\sqrt{3}$ squared is $5+2\sqrt{6}$, we can say $$ \textstyle{\sqrt{5+2\sqrt{6}}} = \sqrt{2}+\sqrt{3}. $$

A square root inside another square root! If we reverse this step, we can remove some double square roots from expressions. See the examples below.

{{% hbox %}}
{{% note Example %}}
Simplify the following expressions by removing the double square roots.

1. $\sqrt{11+2\sqrt{30}}$
2. $\sqrt{9-2\sqrt{14}}$

{{% note Solution %}}
We will modify what is inside the big square root into a perfect square.

{{% enum 1 %}}
`\begin{align*}
& \textstyle\sqrt{11+2\sqrt{30}} \\
&= \textstyle\sqrt{5+6+2\sqrt{5}\sqrt{6}} \\
&= \textstyle\sqrt{\hl{(\sqrt{5}+\sqrt{6})^2}} \\
&= \boldsymbol{ \sqrt{5} + \sqrt{6}. }
\end{align*}`

{{% enum 2 %}}
`\begin{align*}
& \textstyle\sqrt{9-2\sqrt{14}} \\
&= \textstyle\sqrt{7+2-2\sqrt{7}\sqrt{\smash{2}\vphantom{6}}} \\
&= \textstyle\sqrt{\hl{(\sqrt{7}-\sqrt{2})^2}} \\
&= \boldsymbol{ \sqrt{7}-\sqrt{2}. }
\end{align*}`

***Note.*** The answer for the second example is ***not*** $\sqrt{2}-\sqrt{7}$! This is because $\sqrt{9-2\sqrt{14}}$ is greater than zero (there is no negative sign in front), but $\sqrt{2}-\sqrt{7}<0$.

{{% /hbox %}}

In short, we can remove the outer root of a double square root expression of this kind:

{{% hbox %}}
{{% note Theorem %}} For any positive real numbers $a$ and $b$ with $a>b$,
`\begin{align*}
\textstyle\sqrt{(a+b)+2\sqrt{ab}} &= \sqrt{a} + \sqrt{b}, \\
\textstyle\sqrt{(a+b)-2\sqrt{ab}} &= \sqrt{a} - \sqrt{b}.
\end{align*}`

{{% /hbox %}}

Below are two more examples. Note there is nothing in front of $\sqrt{ab}$ -- think of a way to ***create*** a factor of $2$.

{{% hbox %}}
{{% note Example %}}
Remove the outer root of the double roots and simplify the expressions.

1. $\sqrt{10-\sqrt{84}}$
2. $\sqrt{6+\sqrt{35}}$

{{% note Solution %}}

{{% enum 1 %}}
Because $\sqrt{84}=\sqrt{2^2\cdot 21} = 2\sqrt{21}$,
{{% mn 93 tips %}}
(1) Be careful, $\sqrt{3}-\sqrt{7}$ is wrong!
{{% /mn %}}

`\begin{align*}
\textstyle\sqrt{10-\sqrt{84}} &= \textstyle\sqrt{3+7-\hl{2\sqrt{21}}} \\
&= \textstyle\sqrt{\hl{(\sqrt{7}-\sqrt{3})^2}} \\
&= \boldsymbol{ \sqrt{7} - \sqrt{3}. } \tag{1}
\end{align*}`

{{% enum 2 %}}
Here, we will multiply and divide by $\sqrt{2}$:
{{% mn 103 tips %}}
(2) Rationalising the denominator.
{{% /mn %}} 

`\begin{align*}
\textstyle\sqrt{6+\sqrt{35}} &= \hl{ \dfrac{\sqrt{12+2\sqrt{35}}}{\sqrt{2}} } \\
&= \dfrac{\sqrt{ 7+5 + 2\sqrt{35} }}{\sqrt{2}} \\
&= \dfrac{\hl{\sqrt{7}+\sqrt{5}}}{\sqrt{2}} \\
&= \dfrac{(\sqrt{7}+\sqrt{5})\cdot \sqrt{2}}{2} \tag{2} \\
&= \boldsymbol{ \dfrac{\sqrt{14}+\sqrt{10}}{2}. }
\end{align*}`

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 before moving on.

## Square Root of a Polynomial

Now, let's take a break and have a look at square roots with variables. First of all, remember:

{{% hbox %}}
{{% note Theorem %}}
$ \textstyle\sqrt{A^2} = |A|. $

{{% /hbox %}}


So $\sqrt{(x-1)^2}$ is ***not*** equal to $x-1$ in general! Always check whether the expression inside is positive, or not.

{{% hbox %}}
{{% note Example %}}
Calculate the value of $\sqrt{(x-1)^2}+\sqrt{(x-3)^2}$, when:

1. $x\ge 3$
2. $1\le x \lt 3$
3. $x\lt 1$

{{% note Solution %}}

{{% enum 1 %}}
When $x\ge 3$, $(x-1)\gt 0$ and $(x-3)\ge 0$ so

`\begin{align*}
\sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= (x-1) + (x-3) \\
&= \boldsymbol{ 2x-4. }
\end{align*}`

{{% enum 2 %}}
When $1\le x \lt 3$, $(x-1)\ge 0$ and $(x-3)\lt 0$ so

`\begin{align*}
\sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= (x-1) \hl{-(x-3)} \\
&= x - 1 - x + 3 \\
&= \boldsymbol{ 2. }
\end{align*}`

{{% enum 3 %}}
When $x\lt 1$, $(x-1)\lt 0$ and $(x-3)\lt 0$ so

`\begin{align*}
\sqrt{(x-1)^2}+\sqrt{(x-3)^2} &= \hl{-(x-1)} \hl{-(x-3)} \\
&= -x+1-x+3 \\
&= \boldsymbol{ -2x+4. }
\end{align*}`

{{% /hbox %}}

{{% details title="Tips for checking the answer" %}}
People often forget $\sqrt{(\cdots)}$ is ***always*** positive, as long as it is a real number. And you should be able to tell, the answers to the example questions above are all positive. So this can be used as a check -- if you remove the square root and get something negative, something is going wrong!

<p></p>

{{% /details %}}

## Practice Questions

1. Solve the double root and simplify the expressions.
   1. $\sqrt{6 + 4\sqrt{2}}$
   2. $\sqrt{8-\sqrt{48}}$
   3. $\sqrt{2+\sqrt{3}}$
   4. $\sqrt{9-3\sqrt{5}}$

{{% details title="Answer" %}}

1.  1. $2 + \sqrt{2}$
    2. $\sqrt{6}-\sqrt{2}$
    3. $\dfrac{\sqrt{2}+\sqrt{6}}{2}$
    4. $\dfrac{\sqrt{30}-\sqrt{6}}{2}$

{{% note Solution %}}

{{% enum a %}} Since $4\sqrt{2} = 2\cdot 2\sqrt{2} = 2\sqrt{8}$,

`\begin{align*}
&\textstyle\sqrt{6 + 4\sqrt{2}} \\
&= \textstyle\sqrt{6 + \hl{2\sqrt{8}}} \\
&= \textstyle\sqrt{4 + 2 + 2\sqrt{2\cdot 4}} \\
&= \sqrt{4} + \sqrt{2} \\
&= \boldsymbol{ 2 + \sqrt{2}. }
\end{align*}`

{{% enum b %}} $\sqrt{48} = \sqrt{2^2\cdot 12} = 2\sqrt{12}$ and

`\begin{align*}
&\textstyle\sqrt{8-\sqrt{48}} \\
&= \textstyle\sqrt{8-\hl{2\sqrt{12}}} \\
&= \textstyle\sqrt{6 + 2 - 2\sqrt{6\cdot 2}} \\
&= \boldsymbol{ \sqrt{6}-\sqrt{2}. }
\end{align*}`

{{% enum c %}} We will multiply and divide the expression by $\sqrt{2}$:
{{% mn q1c tips %}}
(1) Rationalising the denominator
{{% /mn %}}

`\begin{align*}
&\textstyle\sqrt{2+\sqrt{3}} \\
&= \hl{\dfrac{\sqrt{4+2\sqrt{3}}}{\sqrt{2}}} \\
&= \dfrac{\sqrt{1+3+2\sqrt{1\cdot 3}}}{\sqrt{2}} \\
&= \dfrac{1 + \sqrt{3}}{\sqrt{2}} \\
&= \boldsymbol{ \dfrac{\sqrt{2}+\sqrt{6}}{2}. } \tag{1}
\end{align*}`

{{% enum d %}} We first change $3\sqrt{5} = \sqrt{9\cdot 5} = \sqrt{45}$ and apply the same trick as Part (c).
{{% mn q1d tips %}}
(2) Rationalising the denominator
{{% /mn %}}

`\begin{align*}
&\textstyle\sqrt{9-3\sqrt{5}} \\
&= \textstyle\sqrt{9-\hl{\sqrt{45}}} \\
&= \hl{\dfrac{\sqrt{18-2\sqrt{45}}}{\sqrt{2}}} \\
&= \dfrac{\sqrt{15 + 3 - 2\sqrt{15\cdot 3}}}{\sqrt{2}} \\
&= \dfrac{\sqrt{15}-\sqrt{3}}{\sqrt{2}} \\
&= \boldsymbol{ \dfrac{\sqrt{30}-\sqrt{6}}{2}. } \tag{2}
\end{align*}`

{{% /details %}}

2. Simplify the following expressions. {{% mn ref2 refs %}}a. From Tokyo Univ. of Marine Sci. and Tech.<br>b. From Kokugakuin Univ.{{% /mn %}}
   1. $\sqrt{11+4\sqrt{6}}$
   2. $\dfrac{1}{\sqrt{4-\sqrt{15}}}$

{{% details title="Answer" %}}

2.  1. $2\sqrt{2} + \sqrt{3}$
    2. $\dfrac{\sqrt{10} - \sqrt{6}}{2}$

{{% note Solution %}}

{{% enum a %}}
{{% mn q2a tips %}}
(1) $4\sqrt{6}$ $=2\cdot 2\sqrt{6}$ $=2\cdot\sqrt{2^2\cdot 6}$ $=2\sqrt{24}$.
{{% /mn %}}
`\begin{align*}
& \textstyle\sqrt{11+4\sqrt{6}} \\
&= \textstyle\sqrt{11 + \hl{2\sqrt{24}}} \tag{1} \\
&= \textstyle\sqrt{3 + 8 + 2\sqrt{3\cdot 8}} \\
&= \sqrt{3} + \sqrt{8} \\
&= \boldsymbol{ \sqrt{3} + 2\sqrt{2} }.
\end{align*}`

{{% enum b %}}
{{% mn q2b tips %}}
(2) Multiplying the numerator and denominator by $\sqrt{2}$ to create $2\sqrt{ab}$.<br>
(3) $\sqrt{3} - \sqrt{5}$ is wrong!<br>
(4) Rationalising the denominator.
{{% /mn %}}
`\begin{align*}
& \dfrac{1}{\sqrt{4-\sqrt{15}}} \\
&= \dfrac{\hl{\sqrt{2}}}{\hl{\sqrt{2}}\sqrt{4-\sqrt{15}}} \tag{2} \\
&= \dfrac{\sqrt{2}}{\sqrt{8 - 2\sqrt{15}}} \\
&= \dfrac{\sqrt{2}}{\sqrt{3 + 5 - 2\sqrt{3\cdot 5}}} \\
&= \dfrac{\sqrt{2}}{\sqrt{5} - \sqrt{3}} \tag{3} \\
&= \dfrac{\sqrt{2}\big(\sqrt{5} + \sqrt{3}\big)}{\big(\sqrt{5} - \sqrt{3}\big)\big(\sqrt{5} + \sqrt{3}\big)} \tag{4} \\
&= \dfrac{\sqrt{10} - \sqrt{6}}{5 - 3} \\
&= \boldsymbol{ \dfrac{\sqrt{10} - \sqrt{6}}{2} }.
\end{align*}`

{{% /details %}}

3. Evaluate the value of $\sqrt{(a+2)^2}+\sqrt{a^2}$, for the following conditions.

   1. $a\ge 0$
   2. $-2\le a \lt 0$
   3. $a\lt -2$

{{% details title="Answer" %}}

3. 
    1. $2a + 2$
    2. $2$
    3. $-2a - 2$

{{% note Solution %}}

{{% enum a %}} When $a\ge 0$, $a+2\ge 0$, hence

`\begin{align*}
\sqrt{(a+2)^2}+\sqrt{a^2} &= (a+2) + a \\
&= \boldsymbol{ 2a + 2. }
\end{align*}`

{{% enum b %}} When $-2\le a\lt 0$, $a+2\ge 0$, hence

`\begin{align*}
\sqrt{(a+2)^2}+\sqrt{a^2} &= (a+2) \hl{- a} \\
&= \boldsymbol{ 2. }
\end{align*}`

{{% enum c %}} When $a\lt -2$, $a+2\lt 0$, hence

`\begin{align*}
\sqrt{(a+2)^2}+\sqrt{a^2} &= \hl{-(a+2)} \hl{- a} \\
&= -a-2-a \\
&= \boldsymbol{ -2a - 2. }
\end{align*}`

{{% /details %}}

4. When $-2\lt y\lt \dfrac{3}{4}$, simplify $\sqrt{y^2+4y+4}-\sqrt{16y^2-24y+9}$. {{% mn ref3 refs %}}From Tohoku Inst. of Tech.{{% /mn %}}

{{% details title="Answer" %}}

4. $5y - 1$

{{% note Solution %}}
{{% mn q4 tips %}}
(1) $-2\lt y\lt \dfrac{3}{4}$, so $y+2\gt 0$ but $4y-3\lt 0$.
{{% /mn %}}
`\begin{align*}
& \sqrt{y^2+4y+4}-\sqrt{16y^2-24y+9} \\
&= \sqrt{(y+2)^2} - \sqrt{(4y-3)^2} \\
&= (y+2) \hl{+ (4y-3)} \tag{1} \\
&= \boldsymbol{ 5y - 1 }.
\end{align*}`

{{% /details %}}
