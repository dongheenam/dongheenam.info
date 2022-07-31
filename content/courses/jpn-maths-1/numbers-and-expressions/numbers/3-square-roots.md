---
title: "Properties of Square Roots"
description: Definition and properties of square roots. How to simplify basic expressions including square roots.
slug: "square-roots"

date: 2020-07-23 16:12:13.514 +1000
lastMod: 2020-12-15 18:04:21.818 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - real number
  - square root
  - polynomial identity

menu:
  math1:
    parent: Real Numbers
    name: Square Roots
    weight: 13

weight: 13
---

## Introduction

We will investigate the most familiar type of irrational numbers for the rest of the section -- square roots. As always, let's start with what we know about square roots first. In this lesson, we will learn:

  - the definition and basic properties of square roots.
  - how to properly remove the root symbol.


## Square Roots

{{% mn pyth fig %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/num-pythagoras.jpg" alt="Drawing of Pythagoras." %}}
Drawing of Pythagoras. Image by [Raphael](https://commons.wikimedia.org/wiki/File:Pythagoras_with_tablet_of_ratios.jpg) via Wikimedia Commons.
{{% /mn %}}
The definition of square roots comes from this question: what is the number whose square equals 2? Pythagoras, the Ancient Greek mathematician famous for Pythagoras' Law, and his students named this number the ***square root of two***. They desperately tried to find a fraction that equals this mysterious number because they believed every single number could be expressed as a ratio of two natural numbers. Of course, we know this is impossible because $\sqrt{2}$ is [irrational](../types-of-numbers/#decimal-representation-of-numbers). Legends say they threw the student who found this number into the ocean after they realised there are no ratios that equal $\sqrt{2}$!

{{% hbox %}}
{{% note Definition %}}
*If $x^2=a$ and $a>0$, we define $x$ as a ***square root*** of $a$.*

{{% note Example %}}
*Example.* The square roots of $9$ are $3$ and $-3$, because $3^2=9$ and $(-3)^2=9$.

{{% /hbox %}}

The famous root symbol $\sqrt{}$ refers to the positive square root.

{{% hbox %}}
{{% note Definition %}}
*The two square roots of a positive real number $a$ are $\sqrt{a}$ and $-\sqrt{a}$, where $\sqrt{a}>0$.*

{{% /hbox %}}

Note that we can only calculate the square root of a ***positive number or zero***. This is because there are no real numbers that you square to get a negative number.


### Basic properties of square roots

From the definition of the square root symbol, we get

{{% hbox %}}
{{% note theorem %}}
For every positive real number $a$,
  - $\left( \sqrt{a} \right)^2 = a$,
  - $\left( -\sqrt{a} \right)^2 = a$.

{{% /hbox %}}

Now, from the first definition, a lot of students tend to think $\sqrt{x^2} = x$. Although it looks pretty convincing, this is not always true. Let's say $x=-2$. Then

\begin{align*}
  \sqrt{x^2} &= \sqrt{(-2)^2} \cr
  &= \sqrt{4} \cr
  &= 2,
\end{align*}

which means $\sqrt{x^2} = -x$! We need to be careful with the sign of $x$ when we are simplifying $\sqrt{x^2}$. In general, it is equal to the ***absolute value*** of $x$.

{{% hbox %}}
{{% note Theorem %}}
For a real number $x$, $\sqrt{x^2} = |x|$.

{{% /hbox %}}

{{% hbox %}}
{{% note Example %}}
Simplify:
1. $\sqrt{(-5)^2}$
2. $\sqrt{(-2)(-8)}$

{{% note Solution %}}

1. $ \sqrt{(-5)^2} = \sqrt{25} = \sqrt{5^2} = \boldsymbol{ 5 } $.
2. $ \sqrt{(-2)(-8)} = \sqrt{16} = \sqrt{4^2} = \boldsymbol{ 4 } $.

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}}
When $p>0$ and $q<0$, simplify $\sqrt{p^2q^2}$.

{{% note Solution %}}
We know $\sqrt{p^2q^2} = \sqrt{(pq)^2} = |pq|$. Because $p$ is positive and $q$ is negative, $pq$ is negative. Therefore $\sqrt{p^2q^2} = \boldsymbol{ -pq }$.

{{% /hbox %}}


### Basic identities of square roots

What do you think $\sqrt{a}\sqrt{b}$ is equal to? Not very surprisingly, it is $\sqrt{ab}$. Likewise, simplifying expressions that have square roots is pretty straightforward most of the time. We will instead focus on how we can prove the basic identities like $\sqrt{a}\sqrt{b}=\sqrt{ab}$, and what we ***cannot*** do with square roots.

{{% hbox %}}
{{% note Theorem %}}
If $a>0$, $b>0$, and $x>0$,
  - $\sqrt{a}\sqrt{b}=\sqrt{ab},$
  - $\dfrac{\sqrt{a}}{\sqrt{b}}=\sqrt{\dfrac{a}{b}},$
  - $\sqrt{x^2a} = x\sqrt{a}.$

{{% /hbox %}}

{{% details title="Proof" %}}

{{% enum 1 %}} $\sqrt{a}\sqrt{b}=\sqrt{ab} $

Let's go back to the definition: if the left-hand side is positive, and its square is $ab$, then it is equal to $\sqrt{ab}$.

- $\sqrt{a}\sqrt{b}$ is positive

This is obviously true because both $\sqrt{a}$ and $\sqrt{b}$ are positive.

- $( \sqrt{a}\sqrt{b} )^2 = ab$

This is also true because 
$$ ( \sqrt{a}\sqrt{b} )^2 = (\sqrt{a})^2 (\sqrt{b})^2 = ab. $$

Therefore, we conclude $\sqrt{a}\sqrt{b}=\sqrt{ab}$. $\quad \square$

{{% enum 2 %}} $ \dfrac{\sqrt{a}}{\sqrt{b}}=\sqrt{\dfrac{a}{b}} $

First note that $b\ne 0$ from the condition $b>0$. Because $\left( \dfrac{\sqrt{a}}{\sqrt{b}} \right)^2 = \dfrac{a}{b}$ and $\dfrac{\sqrt{a}}{\sqrt{b}}$ is positive, we conclude $\dfrac{\sqrt{a}}{\sqrt{b}}=\sqrt{\dfrac{a}{b}}$. $\quad \square$

{{% enum 3 %}} $ \sqrt{x^2a} = x\sqrt{a} $

We will use the first identity to simplify the left-hand side. Because both $x^2$ and $a$ are positive,
\begin{align*}
  \textstyle\sqrt{x^2a} &= \textstyle\sqrt{x^2}\sqrt{a} \cr
  &= \hl{|x|}\sqrt{a}.
\end{align*}

Then, because $x$ is also positive, $|x|=x$ and $\sqrt{x^2 a} = x\sqrt{a}$. $\quad \square$

{{% /details %}}

{{% details title="Why $x>0?$" %}}
As seen in the proof, strictly speaking, $\sqrt{x^2a} = |x|\sqrt{a}$. If we don't have that condition on $x$, a lot of strange things happen. For example, we can prove $1=-1$:
\begin{align*}
  1 &= \sqrt{1} \cr
  &= \textstyle\sqrt{(-1)^2\cdot 1} \cr
  &= -1\sqrt{1} \cr
  &= -1\cdot 1 \cr
  &= -1.
\end{align*}

Obviously, this is not true, because
\begin{align*}
  \textstyle\sqrt{(-1)^2\cdot 1} &= \hl{|-1|}\sqrt{1} \cr
  &= \sqrt{1} \cr
  &= 1,
\end{align*}

but it is confusing, especially when you deal with variables. So make sure you are always aware of this when you take a square out of a root!

{{% /details %}}

{{% hbox %}}
{{% note Example %}}
Simplify
  1. $\sqrt{2}\sqrt{8}$
  2. $\dfrac{\sqrt{3}\sqrt{18}}{\sqrt{6}}$
  3. $\sqrt{98} - 3\sqrt{2}$

{{% note Solution %}}

{{% enum 1 %}}
\begin{align*}
  & \sqrt{2}\sqrt{8} \cr
  &= \sqrt{16} \cr
  &= \sqrt{4^2} \cr
  &= \boldsymbol{ 4 }.
\end{align*}

{{% enum 2 %}}
\begin{align*}
  & \dfrac{\sqrt{3}\sqrt{18}}{\sqrt{6}} \cr
  &= \sqrt{ \dfrac{3\cdot 18}{6} } \cr
  &= \sqrt{ 3\cdot 3} \cr
  &= \boldsymbol{ 3 }.
\end{align*}

{{% enum 3 %}}
\begin{align*}
  & \sqrt{98} - 3\sqrt{2} \cr
  &= \sqrt{7^2 \cdot 2} - 3\sqrt{2} \cr
  &= 7\sqrt{2} - 3\sqrt{2} \cr
  &= \boldsymbol{ 4\sqrt{2} }.
\end{align*}

{{% /hbox %}}

{{% details title="Treat them like variables!" %}}
You can add or subtract square roots just like how we do with the variables. For example, $$ \sqrt{2} + 3\sqrt{2} = 4\sqrt{2}, $$ or in words, ***one*** square root of two plus ***three*** square roots of two is ***four*** square roots of two! Likewise, $$ 4\sqrt{7} - 6\sqrt{7} = -2\sqrt{7} $$ and so on.



{{% /details %}}

Here comes probably the most important part of this section: you ***cannot*** add two square roots with different numbers inside{{% sn radicand %}}The correct name for this number is ***radicand***. For example, the radicand of $\sqrt{13}$ is $13$.{{% /sn %}}. A lot of people make a mistake like this: $$ \sqrt{2} + \sqrt{7} = \sqrt{2+7} = \sqrt{9} = 3, $$ which is not true:

\begin{align*}
  \sqrt{2} + \sqrt{7} &= 4.05996\cdots \ne 3.
\end{align*}

So remember: you can multiply or divide across the square root symbol, but not add or subtract!

{{% hbox %}}
{{% note Example %}}
Expand and simplify the following expressions.
  1. $\left(\sqrt{11}-\sqrt{3}\right)\left(\sqrt{11}+\sqrt{3}\right)$
  2. $\left(2\sqrt{2}-\sqrt{27}\right)^2$
  3. $\left(\sqrt{2}+\sqrt{3}+\sqrt{5}\right)\left(\sqrt{2}+\sqrt{3}-\sqrt{5}\right)$

{{% note Solution %}}

{{% enum 1 %}} It is ***not*** equal to $\sqrt{8}\sqrt{14}=\sqrt{112}$! Instead, we will use the [polynomial identities](../../polynomials/expanding-identities/#quadratic-identities) to expand the brackets.

\begin{align*}
  \big(\sqrt{11}-\sqrt{3}\big)\big(\sqrt{11}+\sqrt{3}\big) &= \big(\sqrt{11}\big)^2 - \big(\sqrt{3}\big)^2 \cr
  &= 11 - 3 \cr
  &= \boldsymbol{ 8 }.
\end{align*}

{{% enum 2 %}} First note $\sqrt{27}=\sqrt{3^2\cdot 3}=3\sqrt{3}$. Then we can use the perfect square identity to expand the expression.

\begin{align*}
  \big(2\sqrt{2}-\sqrt{27}\big)^2 &= \big(2\sqrt{2}-3\sqrt{3}\big)^2 \cr
  &= \big(2\sqrt{2}\big)^2 - 2\cdot 2\sqrt{2} \cdot 3\sqrt{3} + \big(3\sqrt{3}\big)^2 \cr
  &= 8 - 12\sqrt{6} + 27 \cr
  &= \boldsymbol{ 35 - 12\sqrt{6} }.
\end{align*}

{{% enum 3 %}} Do you remember the [substitution technique](../../polynomials/advanced-expanding/#expanding-by-substitution)? You can see $\sqrt{2}+\sqrt{3}$ is common in both brackets, so let's rename it as $A$ and expand the expression with the polynomial identity.
{{% mn 238 tips %}}(1) $\sqrt{2}+\sqrt{3}=A${{% /mn %}}

\begin{align*}
  & \big(\sqrt{2}+\sqrt{3}+\sqrt{5}\big)\big(\sqrt{2}+\sqrt{3}-\sqrt{5}\big) \cr
  &= \big(A + \sqrt{5} \big)\big(A - \sqrt{5} \big) \tag{1} \cr
  &= A^2 - \big(\sqrt{5}\big)^2 \cr
  &= \big(\sqrt{2}+\sqrt{3}\big)^2 - 5 \cr
  &= 2 + 2\sqrt{6} + 3 - 5 \cr
  &= \boldsymbol{ 2\sqrt{6}. }
\end{align*}

{{% /hbox %}}


## Practice Questions

1. Calculate the following expressions.
    1. $\sqrt{(-3)^2\cdot 5}$
    2. $\sqrt{(-15)(-45)}$
    3. $\sqrt{15}\sqrt{35}\sqrt{42}$

{{% details title="Answer" %}}
1. 
    1. $3\sqrt{5}$
    2. $15\sqrt{3}$
    3. $105\sqrt{2}$

{{% note Solution %}}

{{% enum a %}} Not true: $\sqrt{(-3)^2\cdot 5} = -3\sqrt{5}$. Instead,

\begin{align*}
  & \sqrt{(-3)^2\cdot 5} = \sqrt{3^2 \cdot 5} = \boldsymbol{ 3\sqrt{5} }.
\end{align*}
{{% enum b %}}
\begin{align*}
  & \sqrt{(-15)(-45)} = \sqrt{15\cdot 45} = \sqrt{15\cdot 15\cdot 3} = \boldsymbol{ 15\sqrt{3} }.
\end{align*}
{{% enum c %}}
\begin{align*}
  & \sqrt{15}\sqrt{35}\sqrt{42} \cr
  &= \sqrt{15\times 35\times 42} \cr
  &= \sqrt{3\cdot 5 \times 7\cdot 5 \times 7\cdot 3\cdot 2} \cr
  &= \sqrt{3^2\cdot 5^2 \cdot 7^2 \cdot 2} \cr
  &= 3\cdot5\cdot7 \sqrt{2} = \boldsymbol{ 105\sqrt{2} }.
\end{align*}

{{% /details %}}

2. Simplify the following expressions.
    1. $\sqrt{18}-2\sqrt{50}-\sqrt{8}+\sqrt{32}$
    2. $\left(2\sqrt{3} - 3\sqrt{2}\right)^2$
    3. $\left(2\sqrt{5}-3\sqrt{3}\right)\left(3\sqrt{5}+2\sqrt{3}\right)$
    4. $\left(\sqrt{5}+\sqrt{3}+\sqrt{2}\right)\left(\sqrt{5}-\sqrt{3}+\sqrt{2}\right)$

{{% details title="Answer" %}}
2. 
    1. $-5\sqrt{2}$
    2. $30 - 12\sqrt{6}$
    3. $12 - 5\sqrt{15}$
    4. $4 + 2\sqrt{10}$

{{% note Solution %}}

{{% enum a %}} We will try to make the radicands (numbers inside the root symbol) first.

\begin{align*}
  & \sqrt{18}-2\sqrt{50}-\sqrt{8}+\sqrt{32} \cr
  &= \sqrt{2\cdot 3^2} - 2\sqrt{2\cdot 5^2} - \sqrt{2\cdot 2^2} + \sqrt{2\cdot 4^2} \cr
  &= 3\sqrt{2} - 10\sqrt{2} - 2\sqrt{2} + 4\sqrt{2} \cr
  &= (3-10-2+4)\sqrt{2} \cr
  &= \boldsymbol{ -5\sqrt{2} }.
\end{align*}

{{% enum b %}} Expand the perfect square.

\begin{align*}
  \big(2\sqrt{3} - 3\sqrt{2}\big)^2 &= \big(2\sqrt{3}\big)^2 - 2\cdot 2\sqrt{3} \cdot 3\sqrt{2} + \big(3\sqrt{2}\big)^2 \cr
  &= 12 - 12\sqrt{6} + 18 \cr
  &= \boldsymbol{ 30 - 12\sqrt{6} }.
\end{align*}

{{% enum c %}} If you look carefully, it is in the $(ax+by)(cx+dy)$ form!

\begin{align*}
  & \big(2\hl{\sqrt{5}}-3\sqrt{3}\big)\big(3\hl{\sqrt{5}}+2\sqrt{3}\big) \cr
  &= 6\big(\hl{\sqrt{5}}\big)^2 + (4 - 9)\hl{\sqrt{5}}\sqrt{3} - 6\big(\sqrt{3}\big)^2 \cr
  &= 6\cdot 5 - 5\sqrt{15} - 18 \cr
  &= \boldsymbol{ 12 - 5\sqrt{15} }.
\end{align*}

{{% enum d %}} This is a slightly different version of the last example question. This time, let's expand it without actually substituting the common terms.

\begin{align*}
  & \big(\sqrt{5}+\sqrt{3}+\sqrt{2}\big)\big(\sqrt{5}-\sqrt{3}+\sqrt{2}\big) \cr
  &= \big\\{ \big(\underline{\sqrt{5}+\sqrt{2}}\big) + \sqrt{3} \big\\}\big\\{ \big(\underline{\sqrt{5}+\sqrt{2}}\big) - \sqrt{3} \big\\} \cr
  &= \big(\underline{\sqrt{5}+\sqrt{2}} \big)^2 - 3 \cr
  &= 5 + 2\sqrt{10} + 2 - 3 \cr
  &= \boldsymbol{ 4 + 2\sqrt{10} }.
\end{align*}

{{% /details %}}