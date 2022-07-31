---
title: "Minima and Maxima of Functions with Two Variables"
slug: bivariate-function
description: "Finding the minimum and maximum of functions of two variables with a restriction."

date: 2021-07-13 13:15:19.587 +1000

toc: true
type: docs
math: true
desmos: true

tags:
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1:
    name: Extrema of Bivariate Functions
    parent: Quadratic Graphs
    weight: 20

weight: 30
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Advanced Techniques for Factorising](../../../numbers-and-expressions/polynomials/advanced-factorising-2/)
    - [Solving Linear Inequalities](../../../numbers-and-expressions/inequalities/solving-inequalities/)
    - [Functions, Domain and Range](../../functions-and-graphs/introduction/)

{{% /details %}}

The [previous lesson](../optimisation) discussed practical applications of quadratic functions and their extrema. It is also worth looking at how we can solve other mathematical problems with our knowledge of minima and maxima. In this lesson, we will:
- find the minimum or maximum of a quadratic function of two variables defined on a line.
- find the minimum or maximum of a quadratic function of two variables with its natural domain.


## Bivariate Functions

We will not have a lengthy discussion on the definition of bivariate (two-variable) functions here. Still, it is worth mentioning how they emerge from single-variable functions. Do you remember that [functions](../../functions-and-graphs/introduction/#functions) are like little robots that take a value and return another value based on the pre-defined rules? Think about a robot that accepts *two values* instead. For example, the addition machine would listen to two numbers, add them up, and tell the result. The mathematical equivalent of this would be $$ f(x, y) = x + y. $$ We can use this *function* just like $f(x)$:
\begin{align*}
  & f(1, 2) = 1 + 2 = 3, \cr
  & f(-1,-4) = -1 + (-4) = -5.
\end{align*}

This is how we can define a function with two variables.

## Extrema of Bivariate Functions

### Functions with restrictions

We can restrict the possible values of $(x, y)$ for a bivariate function $f(x, y)$, just like limiting the domain of a single-variable function. Depending on the shape of the domain, we can reduce the number of variables. Have a look at the examples below.

{{% hbox %}}

{{% note Example %}}
Find the minimum of $f(x,y)=x^2+2y^2$, when $2x+y=3$.

{{% note Solution %}}
The domain of the function is $\\{ (x,y)\\,|\\, 2x+y=3 \\}$, which makes up a line on the coordinate plane. We know a linear relation is also a function itself,{{% sn ex1 %}}Strictly speaking, a vertical line $x=k$ is not a function in $x$ but in $y$.{{% /sn %}} so $x$ uniquely determines $y$. This means that $f(x,y)$ is really just a function of $x$:
{{% mn ex1 tips %}}
(1) $2x+y=3$, so $y=3-2x$.
{{% /mn %}}
\begin{align*}
  f(x, y) &= x^2 + 2y^2 \cr
  &= x^2 + 2\hl{(3-2x)}^2 \tag{1} \cr
  &= x^2 + 2(9-12x+4x^2) \cr
  &= 9x^2 - 24x + 18.
\end{align*}

Then, the minimum of this expression can be found by converting it to vertex form.
\begin{align*}
  f(x,y) &= 9\left(x^2 - \dfrac{8}{3}x \right)^2 + 18 \cr
  &= 9\left\\{ \left(x-\dfrac{4}{3}\right)^2 - \dfrac{16}{9}\right\\} + 18 \cr
  &= 9\left(x-\dfrac{4}{3}\right)^2 + 2,
\end{align*}

so the minimum of $f(x,y)$ is $\boldsymbol{ 2 }$ when $x=\dfrac{4}{3}$ and $y=3-2x=\dfrac{1}{3}$.

***Alternative solution.***
Let $x^2 + 2y^2 = k$. For each value of the function $f(x,y)=k$, it defines a ***contour*** on the coordinate plane, that is, the set of all points $(x,y)$ that satisfy $f(x,y)=k$. Because $(x,y)$ also have to satisfy $2x+y=3$, finding the minimum of $f(x,y)$ is equivalent to finding the minimum of $k$ given that the two graphs $x^2+2y^2=k$ and $2x+y=3$ meet.

We still need one more piece of information: what does the graph of $x^2+2y^2=k$ look like? Because it is a [horizontal dilation](../../functions-and-graphs/transformations/#dilation) of the circle $x^2 + y^2 = k$, it should be an ellipse! We can use the following Desmos applet to confirm when $k=2$ the two curves barely touch one other.

{{% desmos id="ex1" style="height: 450px; margin-bottom: 0.5rem" options="{keypad: false}" %}}
<script>
  calc_ex1.setMathBounds({
    left: -4,
    right: 4,
    bottom: -4,
    top: 4
  });
  calc_ex1.setExpressions([
    { id: 'slider', latex: 'k=5', sliderBounds: {min:0, max: 10, step: 0.1} },
    { id: 'f', latex: "x^2 + 2y^2 = k" },
    { id: 'dom', latex: "2x + y = 3" },
  ]);
</script>

{{% /hbox %}}

What if we further restrict the domain by specifying the values of $x$ and $y$ directly?

{{% hbox %}}

{{% note Example %}}
When $x$ and $y$ are non-negative and $x+2y=8$, find the minimum and maximum of $xy$.

{{% note Solution %}}
We will first express $x$ as a function of $y$: $ x = -2y + 8 $. Because $x\ge 0$,
\begin{align*}
  -2y + 8 \ge 0 &\iff 8 \ge 2y \cr
  &\iff 4 \ge y.
\end{align*}

Thus the possible value of $y$ is $0 \le y \le 4$. Then,
\begin{align*}
  xy &= \hl{(-2y + 8)}y \cr
  &= -2y^2 + 8y \cr
  &= -2(y^2 - 4y) \cr
  &= -2\left\\{ (y-2)^2 - 4\right\\} \cr
  &= -2(y-2)^2 + 8.
\end{align*}

The graph of $f(y) = -2(y-2)^2 + 8$ is concave down, so the maximum value is $\boldsymbol{ 8 }$ when $y=2$. The minimum value occurs at the furthest point from the vertex: $f(0) = f(4) = \boldsymbol{ 0 }$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/extbi-ex2.png" alt="Minimum and maximum of f(x, y) = xy." >}}

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1 and 2.

### Functions without restrictions

The previous examples of two-variable functions are defined on a line, so one variable determines the value of the other. While they look like you have two degrees of freedom, there are only one, and we can treat them as ordinary quadratic functions. Now, how can we find the extrema of two-variable functions, for example $$ f(x,y) = x^2 + y^2, $$ ***without*** any restrictions?

It is pretty obvious $f(x,y)$ can be positive, and $f(x,y)=0$ when $x=y=0$. Can it be negative? For $f(x,y)$ to be negative, either $x^2$ or $y^2$ has to become negative, but it is impossible. Therefore, we find the minimum of $f(x,y)$ to be $0$, when $x=y=0$. In general, finding the minimum or maximum of a bivariate function uses the following property.

{{% hbox %}}
{{% note Theorem %}} For all real numbers $A$, $A^2 \ge 0$.

{{% /hbox %}}

Finally, there are also quadratic functions that do not have any limits. For example, you cannot find the minimum nor maximum of $$ f(x,y) = xy. $$

{{% hbox %}}

{{% note Example %}}
1. Find the minimum of $f(x,y) = 3x^2 + y^2 - 2$.
2. Find the maximum of $g(x,y) = -x^2 - y^2 + 2y + 5$.

{{% note Solution %}}

{{% enum 1 %}}
Because $3x^2\ge 0$ and $y^2\ge 0$, the minimum of $f(x,y)$ is $\boldsymbol{ -2 }$, when $x=y=0$.

{{% enum 2 %}}
Completing the square for $y$ gives

\begin{align*}
  g(x,y) &= -x^2 - (y^2 - 2y) + 5 \cr
  &= -x^2 - (y-1)^2 + 6.
\end{align*}

Since $x^2\ge 0$ and $(y-1)^2\ge 0$, $-x^2\le 0$ and $-(y-1)^2\le 0$. Therefore, the maximum of $g(x,y)$ is $\boldsymbol{ 6 }$ when $x=0$ and $y=1$.

{{% /hbox %}}

Below are more complicated examples. One useful tip is to choose one variable and [rearrange the function](../../../numbers-and-expressions/polynomials/advanced-factorising-2/#quadratic-in-two-variables).

{{% hbox %}}

{{% note Example %}}

1. Find the maximum of $P(x,y) = -x^2-3y^2-4x+6y-2$.
2. Find the minimum of $Q(x,y) = x^2-2xy+2y^2-2y+4x+6$.

{{% note Solution %}}

{{% enum 1 %}}
We can complete the squares separately:
{{% mn ex3 tips %}}
(1) Completing the square for $x$<br>
(2) Completing the square for $y$
{{% /mn %}}

\begin{align*}
  &P(x,y) \cr
  &= -x^2-4x-3y^2+6y-2 \cr
  &= \hl{-(x-2)^2 + 2^2} -3y^2+6y-2 \tag{1} \cr
  &= -(x-2)^2 + 4 \hl{ -3\left\\{ (y-1)^2 -1\right\\} } - 2 \tag{2} \cr
  &= -(x-2)^2 -3(y-1)^2 + 5.
\end{align*}

Then, $-(x-2)^2\le 0$ and $-3(y-1)^2\le 0$. Thus the maximum of $P(x,y)$ is $\boldsymbol{ 5 }$. The perfect squares equal to zero when $x-2=0$ and $y-1=0$, so the maximum occurs when $x=2$ and $y=1$.

{{% enum 4 %}}
Because there is an $xy$ term, we cannot treat the two variables separately. We will first rearrange the function in terms of $x$ to complete the square:
{{% mn ex3 tips %}}
(1) Rearranging the coefficient of $x$ to change it to $x^2 - 2\Box x + \cdots$ form.<br>
(2) $x^2 - 2\Box x$ $= \left(x-\Box\right)^2 - \Box^2$
{{% /mn %}}

\begin{align*}
  &Q(x,y) \cr
  &= \hl{x^2} + (4-2y)\hl{x} +2y^2-2y+6 \cr
  &= \underline{\hl{x^2} - 2(y-2)\hl{x}} + 2y^2 -2y+6 \tag{1} \cr
  &= \underline{\left\\{ \hl{x} - (y-2)\right\\}^2 - (y-2)^2} + 2y^2 - 2y + 6 \tag{2} \cr
  &= (x-y+2)^2 - y^2 + 4y - 4 + 2y^2 - 2y + 6 \cr
  &= (x-y+2)^2 + y^2 + 2y + 2.
\end{align*}

Then, we can complete the square for the leftover terms in terms of $y$.
\begin{align*}
  &Q(x,y) \cr
  &= (x-y+2)^2 + y^2 + 2y + 1^2 + 1 \cr
  &= (x-y+2)^2 + (y+1)^2 + 1.
\end{align*}

Because $(x-y+2)^2 \ge 0$ and $(y+1)^2 \ge 0$, the minimum occurs when
\begin{align*}
  x-y+2 = 0, \cr
  y+1=0.
\end{align*}

Solving the above equations give $x=-3$ and $y=-1$. Therefore, the minimum of $Q(x,y)$ is $\boldsymbol{ Q(-3,-1) = 1 }$.

{{% /hbox %}}


## Practice Questions

1. When $3x-y=2$, find the maximum of $2x^2 - y^2$.

{{% details title="Answer" %}}

1. $\dfrac{8}{7}$ when $\left( x, y \right) = \left( \dfrac{6}{7}, \dfrac{4}{7} \right)$

{{% note Solution %}} From $3x-y=2$, $y = 3x-2$. Then
\begin{align*}
  &\phantom{=} 2x^2 - y^2 \cr
  &= 2x^2 - \hl{(3x-2)}^2 \cr
  &= 2x^2 - (9x^2 - 12x + 4) \cr
  &= -7x^2 + 12x - 4.
\end{align*}

The graph of $f(x)=-7x^2+12x-4$ is concave down, so the maximum occurs at the vertex.
\begin{align*}
  &\phantom{=} -7x^2 + 12x - 4 \cr
  &= -7\left( x^2 - \dfrac{12}{7} x \right) - 4 \cr
  &= -7\left\\{ \left( x - \dfrac{6}{7} \right)^2 - \dfrac{36}{49}\right\\} - 4 \cr
  &= -7 \left( x - \dfrac{6}{7} \right)^2 + \dfrac{8}{7}.
\end{align*}

Therefore, the maximum of $2x^2-y^2$ is $\boldsymbol{ \dfrac{8}{7} }$, when $x=\dfrac{6}{7}$ and $y=3\cdot \dfrac{6}{7} - 2 = \dfrac{4}{7}$.

{{% /details %}}

2. When $x\ge 0,~y\ge 0,~x+2y=1$, find the minimum and maximum of $x^2+y^2$.

{{% details title="Answer" %}}

2. maximum of $\dfrac{1}{5}$ when $\left( x, y \right) = \left( \dfrac{1}{5}, \dfrac{2}{5} \right)$<br>minimum of $1$ when $\left( x, y \right) = \left(1, 0\right)$

{{% note Solution %}}
From $x+2y=1$, $x = 1 - 2y$. The range of $y$ that keeps $x$ non-negative is
\begin{align*}
  & 1 - 2y \ge 0 \cr
  & \iff 2y - 1 \le 0 \cr
  & \iff y \le \dfrac{1}{2},
\end{align*}

hence the possible values of $y$ are $0\le y \le \dfrac{1}{2}$. Then,
\begin{align*}
  x^2 + y^2 &= \hl{(1-2y)}^2 + y^2 \cr
  &= 1 - 4y + 4y^2 + y^2 \cr
  &= 5y^2 - 4y + 1.
\end{align*}

We will name this function $f(y)$. The graph of $f(y)$ is concave up, so the point closest to the vertex becomes the minimum, and the point farthest from the vertex becomes the maximum. From the vertex form,
\begin{align*}
  f(y) &= 5y^2 - 4y + 1 \cr
  &= 5\left(y^2 - \dfrac{4}{5}y\right) + 1 \cr
  &= 5\left\\{ \left(y-\dfrac{2}{5}\right)^2 - \dfrac{4}{25}\right\\} + 1 \cr
  &= 5\left(y-\dfrac{2}{5}\right)^2 + \dfrac{1}{5},
\end{align*}
the vertex is $\left( \dfrac{2}{5},\dfrac{1}{5} \right)$. 

Therefore, the minimum of $f(y) = x^2+y^2$ is 
\begin{align*}
  f \left( \dfrac{2}{5} \right) &= \boldsymbol{ \dfrac{1}{5} }
\end{align*}
when $y = \dfrac{2}{5}$ and $x = 1 - 2\cdot \dfrac{2}{5} = \dfrac{1}{5}$, and the maximum is
\begin{align*}
  f(0) = 2 (0-1)^2 - 1 = \boldsymbol{ 1 }
\end{align*}
when $y = 0$ and $x = 1- 2 \cdot 0 = 1$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/extbi-q2.png" alt="Minimum and maximum of f(x, y) = x^2 + y^2." >}}

{{% /details %}}


3. Find the minimum value of a two-variable function $A(x,y) = 2x^2 + y^2 - 4x + 10y - 2$ and when the minimum occurs.

{{% details title="Answer" %}}

3. $A(1,-5)=-29$

{{% note Solution %}}
Completing the squares gives
{{% mn q3 tips %}}
(1) Completing the square for $x$<br>
(2) Completing the square for $y$
{{% /mn %}}
\begin{align*}
  &A(x,y) \cr
  &= 2x^2 - 4x + y^2 + 10y - 2 \cr
  &= 2(x^2-2x) + y^2 + 10y - 2 \cr
  &= 2\left\\{ (x-1)^2 - 1\right\\} + y^2 + 10y - 2 \tag{1} \cr
  &= 2(x-1)^2 - 2 + y^2 + 10y - 2 \cr
  &= 2(x-1)^2 - 2 + (y+5)^2 - 25 - 2 \tag{2}\\
  &= 2(x-1)^2 + (y+5)^2 - 29.
\end{align*}

Because $(x-1)^2 \ge 0$ and $(y+5)^2 \ge 0$, the minimum of $A(x,y)$ is $\boldsymbol{ -29 }$. The minimum occurs when $x-1=0$ and $y+5=0$, that is, when $x=1$ and $y=-5$.

{{% /details %}}

4. Find the minimum of $B(x,y) = x^2-6xy + 10y^2 - 2x + 2y + 2$.

{{% details title="Answer" %}}

4. $B(7,2) = -3$

{{% note Solution %}}
Because the function is monic in $x$ (the coefficient of $x^2$ is 1), we will rearrange it with respect to $x$ and complete the square first.
\begin{align*}
  &B(x,y) \cr
  &= \hl{x^2} + (-2-6y) \hl{x} + 10y^2 + 2y + 2 \cr
  &= \hl{x^2} -2 (3y+1) \hl{x} + 10y^2 + 2y + 2 \cr
  &=\left\\{ \hl{x} - (3y+1)\right\\}^2 - (3y+1)^2 + 10y^2 + 2y + 2 \cr
  &= (x-3y-1)^2 - 9y^2 - 6y - 1 + 10y^2 + 2y + 2 \cr
  &= (x-3y-1)^2 + y^2 - 4y + 1.
\end{align*}

Then, we will complete the square with the remaining terms.
\begin{align*}
  & B(x,y) \cr
  &= (x-3y-1)^2 + (y - 2)^2 - 4 + 1 \cr
  &= (x-3y-1)^2 + (y - 2)^2 - 3.
\end{align*}

The minimum occurs when $x-3y-1=0$ and $y-2=0$, and solving these equations give $x=7$ and $y=2$. Therefore, the minimum of $B(x,y)$ is $\boldsymbol{ B(7,2) = -3 }$.

{{% /details %}}
