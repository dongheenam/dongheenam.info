---
title: Evaluating Expressions with Square Roots 1
slug: expressions-square-roots-1
description: How to separate the integer and decimal part of an irrational number. How to evaluate expressions with the sum and product of two variables.

date: 2020-08-13 18:36:19.853 +1000
lastMod: 2020-12-18 15:45:57.567 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - real number
  - square root
  - polynomial identity
  - fraction
  - algebra

menu:
  math1-numbers:
    parent: Real Numbers
    name: Expressions with Roots 1
    weight: 16

weight: 16
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.

- Mathematics 1
  - [Expanding Polynomials with Identities](../../polynomials/expanding-identities)
  - [Factorising with Polynomial Identities 1](../../polynomials/factorising-identities-1/)

{{% /details %}}

In this lesson, we will learn

- How to evaluate expressions involving the integer and decimal part of an irrational number.
- How to evaluate expressions involving irrational numbers by using various strategies.

## Integer and Decimal Part of a Number

$3\dfrac{1}{4}$ is a mixed number. It consists of a whole number (integer) $3$, and a fraction $\dfrac{1}{4}$. For a mixed number, the fraction part is always less than $1$. Likewise, we can also define the integer and decimal part for other real numbers.

{{% hbox %}}
{{% note Definition %}}
*For a real number $x$, we can always find an integer $a$ and $0\ge b \lt 1$ where $$ x = a + b. $$ $a$ is called the **integer part** of $x$, and $b$ is the **decimal part** of $x$.*

{{% note Example %}}
For $\sqrt{23}$, say its integer part is $a$ and its decimal part $b$, and $$ \sqrt{23} = a + b. $$ Because $4 \lt \sqrt{23} \lt 5$, the integer part of $\sqrt{23}$ is $a=\boldsymbol{ 4 }$. Since $\sqrt{23}=a+b$, the decimal part of $\sqrt{23}$ is $b=\boldsymbol{\sqrt{23}-4}$.

{{% /hbox %}}

{{% details title="More on finding the integer part" %}}

If the integer part of $x$ is $a$, then $a\le x \lt a+1$.{{% sn int %}}One example is $4\le 4.73 \lt 5$.{{% /sn %}} So to find the integer part of an irrational number, we need to find two integers $a$ and $a+1$ that the number sits in between. For the example above, we know that $23$ is in between two square numbers, $4^2=16$ and $5^2=25$: $$ 4^2 \lt 23 \lt 5^2. $$ Therefore $$ \sqrt{4^2} \lt \sqrt{23} \lt \sqrt{5^2} \iff 4 \lt \sqrt{23} \lt 5, $$ and the integer part of $\sqrt{23}$ is $4$.

<p></p>

{{% /details %}}

{{% details title="More on finding the decimal part" %}}

Because the sum of the integer and decimal parts is the number itself, or $$ \text{(number)} = \text{(integer part)} + \text{(decimal part)}, $$ we can easily find the decimal part of a number by $$ \text{(decimal part)} = \text{(number)} - \text{(integer part)}. $$

Therefore, the decimal part of $\sqrt{23}$ is $\sqrt{23}-4$.

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/num-decimal-part.jpg" caption="integer and decimal part of $\sqrt{23}$" %}}

{{% /details %}}

Below is an example question using the integer and decimal parts of an irrational number. Always remember, if we add the decimal and integer parts together, we get the original number!

{{% hbox %}}
{{% note Example %}}
Suppose the integer part of $\dfrac{2}{\sqrt{6}-2}$ to be $a$ and the decimal part $b$.

1. Find the values of $a$ and $b$.
2. Calculate $a^2+ab$.
3. Calculate $a^2+4ab+4b^2$.

{{% note Solution %}}

{{% enum 1 %}}
Let's rationalise the denominator first:

`\begin{align*}
\dfrac{2}{\sqrt{6}-2} = \dfrac{2(\sqrt{6}+2)}{6-4} = \sqrt{6}+2.
\end{align*}`

Because $2\lt \sqrt{6} \lt 3$, we know that $4\lt \sqrt{6}+2 \lt 5$, which means that the integer part of $\sqrt{6}+2$ is $a=\boldsymbol{4}$. Then $$ b = (\sqrt{6}+2) - a = \boldsymbol{\sqrt{6}-2}. $$

{{% enum 2 %}} Using $a+b = \sqrt{6}+2$,

`\begin{align*}
a^2 + ab &= a(a+b) \\
&= 4(\sqrt{6}+2) \\
&= \boldsymbol{ 4\sqrt{6} + 8. }
\end{align*}`

{{% enum 3 %}} If we complete the square,

`\begin{align*}
a^2+4ab+4b^2 &= (a+2b)^2 \\
&= (\underline{a+b}+b)^2 \\
&= (\underline{\sqrt{6}+2}+\sqrt{6}-2)^2 \\
&= (2\sqrt{6})^2 = \boldsymbol{24. }
\end{align*}`

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 before moving on.

## Sum and Product of Two Numbers

Say you have to calculate $(\sqrt{2}+1)^2 + (\sqrt{2}-1)^2$. You can of course expand the brackets:

`\begin{align*}
& (\sqrt{2}+1)^2 + (\sqrt{2}-1)^2 \\
&= 2 + 2\sqrt{2} + 1 + 2 - 2\sqrt{2} + 1 \\
&= \boldsymbol{ 6. }
\end{align*}`

However, you can also use the identity $x^2+y^2 = (x+y)^2 - 2xy$, because the sum and product of $\sqrt{2}+1$ and $\sqrt{2}-1$ are relatively simple to calculate:

`\begin{align*}
(\sqrt{2}+1) + (\sqrt{2}-1) &= 2\sqrt{2}, \\
(\sqrt{2}+1) \times (\sqrt{2}-1) &= 2 - 1 = 1,
\end{align*}`

so

`\begin{align*}
&(\sqrt{2}+1)^2 + (\sqrt{2}-1)^2 \\
&= (2\sqrt{2})^2 - 2\cdot 1 \\
&= 8 - 2 = \boldsymbol{ 6. }
\end{align*}`

Likewise, from $(x+y)^3 = \hl{x^3} + 3x^2y + 3xy^2 \hl{+y^3}$,

`\begin{align*}
x^3 + y^3 &= (x+y)^3 - 3x^2y - 3xy^2 \\
&= (x+y)^3 - 3xy(x+y),
\end{align*}`

so we can also find

`\begin{align*}
&(\sqrt{2}+1)^3 + (\sqrt{2}-1)^3 \\
&= (2\sqrt{2})^3 - 3\cdot 1 \cdot 2\sqrt{2} \\
&= 8\sqrt{8} - 6\sqrt{2} \\
&= 16\sqrt{2} - 6\sqrt{2} = \boldsymbol{ 10\sqrt{2}. }
\end{align*}`

We will have a look at a few more examples of this kind.

{{% hbox %}}
{{% note Example %}}
When $x=\dfrac{\sqrt{3}-\sqrt{2}}{\sqrt{3}+\sqrt{2}}$ and $y=\dfrac{\sqrt{3}+\sqrt{2}}{\sqrt{3}-\sqrt{2}}$, find the values of

1. $x+y$
2. $xy$
3. $x^2+y^2$
4. $x^3+y^3$
5. $x^4+y^4$

{{% note Solution %}}

{{% enum 1 %}}
`\begin{align*}
x+y &= \dfrac{\sqrt{3}-\sqrt{2}}{\sqrt{3}+\sqrt{2}} + \dfrac{\sqrt{3}+\sqrt{2}}{\sqrt{3}-\sqrt{2}} \\
&= \frac{(\sqrt{3}-\sqrt{2})^2 + (\sqrt{3}+\sqrt{2})^2}{(\sqrt{3}+\sqrt{2})(\sqrt{3}-\sqrt{2})} \\
&= \frac{3 - 2\sqrt{6} + 2 + 3 + 2\sqrt{6} + 2}{3 - 2} \\
&= \boldsymbol{ 10. }
\end{align*}`

{{% enum 2 %}}
`\begin{align*}
xy &= \dfrac{\sqrt{3}-\sqrt{2}}{\sqrt{3}+\sqrt{2}} \times \dfrac{\sqrt{3}+\sqrt{2}}{\sqrt{3}-\sqrt{2}} = \boldsymbol{ 1. }
\end{align*}`

For Parts 3 to 5, we use $x+y=10$ and $xy=1$.

{{% enum 3 %}}
`\begin{align*}
x^2+y^2 &= (x+y)^2 - 2xy \\
&= 10^2 - 2\cdot 1 \\
&= \boldsymbol{ 98. }
\end{align*}`

{{% enum 4 %}}
`\begin{align*}
 x^3+y^3 &= (x+y)^3 - 3xy(x+y) \\
&= 10^3 - 3\cdot 1 \cdot 10 \\
&= 1000 - 30 = \boldsymbol{ 970. }
\end{align*}`

{{% enum 5 %}} Because $\left(x^2+y^2\right)^2 = \hl{x^4} + 2x^2y^2 \hl{+y^4}$,

`\begin{align*}
x^4 + y^4 &= \left(x^2 + y^2 \right)^2 - 2x^2y^2 \\
&= 98^2 - 2 \cdot 1^2 \\
&= \boldsymbol{ 9602. }
\end{align*}`

{{% /hbox %}}

We can also repeat the process to calculate $x^2+\dfrac{1}{x^2}$, $x^3+\dfrac{1}{x^3}$, and so on. For example,

`\begin{align*}
\left(x + \frac{1}{x} \right)^2 &= x^2 + 2\cdot x \cdot \frac{1}{x} + \frac{1}{x^2} \\
&= \underline{ x^2 + \frac{1}{x^2} } + 2, \\
\left(x + \frac{1}{x} \right)^3 &= x^3 + 3\cdot x^2 \cdot \frac{1}{x} + 3\cdot x \cdot \frac{1}{x^2} + \frac{1}{x^3} \\
&= \underline{ x^3 + \frac{1}{x^3} } + 3\left( x + \frac{1}{x} \right).
\end{align*}`

Therefore, the following holds.

{{% hbox %}}
{{% note Theorem %}}
`\begin{align*}
x^2 + \frac{1}{x^2} &= \left(x + \frac{1}{x} \right)^2 - 2, \\
x^3 + \frac{1}{x^3} &= \left(x + \frac{1}{x} \right)^3 - 3\left( x + \frac{1}{x} \right).
\end{align*}`
{{% /hbox %}}

We can extend this method any further, which means we can evaluate $x^n + \dfrac{1}{x^n}$ for ***any*** $n$ once we know the value of $x+\dfrac{1}{x}$!

{{% hbox %}}
{{% note Example %}}
When $x = \dfrac{\sqrt{5}-1}{2}$, evaluate

1. $x+\dfrac{1}{x}$
2. $x^2+\dfrac{1}{x^2}$
3. $x^3+\dfrac{1}{x^3}$
4. $x^4+\dfrac{1}{x^4}$

{{% note Solution %}}

{{% enum 1 %}}
`\begin{align*}
x + \frac{1}{x} &= \frac{\sqrt{5}-1}{2} + \frac{2}{\sqrt{5}-1} \\
&= \frac{\sqrt{5}-1}{2} + \frac{2(\sqrt{5}+1)}{5-1} \\
&= \frac{\sqrt{5}-1}{2} + \frac{\sqrt{5}+1}{2} \\
&= \boldsymbol{ \sqrt{5}. }
\end{align*}`

{{% enum 2 %}}
`\begin{align*}
x^2 + \frac{1}{x^2} &= \left(x + \frac{1}{x} \right)^2 - 2 \\
&= (\sqrt{5})^2 - 2 \\
&= \boldsymbol{ 3. }
\end{align*}`

{{% enum 3 %}}
`\begin{align*}
x^3 + \frac{1}{x^3} &= \left(x + \frac{1}{x} \right)^3 - 3\left( x + \frac{1}{x} \right) \\
&= (\sqrt{5})^3 - 3\sqrt{5} \\
&= 5\sqrt{5} - 3\sqrt{5} \\
&= \boldsymbol{ 3\sqrt{5}. }
\end{align*}`

{{% enum 4 %}}
`\begin{align*}
x^4 + \frac{1}{x^4} &= \left(x^2\right)^2 + \frac{1}{\left(x^2\right)^2} \\
&= \left( x^2 + \frac{1}{x^2} \right)^2 - 2 \\
&= 3^2 - 2 \\
&= \boldsymbol{ 7. }
\end{align*}`

{{% /hbox %}}

## Practice Questions

1. When the integer part of $\dfrac{1}{2-\sqrt{3}}$ is $a$ and its decimal part is $b$,
   1. Find the values of $a$ and $b$.
   2. Calculate $\dfrac{a+b^2}{3b}$.
   3. Calculate $a^2-b^2-2a-2b$.

{{% details title="Answer" %}}

1.  1. $a=3, \quad b=\sqrt{3}-1$
    2. $\dfrac{5\sqrt{3} + 1}{6}$
    3. $1$

{{% note Solution %}}

{{% enum a %}} First of all, $\dfrac{1}{2-\sqrt{3}} = \dfrac{2+\sqrt{3}}{4-3} = 2+\sqrt{3}$.

Because $1\lt \sqrt{3} \lt 2$, $3\lt 2+\sqrt{3} \lt 4$, and the integer part is $3$. Then from $a+b=2+\sqrt{3}$,
`\begin{align*}
b = 2 + \sqrt{3} - 3 = \sqrt{3}-1.
\end{align*}`
Therefore $a=3$ and $b=\sqrt{3}-1$.

{{% enum b %}}
{{% mn q1a tips %}} 
`$$\begin{split} (1) \quad & \dfrac{3}{3\big(\sqrt{3}-1\big)} \\\\ &= \dfrac{1}{\big(\sqrt{3}-1\big)} \\\\ &=\dfrac{\sqrt{3}+1}{(3-1)} \\\\ &=\dfrac{\sqrt{3}+1}{2} \end{split} $$`
{{% /mn %}}
`\begin{align*}
&\frac{a+b^2}{3b} \\
&= \frac{a}{3b} + \frac{b}{3} \\
&= \frac{3}{3\big(\sqrt{3}-1\big)} + \frac{\sqrt{3}-1}{3} \\
&= \frac{\sqrt{3}+1}{2} + \frac{\sqrt{3}-1}{3} \tag{1} \\
&= \frac{3\big(\sqrt{3}+1\big) + 2\big(\sqrt{3}-1\big)}{6} \\
&= \boldsymbol{ \frac{5\sqrt{3} + 1}{6}. }
\end{align*}`

{{% enum c %}}
`\begin{align*}
&a^2-b^2-2a-2b \\
&= (a+b)(a-b)-2(a+b) \\
&= (a+b)(a-b-2) \\
&= \big(2+\sqrt{3}\big)\big\{3-\big(\sqrt{3}-1\big)-2\big\} \\
&= \big(2+\sqrt{3}\big)\big(2-\sqrt{3}\big) \\
&= 4-3 = \boldsymbol{1.}
\end{align*}`

{{% /details %}}

2. When the decimal part of $4+\sqrt{15}$ is $x$, find the value of $x^2+6x+10$.{{% mn ref2 refs %}}From Kurashiki Univ. of Sci. and the Arts.{{% /mn %}}

{{% details title="Answer" %}} 

2. $16$

{{% note Solution %}}
Because $\sqrt{9}<\sqrt{15}<\sqrt{16}$,

`\begin{align*}
& \sqrt{9}<\sqrt{15}<\sqrt{16} \\
\iff & 3 < \sqrt{15} < 4 \\
\iff & 7 < 4+\sqrt{15} < 8.
\end{align*}`

Hence the integer part of $4+\sqrt{15}$ is $7$, and $$ x = 4+\sqrt{15} - 7 = \sqrt{15} - 3. $$

Note $x + 3 = \sqrt{15}$. Then,
{{% mn q2 tips %}}
(1) Complete the square, so that we can use $x + 3 = \sqrt{15}$.
{{% /mn %}}
`\begin{align*}
&x^2+6x+10 \\
&= x^2 + 6x + 9 + 1 \\
&= (x+3)^2 + 1 \tag{1} \\
&= \sqrt{15}^2 + 1 \\
&= \boldsymbol{ 16 }.
\end{align*}`

{{% /details %}}

3. Let the integer part of $\dfrac{\sqrt{3}+1}{\sqrt{3}-1}$ be $a$ and its decimal part $b$. Find: {{% mn ref3 refs %}}From Nippon Dental Univ.{{% /mn %}}
   1. $a$ and $b$
   2. $a^2 + 6ab + 9b^2$

{{% details title="Answer" %}}

3.  1. $a=3,$ $b=\sqrt{3}-1$
    2. $27$

{{% note Solution %}} The number of interest can be simplified to

`\begin{align*}
& \dfrac{\sqrt{3}+1}{\sqrt{3}-1} \\
&= \dfrac{\big(\sqrt{3}+1 \big)^2}{\big(\sqrt{3}-1\big)\big(\sqrt{3}+1 \big)} \\
&= \dfrac{3 + 1 + 2\sqrt{3}}{3-1} \\
&= 2 + \sqrt{3}.
\end{align*}`

{{% enum a %}} Because $1\le \sqrt{3} < 2$, $a = \boldsymbol{ 3 }$, and $b= 2 + \sqrt{3} - a = \boldsymbol{ \sqrt{3} - 1 }.$ 

{{% enum b %}}
{{% mn q3 tips %}}
(1) $a^2+6ab+9b^2$ $=a^2 + 2\cdot a\cdot 3b + (3b)^2$ $=(a+3b)^2$.
{{% /mn %}}
`\begin{align*}
& a^2 + 6ab + 9b^2 \\
&= (a+3b)^2 \tag{1} \\
&= \big\\{ 3 + 3\big(\sqrt{3} - 1\big) \big\\}^2 \\
&= \big( 3 + 3\sqrt{3} - 3 \big)^2 \\
&= \big(3\sqrt{3}\big)^2 \\
&= \boldsymbol{ 27 }.
\end{align*}`

{{% /details %}}

4. When $x=3+2\sqrt{2}$ and $y=3-2\sqrt{2}$, evaluate {{% mn ref4 refs %}}From Kyoto Sangyo Univ.{{% /mn %}}
   1. $x^2+y^2$
   2. $\dfrac{y^2}{x} + \dfrac{x^2}{y}$

{{% details title="Answer" %}}

4.  1. $34$
    2. $198$

{{% note Solution %}} We will first find the values of $x+y$ and $xy$:

`\begin{align*}
x + y &= \big(3 + 2\sqrt{2} \big) + \big(3 - 2\sqrt{2} \big) = \boldsymbol{ 6 }, \\
xy &= \big(3 + 2\sqrt{2} \big) \big(3 - 2\sqrt{2} \big) = 9 - 8 = \boldsymbol{ 1 }.
\end{align*}`

Then,

{{% enum a %}}
`\begin{align*}
x^2+y^2 &= (x+y)^2 - 2xy \\
&= 6^2 - 2\cdot 1 \\
&= 36 -2 \\
\boldsymbol{ 34 }.
\end{align*}`
{{% enum  %}}
`\begin{align*}
\dfrac{y^2}{x} + \dfrac{x^2}{y} &= \dfrac{y^3 + x^3}{xy} \\
&= \dfrac{(x+y)^3 - 3xy(x+y)}{xy} \\
&= \dfrac{6^3 - 3\cdot 1 \cdot 6}{1} \\
&= 216 - 18 \\
&= \boldsymbol{ 198 }.
\end{align*}`

{{% /details %}}

5. When $x=\dfrac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}}$ and $y=\dfrac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}}$, calculate {{% mn ref5 refs %}}From Juntendo Univ.{{% /mn %}}
    1. $x^2+y^2$
    2. $x^3+y^3$
    3. $x^3-y^3$

{{% details title="Answer" %}}

5. 
    1. $62$
    2. $488$
    3. $126\sqrt{15}$

{{% note Solution %}}
Let's first calculate $x+y$ and $xy$:

`\begin{align*}
x+y &= \frac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}} + \frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}} \\
&= \frac{\big(\sqrt{5}+\sqrt{3}\big)^2 + \big(\sqrt{5}-\sqrt{3}\big)^2}{\big(\sqrt{5}-\sqrt{3}\big)\big(\sqrt{5}+\sqrt{3}\big)} \\
&= \frac{5 + 2\sqrt{15} + 3 + 5 - 2\sqrt{15} + 3}{5-3} \\
&= \frac{16}{2} = \boldsymbol{ 8, } \\ \\
xy &= \frac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}} \times \frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}} = \boldsymbol{ 1. }
\end{align*}`

Then, we can start evaluating the expressions with $x+y=8$ and $xy=1$.

{{% enum a %}}
`\begin{align*}
x^2 + y^2 &= (x+y)^2 - 2xy \\
&= 8^2 - 2\cdot 1 = \boldsymbol{ 62. }
\end{align*}`
{{% enum b %}}
`\begin{align*}
x^3+y^3 &= (x+y)^3 - 3xy(x+y) \\
&= 8^3 - 3\cdot 1 \cdot 8 \\
&= 512 - 24 = \boldsymbol{ 488. }
\end{align*}`

{{% enum c %}} Now, because $(x-y)^3 = \hl{x^3} - 3x^2y + 3xy^2 \hl{y^3}$,

`\begin{align*}
x^3 - y^3 &= (x-y)^3 + 3x^2y - 3xy^2 \\
&= (x-y)^3 + 3xy(x-y). \tag{$=\tcirc{1}$}
\end{align*}`

We need to calculate the value of $x-y$:
`\begin{align*}
x-y &= \frac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}} - \frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}} \\
&= \frac{\big(\sqrt{5}+\sqrt{3}\big)^2 - \big(\sqrt{5}-\sqrt{3}\big)^2}{\big(\sqrt{5}-\sqrt{3}\big)\big(\sqrt{5}+\sqrt{3}\big)} \\
&= \frac{5 + 2\sqrt{15} + 3 - \big(5 - 2\sqrt{15} + 3\big)}{5-3} \\
&= \frac{4\sqrt{15}}{2} \\
&= 2\sqrt{15}.
\end{align*}`

Therefore
`\begin{align*}
\tcirc{1} &= (2\sqrt{15})^3 + 3\cdot 1 \cdot 2\sqrt{15} \\
&= 8 \cdot 15\sqrt{15} + 6\sqrt{15} \\
&= 120\sqrt{15} + 6\sqrt{15} \\
&= \boldsymbol{ 126\sqrt{15}. }
\end{align*}`

{{% /details %}}

6. When $2x+\dfrac{1}{2x} = \sqrt{7}$, evaluate the following.
    1. $4x^2 + \dfrac{1}{4x^2}$
    2. $8x^3 + \dfrac{1}{8x^3}$
    3. $64x^6 + \dfrac{1}{64x^6}$

{{% details title="Answer" %}}

6. 
    1. $5$ 
    2. $4\sqrt{7}$ 
    3. $110$

{{% note Solution %}}

{{% enum a %}}
`\begin{align*}
4x^2 + \dfrac{1}{4x^2} &= (2x)^2 + \dfrac{1}{(2x)^2} \\
&= \left( 2x + \frac{1}{2x} \right)^2 - 2 \\
&= (\sqrt{7})^2 - 2 \\
&= \boldsymbol{ 5. }
\end{align*}`

{{% enum b %}}
`\begin{align*}
8x^3 + \dfrac{1}{8x^3} &= (2x)^3 + \frac{1}{(2x)^3} \\
&= \left( 2x + \frac{1}{2x} \right)^3 - 3\left( 2x + \frac{1}{2x} \right) \\
&= \big(\sqrt{7}\big)^3 - 3\sqrt{7} \\
&= 7\sqrt{7} - 3\sqrt{7} \\
&= \boldsymbol{ 4\sqrt{7}. }
\end{align*}`

{{% enum c %}}
`\begin{align*}
64x^6 + \dfrac{1}{64x^6} &= \left(8x^3 \right)^2 + \frac{1}{\left(8x^3 \right)^2} \\
&= \left( 8x^3 + \frac{1}{8x^3} \right)^2 - 2 \\
&= \big(4\sqrt{7}\big)^2 - 2 \\
&= 16\cdot 7 - 2 = \boldsymbol{ 110. }
\end{align*}`

{{% /details %}}
