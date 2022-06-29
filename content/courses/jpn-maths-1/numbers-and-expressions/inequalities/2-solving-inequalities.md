---
title: Solving Linear Inequalities
slug: solving-inequalities
description: Basic strategies for solving single linear inequalities. Expressing the possible range of a variable on a number line. Combining two or more inequalities on a single variable.

date: 2020-10-01 08:51:34.622 +1000
lastMod: 2020-12-20 17:59:41.452 +1100

toc: true
type: docs
math: true
draft: false

tags:
  - inequality
  - algebra

menu:
  math1:
    parent: Linear Inequalities
    name: Solving Inequalities
    weight: 12

weight: 12
---


## Introduction

Now we should know enough about inequalities, so let's learn how to solve inequalities! For now, we will only have a look at linear ones.

In this lesson, we will learn:

  - basic strategies for solving single linear inequalities.
  - expressing the possible range of a variable on a number line.
  - combining two or more inequalities on a single variable.

## Solving Inequalities

From the [previous lesson](../properties/#properties), we learned the properties of inequalities are almost identical to that of equalities. This means we can use most of the equation-solving techniques here too. Just remember one thing: ***the signs flip*** when you multiply or divide by a ***negative number***.


{{% hbox %}}

{{% note Tips %}}
How to solve linear inequalities:

  1. Move the terms to simplify the inequality to $\boldsymbol{ ax\gt b }$ form (or with another inequality sign $\ge$, $\lt$, $\le$).
  2. Divide both sides by $a$, while being careful of the sign of $a$. *Flip the sign if $\boldsymbol{ a<0 }$*.

{{% /hbox %}}

{{% details title="Moving the terms" %}}

By moving the terms, we mean something like this:
`\begin{alignat*}{2}
  & 3x \hl{+4} &&= 12 \\
  & \iff 3x &&= 12 \hl{-4}.
\end{alignat*}`

In this lesson, we assume you are familiar with this technique. Remember, you need to change the sign when you move a term across the equal (or inequality) sign!

`\begin{alignat*}{2}
  & 5y -4 &&= 3 +3y \\
  & \iff 5y -3y &&= 3 +4 \\
  & \iff 2y &&= 7 \\
  & \iff y &&= \frac{7}{2}.
\end{alignat*}`

{{% /details %}}

Let's try a few questions before we move on to practice questions.

{{% hbox %}}
{{% note Example %}}
Solve the following inequalities.
  1. $6x-21\gt 3x$
  2. $5x+16\le 9x-4$
  3. $3(x-1)\ge 2(5x+4)$
  4. $\dfrac{5x+1}{4} - \dfrac{2-3x}{3}\lt \dfrac{1}{6}x + 1$

{{% note Solution %}}

{{% enum 1 %}}
{{% mn 90 tips %}}
(1) Moving the terms<br>
(2) Dividing both sides by $3$
{{% /mn %}}
`\begin{align*}
  & 6x-21\gt 3x \\
  & \iff 6x \hl{-3x}\gt \hl{21} \tag{1} \\
  & \iff 3x \gt 21 \\
  & \iff \boldsymbol{ x\gt 7 }. \tag{2}
\end{align*}`

{{% mn 100 tips %}}
(3) Moving the terms<br>
(4) Dividing both sides by -4 (change of signs)
{{% /mn %}}
`\begin{align*}
   & 5x+16\le 9x-4 \\
  & \iff 5x \hl{-9x}\le -4 \hl{-16} \tag{3} \\
  & \iff -4x \le -20 \\
  & \iff \boldsymbol{ x \hl{\ge} 5 }. \tag{4}
\end{align*}`

{{% mn 110 tips %}}
(5) Expanding the bracket<br>
(6) Moving the terms<br>
(7) Dividing both sides by -7 (change of signs)
{{% /mn %}}
`\begin{align*}
   & 3(x-1)\ge 2(5x+4) \\
  & \iff 3x-3 \ge 10x+8 \tag{5} \\
  & \iff 3x-10x \ge 8+3 \tag{6} \\
  & \iff -7x \ge 11 \\
  & \iff x \le -\frac{11}{7}. \tag{7}
\end{align*}`

 We want to remove the fractions first. We can do that by multiplying both sides by the least common multiple of the denominators: $12$.

{{% mn 110 tips %}}
(8) Expanding the bracket<br>
(9) Moving the terms<br>
(10) Dividing both sides by 25
{{% /mn %}}
`\begin{align*}
  & \dfrac{5x+1}{4} - \dfrac{2-3x}{3}\lt \dfrac{1}{6}x + 1 \\
  & \iff 3(5x+1) - 4(2-3x) \lt 2x + 12 \\
  & \iff 15x + 3 - 8 + 12x \lt 2x + 12 \tag{8} \\
  & \iff 27x - 5 \lt 2x + 12 \\
  & \iff 27x - 2x \lt 12 + 5 \tag{9} \\
  & \iff 25x \lt 17 \quad \\
  & \iff \boldsymbol{ x \lt \frac{17}{25}. } \tag{10}
\end{align*}`

{{% /hbox %}}


### Expressing the answers on the number line

{{% mn range fig %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-range-def1.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-range-def2.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-range-def3.png" %}}Diagrams of the possible values of $x$. Click to enlarge.
{{% /mn %}}

We can also draw the range on the number line. The trick is, we use filled circles ($\bullet$) when you want to include the value and use empty circles ($\circ$) to exclude that value. For example, the inequality $$ x\le -\frac{1}{2} $$ needs a filled circle at $x=-\dfrac{1}{2}$, and the inequality $$ x\lt 2 $$ needs an empty circle at $x=2$.

<hr style="visibility:hidden" />


## Practice Questions

1. Solve the following inequalities.
    1. $5x-7\gt 3(x+1)$
    2. $4(3-2x)\le 5(x+2)$
    3. $\dfrac{3x+2}{5}\lt \dfrac{2x-1}{3}$
    4. $0.2x+1\le -0.3x -2.5$
    5. $x+ \dfrac{1}{3} \left\\{ x- \dfrac{1}{4}(x+1) \right\\} \gt 2x- \dfrac{1}{2}$

{{% details title="Answer" %}}
1. 
    1. $x\gt 5$
    2. $x\ge \dfrac{2}{13}$
    3. $x\gt 11$
    4. $x \le -7$
    5. $x \lt \dfrac{5}{9}$

{{% note Solution %}}

{{% enum a %}}
`\begin{align*}
   & 5x-7\gt 3(x+1) \\
  & \iff 5x-7\gt 3x+3 \\
  & \iff 5x-3x\gt 3+7 \\
  & \iff 2x\gt 10 \\
  & \iff \boldsymbol{ x\gt 5 }.
\end{align*}`
{{% enum b %}}
`\begin{align*}
   & 4(3-2x)\le 5(x+2) \\
  & \iff 12-8x\le 5x+10 \\
  & \iff 12-10\le 5x+8x \\
  & \iff 2\le 13x \\
  & \iff \boldsymbol{ x\ge \frac{2}{13} }.
\end{align*}`
{{% enum c %}}
`\begin{align*}
   & \dfrac{3x+2}{5}\lt \dfrac{2x-1}{3} \\
  & \iff 3(3x+2)\lt 5(2x-1) \\
  & \iff 9x+6\lt 10x-5 \\
  & \iff 6+5\lt 10x-9x \\
  & \iff \boldsymbol{ x\gt 11 }.
\end{align*}`
{{% enum d %}}
`\begin{align*}
   & 0.2x+1\le -0.3x -2.5 \\
  & \iff 0.2x +0.3x \le -2.5-1 \\
  & \iff 0.5x \le -3.5 \\
  & \iff \boldsymbol{ x \le -7 }.
\end{align*}`
{{% enum e %}}
{{% mn q1e tips %}}
(1) Expanding the bracket.<br>
(2) Multiplying both sides by 12, which is the least common multiple of the denominators (3, 12 and 2).
{{% /mn %}}
`\begin{align*}
   & x+ \dfrac{1}{3} \left\{ x- \dfrac{1}{4}(x+1) \right\} \gt 2x- \dfrac{1}{2} \\
  & \iff x + \dfrac{1}{3} x - \dfrac{1}{12}(x+1) \gt 2x- \dfrac{1}{2} \tag{1} \\
  & \iff 12x + 4x - (x+1) \gt 24x-6 \tag{2} \\
  & \iff 16x - x - 1 \gt 24x - 6 \\
  & \iff 15x - 1 \gt 24x - 6 \\
  & \iff -1+6 \gt 24x-15x \\
  & \iff 5 \gt 9x \\
  & \iff \boldsymbol{ x \lt \dfrac{5}{9} }.
\end{align*}`

{{% /details %}}