---
title: "Review Set 1"
slug: review-1
description: "Review questions for functions, graphs and their transformations."

date: 2021-05-02 22:26:58.171 +1000

toc: true
type: docs
math: true
draft: false

tags:
  - function
  - quadratic function
  - transformation

menu:
  math1-func:
    name: "✏️ Review 1"
    parent: Quadratic Graphs
    weight: 15

weight: 25
---

1. The domain of the function $y = -x+1$ is $a\le x \le b$ $(a < b)$ and its minimum and maximum are $-2$ and $2$ respectively. Find the values of $a$ and $b$.

2. When the range of the function $y = cx + d$ $(-2\le x < 1)$ is $1 < y \le 7$, find the values of $c$ and $d$.

{{% details title="Answer" %}}

1. $a=-1, ~b=3$
2. $c=-2,~d=3$

{{% note Solution %}} 

<ol>
<li>Because the gradient is negative, $y$ decreases as $x$ increases. Hence,
<ul>
<li>When $x=a$, the function reaches its maximum of $2$.</li>
<li>When $x=b$, the function reaches its minimum of $-2$.</li>
</ul>
Thus,
\begin{align}
  2 = -a + 1 \iff \boldsymbol{ a = -1 }
\end{align}
and
\begin{align}
  -2 = -b + 1 \iff \boldsymbol{ b = 3 }.
\end{align}
</li>
</ol>

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/review-a1.png" alt="Graph of y = -x + 1." >}}

2. Because $x=-2$ is part of the domain and $y=7$ is part of the range, we find $x=-2$ corresponds to $y=7$ and $x=1$ corresponds to $y=1$. Thus
\begin{align}
  7 &= -2c + d, \qdcirc{1} \\\\
  1 &= c + d. \qdcirc{2}
\end{align}
If you subtract $\tcirc{2}$ from $\tcirc{1}$,
\begin{align}
  6 = -3c \iff \boldsymbol{ c = -2 }.
\end{align}
Finally, from $\tcirc{2}$,
\begin{align}
  1 = -2 + d \iff \boldsymbol{ d = 3 }.
\end{align}

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/review-a2.png" alt="Graph of y = cx + d." >}}

{{% /details %}}


3. Find the area of region bounded by the graph of $y=|2x+2|+x-1$ and the x-axis.{{% mn q3 refs %}}From Chiba Inst. of Tech.{{% /mn %}}

{{% details title="Answer" %}}

3. $\dfrac{8}{3}$

{{% note Solution %}}

We will first draw the graph of the given function.
- When $2x+2<0$, $x<-1$ and
\begin{align}
  y &= -(2x+2) + x-1 \\\\
  &= -2x-2+x-1 \\\\
  &= -x-3.
\end{align}
- When $2x+2\ge 0$, $x\ge -1$ and
\begin{align}
  y &= (2x+2) +x-1 \\\\
  &= 3x+1.
\end{align}

{{< figure style="margin-bottom: 0" src="courses/jpn-maths-1/functions/quadratic-graphs/review-a3.png" caption="Graph of $y=|2x+2|+x-1$." >}}

Thus, the region surrounded by the graph and the x-axis is a triangle, and its area is
\begin{align}
  y &= \dfrac{1}{2} \cdot \left( 3-\dfrac{1}{3} \right) \cdot 2 \\\\
  &= \boldsymbol{ \dfrac{8}{3} }.
\end{align}

{{% /details %}}

4. Find the minimum points{{% sn q4 %}}The coordinate of the points where the minimum occurs.{{% /sn %}} of the following functions.{{% mn q4 refs %}}a. From Osaka Sangyo Univ.<br>b. From Chiba Inst. of Tech.{{% /mn %}}
    1. $f(x) = |x-1| + |x-2| + |x-3|$
    2. $f(x) = \left| x + |3x-24| \right|$

{{% details title="Answer" %}}

4. 
    1. $(2,2)$
    2. $(8,8)$

{{% note Solution %}}

$\hspace{0.5em} \text{a.} \quad$ Let's have a closer look at how the function behaves.

- When $x<1$,
\begin{align}
  f(x) &= -(x-1)-(x-2)-(x-3) \\\\
  &= -3x + 6.
\end{align}
- When $1\le x < 2$,
\begin{align}
  f(x) &= (x-1)-(x-2)-(x-3) \\\\
  &= -x+4.
\end{align}
- When $2\le x < 3$,
\begin{align}
  f(x) &= (x-1)+(x-2)-(x-3) \\\\
  &= x.
\end{align}
- When $x\ge 3$,
\begin{align}
  f(x) &= (x-1)+(x-2)+(x-3) \\\\
  &= 3x-6.
\end{align}

Note the gradient is negative when $x<2$, and the gradient becomes positive when $x\ge 2$. Thus the minimum occurs at $x=2$, and the value is $2$. Therefore, the minimum point is $\boldsymbol{ (2,2) }.$

<br>

$\hspace{0.5em} \text{b.} \quad$ When $3x-24<0$, $x<8$ and{{% sn a4 %}}Check [this lesson on removing absolute values](../../../numbers-and-expressions/inequalities/absolute-value-equations/#equations-with-multiple-absolute-values) if you need help.{{% /sn %}}
\begin{align}
  f(x) &= | x - (3x-24) | \\\\

  &= | -2x + 24 | \\\\
  &= 2| 12 - x |.
\end{align}
$12-x$ is always positive because we assumed $x<8$. Thus $f(x) = 2(12-x) = -2x+24.$

When $3x-24\ge 0$, $x\ge 8$ and
\begin{align}
  f(x) &= | x + (3x-24) | \\\\
  &= | 4x - 24 | \\\\
  &= 4| x-6 |.
\end{align}
$x-6$ is always positive because we assumed $x\ge 8$. Thus $f(x) = 4(x-6) = 4x - 24.$

So far we found
$$ f(x) = \begin{cases}
  -2x+24 & \text{when $x<8$,} \\\\
  4x-24 & \text{when $x\ge 8$.}
\end{cases} $$
Because the function changes from negative gradient to positive gradient at $x=8$, the minimum occurs at $x=8$. Thus the minimum point is $(8, 4\cdot 8 - 24) = \boldsymbol{ (8, 8) }.$

{{% /details %}}


5. For the parabola $y = x^2 + ax - 2$,{{% mn q5 refs %}}From Keio Univ.{{% /mn %}}
    1. Find the coordinates of the vertex in terms of $a$.
    2. When the vertex is on the line $y=2x-1$, find the value of $a$.

{{% details title="Answer" %}}

5. 
    1. $\left( -\dfrac{a}{2}, - \dfrac{a^2}{4} - 2 \right)$

{{% note Solution %}} 

$\hspace{0.5em} \text{a.} \quad$ We treat $a$ as a constant and complete the square. Note we need a factor of 2 in front of $x$.
\begin{align}
  y &= x^2 + ax - 2 \\\\
  &= x^2 + 2\cdot \dfrac{a}{2} x + \dfrac{a^2}{4} - \dfrac{a^2}{4} - 2 \\\\
  &= \left( x + \dfrac{a}{2}\right)^2 - \dfrac{a^2}{4} - 2.
\end{align}
Therefore, the vertex is $\boldsymbol{ \left( -\dfrac{a}{2}, - \dfrac{a^2}{4} - 2 \right) }.$

$\hspace{0.5em} \text{b.} \quad$ Because the coordinates of the vertex satisfies the equation $y = 2x-1$,
\begin{align}
  -\dfrac{a^2}{4} - 2 &= 2\left( -\dfrac{a}{2} \right) - 1 \\\\
  \iff -\dfrac{a^2}{4} + a - 1 &= 0 \\\\
  \iff a^2 - 4a + 4 &= 0 \\\\
  \iff (a-2)^2 &= 0 \\\\
  \iff \boldsymbol{ a = 2 }.
\end{align}

{{% /details %}}


6. Find the values of $a$ and $b$ when the vertices of $y=2x^2-12+17$ and $y=ax^2+6x+b$ coincide.{{% mn q6 refs %}}From Kobe Kokusai Univ.{{% /mn %}}

{{% details title="Answer" %}}

6. $ a=-1,~b=-10 $

{{% note Solution %}} 

We need to first find the coordinates of the vertex. From the first graph,
{{% mn q6 tips %}}
$(1)$ $2x^2 - 12x + 17$<br>
$=2(x^2-6x)+17$<br>
$=2(x^2-6x+9-9)+17$<br>
$=2(x-3)^2-18+17$<br>
$=2(x-3)^2-1.$
{{% /mn %}}
\begin{align}
  y &= 2x^2 - 12x + 17 \\\\
  &= 2(x-3)^2 - 1, \tag{1}
\end{align}
hence the vertex is $(3, -1)$. Then, from the second graph,
\begin{align}
  y &= ax^2 + 6x + b \\\\
  &= a\left(x^2 + \dfrac{6}{a} x \right) + b \\\\
  &= a\left(x^2 + \dfrac{6}{a} x + \dfrac{9}{a^2} - \dfrac{9}{a^2} \right) + b \\\\
  &= a\left( x + \dfrac{3}{a} \right)^2 - \dfrac{9}{a^2} + b.
\end{align}
Therefore, we can construct two equations for $a$ and $b$:
\begin{cases}
-\dfrac{3}{a} = 3, &\qdcirc{1} \\\\
-\dfrac{9}{a^2} + b = -1. &\qdcirc{2}
\end{cases}
From $\tcirc{1}$, $\boldsymbol{ a = -1 }.$ Then, from $\tcirc{2}$, $\boldsymbol{ b=-10 }.$

{{% box %}}

{{% note "Alt. Solution" %}}

Because the second graph has to have the vertex of $(3, -1)$, its vertex form is $ y = a(x-3)^2 -1.$ If we expand this expression,
\begin{align}
  y &= a(x^2 - 6x + 9) - 1 \\\\
  &= ax^2 - 6ax + 9a - 1.
\end{align}
Comparing the coefficients with $y = ax^2 + 6x + b$, we find
\begin{cases}
-6a &= 6 \\\\
9a - 1 &= b.
\end{cases}
Solving the simultaneous equations gives $\boldsymbol{ a=-1,~b=-10 }.$

{{% /box %}}

<p></p>

{{% /details %}}


7. Let the graph of the quadratic function $y = x^2 - 2(a+2)x + a^2-a+1$ be $G$.{{% mn q7 refs %}}From Center Test.{{% /mn %}}
    1. Find the value of $a$ that makes $G$ symmetric about the y-axis. Let this graph be $G_1$.
    2. Find the value of $a$ that moves the vertex of $G$ onto the x-axis. Let this graph be $G_2$.
    3. Find the transformation from $G_1$ to $G_2$.

{{% details title="Answer" %}}

7. 
    1. $-2$
    2. $-\dfrac{3}{5}$
    3. $\text{horizontal translation by $\dfrac{7}{5}$ units,}$ $\text{vertical translation by $-7$ units.}$

{{% note Solution %}}

From $[ x - (a+2) ]^2 = x^2 - 2(a+2)x + (a+2)^2$,
\begin{align}
  y &= x^2 - 2(a+2)x + a^2-a+1 \\\\
  &= x^2 - 2(a+2)x + (a+2)^2 - (a+2)^2 + a^2-a+1 \\\\
  &= [ x - (a+2) ]^2 - a^2 -4a - 4 + a^2 - a + 1 \\\\
  &= [ x - (a+2) ]^2 - 5a - 3.
\end{align}
Thus the coordinates of the vertex of $G$ is $(a+2, -5a-3)$.

$\hspace{0.5em} \text{a.} \quad$ The axis of symmetry of $G$ is $x = a+2$. For this to be y-axis, $a+2=0$, or $\boldsymbol{ a=-2 }.$

$\hspace{0.5em} \text{b.} \quad$ The y-coordinate of the vertex needs to be zero, so $-5a-3=0$, or $\boldsymbol{ a = -\dfrac{3}{5} }.$

$\hspace{0.5em} \text{c.} \quad$ We will first find the vertices of $G_1$ and $G_2$ by substituting $a=-2$ and $a=-\dfrac{3}{5}$ respectively. The vertex of $G_1$ is $$ (0, -5\cdot(-2)-3) = (0, 7) $$ and the vertex of $G_2$ is $$ \left( -\dfrac{3}{5} +2, 0 \right) = \left( \dfrac{7}{5}, 0 \right). $$ Note the coefficient of $x^2$ is always 1 regardless of the value of $a$, so we only need translations. Using the coordinates of the vertices, the transformation from $G_1$ to $G_2$ is $\textbf{a horizontal translation by $\boldsymbol{ \dfrac{7}{5} }$ units}$ $\textbf{and a vertical translation by $\boldsymbol{ -7 }$ units.}$

{{% /details %}}