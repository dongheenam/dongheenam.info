---
title: "Graphing Piecewise Functions"
slug: piecewise-functions
description: "Graphing piecewise linear functions including the floor function."

date: 2021-04-11 16:17:45.774 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - linear function
  - piecewise function
  - floor function

menu:
  math1-func:
    name: Graphing Piecewise Functions
    parent: Functions and Graphs
    weight: 16

weight: 16
---

## Introduction

From [the previous lesson](../absolute-values) on drawing absolute value functions, we now know that drawing the graph of $y=|x-3|$ is equivalent to drawing
`$$ y = \begin{cases} x-3 & \text{if $x\ge 3$,} \\ 3-x & \text{if $x < 3$.} \end{cases} $$`
In other words, we have to draw two different functions depending on the range of $x$. In this lesson, we will extend this idea further, and we will:

- define and draw a piecewise-defined function.
- draw the graph of a floor function.


## Piecewise Functions

You have to pay income tax if you have a job and earn a good amount of money. However, if the Taxation Office thinks you are not earning enough money, you are exempt from this. It also makes sense for rich people to pay more tax. [The current (2021) income tax rates](https://www.ato.gov.au/rates/individual-income-tax-rates/) for Australian residents are:
- if you earn less than {{< dollar >}}18 200 per year, then you pay {{< dollar >}}0.
- if you earn more than {{< dollar >}}18 200 but less than {{< dollar >}}45 000 per year, then you pay 19c for every dollar you make beyond {{< dollar >}}18 200;
- if you earn more than {{< dollar >}}45 000 but less than {{< dollar >}}120 000 per year, then you pay {{< dollar >}}5092 plus 32.5c for every dollar you make beyond {{< dollar >}}45 000;
- and so on.

This means that the tax rates are different based on your annual income, and you have to use a different formula depending on how much you earn. This brings us the concept of a piecewise-defined function: a function with multiple formulae!

{{% hbox %}}

{{% note Definition %}} *A **piecewise-defined function** is a function with multiple rules across different sub-domains. In other words, the rule of a piecewise-defined function changes depending on the value of the input.*

{{% note Example %}} Let {{< dollar >}}$I$ be the annual income and $T$ the amount of income tax you need to pay as an Australian resident. Then
`$$ T = 
\begin{cases}
0 & \text{if $I \le 18200$,} \\
0.19(I-18200) & \text{if $18200< I \le 45000$,} \\
5092 + 0.325(I-45000) & \text{if $45000 < I < 120000$,} \\
& \vdots
\end{cases}
$$`

{{% /hbox %}}

Let's practice some drawing now.

{{% hbox %}}

{{% note Example %}} Draw the following piecewise function.
`$$\begin{cases} y = -3 & \text{if $x<-3$,} \\ y=2x+3 & \text{if $-3\le x\le 2$,} \\ y=-x+6 & \text{if $x>2$.} \end{cases}$$`

{{% note Solution %}} We will draw the three line graphs in the three regions as specified. One small problem is that the two of the line graphs meet at $x=-3$, but not at $x=2$: $2x+3=7$ but $-x+6=4$. We know the value of $y$ has to be $7$ and not $4$ because $x=2$ is in the second region. How we show this information on the graph is by using circles: a filled circle means the point is ***included***, and an open circle means the point is ***not included***.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex1.png" alt="Graph of the piecewise function." >}}

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}} The definition of $f$ is as follows:
`$$f(x) = \begin{cases}
  2x & \text{for $0\le x < 2$,} \\
  8-2x & \text{for $2\le x \le 4$.}
\end{cases}$$`
Draw the graph of 
1. $y=f(x)$.
2. $y=f(f(x))$.

{{% note Solution %}}

{{% enum 1 %}} Note the domain of $f$ is $0\le x \le 4$. The graph of $y=f(x)$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex2a.png" alt="Graph of y = f(x)." >}}

{{% enum 2 %}} To find the definition of $f(f(x))$, we simply evaluate $f(x)$ at $x = f(x)$:
`$$ f(f(x)) = \begin{cases}
  2f(x) & \text{for $0\le f(x) < 2$,} \\
  8-2f(x) & \text{for $2\le f(x) \le 4$.}
\end{cases} $$`
From the graph of $y=f(x)$, we find:
- When $0 \le x < 1$ or $3 < x \le 4$, $$0\le f(x) < 2,$$
- When $1 \le x \le 3$, $$2\le f(x) \le 4.$$

This means there are four different rules for $y = f(f(x))$:

{{% ol i %}}
{{% li %}}
When $0\le x < 1$, $f(f(x)) = 2f(x)$ and $f(x) = 2x$ so 
`\begin{align*}
  f(f(x)) &= 2f(x) \\
  &= 2 \cdot 2x \\
  &= 4x.
\end{align*}`
{{% /li %}}
{{% li %}}
When $1\le x < 2$, $f(f(x)) = 8-2f(x)$ and $f(x) = 2x$ so
`\begin{align*}
  f(f(x)) &= 8-2f(x) \\
  &= 8 - 2\cdot 2x \\
  &= 8 - 4x.
\end{align*}`
{{% /li %}}
{{% li %}}
When $2\le x < 3$, $f(f(x)) = 8-2f(x)$ and $f(x) = 8-2x$ so
`\begin{align*}
  f(f(x)) &= 8-2f(x) \\
  &= 8-2(8-2x) \\
  &= 4x-8.
\end{align*}`
{{% /li %}}
{{% li %}}
When $3\le x < 4$, $f(f(x)) = 2f(x)$ and $f(x) = 8-2x$ so
`\begin{align*}
  f(f(x)) &= 2f(x) \\
  &= 2(8-2x) \\
  &= 16-4x.
\end{align*}`
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y = f(f(x))$ is

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex2b.png" alt="Graph of y = f(f(x))." >}}

{{% /hbox %}}

Try [Practice Questions](#practice-questions) 1--3.

## Floor Functions

The floor function is a special type of function that returns [the integer part](../../../numbers-and-expressions/numbers/expressions-square-roots-1/#integer-and-decimal-part-of-a-number) of a real number.

{{% hbox %}}

{{% note Definition %}} *The **floor function** returns the greatest integer that is less than or equal to the input. A common notation for the floor function is $\lfloor x \rfloor$.*{{% sn floor %}}In Japan, the notation for the floor function is $[x]$, and it is called the *Gauss symbol*. You guessed right, this is [yet another thing](https://en.wikipedia.org/wiki/List_of_things_named_after_Carl_Friedrich_Gauss) that is named after Carl Friedrich Gauss, who invented the floor function!{{% /sn %}}

{{% note Example %}}
- $\lfloor 2.4 \rfloor = 2$
- $\lfloor 5 \rfloor = 5$
- $\lfloor -2.4 \rfloor = -3$
- $\lfloor \pi \rfloor = 3$

{{% /hbox %}}

What would the graph of $y = \lfloor x \rfloor$ be like? Let's start with the range of $x$ that satisfies $\lfloor x \rfloor = 1$. Because , It is obvious that any $x$ between 1 and 2 would return 1, $\lfloor 1 \rfloor = 1$, and $\lfloor 2 \rfloor = 2$. Thus, $\lfloor x \rfloor = 1$ when $1 \le x < 2$. Generalising this idea gives:
`$$ \lfloor x \rfloor = \begin{cases}
  & \vdots \\
  -1 & \text{for $-1 \le x < 0$, } \\
  0 & \text{for $0 \le x < 1$, } \\
  1 & \text{for $1 \le x < 2$, } \\
  2 & \text{for $2 \le x < 3$, } \\
  & \vdots
\end{cases} $$`

{{% hbox %}}
{{% note Theorem %}} $\lfloor x \rfloor = n$ for an integer $n$ where $n \le x < n+1$.

{{% /hbox %}}

Drawing this on the coordinate plane gives us this cool graph:

{{< figure  src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex3.png" alt="Graph of the floor function." >}}

Below is an example of a function that uses the floor symbol.

{{% hbox %}}

{{% note Example %}} Draw the graph of $y = 2\lfloor x \rfloor,$ $-2\le x \le 2$.

{{% note Solution %}}

{{% ol i %}}
{{% li %}}
When $-2 \le x < -1$, $y = 2\cdot (-2) = -4$.
{{% /li %}}
{{% li %}}
When $-1 \le x < 0$, $y = 2\cdot (-1) = -2$.
{{% /li %}}
{{% li %}}
When $0 \le x < 1$, $y = 2\cdot 0 = 0$.
{{% /li %}}
{{% li %}}
When $1 \le x < 2$, $y = 2\cdot 1 = 2$.
{{% /li %}}
{{% li %}}
When $x = 2$, $y = 2\cdot 2 = 4$.
{{% /li %}}
{{% /ol %}}

Thus, the graph of $y = 2\lfloor x \rfloor$ is

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex4.png" alt="Graph of y = 2[x]." >}}

{{% /hbox %}}

{{% details title="What about $y = \lfloor 2x \rfloor$?" %}}

The graph of $y = 2\lfloor x \rfloor$ and the graph of $y = \lfloor 2x \rfloor$ sound pretty similar, but there is one important difference: the latter function rounds the number ***after*** the multiplication. Thus, the values of $y$ become:

{{% ol i %}}
{{% li %}}
when $-4 \le 2x < -3$ or $-2 \le x < -1.5$, $y = -4$.
{{% /li %}}
{{% li %}}
when $-3 \le 2x < -2$ or $-1.5 \le x < -1$, $y = -3$.
{{% /li %}}
{{% li %}}
when $-2 \le 2x < -1$ or $-1 \le x < -0.5$, $y = -2$.
{{% /li %}}
$$\vdots$$
{{% li 8 %}}
when $3 \le 2x < 4$ or $1.5 \le x < 2$, $y = 3$.
{{% /li %}}
{{% li %}}
when $2x = 4$ or $x=2$, $y=4$.
{{% /li %}}
{{% /ol %}}

{{< figure  src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-ex4a.png" alt="Graph of y = 2[x] and y = [2x]." >}}

{{% /details %}}


## Practice Questions

1. Draw the following piecewise functions.
    1. $\begin{cases} y=-x-5 & \text{if $x\le -5$, } \\\\ y=x+5 & \text{if $-5< x \le 3$,} \\ y=8 & \text{if $x>3$.} \end{cases}$

    2. $\begin{cases} y=-3 & \text{if $x\le 0$, } \\\\ y=2x & \text{if $0< x < 4$,} \\ y=5 & \text{if $x=4$,} \\\\ y=-x+7 & \text{if $x>4$.} \end{cases}$

{{% details title="Answer" %}}

{{% note Solution %}}

{{% enum a %}}
Note the three relations meet at the boundaries, so we do not need to worry about specifying the points.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q1a.png" alt="Graph of Q1 part a." >}}

{{% enum b %}}
Be careful with the discontinuity at $x=0$ and $x=4$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q1b.png" alt="Graph of Q1 part b." >}}


{{% /details %}}

2. Write the rules for the following piecewise functions.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q2.png" alt="Graph of piecewise functions." >}}

{{% details title="Answer" %}}

2. 
    1. $f(x) = \begin{cases} -x-4 & \text{if $x<0$, } \\\\ 2x-4 & \text{if $0\le x < 4$,} \\\\ 4 & \text{if $x\ge 4$.} \end{cases}$

    2. $ f(x) = \begin{cases} 5 & \text{if $x\le -4$, } \\\\ 3 & \text{if $-4 < x < 0$,} \\\\ -x & \text{if $0 \le x \le 3$,} \\\\ x-3 & \text{if $ x > 3 $.} \end{cases} $

{{% note Solution %}}

{{% enum a %}}
Note there are three separate regions in which the relations are defined: $x<0$, $0\le x < 4$, and $x\ge 4$.{{% sn q2a %}}Because there are no discontinuities, $x=0$ and $4$ can belong to either of the regions. For example, $x\le 0$, $0 < x \le 4$, and $x>4$ is also a valid division of the domain.{{% /sn %}}

The graph drawn in $x<0$ has the y-intercept of $-4$ and the gradient of $\dfrac{-4}{4}=-1$. Thus the function is $y= -x-4$.

The graph drawn in $0\le x < 4$ has the y-intercept of $-4$ and the gradient of $\dfrac{4}{2} = 2$. Thus the function is $y = 2x-4$.

The graph in $x \ge 4$ has the function $y=4$.

Therefore, the function of the graph is
`$$ \boldsymbol{ f(x) = } \begin{cases} \boldsymbol{ -x-4 } & \textbf{if $\boldsymbol{ x<0 }$, } \\ \boldsymbol{ 2x-4 } & \textbf{if $\boldsymbol{ 0\le x < 4 }$,} \\ \boldsymbol{ 4 } & \textbf{if $\boldsymbol{ x\ge 4 }$.} \end{cases} $$`

{{% enum b %}}
There are four separate sub-domains for the functions. Focusing on the filled and open circles, the four regions are: $x\le -4$, $-4 < x < 0$, $0\le x \le 3$, and $x>3$.

The graph drawn in $x\le -4$ is $y=5$.

The graph drawn in $-4< x < 0$ is $y=3$.

The graph drawn in $0\le x \le 3$ has the y-intercept of $0$ and the gradient of $\dfrac{-3}{3} = -1$. Thus the function is $y=-x$.

The graph drawn in $x >3$ has the gradient of $1$ and x-intercept of $3$. Thus the function is $y=x-3$.{{% sn q2b %}}If we let the y-intercept of the graph be $b$, then the function of the graph is $y=x+b$. This graph passes through $(3,0)$, so $0 = 3+b$, which leads to $b=-3$. Thus the equation is $y=x-3$.{{% /sn %}}

Therefore, the function of the graph is
`$$ \boldsymbol{ f(x) = } \begin{cases} \boldsymbol{ 5 } & \textbf{if $\boldsymbol{ x\le -4 }$, } \\ \boldsymbol{ 3 } & \textbf{if $\boldsymbol{ -4 < x < 0 }$,} \\ \boldsymbol{ -x } & \textbf{if $\boldsymbol{ 0 \le x \le 3 }$,} \\ \boldsymbol{ x-3 } & \textbf{if $\boldsymbol{ x > 3 }$.} \end{cases} $$`

{{% /details %}}

3. When $ f(x) = \begin{cases}
  2x & \text{for $0\le x < \dfrac{1}{2}$,} \\\\
  2x-1 & \text{for $\dfrac{1}{2} \le x \le 1$,}
\end{cases} $
sketch the graphs of:
    1. $y = f(x)$
    2. $y = f(f(x))$

{{% details title="Answer" %}}

{{% note Solution %}} 

{{% enum a %}}
The graph of $y=f(x)$ is below. Be careful with the discontinuity at $x=\dfrac{1}{2}$.

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q3a.png" alt="Graph of y = f(x)." >}}

{{% enum b %}}
From the definition of $y = f(x)$,
`$$ f(f(x)) = \begin{cases}
  2f(x) & \text{for $0\le f(x) < \dfrac{1}{2}$,} \\
  2f(x)-1 & \text{for $\dfrac{1}{2} \le f(x) \le 1$.}
\end{cases} $$`

From the graph of $y=f(x)$, we find:
- $0\le f(x) < \dfrac{1}{2}$ when $0\le x < \dfrac{1}{4}$ or $\dfrac{1}{2} \le x < \dfrac{3}{4}$,
- $\dfrac{1}{2} \le f(x) \le 1$ when $\dfrac{1}{4} \le x < \dfrac{1}{2}$ or $\dfrac{3}{4} \le x < 1$.

Thus, there are four sub-regions for the domain of $y=f(f(x))$:

{{% ol i %}}
{{% li %}}
 When $0\le x < \dfrac{1}{4}$, $f(x) = 2x$ and $$f(f(x)) = 2f(x) = 4x.$$
{{% /li %}}
{{% li %}}
When $\dfrac{1}{4} \le x < \dfrac{1}{2}$, $f(x) = 2x$ and $$f(f(x)) = 2f(x)-1 = 4x - 1.$$
{{% /li %}}
{{% li %}}
When $\dfrac{1}{2} \le x < \dfrac{3}{4}$, $f(x) = 2x-1$ and $$f(f(x)) = 2f(x) = 4x - 2.$$
{{% /li %}}
{{% li %}}
When $\dfrac{3}{4} \le x < 1$, $f(x) = 2x-1$ and $$f(f(x)) = 2f(x)-1 = 4x - 3.$$
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y=f(f(x))$ is:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q3b.png" alt="Graph of y = f(f(x))." >}}

{{% /details %}}

4. Find the values of:
    1. $\lfloor 10.5 \rfloor$
    2. $\lfloor -2.5 \rfloor$
    3. $\lfloor -\sqrt{3} \rfloor$

{{% details title="Answer" %}}

4. 
    1. 10
    2. -3
    3. -2

{{% /details %}}

5. Sketch the graphs of:
    1. $y= -\lfloor x \rfloor,$ $-3\le x \le 2$
    2. $y= x + 2\lfloor x \rfloor,$ $-2\le x \le 2$

{{% details title="Answer" %}}

{{% note Solution %}} 

{{% enum a %}}

{{% ol i %}}
{{% li %}}
When $-3 \le x < 2$, $y = -(-3) = 3$.
{{% /li %}}
{{% li %}}
When $-2 \le x < 1$, $y = -(-2) = 2$.
{{% /li %}}
$$ \vdots $$
{{% li 5 %}}
When $1 \le x < 2$, $y = - 1$.
{{% /li %}}
{{% li %}}
When $x = 2$, $y = -2$.
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y=-\lfloor x \rfloor$ is:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q5a.png" alt="Graph of y = -[x]." >}}

{{% enum b %}}

{{% ol i %}}
{{% li %}}
When $-2 \le x < -1$, $y = x + 2(-2) = x - 4$.
{{% /li %}}
{{% li %}}
When $-1 \le x < 0$, $y = x + 2(-1) = x-2$.
{{% /li %}}
{{% li %}}
When $0 \le x < 1$, $y = x + 2 \cdot 0 = x$.
{{% /li %}}
{{% li %}}
When $1 \le x < 2$, $y = x + 2\cdot 1 = x + 2$.
{{% /li %}}
{{% li %}}
When $x = 2$, $y = 2 + 2\cdot 2 = 6$.
{{% /li %}}
{{% /ol %}}

Therefore, the graph of $y=x + 2\lfloor x \rfloor$ is:

{{< figure src="courses/jpn-maths-1/functions/functions-and-graphs/piecewise-q5b.png" alt="Graph of y = x + 2[x]." >}}

{{% /details %}}