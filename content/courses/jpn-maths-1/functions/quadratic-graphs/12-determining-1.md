---
title: "Determining Quadratic Functions using the Vertex Form"
slug: determining-1
description: "Finding the algebraic expression of a parabola using its vertex or the axis of symmetry."

date: 2021-08-19 21:41:40.441 +1000

toc: true
type: docs
math: true

tags:
  - function
  - quadratic function

menu:
  math1-func:
    name: Determining Functions in Vertex Form
    parent: Quadratic Graphs
    weight: 22

weight: 32
---


## Introduction

Most of the questions we solved so far first define the quadratic function, and then ask for its properties such as the extrema. It is also important for us to be able to find the algebraic expression given a list of its properties. In this lesson, we will:
- find the quadratic function given its vertex or axis of symmetry.

## Three Representations of Quadratics, Revisited

Every parabola can be expressed in three different functional forms. For example, the equation of the parabola below is

{{< figure style="margin-bottom:0" src="courses/jpn-maths-1/functions/quadratic-graphs/det-ex1.png" caption="An example of a quadratic graph." >}}

- $f(x) = (x-1)^2 - 4$, from the coordinates of the vertex $(1, -4)$ and y-intercept -3.
- $f(x) = (x+1)(x-3)$, from the x-intercepts -1, 3 and y-intercept -3.
- $f(x) = x^2 - 2x - 3$, from expanding the above equations.

We call them the vertex form, the intercept form, and the general form of the quadratic function.

{{% hbox %}}

{{% note Definition %}} For a quadratic function $f(x)$,

- $f(x) = a(x-p)^2 + q$ is the ***vertex form*** of the function, where $(p, q)$ is the coordinates of the vertex.
- $f(x) = a(x-\alpha)(x-\beta)$ is the ***intercept form*** of the function, where $(\alpha,0)$ and $(\beta,0)$ are the x-intercepts.{{% sn 60 %}}$\alpha$ (alpha) and $\beta$ (beta) are from the Greek alphabet. Mathematicians often use the Greek alphabet $(\alpha, \beta, \gamma, \cdots)$ to denote the solutions of an equation, or in this case, the x-intercepts of a function.{{% /sn %}}
- $f(x) = ax^2 + bx + c$ is the ***general form*** of the function.

{{% /hbox %}}

In this lesson, we will mostly focus on the vertex form.

## Determining the Vertex Form

One important fact to note is that the vertex alone is insufficient to determine a quadratic function. See below to see various examples of quadratic graphs that share the same vertex!

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/det-ex2.png" caption="Ensemble of parabolas with vertex of $(2,-2)$." >}}

So what is the other information do we need? We need to fix the ***shape*** of the parabola because all the parabolas above have different shapes. Remember it is the parameter $a$ that controls the shape, so we need to find the value of $a$, as well as the vertex!

{{% hbox %}}

{{% note Example %}} Find the quadratic function such that:
1. the vertex is $(-2,1)$ and passes through $(-1,4)$.
2. the axis of symmetry is $x=\dfrac{1}{2}$, and passes through $(-1,-6)$ and $(1,2)$.

{{% note Solution %}} 

{{% enum 1 %}}
From the vertex, the quadratic function is $$f(x) = a(x\hl{+2})^2\hl{+1},$$ and we only need to find the value of $a$. Because the point $(-1,4)$ is on the graph $y=f(x)$, $4=f(-1)$ and
`\begin{align*}
  & 4 = a(-1+2)^2 + 1 \\
  & \iff 4 = a + 1 \\
  & \iff a = 3.
\end{align*}`

Therefore, the quadratic function is $\boldsymbol{ f(x) = 3(x+2)^2+1 }$.

{{% enum 2 %}}
Because the vertex is on the axis of symmetry, the vertex is $\left( \dfrac{1}{2}, q \right)$, with $q$ unknown. Thus, the quadratic function is $$ f(x) = a\left( x \hl{- \dfrac{1}{2}} \right)^2 \hl{+ q}, $$ and we need to determine $a$ and $q$.

Thankfully, we have two points to substitute. From the point $(-1,-6)$,
`\begin{alignat*}{2}
  & -6 = f(-1) \\
  & \iff -6 = a \left( -1 - \dfrac{1}{2} \right)^2 + q \\
  & \iff -6 = \dfrac{9}{4} a + q \\
  & \iff -24 = 9a + 4q, \tag{$\cdots\tcirc{1}$}
\end{alignat*}`
and from the point $(1, 2)$,
`\begin{alignat*}{2}
  & 2 = f(1) \\
  & \iff 2 = a \left( 1 - \dfrac{1}{2} \right)^2 + q \\
  & \iff 2 = \dfrac{1}{4} a + q \\
  & \iff 8 = a + 4q. \tag{$\cdots\tcirc{2}$}
\end{alignat*}`

Solving $\tcirc{1}$ and $\tcirc{2}$ simultaneously gives $a=-4$, $q=3$. {{% mn 105 tips %}}Subtracting $\tcirc{2}$ from $\tcirc{1}$ gives $-32 = 8a$, so $a=-4$. Substituting this into $\tcirc{2}$ gives $8=-4+4q$, so $q=3$.{{% /mn %}}

Therefore, $\boldsymbol{ f(x) = -4\left( x-\dfrac{1}{2} \right)^2 + 3 }$.

{{% /hbox %}}

## Practice Questions

1. Find the equation of the quadratic graph with the following properties.
    1. It passes through the point $(0, -5)$ and shares the vertex with $y=2x^2+6x+4$.
    2. The x-coordinate of the vertex is -3 and it passes through the points $(-6,-8)$ and $(1,-22)$.

{{% details title="Answer" %}}

1. 
    1. $y = -2\left( x + \dfrac{3}{2} \right)^2 - \dfrac{1}{2}$
    2. $y = -2(x+3)^2 + 10$

{{% note Solution %}}

{{% enum a %}}
Let's first find the vertex of the aforementioned function. Because
`\begin{align*}
  y &= 2x^2+6x+4 \\
  &= 2(x^2 + 3x) + 4 \\
  &= 2\left( x + \dfrac{3}{2} \right)^2 - 2\cdot \dfrac{9}{4} + 4 \\
  &= 2\left( x + \dfrac{3}{2} \right)^2 - \dfrac{1}{2},
\end{align*}`
the vertex of $y = 2x^2 + 6x + 4$ (and the function we are looking for) is $\left( -\dfrac{3}{2}, -\dfrac{1}{2} \right)$. 

Thus the vertex form of the function is
$$y = a\left( x + \dfrac{3}{2} \right)^2 - \dfrac{1}{2}. $$ 

Because the point $(0, -5)$ satisfies the function,
`\begin{align*}
  & -5 = a\left( 0 + \dfrac{3}{2} \right)^2 - \dfrac{1}{2} \\
  & \iff -5 = \dfrac{9}{4} a - \dfrac{1}{2} \\
  & \iff a = -2.
\end{align*}`

Therefore, the function we are looking for is $\boldsymbol{ y = -2\left( x + \dfrac{3}{2} \right)^2 - \dfrac{1}{2} }$.

{{% enum b %}}
Let the function be $y = a (x +3)^2 + q$. Then, because this function satisfies $y=-8$ when $x=-6$,
`\begin{align*}
  & -8 = a(-6+3)^2 + q \\
  & \iff -8 = 9a + q, \tag{$\cdots\tcirc{1}$}
\end{align*}`
and because it also satisfies $y=-22$ when $x=1$,
`\begin{align*}
  & -22 = a(1+3)^2 + q \\
  & \iff -22 = 16a + q. \tag{$\cdots\tcirc{2}$}
\end{align*}`

Solving $\tcirc{1}$ and $\tcirc{2}$ simultaneously gives $a=-2$ and $q=10$. Therefore, the function is $\boldsymbol{ y = -2(x+3)^2 + 10 }$.

{{% /details %}}

2. What is the equation of the parabola whose vertex is on the x-axis and passes through $(0,4)$ and $(-4,36)$?

{{% details title="Answer" %}}

2. $y=4(x+1)^2$ or $y=(x-2)^2$

{{% note Solution %}}
The vertex is on the x-axis, so the y-coordinate of the vertex is 0. Hence the equation has the form $$y = a(x-p)^2. $$ 

Because this equation is satisfied when $(x,y)=(0,4)$,
`\begin{align*}
  & 4 = a(0-p)^2 \\
  & \iff 4 = a p^2 \tag{$=\tcirc{1}$},
\end{align*}`
and it is also satisfied when $(x,y)=(-4,36)$ so
`\begin{align*}
  & 36 = a(-4-p)^2 \\
  & \iff 36 = a (p+4)^2. \tag{$=\tcirc{2}$}
\end{align*}`

$\tcirc{1}\times 9$ gives $36 = 9ap^2$, and equating this with $\tcirc{2}$ gives
`\begin{align*}
  9ap^2 = a(p+4)^2.
\end{align*}`

Because $a\ne 0$, we can divide both sides by $a$ and
`\begin{align*}
  & 9p^2 = (p+4)^2 \\
  & \iff 9p^2 = p^2 + 8p + 16 \\
  & \iff 8p^2 - 8p - 16 = 0 \\
  & \iff 8(p+1)(p-2) = 0 \\
  & \iff p = -1,~2.
\end{align*}`

From $\tcirc{1}$, $a=\dfrac{4}{p^2}$. When $p=-1$, $a=4$, and when $p=2$, $a=1$. Therefore, the parabolas that satisfy the given condition are $\boldsymbol{ y=4(x+1)^2 }$ or $\boldsymbol{ y=(x-2)^2 }$.

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/det-q2.png" caption="Two possible parabolas satisfying the condition." >}}

{{% /details %}}

3. {{% mn 188 Hint %}}*Hint: the shape of the parabola does not change under a translation.*{{% /mn %}}If we translate the graph of $y=x^2-3x+4$ by an appropriate amount, it passes through $(2,4)$ and its vertex lies on the line $y=2x+1$. Find the equation of the new quadratic graph. 

{{% details title="Answer" %}}

3. $y = (x-1)^2 + 3x$

{{% note Solution %}}
The graph is a translation of $y = x^2 - 3x + 4$, so $a=1$. We can set the equation of the graph as $$ f(x) = (x-p)^2 + q. $$

Then, because the vertex $(p,q)$ is on the line $y = 2x+1$, we find $q = 2p + 1$.

Finally, the point $(2,4)$ is on the graph, so
`\begin{alignat*}{2}
  & 4 = f(2) \\
  & \iff 4 = (2-p)^2 + q \\
  & \iff 4 = (2-p)^2 + 2p + 1 && (\leftarrow q = 2p + 1) \\
  & \iff 4 = p^2 - 4p + 4 + 2p + 1 \\
  & \iff 0 = p^2 - 2p + 1 \\
  & \iff 0 = (p-1)^2 \\
  & \iff p = 1.
\end{alignat*}`

Therefore, the equation of the graph is $\boldsymbol{ f(x) = (x-1)^2 + 3x }$.

{{% /details %}}