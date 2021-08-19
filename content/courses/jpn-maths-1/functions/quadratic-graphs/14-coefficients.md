---
title: "Determining Functions from Minima and Maxima"
slug: determining-from-extrema
description: "Finding the coefficients of quadratic functions from their extrema."

date: 2021-06-30 21:43:30.561 +1000

toc: true
type: docs
math: true
desmos: true
draft: false

tags:
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1-func:
    name: Finding Functions from Extrema
    parent: Quadratic Graphs
    weight: 24

weight: 34
---

## Introduction
 
We did some exercises on finding the minimum and maximum from a quadratic functions, including some general cases where the coefficients are functions of another variable. In this lesson, we will flip the process and determine the coefficients of a quadratic function with given minimum and/or maximum.

## Determining the Coefficients

### When a is given

If we know the coefficient of $x^2$, we can find the shape of the parabola.

{{% box %}}

{{% note Example %}} Find the value of positive real number $\ell$, when the function $y = x^2 - 2\ell x + \ell^2 - 2\ell$ $(0\le x \le 2)$ has minimum $11$.

{{% note Solution %}} To find the position of the vertex in terms of $\ell$, we first convert the function to vertex form:
\begin{align}
  y &= x^2 - 2\ell x + \ell^2 - 2\ell \\\\
  &= (x - \ell)^2 - 2\ell.
\end{align}
Thus the vertex is $(\ell, -2\ell).$ Whether the domain includes the vertex or not is important in finding the minimum,{{% sn %}}See [this lesson](../extrema-1/#restricted-domain) for more discussion on the relationship of the location of vertex and extrema.{{% /sn %}} so we will divide the cases.

$\tcirc{1} \quad$ When $0 < \ell \le 2,$ the vertex is inside the domain, and hence it is the minimum point. Thus
\\begin{align}
  -2\ell = 11 \iff \ell = -\dfrac{11}{2}.
\end{align}
This violates the assumption that $\ell$ is a positive number.

$\tcirc{2} \quad$ When $\ell > 2,$ the vertex is outside the domain. The closest value of $x$ to the vertex inside the domain is $x=2$, and hence the minimum value is $$ 2^2 - 2\ell \cdot 2 + \ell^2 - 2\ell = \ell^2 -6\ell + 4.$$ Then
\begin{align}
  & \ell^2 -6\ell + 4 = 11 \\\\
  \iff & \ell^2 - 6\ell - 7 = 0 \\\\
  \iff & (\ell - 7)(\ell + 1) = 0 \\\\
  \iff & \ell = 7,~-1.
\end{align}
Since $\ell=-1$ violates the assumption, the value of $\ell$ that satisfies the condition is $\boldsymbol{ 7 }.$

{{% mn 62 %}}Extremum points of $y = x^2 - 2\ell x + \ell^2 - 2\ell$. Drag the vertex to change the value of $\ell$.{{% /mn %}}
{{% desmos id="ex1" style="height: 450px; margin-bottom: 0.5rem" options="{keypad: false, expressions: false}" %}}
<script>
  calc_ex1.setMathBounds({
    left: -5,
    right: 15,
    bottom: -20,
    top: 25
  });
  calc_ex1.setExpressions([
    { id: 'slider', latex: 'l=5', sliderBounds: {min:0, max: 8, step: 0.1} },
    { id: 'dom', latex: "0 \\le x \\le 2",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y=x^2 -2lx + l^2 - 2l", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y=x^2 -2lx + l^2 - 2l \\{ 0 \\le x \\le 2 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(l, -2l)", color: 'black', showLabel: true, label:"a = 3", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'min', latex: minLoc(3), color: 'green', pointSize: 15, showLabel: true, label:"Min", labelSize: Desmos.LabelSizes.LARGE }
  ]);
  let ex1_slider = calc_ex1.HelperExpression({ latex: 'l' });
  ex1_slider.observe('numericValue', function() {
      calc_ex1.setExpressions([
        {id: 'min', latex: minLoc(ex1_slider.numericValue), label: `Min = ${minLoc(ex1_slider.numericValue)}`},
        {id: 'ver', label: `l = ${ex1_slider.numericValue}`}
      ]);
    });
  function minLoc(a) {
    if (a < 2) {
      return `(${a}, ${-2*a})`;
    } else {
      return`(2, ${(a**2-6*a+4).toFixed(1)})`;
    }
  }
</script>

{{% /box %}}

### When a is unknown

If the coefficient of $x^2$ is left unknown, the problem becomes trickier because we do not know if the graph is concave up or down. We thus need to consider three possibilities for the sign of $a$:
- $a<0$: the graph is concave down.
- $a=0$: the graph is linear.
- $a>0$: the graph is concave up.

{{% box %}}

{{% note Example %}} Let $f(x) = ax^2 - 2ax + b.$ When the maximum of $f(x),$ within its domain $0 \le x \le 3,$ is 9 and minimum is 1, find the values of $a$ and $b$.

{{% note Solution %}} The function in vertex form is {{% mn 110 tips %}}$f(x)$ $=a(x^2 - 2x) + b$ <br>$=a\left\[ (x-1)^2 - 1 \right\] + b$ <br>$=a(x-1)^2 - a + b.${{% /mn %}}$$f(x) = a(x-1)^2 - a + b.$$ Note the vertex $(1, b-a)$ is included in the domain. Let's now consider the three possible options for the sign of $a$.

$\tcirc{1}\quad$ When $a=0$, $f(x)=b$, so the function becomes constant. The maximum and minimum values should be different, so it does not satisfy the condition.

$\tcirc{2}\quad$ When $a>0$, $y=f(x)$ is concave up. This makes the vertex the minimum point, and $x=3$ the maximum point. Because the maximum value is 9 and the minimum value is 1,
\begin{align}
  f(1) &= -a+b = 1, \\\\
  f(3) &= a \cdot 3^2 - 2a \cdot 3 + b = 3a + b = 9.
\end{align}
Solving the equations gives $a = 2,$ $b=3$. This solution satisfies our assumption that $a>0$.

$\tcirc{3}\quad$ When $a<0$, $y=f(x)$ is concave down, This makes the vertex the maximum point, and $x=3$ the minimum point. Because the maximum value is 9 and the minimum value is 1,
\begin{align}
  f(1) &= -a+b = 9, \\\\
  f(3) &= 3a + b = 1.
\end{align}
Solving the equations gives $a=-2,$ $b=7$. This solution satisfies our assumption that $a<0$.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/extapp-ex1.png" caption="Extrema of $f(x) = ax^2 - 2ax + b$ when $a>0$ (left) and when $a<0$ (right)." >}}

Therefore, from the three conditions above, the possible solutions are $\boldsymbol{ a=2,~b=3 }$ and $\boldsymbol{ a=-2,~b=7 }.$ 

{{% /box %}}


## Practice Questions 

1. When the maximum value of the function $y = -2x^2 + 8x + k,$ $1\le x \le 4$, is 4, find $k$.
2. The maximum of $y = x^2-x + k + 1$ $(-1\le x \le 1)$ is 6. What is the value of $k$?

{{% details title="Answer" %}}
1. $k=-4$
2. $k=3$

{{% note Solution %}} 

1. The function in vertex form is $$y = -2(x-2)^2 + k + 8.$$ Thus, the vertex is included in the domain, $1 \le x \le 4$. Because the parabola is concave down, the maximum point is $(2, k+8).$ Therefore,
\begin{align}
  k + 8 = 4 \iff k = -4.
\end{align}

2. The axis of symmetry is $x = -\dfrac{b}{2a} = \dfrac{1}{2}.$ Because the graph is concave up, the maximum occurs at the farthest point from the axis of symmetry, which is $x = -1.$ Thus, from the maximum value of 6,
\begin{align}
  & (-1)^2 - (-1) + k + 1 = 6 \\\\
  \iff & k + 3 = 6 \\\\
  \iff & k = 3.
\end{align}

{{% /details %}}

3. Find the value of $t$ that makes the quadratic function $y = -x^2 + 2tx - t^2 -2t-1$ with domain $-1\le x \le 0$ have the maximum value of 0.

{{% details title="Answer" %}}

3. $t=-2-\sqrt{2},~-\dfrac{1}{2}$

{{% note Solution %}} Because $(x-t)^2 = x^2 - 2tx + t^2,$
\begin{align}
  y &= -x^2 + 2tx - t^2 -2t-1 \\\\
  &= -(x-t)^2 - 2t - 1.
\end{align}
The vertex of the quadratic graph is $(t, -2t-1).$ Because the graph is concave down, the vertex, or the point closest to the vertex becomes the maximum. We have to now think about three different possibilities: $\tcirc{1}$ when the vertex is on the left of the domain, $\tcirc{2}$ when the vertex is in the domain, and $\tcirc{3}$ when the vertex is on the right of the domain.

$\tcirc{1}\quad$ When $t <-1,$ the point closest to the vertex is $x=-1.$ Because the maximum value is 0,
{{% mn q3 tips %}}
$(1)$ Here we used the quadratic formula $x = \dfrac{-b\pm\sqrt{b^2-4ac}}{2a}.$
{{% /mn %}}
\begin{align}
  & -(-1)^2 + 2t(-1) - t^2 - 2t - 1 = 0 \\\\
  \iff & -1 - 2t - t^2 - 2t - 1 = 0 \\\\
  \iff & - t^2 - 4t -2 = 0 \\\\
  \iff & t^2 + 4t + 2 = 0 \\\\
  \iff & t= -2 \pm \sqrt{2}. \tag{1}
\end{align}
$-2+\sqrt{2}$ is greater than $-1$, so we only choose $t=-2-\sqrt{2}.$

$\tcirc{2}\quad$ When $ -1 \le t \le 0,$ the maximum value is equal to the y-coordinate of the vertex, so
\begin{align}
  -2t-1 = 0 \iff t = -\dfrac{1}{2}. 
\end{align}

$\tcirc{3}\quad$ When $t>0,$ the point closest to the vertex is $x=0.$ Because the maximum value is 0,
\begin{align}
  & - t^2 - 2t - 1 = 0 \\\\
  \iff & -(t+1)^2 = 0 \\\\
  \iff & t=-1.
\end{align}
This value of $t$ does not satisfy our assumption $t>0$.

From the above three conditions, the values of $t$ that make the maximum equal to 0 are $\boldsymbol{ t=-2-\sqrt{2},~-\dfrac{1}{2}}.$

{{% mn 164 %}}Maximum values of $y = -x^2 + 2tx - t^2 -2t-1$. Drag the vertex to change the value of $t$.{{% /mn %}}
{{% desmos id="q3" style="height: 450px; margin-bottom: 0.5rem" options="{keypad: false, expressions: false}" %}}
<script>
  calc_q3.setMathBounds({
    left: -7,
    right: 7,
    bottom: -5,
    top: 10
  });
  calc_q3.setExpressions([
    { id: 'slider', latex: 't=-2', sliderBounds: {min:-4, max: 1, step: 0.1} },
    { id: 'dom', latex: "-1 \\le x \\le 0",  color: "blue", lineWidth: 2, lineOpacity: 0.5, fillOpacity: 0.1},
    { id: 'f', latex: "y = -x^2 + 2tx - t^2 -2t-1", color: "black", lineStyle: Desmos.Styles.DASHED},
    { id: 'f2', latex: "y = -x^2 + 2tx - t^2 -2t-1 \\{ -1 \\le x \\le 0 \\}", color: "black", lineWidth: 3.5},
    { id: 'ver', latex: "(t, -2t-1)", color: 'black', showLabel: true, label:"a = 3", labelSize: Desmos.LabelSizes.LARGE},
    { id: 'max', latex: minLoc(3), color: 'red', pointSize: 15, showLabel: true, label:"Max", labelSize: Desmos.LabelSizes.LARGE }
  ]);
  let q3_slider = calc_q3.HelperExpression({ latex: 't' });
  q3_slider.observe('numericValue', function() {
      calc_q3.setExpressions([
        {id: 'max', latex: maxLoc(q3_slider.numericValue), label: `Max = ${maxLoc(q3_slider.numericValue)}`},
        {id: 'ver', label: `t = ${q3_slider.numericValue}`}
      ]);
    });
  function maxLoc(t) {
    if (t < -1) {
      return `(-1, ${(-1*t**2 - 4*t - 2).toFixed(1)})`;
    } else if (t < 0) {
      return `(${t}, ${(-2*t-1).toFixed(1)})`;
    } else {
      return `(0, ${(-1*t**2 - 2*t - 1).toFixed(1)})`;
    }
  }
</script>

{{% /details %}}


4. The function $g(x) = ax^2 + 4ax + b$ has domain $-1 \le x \le 2$. When the minimum of $g$ is 1 and the maximum is 6, find the possible values of $a$ and $b$.

{{% details title="Answer" %}}

4. $a = \dfrac{1}{3}~\text{and}~b = 2,$ and $a = -\dfrac{1}{3}~\text{and}~b = 5$

{{% note Solution %}}
\begin{align}
  g(x) & = a (x^2 + 4x) + b \\\\
  &= a\left\\{ (x+2)^2 - 4 \right\\} + b \\\\
  &= a(x+2)^2 - 4a +b,
\end{align}
so the vertex of $g(x)$ is $(-2, -4a + b).$ Because the vertex is outside the domain, the candidates for minimum and maximum are $x=-1$ and $x=2$.

$\tcirc{1}\quad$ When $a>0,$ the point closest to the vertex is the minimum. The minimum occurs at $x=-1$ and its value is $$ g(-1) = a(-1)^2 +4a(-1) + b = -3a + b.$$ The maximum occurs at $x=2$ and its value is $$ g(2) = a\cdot 2^2 + 4a \cdot 2 + b = 12a + b. $$
Thus, we have the following simultaneous equations:
\begin{cases}
  -3a + b &= 1 \\\\
  12a + b &= 6
\end{cases}
and solving them gives $a = \dfrac{1}{3}$ and $b = 2.$ This solution satisfies our assumption of $a>0.$

$\tcirc{2}\quad$ When $a<0,$ the point closest to the vertex is the maximum. $g(-1) = -3a+b$ is the maximum value and $g(2) = 12a + b$ is the minimum value. Thus, we have the following simultaneous equations:
\begin{cases}
  -3a + b &= 6 \\\\
  12a + b &= 1
\end{cases}
Solving them gives $a = -\dfrac{1}{3}$ and $b = 5.$ This solution satisfies our assumption of $a<0.$

$\tcirc{3}\quad$ When $a=0,$ $g(x) = b.$ This function can only have a single value, so it cannot satisfy the condition.

{{% /details %}}