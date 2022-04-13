---
title: "Optimisation Problems"
slug: optimisation
description: "Solving word problems finding the minimum or maximum."

date: 2021-07-09 18:43:48.851 +1000

toc: true
type: docs
math: true

tags:
  - function
  - quadratic function
  - minimum and maximum

menu:
  math1-func:
    name: Optimisations
    parent: Quadratic Graphs
    weight: 19

weight: 29
---

## Introduction

{{% details title="Links to Australian Curriculum" %}}

- Mathematics Year 10
    - Explore the connection between algebraic and graphical representations of relations such as simple quadratics, circles and exponentials using digital technology as appropriate [(ACMNA239)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11761&elaborations=true&cd=ACMNA239&searchTerm=ACMNA239#dimension-content).
- Mathematics Year 10A
    - Describe, interpret and sketch parabolas, hyperbolas, circles and exponential functions and their transformations [(ACMNA267)](https://www.australiancurriculum.edu.au/f-10-curriculum/mathematics/?strand=Number+and+Algebra&strand=Measurement+and+Geometry&strand=Statistics+and+Probability&capability=ignore&priority=ignore&year=11762&elaborations=true&cd=ACMNA267&searchTerm=ACMNA267#dimension-content).
- Mathematical Methods Unit 1
    - Examine examples of quadratically related variables [(ACMMM006)](https://www.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/mathematical-methods/?unit=Unit+1&cd=ACMMM006&searchTerm=ACMMM010#dimension-content).

{{% /details %}}

We had a detailed discussion on determining the minimum and maximum of a quadratic function. One practical application of this topic is *optimisation* -- a problem where you have to minimise or maximise a quantity. For example, what is the amount of sales that maximises the profit? What is the least amount of materials I can use to build a structure? You can see that these questions are often addressed in real life and how important it is to solve them. In this lesson, we will:
- set up a quadratic function from word problems.
- solve optimisation problems by finding the minimum or maximum of a quadratic function.


## Solving Word Problems

This is a sequence that I recommend students follow when solving word problems.

1. Set up a variable using one of the unknown quantities.
2. Construct an expression or an equation from the information given.
3. Solve them using relevant mathematics.
4. Answer the question from the solutions.

Practice this structure until you are used to dealing with word problems. You can then start being more creative in writing the solutions, which is the beauty of mathematics!


## Minimising or Maximising a Quantity

Let's dive straight into some problems now.

{{% hbox %}}

{{% note Example %}} {{% mn 64 fig %}}{{% img src="courses/jpn-maths-1/functions/quadratic-graphs/opt-ex1.png" alt="Metal fences against the wall" location="main" %}}{{% /mn %}} You are enclosing an area of rectangular shape inside two perpendicular walls and metal fences with a total length of 6 metres. How can you maximise the enclosed area?

{{% note Solution %}} We first need to define the variable. If we set the length of the rectangle to be $x$ m, because the total length of the fences is 6 m, the width would be $(6-x)$ m. Therefore, the area of the enclosure is given as $$ A(x) = x(6-x), $$ which is a quadratic function of $x$. Note that lengths cannot be negative, so the possible values of $x$ are between 0 and 6. Now,
`\begin{align*}
  A(x) &= 6x - x^2 \\
  &= -(x^2 - 6x) \\
  &= -\left\\{ (x-3)^2 - 9 \right\\} \\
  &= -(x-3)^2 + 9.
\end{align*}`
The maximum of $A(x)$ is hence 9 at $x=3.$ This point is inside the domain $(0< x < 6).$ Therefore, the enclosed area can be maximised **if the fence is folded in the exact middle**. 

---

{{% note "Alt. Solution" %}} The type of quadrilaterals with the maximum area for a fixed perimeter is a square, so the fences must form a square. Therefore, the fence needs to be folded in the middle.

{{% /hbox %}}



{{% hbox %}}

{{% note Example %}} The sum of the lengths of the two short sides of a right-angled triangle is 20. Find the minimum length of the hypotenuse.

{{% note Solution %}} Let the length of one short side be $x$. Then the length of the other side is $20-x$. Because length cannot be negative, $0 < x < 20$. From the Pythagoras' theorem, the length of the hypotenuse $\ell(x)$ is equal to:
`\begin{align*}
  \ell(x) &= \sqrt{x^2 + (20-x)^2} \\
  &= \sqrt{x^2 + 400 - 40x + x^2} \\
  &= \sqrt{2x^2 - 40x + 400}.
\end{align*}`

We have one problem. This function is not quadratic of $x$, but $\[\ell(x)\]^2$ is! So let's find the minimum of the square of the hypotenuse instead:
`\begin{align*}
  \[\ell(x)\]^2 &= 2x^2 - 40x + 400 \\
  &= 2(x^2 - 20x) + 400 \\
  &= 2\left\\{ (x-10)^2 - 100 \right\\} + 400 \\
  &= 2(x-10)^2 + 200.
\end{align*}`
The minimum of $\[\ell(x)\]^2$ is 200 when $x=10$. This implies the minimum of $\ell(x)$ is $\sqrt{200} = \boldsymbol{ 10\sqrt{2} }.$

Are you not satisfied with the workaround? Have a look at the proof below.

{{% /hbox %}}

{{% details title="Proof" %}}

In the solution above, we used the idea that the minimum of $\ell(x)$ is the square root of the minimum of $[\ell(x)]^2$.

Say the minimum of $[\ell(x)]^2$ be $M$. Then, from the [definition of the minimum](../extrema-1/#extrema-and-vertex-form), for every single value of $x$, $$ \[\ell(x)\]^2 \ge M. $$ From here, we find
`\begin{align*}
  & \[\ell(x)\]^2 - M \ge 0 \\
  & \iff \left\[ \ell(x) + \sqrt{M} \right\] \left\[ \ell(x) - \sqrt{M} \right\] \ge 0.
\end{align*}`

From here, we want to divide both sides by $\left\[ \ell(x) + \sqrt{M} \right\]$ and [not flip the inequality sign](../../../numbers-and-expressions/inequalities/properties/#properties). You should notice that this value is indeed positive because $\ell(x)$ and $\sqrt{M}$ are lengths and should always be positive. Thus,
`\begin{align*}
  & \ell(x) - \sqrt{M} \ge 0 \\
  & \iff \ell(x) \ge \sqrt{M}.
\end{align*}`

This is true for all values of $x$, so we conclude $\sqrt{M}$ is the minimum of $\ell(x)$!


{{% /details %}}


## Practice Questions

1. {{% mn q1 fig %}}{{% img src="courses/jpn-maths-1/functions/quadratic-graphs/opt-q1.png" alt="Illustration of the problem" location="main" %}}{{% /mn %}}On a line segment $\overline{AB}$ of length 6 units, there are two points $C$ and $D$ such that $AC=DB$ and $0<AC<3$. Find the length of the line segment $\overline{AC}$ that minimises the sum of the area of the three circles with diameter $\overline{AC}$, $\overline{CD}$ and $\overline{DB}.$

{{% details title="Answer" %}}

1. The area is $3\pi$ when $AC = 2.$

{{% note Solution %}} Using intuition, the area would be minimised if the three circles have the same diameter, hence $AC=2$. Let's use algebra to prove this idea.

Let $AC=2x~\text{cm}$ so that the radius of the leftmost circle is equal to $x$. Because $0 < AC < 3$, $0 < x < \dfrac{3}{2}.$ Then, from the condition, $DB=2x$ and $BC=6-4x.$ If we define the sum of the area be $A(x)$,
`\begin{align*}
  A(x) &= \pi x^2 + \pi (3-2x)^2 + \pi x^2 \\
  &= \pi \\{ x^2 + 9 - 12x + 4x^2 + x^2 \\} \\
  &= \pi \\{ 6x^2 - 12x + 9 \\} \\
  &= 3\pi \\{ 2x^2 - 4x + 3 \\}. 
\end{align*}`

We can simply minimise $f(x) = 2x^2 - 4x + 3$ to minimise $A(x).$ From the vertex form of $y=f(x)$,
`\begin{align*}
  f(x) &= 2(x-1)^2 + 1,
\end{align*}`
the minimum of $f(x)$ is 1 when $x=1.$ Hence, The minimum of $A(x) = 3\pi \cdot 1 = \boldsymbol{ 3\pi },$ when $AC = 2x = \boldsymbol{ 2 }.$

{{% /details %}}


2. For the triangle $\triangle ABC$, $\angle B = 90^\circ$, $AB=5$ and $BC=10$. Point $P$ starts at $B$ and moves on $\overline{AB}$ towards point $A$ at the speed of 1 unit per second. At the same time, point $Q$ starts at point $C$ and move towards point $B$ at the speed of 2 units per second. Find the minimum distance between points $P$ and $Q$.

{{% details title="Answer" %}}

2. $2\sqrt{5}$

{{% note Solution %}} Let $t$ seconds be the time elapsed since the two points start moving, and $PQ=d(t)$. Then $BP=t$ and $CQ=2t$. Because $BP$ cannot be longer than $BA$ and $CQ$ cannot be longer than $CB$, $0 \le t \le 5$. The diagram of the question is as follows.

{{< figure src="courses/jpn-maths-1/functions/quadratic-graphs/opt-q2.png" alt="Illustration of the triangle ABC." >}}

Using the Pythagoras' theorem,
`\begin{align*}
  [ d(t) ]^2 &= t^2 + (10-2t)^2 \\
  &= t^2 + 100 - 40t + 4t^2 \\
  &= 5t^2 - 40t + 100 \\
  &= 5(t^2 - 8t) + 100 \\
  &= 5\left\\{ (t-4)^2 - 16 \right\\} + 100 \\
  &= 5(t-4)^2 + 20.
\end{align*}`
The minimum of $[ d(t) ]^2$ is hence 20 when $t=4$. Therefore, the minimum distance between points $P$ and $Q$ is $\sqrt{20} = \boldsymbol{ 2\sqrt{5} }.$

{{% /details %}}