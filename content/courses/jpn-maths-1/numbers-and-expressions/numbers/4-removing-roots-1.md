---
title: "Removing Square Roots 1"
slug: "removing-roots-1"
description: How to rationalise the denominator of a fraction.

date: 2020-08-04 08:53:19.702 +1000
lastMod: 2021-03-07 09:27:54.862 +1100

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
    name: Removing Square Roots 1
    weight: 14

weight: 14
---

## Introduction

What do you think is the value of $\dfrac{1}{\sqrt{2}}$? Well, from the last lesson, [we now know](../square-roots/) that it equals the square root of $\dfrac{1}{2}$, so we need to find a (positive) number whose square is a half. You can estimate the value by trial-and-error, the [fancy Babylonian method](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method), or just use a calculator. Anyways, you will get $$ \frac{1}{\sqrt{2}} = 0.70710678 \cdots. $$ Let's compare this number with $$ \sqrt{2} = 1.41421356 \cdots. $$ What do you notice? Did you also find two times the square root of half is equal to the square root of two, or $\dfrac{2}{\sqrt{2}} = \sqrt{2}$?

Dealing with roots is full of surprise, which is why we need to talk about some tips and tricks on how to deal with square roots. In this lesson, we will learn:

- How to rationalise the denominator of a fraction to help simplify it.

## Rationalising the Denominators

So, we can start from $\dfrac{1}{\sqrt{2}}$. What is the number we can multiply $\sqrt{2}$ to get rid of the root? Well, quite obviously, it is another $\sqrt{2}$, because $(\sqrt{2})^2 = 2$. Because we are trying to multiply the denominator by $\sqrt{2}$, we also need to multiply the numerator by $\sqrt{2}$ to keep the value the same. Therefore, we have:

$$ \frac{1}{\sqrt{2}} = \frac{1 \hl{\times \sqrt{2}}}{\sqrt{2} \hl{\times \sqrt{2}}} = \frac{\sqrt{2}}{2}. $$

We just proved what we found in the Introduction! Let's try this method on more fractions.

{{% hbox %}}
{{% note Example %}}
Rationalise the following fractions.

1. $\dfrac{3}{\sqrt{6}}$
2. $\dfrac{1}{2\sqrt{5}}$
3. $\dfrac{\sqrt{2}}{7\sqrt{11}}$

{{% note Solution %}}

1. $\dfrac{3}{\sqrt{6}} = \dfrac{3\hl{\times \sqrt{6}}}{\sqrt{6}\hl{\times \sqrt{6}}} = \dfrac{\bcancel{3}^1\sqrt{6}}{\bcancel{6}^2} = \boldsymbol{ \dfrac{\sqrt{6}}{2}. } $

2. $\dfrac{1}{2\sqrt{5}} = \dfrac{1\hl{\times \sqrt{5}}}{2\sqrt{5}\hl{\times \sqrt{5}}} = \dfrac{\sqrt{5}}{2\cdot 5} = \boldsymbol{ \dfrac{\sqrt{5}}{10}. } $

3. $\dfrac{\sqrt{2}}{7\sqrt{11}} = \dfrac{\sqrt{2}\hl{\times \sqrt{11}}}{7\sqrt{11}\hl{\times \sqrt{11}}} = \dfrac{\sqrt{2}\cdot\sqrt{11}}{7\cdot 11} = \boldsymbol{ \dfrac{\sqrt{22}}{77} . }$

{{% /hbox %}}

### Using the Polynomial Identity

Let's try a little more complicated one: $\dfrac{1}{\sqrt{7}-\sqrt{6}}$. We know that multiplying the top and the bottom with $\sqrt{7}-\sqrt{6}$ does not really help, because $$ (\sqrt{7}-\sqrt{6})^2 = 7 - 2\sqrt{42} + 6 = 13 - 2\sqrt{42} $$ and the square root survives. Instead, we can multiply it with $\sqrt{7}\hl{+}\sqrt{6}$ and use the identity $(a+b)(a-b) = a^2-b^2$:

`\begin{align*}
\dfrac{1}{\sqrt{7}-\sqrt{6}} &= \dfrac{1 \hl{ \times (\sqrt{7}+\sqrt{6}) }}{(\sqrt{7}-\sqrt{6})\hl{ \times (\sqrt{7}+\sqrt{6}) }} \\
&= \dfrac{\sqrt{7}+\sqrt{6}}{(\sqrt{7})^2 - (\sqrt{6})^2} \\
&= \dfrac{\sqrt{7}+\sqrt{6}}{7-6} \\
&= \sqrt{7}+\sqrt{6}.
\end{align*}`

We got rid of all roots in the denominator! Let's try a few more of this kind:

{{% hbox %}}
{{% note Example %}}
Rationalise the denominator and simplify the following expressions:

1. $\dfrac{\sqrt{2}}{\sqrt{2} + 3}$
2. $\dfrac{\sqrt{5}}{\sqrt{3}+1} - \dfrac{\sqrt{3}}{\sqrt{5}+\sqrt{3}}$
3. $\dfrac{4}{1+\sqrt{2}+\sqrt{3}}$

{{% note Solution %}}

{{% enum 1 %}} We can multiply it with $\sqrt{2}-3$, but note that this is a negative number. It is not a big problem, but I like to keep denominator positive, so we will instead use $3-\sqrt{2}$. Little twist!

`\begin{align*}
\dfrac{\sqrt{2}}{\sqrt{2} + 3} &= \dfrac{\sqrt{2}\hl{\times (3-\sqrt{2})}}{(\sqrt{2} + 3)\hl{\times (3-\sqrt{2})}} \\
&= \frac{\sqrt{2}(3-\sqrt{2})}{3^2 - (\sqrt{2})^2} \\
&= \frac{3\sqrt{2} - 2}{9 - 2} \\
&= \boldsymbol{ \frac{3\sqrt{2}-2 }{7}. }
\end{align*}`

{{% enum 2 %}} We will rationalise each fraction first and simplify if we need to.

`\begin{align*}
& \dfrac{\sqrt{5}}{\sqrt{3}+1} - \dfrac{\sqrt{3}}{\sqrt{5}+\sqrt{3}} \\
&= \dfrac{\sqrt{5}\hl{\times (\sqrt{3}-1)}}{(\sqrt{3}+1)\hl{\times (\sqrt{3}-1)}} - \dfrac{\sqrt{3}\hl{\times (\sqrt{5}-\sqrt{3})}}{(\sqrt{5}+\sqrt{3})\hl{\times (\sqrt{5}-\sqrt{3})}} \\
&= \dfrac{\sqrt{5}(\sqrt{3}-1)}{3 - 1} - \dfrac{\sqrt{3}(\sqrt{5}-\sqrt{3})}{5 - 3} \\
&= \dfrac{\sqrt{15} - \sqrt{5}}{2} - \dfrac{\sqrt{15} - 3}{2} \\
&= \boldsymbol{ \dfrac{3-\sqrt{5}}{2}. }
\end{align*}`

{{% enum 3 %}} We will split the denominator to $(1+\sqrt{2})+\sqrt{3}$, and take two steps to fully rationalise the denominator. So the first number we will multiply it by is $(1+\sqrt{2})-\sqrt{3}$:

`\begin{align*}
\dfrac{4}{1+\sqrt{2}+\sqrt{3}} &= \dfrac{4\hl{\times \left\{ (1+\sqrt{2})-\sqrt{3} \right\} }}{ \left\{ \big(1+\sqrt{2}\big)+\sqrt{3} \right\} \hl{\times \left\{ \big(1+\sqrt{2}\big)-\sqrt{3} \right\} }} \\
&= \frac{4\big(1 + \sqrt{2} - \sqrt{3}\big)}{\big(1+\sqrt{2}\big)^2 - \big(\sqrt{3}\big)^2} \\
&= \frac{4\big(1 + \sqrt{2} - \sqrt{3}\big)}{1+2\sqrt{2}+2 - 3 } \\
&= \frac{4\big(1 + \sqrt{2} - \sqrt{3}\big)}{2\sqrt{2}}.
\end{align*}`

Note there is only one term left on the denominator because $1^2+(\sqrt{2})^2=(\sqrt{3})^2$! We will then multiply the top and bottom by $\sqrt{2}$ to finish the job:
`\begin{align*}
\cdots &= \frac{4\big(1 + \sqrt{2} - \sqrt{3}\big)\hl{\times \sqrt{2}}}{2\sqrt{2}\hl{\times \sqrt{2}}} \\
&= \frac{\bcancel{4}(\sqrt{2} + 2 - \sqrt{6})}{\bcancel{4}} \\
&= \boldsymbol{ 2 + \sqrt{2} - \sqrt{6}. }
\end{align*}`

***Alternative solution.*** In Part 3, You can also multiply $\big(1+\sqrt{3}\big)-\sqrt{2}$, but you will find the calculation is much more complicated in the second step. Here is the alternative solution:
`\begin{align*}
\dfrac{4}{1+\sqrt{2}+\sqrt{3}} &= \dfrac{4\hl{\times \left\{ \big(1+\sqrt{3}\big)-\sqrt{2} \right\} }}{ \left\{ \big(1+\sqrt{3}\big)+\sqrt{2} \right\} \hl{\times \left\{ \big(1+\sqrt{3}\big)-\sqrt{2} \right\} }} \\
&= \frac{4\big(1+\sqrt{3}-\sqrt{2}\big)}{\big(1+\sqrt{3}\big)^2 - \big(\sqrt{2}\big)^2} \\
&= \frac{4\big(1+\sqrt{3}-\sqrt{2}\big)}{1+3+2\sqrt{3} - 2} \\
&= \frac{4\big(1+\sqrt{3}-\sqrt{2}\big)}{2+ 2\sqrt{3}} \\
&= \frac{2\big(1+\sqrt{3}-\sqrt{2}\big)}{\sqrt{3}+1} \\
&= \frac{2\big(1+\sqrt{3}-\sqrt{2}\big)\hl{\times \big(\sqrt{3}-1\big)}}{\big(\sqrt{3}+1\big)\hl{\times \big(\sqrt{3}-1\big)}} \\
&= \frac{2\big(1+\sqrt{3}-\sqrt{2}\big)\big(\sqrt{3}-1\big)}{3-1} \\
&= \big(1+\sqrt{3}-\sqrt{2}\big)\big(\sqrt{3}-1\big) \\
&= \sqrt{3} + 3 - \sqrt{6} - 1 - \sqrt{3} + \sqrt{2} \\
&= \boldsymbol{ 2 + \sqrt{2} - \sqrt{6}. }
\end{align*}`

{{% /hbox %}}

## Practice Questions

1. Rationalise the denominators and simplify.
   1. $\dfrac{3\sqrt{2}}{2\sqrt{3}} - \dfrac{\sqrt{3}}{3\sqrt{2}}$
   2. $\dfrac{6}{3-\sqrt{7}}$
   3. $\dfrac{\sqrt{3}-\sqrt{2}}{\sqrt{3}+\sqrt{2}} - \dfrac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}}$
   4. $\dfrac{1}{1+\sqrt{6}+\sqrt{7}} + \dfrac{1}{5+2\sqrt{6}}$
   5. $\dfrac{\sqrt{2}-\sqrt{3}+\sqrt{5}}{\sqrt{2}+\sqrt{3}-\sqrt{5}}$

{{% details title="Answer"  %}}

1.  1. $\dfrac{\sqrt{6}}{3}$
    2. $9 + 3\sqrt{7}$
    3. $1 - 2\sqrt{6}-\sqrt{15}$
    4. $\dfrac{66 - 23\sqrt{6} - \sqrt{42}}{12}$
    5. $\dfrac{\sqrt{6}+\sqrt{15}}{2}$

{{% note Solution %}}

{{% enum a %}}
{{% mn q1a tips %}}
(1) Multiply $\sqrt{a}/\sqrt{a}$ if the denominator is $\sqrt{a}$.
{{% /mn %}}
`\begin{align*}
& \dfrac{3\sqrt{2}}{2\sqrt{3}} - \dfrac{\sqrt{3}}{3\sqrt{2}} \\
&= \dfrac{3\sqrt{2}\cdot \sqrt{3}}{2\sqrt{3}\cdot \sqrt{3}} - \dfrac{\sqrt{3}\cdot \sqrt{2}}{3\sqrt{2}\cdot \sqrt{2}} \tag{1} \\
&= \dfrac{3\sqrt{6}}{6} - \dfrac{\sqrt{6}}{6} \\
&= \dfrac{\bcancel{2}\sqrt{6}}{\bcancel{6}^3} \\
&= \boldsymbol{ \dfrac{\sqrt{6}}{3} .}
\end{align*}`

{{% enum b %}}
{{% mn q1b tips %}}
(2) Multiply $a + \sqrt{b}$ if the denominator is $a - \sqrt{b}$.
{{% /mn %}}
`\begin{align*}
& \dfrac{6}{3-\sqrt{7}} \\
&= \dfrac{6\big(3+\sqrt{7}\big)}{\big(3-\sqrt{7}\big)\big(3+\sqrt{7}\big)} \tag{2} \\
&= \dfrac{6\big(3+\sqrt{7}\big)}{9-7} \\
&= \dfrac{\bcancel{6}^3\big(3+\sqrt{7}\big)}{\bcancel{2}} \\
&= 3\big(3+\sqrt{7}\big) \\
&= \boldsymbol{ 9 + 3\sqrt{7}. }
\end{align*}`

{{% enum c %}}
{{% mn q1c tips %}}
(3) Rationalisation is complete here. Don't forget the negative sign in front of the fraction.
{{% /mn %}}
`\begin{align*}
& \dfrac{\sqrt{3}-\sqrt{2}}{\sqrt{3}+\sqrt{2}} - \dfrac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}} \\
&= \dfrac{\big(\sqrt{3}-\sqrt{2}\big)^2}{\big(\sqrt{3}+\sqrt{2}\big)\big(\sqrt{3}-\sqrt{2}\big)} - \dfrac{\big(\sqrt{5}+\sqrt{3}\big)^2}{\big(\sqrt{5}-\sqrt{3}\big)\big(\sqrt{5}+\sqrt{3}\big)} \\
&= \dfrac{3 - 2\sqrt{6} + 2}{3-2} - \dfrac{5 + 2\sqrt{15} + 3}{5-3} \\
&= 5-2\sqrt{6} - \dfrac{8 + 2\sqrt{15}}{2} \tag{3} \\
&= 5-2\sqrt{6} - \big(4 + \sqrt{15}\big) \\
&= 5 - 2\sqrt{6} - 4 - \sqrt{15} \\
&= \boldsymbol{ 1 - 2\sqrt{6}-\sqrt{15}. }
\end{align*}`

{{% enum d %}} For the first fraction, we divide the denominator into two groups $(1+\sqrt{6})+\sqrt{7}$ and rationalise twice.
{{% mn q1d tips %}}
(4) Here we rationalise $\sqrt{6}$ in the denominator again.
{{% /mn %}}

`\begin{align*}
\dfrac{1}{1+\sqrt{6}+\sqrt{7}} &= \dfrac{\big(1+\sqrt{6}\big)-\sqrt{7}}{\left\{\big(1+\sqrt{6}\big)+\sqrt{7}\right\}\left\{\big(1+\sqrt{6}\big)-\sqrt{7}\right\}} \\
&= \dfrac{1+\sqrt{6}-\sqrt{7}}{\big(1+\sqrt{6}\big)^2 - 7} \\
&= \dfrac{1+\sqrt{6}-\sqrt{7}}{1 + 2\sqrt{6} + 6 - 7} \\
&= \dfrac{1+\sqrt{6}-\sqrt{7}}{ 2\sqrt{6}} \tag{4} \\
&= \dfrac{\big(1+\sqrt{6}-\sqrt{7}\big)\cdot \sqrt{6}}{ 2\big(\sqrt{6}\big)^2} \\
&= \dfrac{\sqrt{6} + 6 - \sqrt{42}}{12}. \tag{$=\tcirc{1}$}
\end{align*}`

And the second fraction is pretty straightforward:

`\begin{align*}
\dfrac{1}{5+2\sqrt{6}} &= \dfrac{5-2\sqrt{6}}{\big(5+2\sqrt{6}\big)\big(5-2\sqrt{6}\big)} \\
&= \dfrac{5-2\sqrt{6}}{5^2 - \big(2\sqrt{6}\big)^2} \\
&= \dfrac{5-2\sqrt{6}}{25-24} \\
&= 5-2\sqrt{6}. \tag{$=\tcirc{2}$}
\end{align*}`

Therefore, we can combine the fractions and get the answer:

`\begin{align*}
& \dfrac{1}{1+\sqrt{6}+\sqrt{7}} + \dfrac{1}{5+2\sqrt{6}} \\[0.5em]
&= \tcirc{1} + \tcirc{2} \\[0.5em]
&= \dfrac{\sqrt{6} + 6 - \sqrt{42}}{12} + 5-2\sqrt{6} \\
&= \dfrac{\sqrt{6} + 6 - \sqrt{42}}{12} + \dfrac{60 - 24\sqrt{6}}{12} \\
&= \boldsymbol{ \dfrac{66 - 23\sqrt{6} - \sqrt{42}}{12}. }
\end{align*}`

{{% enum e %}} We will divide the denominator as $(\sqrt{2}+\sqrt{3})-\sqrt{5}$ and rationalise twice:
{{% mn q1e tips %}}
(5) Rearranging the numerator into $(A+B)(A-B)$ form<br>
(6) Rationalising the denominator again
{{% /mn %}}
`\begin{align*}
& \dfrac{\sqrt{2}-\sqrt{3}+\sqrt{5}}{\sqrt{2}+\sqrt{3}-\sqrt{5}} \\
&= \dfrac{\big\{\sqrt{2}-\sqrt{3}+\sqrt{5}\big\}\big\{\big(\sqrt{2}+\sqrt{3}\big)+\sqrt{5}\big\}}{\big\{\big(\sqrt{2}+\sqrt{3}\big)-\sqrt{5}\big\}\big\{\big(\sqrt{2}+\sqrt{3}\big)+\sqrt{5}\big\}} \\
&= \dfrac{\big\{\big(\sqrt{2}+\sqrt{5}\big)-\sqrt{3} \big\}\big\{\big(\sqrt{2}+\sqrt{5}\big)+\sqrt{3} \big\}}{\big(\sqrt{2}+\sqrt{3}\big)^2 - 5} \tag{5} \\
&= \dfrac{\big(\sqrt{2}+\sqrt{5}\big)^2 - 3}{2 + 2\sqrt{6} + 3 - 5} \\
&= \dfrac{2 + 2\sqrt{10} + 5 - 3}{2\sqrt{6}} \\
&= \dfrac{4 + 2\sqrt{10}}{2\sqrt{6}} \\
&= \dfrac{2 + \sqrt{10}}{\sqrt{6}} \\
&= \dfrac{\big(2 + \sqrt{10}\big)\cdot \sqrt{6}}{\big(\sqrt{6}\big)^2} \tag{6} \\
&= \dfrac{2\sqrt{6} + 2\sqrt{15}}{6} \\
&= \boldsymbol{ \dfrac{\sqrt{6}+\sqrt{15}}{2} . }
\end{align*}`

{{% /details %}}

2. Simplify the following. {{% mn ref2 refs %}}a. From Shizuoka Inst. of Sci. and Tech.<br>b. From Hokkaido Coll. of Pharm.{{% /mn %}}
   1. $\dfrac{1}{\sqrt{3}} - \dfrac{1}{\sqrt{27}}$
   2. $\dfrac{4}{3+\sqrt{5}} + \dfrac{1}{2+\sqrt{5}}$

{{% details title="Answer" %}}

2.  1. $\dfrac{2\sqrt{3}}{9}$
    2. $1$

{{% note Solution %}}

{{% enum a %}}
{{% mn q2a tips %}}
(1) Multiply both fractions by $\sqrt{3}/\sqrt{3}$.
{{% /mn %}}
`\begin{align*}
&\dfrac{1}{\sqrt{3}} - \dfrac{1}{\sqrt{27}} \\
&=
\dfrac{1}{\sqrt{3}} - \dfrac{1}{3\sqrt{3}} \tag{1} \\
&= \dfrac{\sqrt{3}}{3} - \dfrac{\sqrt{3}}{9} \\
&= \dfrac{3\sqrt{3}}{9} - \dfrac{\sqrt{3}}{9} \\
&= \boldsymbol{ \dfrac{2\sqrt{3}}{9} }.
\end{align*}`

{{% enum b %}}
`\begin{align*}
&\dfrac{4}{3+\sqrt{5}} + \dfrac{1}{2+\sqrt{5}} \\
&= \dfrac{4\big(3-\sqrt{5}\big)}{\big(3+\sqrt{5}\big)\big(3-\sqrt{5}\big)} + \dfrac{\sqrt{5}-2}{\big(2+\sqrt{5}\big)\big(\sqrt{5}-2\big)} \\
&= \dfrac{4\big(3-\sqrt{5}\big)}{9-5} + \dfrac{\sqrt{5}-2}{5-4} \\
&= 3-\sqrt{5} + \sqrt{5}-2 \\
&= \boldsymbol{ 1 }.
\end{align*}`

{{% /details %}}

3. Simplify the following expressions. {{% mn ref2 refs %}}a. From Daido Univ.<br>b. From Jichi Medical Univ.<br>c. From Kochi Univ. of Tech.{{% /mn %}}
   1. $\dfrac{8}{3+\sqrt{5}} + \dfrac{9}{\sqrt{7}+2}$
   2. $\dfrac{1}{2}\left( \dfrac{2-\sqrt{3}}{2+\sqrt{3}} + \dfrac{2+\sqrt{3}}{2-\sqrt{3}}\right)$
   3. $\dfrac{\big(\sqrt{11}-\sqrt{2}+3\big)\big(\sqrt{11}+\sqrt{2}-3\big)}{3\sqrt{2}}$

{{% details title="Answer" %}}

3.  1. $3\sqrt{7}-2\sqrt{5}$
    2. $7$
    3. $2$

{{% note Solution %}}

{{% enum a %}}
`\begin{align*}
& \dfrac{8}{3+\sqrt{5}} + \dfrac{9}{\sqrt{7}+2} \\
&= \dfrac{8\big(3-\sqrt{5}\big)}{\big(3+\sqrt{5}\big)\big(3-\sqrt{5}\big)} + \dfrac{9\big(\sqrt{7}-2\big)}{\big(\sqrt{7}+2\big)\big(\sqrt{7}-2\big)} \\
&= \dfrac{8\big(3-\sqrt{5}\big)}{9 - 5} + \dfrac{9\big(\sqrt{7}-2\big)}{7 - 4} \\
&= 2\big(3-\sqrt{5}\big) + 3\big(\sqrt{7}-2\big) \\
&= 6 - 2\sqrt{5} + 3\sqrt{7} - 6 \\
&= \boldsymbol{ 3\sqrt{7}-2\sqrt{5} . }
\end{align*}`

{{% enum b %}}
{{% mn q3b tips %}}
(1) $(A+B)^2 + (A-B)^2$ $=2(A^2 + B^2)$, where $A=2$ and $B=\sqrt{3}$.
{{% /mn %}}
`\begin{align*}
& \dfrac{1}{2}\left( \dfrac{2-\sqrt{3}}{2+\sqrt{3}} + \dfrac{2+\sqrt{3}}{2-\sqrt{3}}\right) \\
&= \dfrac{1}{2}\left\{ \dfrac{\big(2-\sqrt{3}\big)^2 + \big(2+\sqrt{3}\big)^2}{\big(2+\sqrt{3}\big)\big(2-\sqrt{3}\big)}\right\} \\
&= \dfrac{1}{2}\left\{ \dfrac{2(4 + 3)}{4 - 3}\right\} \tag{1} \\
&= \dfrac{1}{2} \times 14 \\
&= \boldsymbol{ 7 }.
\end{align*}`

{{% enum c %}}
{{% mn q3c tips %}}
(2) $(A+B)(A-B)$ $=A^2-B^2$, where $A=\sqrt{11}$ and $B=(3-\sqrt{2})$.
{{% /mn %}}
`\begin{align*}
& \dfrac{\big(\sqrt{11}-\sqrt{2}+3\big)\big(\sqrt{11}+\sqrt{2}-3\big)}{3\sqrt{2}} \\
&= \dfrac{\big\{ \sqrt{11} + \big(3-\sqrt{2}\big) \big\}\big\{ \sqrt{11} - \big(3-\sqrt{2}\big) \big\}}{3\sqrt{2}} \\
&= \dfrac{ 11 - \big(3-\sqrt{2}\big)^2}{3\sqrt{2}} \tag{2} \\
&= \dfrac{ 11 - 9 + 6\sqrt{2} - 2}{3\sqrt{2}} \\
&= \dfrac{ 6\sqrt{2} }{3\sqrt{2}} \\
&= \boldsymbol{ 2 }.
\end{align*}`

{{% /details %}}
