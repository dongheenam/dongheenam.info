---
title: "Quadratic Functions in General Form"
slug: general-form
description: "Drawing the graph of a quadratic function expressed in its general form."

date: 2021-04-15 13:41:41.265 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - quadratic function
  
menu:
  math1-func:
    name: Graphing General Forms
    parent: Quadratic Graphs
    weight: 12

weight: 22
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Factorising with Polynomial Identities](../../../numbers-and-expressions/polynomials/factorising-identities-1/)

{{% /details %}}

Life would be much easier if every quadratic function comes in its vertex form, but they do not. Another popular choice of representing a quadratic function is in its general form, $f(x) = ax^2 + bx +c $. In this lesson, we will:
- convert a quadratic function from the general form to the vertex form.
- draw the graph of a quadratic function in the general form.
- find the important features of a parabola with relation $y = ax^2 + bx + c$, such as the vertex and the axis of symmetry.

## Completing the Square

Can you see that the vertex form $$ y = a \hl{(x-p)^2} + q $$ has a perfect square term $\hl{(x-p)^2}$ and leftover $q$? This means to convert a quadratic function to its vertex form, we need to make a perfect square term, or in other words, we need to ***complete the square***!

{{% hbox %}}

{{% note Example %}} Express the following in their vertex forms.
1. $y = x^2 + 6x$
2. $y = x^2 - x + 2$
3. $y = 2x^2 - 4x + 3$

{{% note Solution %}} 

{{% enum 1 %}}
Because $x^2 + 6x + 9 = (x+3)^2$, we need 9 to complete the square. We can 'borrow' 9 like follows:

`\begin{align*}
  y &= x^2 + 6x \\
  &= \underline{ x^2 + 6x \hl{+ 9}} \hl{- 9} \\
  &= \boldsymbol{ \underline{(x+3)^2} - 9 }.
\end{align*}`

{{% enum 2 %}}
We need $$x^2 - x + \dfrac{1}{4} = x^2 - 2\cdot \dfrac{1}{2} x + \dfrac{1}{4} = \left(x - \dfrac{1}{2} \right)^2. $$

Hence
`\begin{align*}
  y &= x^2 - x + 2 \\
  &= \underline{ x^2 - x \hl{+ \dfrac{1}{4}}} \hl{- \dfrac{1}{4}} + 2 \\
  &= \boldsymbol{ \underline{ \left(x - \dfrac{1}{2} \right)^2 } + \dfrac{7}{4} }.
\end{align*}`

{{% enum 3 %}}
Because it is difficult to find a perfect square with the coefficient not equal to 1, so let's first factorise the first two terms:

`\begin{align*}
  y &= 2x^2 - 4x + 3 = \hl{ 2(x^2 - 2x) } + 3.
\end{align*}`

Then we can complete the square for $x^2 - 2x$.
`\begin{align*}
  y &= 2\left( x^2 - 2x + 1 - 1 \right) + 3 \\
  &= 2\left\{ (x-1)^2 - 1 \right\} + 3.
\end{align*}`

We change this to the vertex from by expanding the outer bracket.
`\begin{align*}
  y &= 2(x-1)^2 - 2 + 3 \\
  &= \boldsymbol{ 2(x-1)^2 + 1 }.
\end{align*}`

{{% /hbox %}}

{{% details title="Shortcuts" %}}

Note $x^2 + 2ax + a^2 = (x+a)^2$. When the coefficient of $x$ equal to $2a$, the last constant term we need is $a^2$. If we divide the coefficient of $x$ by 2 and square it, we can easily find the missing term!

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/gen-completing.jpg" alt="Shortcut for completing the square" >}}

{{% /details %}}

Try [Practice Question](#practice-questions) 1.

## Graphing Quadratics in General Form

Let's use this method to draw some quadratic graphs.

{{% hbox %}}

{{% note Example %}} Draw the graphs of the following quadratic functions and find their vertices and axes of symmetry.
1. $y = 2x^2 + 3x + 1$
2. $y = -x^2 + 4x - 3$

{{% note Solution %}}

{{% enum 1 %}}
Completing the square gives

`\begin{align*}
  y &= 2x^2 + 3x + 1 \\
  &= 2\left( x^2 + \dfrac{3}{2}x \right) + 1 \\
  &= 2\left\{ \underline{ x^2 + 2\cdot \dfrac{3}{4}x + \left( \dfrac{3}{4} \right)^2} - \left( \dfrac{3}{4} \right)^2 \right\} + 1 \\
  &= 2\left\{ \underline{ \left( x + \dfrac{3}{4} \right)^2 } - \dfrac{9}{16} \right\} + 1 \\
  &= 2\left( x + \dfrac{3}{4} \right)^2 - \dfrac{9}{8} + 1 \\
  &= 2\left( x + \dfrac{3}{4} \right)^2 - \dfrac{1}{8}.
\end{align*}`

Hence the vertex is $\left( -\dfrac{3}{4},-\dfrac{1}{8} \right)$ and the axis of symmetry is $x=-\dfrac{3}{4}$.

Also, when $x=0$, $y=2\cdot 0^2 + 3\cdot 0 + 1 = 1$, so the y-intercept is $1$.

Overall, the graph of $y = 2x^2 + 3x + 1$ is:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/gen-ex1.png" alt="Graph of y = 2x^2 + 3x + 1." >}}

{{% enum 2 %}}
Completing the square gives

`\begin{align*}
  y &= -x^2 + 4x - 3 \\
  &= - \left( x^2 - 4x \right) - 3 \\
  &= - \left( x^2 - 4x + 4 - 4 \right) - 3 \\
  &= - (x-2)^2 + 4 - 3 \\
  &= -(x-2)^2 + 1.
\end{align*}`

Hence the vertex is $(2,1)$ and the axis of symmetry is $x=2$. 

Also, the y-intercept is $-3$.

Overall, the graph of $y = -x^2 + 4x - 3$ is:

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/gen-ex2.png" alt="Graph of y = -x^2 + 4x - 3." >}}

{{% /hbox %}}

Try [Practice Question](#practice-questions) 2.


## General Cases

Let's apply the same method to $y = ax^2 + bx + c$ and see what happens:
`\begin{align*}
  y &= ax^2 + bx + c \\
  &= a \left( x^2 + \dfrac{b}{a}x \right) + c \\
  &= a \left\{ \underline{ x^2 + 2\cdot \dfrac{b}{2a}x + \left( \dfrac{b}{2a}\right)^2} - \left( \dfrac{b}{2a}\right)^2\right\} + c \\
  &= a \left\{ \underline{ \left( x + \dfrac{b}{2a}\right )^2} - \left( \dfrac{b}{2a}\right)^2 \right\} + c \\
  &= a \left( x + \dfrac{b}{2a}\right )^2 - a\left( \dfrac{b}{2a}\right)^2 + c \\
  &= a \left( x + \dfrac{b}{2a}\right )^2 - \dfrac{b^2}{4a} + c \\
  &= \boldsymbol{ a \left( x + \dfrac{b}{2a}\right )^2 - \dfrac{b^2 - 4ac}{4a}}.
\end{align*}`
Comparing this with $y = a(x-p)^2 + q$, we find that $p = -\dfrac{b}{2a}$ and $q = -\dfrac{b^2-4ac}{4a}$. Thus, the graph of $y=ax^2 + bx + c$ has the following properties.

{{% hbox %}}
{{% note Note %}}
$ y = ax^2 + bx + c$ with $a\ne 0$:

- has the vertex of $\left(-\dfrac{b}{2a}, -\dfrac{b^2-4ac}{4a}\right)$.
- has the axis of symmetry of $x = -\dfrac{b}{2a}$.
- has the y-intercept of $c$.
- is concave up if $a>0$, concave down if $a<0$.

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}} If the graph of $y=ax^2 + bx + c$ is as below, find the signs of:
1. $a$, $b$ and $c$
2. $b^2 - 4ac$
3. $a+b+c$
4. $a-b+c$

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/gen-ex3.png" alt="Graph of y = ax^2 + bx + c." >}}

{{% note Solution %}} 

{{% enum 1 %}}
Because the graph is concave down, $\boldsymbol{ a<0 }$.

The x-coordinate of the vertex is $-\dfrac{b}{2a}$, which is positive.Because $a$ is negative, $\boldsymbol{ b>0 }$.

The y-intercept is $c$, which is below the x-axis. Hence $\boldsymbol{ c<0 }$.

{{% enum 2 %}}
The y-coordinate of the vertex is $-\dfrac{b^2-4ac}{4a}$. 

Because the vertex is above the x-axis, $-\dfrac{b^2-4ac}{4a}>0 $.

$a$ is negative hence $ \boldsymbol{ b^2-4ac >0 }$.

{{% enum 3 %}}
When $x=1$, $y = a\cdot 1^2 +b\cdot 1+c = a+b+c$.

The graph is above the x-axis when $x=1$, so $\boldsymbol{ a+b+c>0 }.$

{{% enum 4 %}}
When $x=-1$, $y= a(-1)^2 + b(-1) + c = a-b+c$.

The graph is below the x-axis when $x=-1$, so $\boldsymbol{ a-b+c<0 }.$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/gen-ex3a.png" alt="Graph of y = ax^2 + bx + c." >}}

{{% /hbox %}}


## Practice Questions

1. Complete the square.
    1. $x^2 + 8x$
    2. $x^2 - x + 1$
    3. $3x^2 - 12x$
    4. $-\dfrac{2}{3}x^2 - 4x + 4$

{{% details title="Answer" %}}

1. 
    1. $(x+4)^2 - 16$
    2. $\left( x - \dfrac{1}{2} \right)^2 + \dfrac{3}{4}$
    3. $3(x-2)^2 - 12$
    4. $-\dfrac{2}{3} (x+3)^2 + 10$

{{% note Solution %}} 

{{% enum a %}}
`\begin{align*}
  &x^2 + 8x \\
  &= x^2 + 8x \hl{ + 16 - 16} \\
  &= \boldsymbol{ (x+4)^2 - 16 }.
\end{align*}`
{{% enum b %}}
`\begin{align*}
   &x^2 - x + 1 \\
   &= x^2 - 2 \cdot \dfrac{1}{2} \hl{ + \dfrac{1}{4} - \dfrac{1}{4} } + 1 \\
  &= \left( x - \dfrac{1}{2} \right)^2 - \dfrac{1}{4} + 1 \\
  &= \boldsymbol{ \left( x - \dfrac{1}{2} \right)^2 + \dfrac{3}{4} }.
\end{align*}`
{{% enum c %}}
`\begin{align*}
  &3x^2 - 12x \\
  &= 3(x^2 - 4x) \\
  &= 3(x^2 - 4x \hl{+4-4}) \\
  &= 3(x-2)^2 - 3\cdot 4 \\
  &= \boldsymbol{ 3(x-2)^2 - 12 }.
\end{align*}`
{{% enum d %}}
{{% mn q1d tips %}}
(1) The coefficient of $x$ becomes $-4 \div \left( -\dfrac{2}{3} \right)$ $=4 \cdot \dfrac{3}{2}$ $=6$. 
{{% /mn %}}
`\begin{align*}
  &-\dfrac{2}{3}x^2 - 4x + 4 \\
  &= -\dfrac{2}{3}\left( x^2 \hl{ + 6x} \right) + 4 \tag{1} \\
  &= -\dfrac{2}{3} \left( x^2 + 6x \hl{+9-9} \right) + 4 \\
  &= -\dfrac{2}{3} (x+3)^2 -\dfrac{2}{3}\cdot(-9) + 4 \\
  &= \boldsymbol{ -\dfrac{2}{3} (x+3)^2 + 10 }.
\end{align*}`

{{% /details %}}

2. Draw the following graphs and identify the vertices.
    1. $y = -2x^2 + 5x - 2$
    2. $y = \dfrac{1}{2}x^2 - 3x - \dfrac{7}{2}$

{{% details title="Answer" %}}

{{% note Solution %}}

{{% enum a %}}
Completing the square gives
`\begin{align*}
  y &= -2x^2 + 5x - 2 \\
  &= -2\left( x^2 - \dfrac{5}{2} x \right) - 2 \\
  &= -2\left\{ x^2 - 2\cdot\dfrac{5}{4} x + \left( \dfrac{5}{4} \right)^2 - \left( \dfrac{5}{4} \right)^2 \right\} - 2 \\
  &= -2\left( x - \dfrac{5}{4} \right)^2 +2 \cdot \left( \dfrac{5}{4} \right)^2 - 2 \\
  &= -2\left( x - \dfrac{5}{4} \right)^2 + \dfrac{25}{8} - 2 \\
  &= -2\left( x - \dfrac{5}{4} \right)^2 + \dfrac{9}{8}.
\end{align*}`

Hence the vertex is $\left( \dfrac{5}{4}, \dfrac{9}{8}\right)$, and the graph is:

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/gen-q2a.png" alt="Graph of y = -2x^2 + 5x - 2." >}}

{{% enum b %}}
Completing the square gives
`\begin{align*}
  y &= \dfrac{1}{2}x^2 - 3x - \dfrac{7}{2} \\
  &= \dfrac{1}{2} (x^2 - 6x ) - \dfrac{7}{2} \\
  &= \dfrac{1}{2} (x^2 - 6x + 9 - 9) - \dfrac{7}{2} \\
  &= \dfrac{1}{2} (x-3)^2 - \dfrac{9}{2} - \dfrac{7}{2} \\
  &= \dfrac{1}{2} (x-3)^2 - 8.
\end{align*}`

Hence the vertex is $(3,8)$ and the graph is

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/gen-q2b.png" alt="Graph of y = 1/2 x^2 - 3x - 7/2." >}}

{{% /details %}}

3. Below is the graph of $y = ax^2 + bx + c$. Find the signs of:
    1. $c$
    2. $b$
    3. $b^2-4ac$
    4. $a+b+c$
    5. $a-b+c$
    6. $2a-b$

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/gen-q3.png" alt="Graph of y = ax^2 + bx + c." >}}

{{% details title="Answer" %}}

3. 
    1. positive
    2. positive
    3. positive
    4. positive
    5. negative
    6. negative

{{% note Solution %}} 

{{% enum a %}}
{{% mn q3a tips %}}
The y-intercept of $y=ax^2+bx+c$ is $(0,c)$.
{{% /mn %}}
The y-intercept is above the x-axis, so $\boldsymbol{ c>0 }.$

{{% enum b %}}
The graph is concave up so $a>0$. Then, the x-coordinate of the vertex is negative, thus 
{{% mn q3b tips %}}
$\dfrac{b}{2a}>0$ means the signs of $a$ and $b$ are the same.
{{% /mn %}}
`\begin{align*}
  -\dfrac{b}{2a} <0 &\iff \dfrac{b}{2a} > 0 \\
  & \iff \boldsymbol{ b>0 }. \tag{1}
\end{align*}`

{{% enum c %}}
Since the y-coordinate of the vertex is negative,

`\begin{align*}
  -\dfrac{b^2-4ac}{4a} < 0 &\iff \dfrac{b^2-4ac}{4a} > 0.
\end{align*}`
Because $a>0$, $\boldsymbol{ b^2-4ac>0 }.$

{{% enum d %}}
When $x=1$,

$$y = a\cdot 1^2 + b\cdot 1 + c = a+b+c.$$

Since the graph is above the x-axis when $x=1$, $\boldsymbol{ a+b+c>0 }.$

{{% enum e %}}
When $x=-1$,

$$y = a(-1)^2 +b(-1) + c = a-b+c.$$

Since the graph is below the x-axis when $x=-1$, $\boldsymbol{ a-b+c<0 }.$

{{% enum f %}}
The axis of symmetry is left of $x=-1$, so
{{% mn q3f tips %}}
Because $a>0$, multiplying both sides by $2a$ does not change the inequality sign.
{{% /mn %}}
`\begin{align*}
  -\dfrac{b}{2a} < -1 & \iff \dfrac{b}{2a} > 1 \\
  &\iff b > 2a \tag{2}\\
  &\iff \boldsymbol{ 0 > 2a - b} .
\end{align*}`

{{% /details %}}