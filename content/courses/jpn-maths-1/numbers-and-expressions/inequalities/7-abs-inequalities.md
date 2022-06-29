---
title: Linear Inequalities with Absolute Values
slug: absolute-value-inequalities
description: Solving linear inequalities with variables inside an absolute value symbol.

date: 2021-03-02 21:52:20.536 +1100
lastMod: 2021-03-02 21:52:20.536 +1100

type: docs
toc: true
math: true
draft: false

tags:
  - inequality
  - absolute value
  - algebra

menu:
  math1:
    parent: Linear Inequalities
    name: Inequalities with Absolute Values
    weight: 17

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 17
---

## Introduction

{{% details title="Getting Ready" %}}

The following topics are useful for understanding this lesson.
- Mathematics 1
    - [Number Line and Absolute Values](../../numbers/absolute-values)

{{% /details %}}

In this lesson, we will learn:
- How to solve linear inequalities with single or multiple absolute value symbols.

## Removing Absolute Value Symbol

In the [previous lesson](../absolute-value-equations), we found that $$ |x| = c \iff x = \pm c. $$ But what about $ |x| > c $, and so on? If we remember the definition of $ |x| $ is the *distance* between $x$ and 0, the answer is pretty simple: any number that satisfy $ |x| > c $ are farther than $c$ units away from 0! Likewise, any $x$ that staifty $ |x| < c $ are located within $c$ units from 0. Therefore, we find

{{% hbox %}}

{{% note Theorem %}} For any positive number $c$,
- $ |x| > c \iff \boldsymbol{ x<-c \quad \text{or} \quad x>c }\\, ,$
- $ |x| < c \iff \boldsymbol{ -c<x<c }\\, .$

{{% /hbox %}}

{{% figure src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-2.jpg" caption="Solutions of $|x|\le c$ and $|x|>c$ on the number line." %}}


{{% hbox %}}

{{% note Example %}} Solve the following inequalities.
1. $|x-2|<4$
2. $|x+3|\ge 5$
3. $|2x+1|\le 3$
4. $|x-4|< 3x$

{{% note Solution %}}

{{% enum 1 %}}
$|x-2|<4$ implies $\hl{ -4<x-2<4 }$. Then $ \boldsymbol{ -2 < x < 6 }. $

{{% enum 2 %}}
$|x+3|\ge 5$ implies $ \hl{ x+3 \le -5 \text{ or } x+3 \ge 5 }$.

When $ x+3 \le -5$, $ x \le -8$.

When $ x+3 \ge 5$, $x \ge 2$.

Therefore the range is $\boldsymbol{ x\le -8 \text{ or } x \ge 2 }.$

{{% enum 3 %}}
$|2x+1|\le 3$ implies $ \hl{ -3 \le 2x+1 \le 3 }$. Then

`\begin{align*}
  -3 \le 2x+1 \le 3 & \iff -4 \le 2x \le 2 \\
  & \iff \boldsymbol{ -2 \le x \le 1 }.
\end{align*}`

{{% enum 4 %}}
{{% mn 90 tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex1a.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex1b.png" %}} Possible ranges of $x$ for Q4.
{{% /mn %}} When $x\ge 4$, the equality becomes

`\begin{align*}
  \hl{ x-4 < 3x } & \iff -4 < 2x \\
  & \iff x > -2.
\end{align*}`

Because we already assumed $x \ge 4$, the solution is
$ x \ge 4. \\,( \cdots \tcirc{1} )$

When $x<4$, the equality becomes
`\begin{align*}
  \hl{ -(x-4) < 3x } & \iff -x + 4 < 3x \\
  & \iff 4 < 4x \\
  & \iff x > 1.
\end{align*}`

Because we assumed $x < 4$, the solution is $ 1 < x < 4.  \\,( \cdots \tcirc{2} )$

The complete range of $x$ that satisfies the given inequality is the union of $\tcirc{1}$ and $\tcirc{2}$, which is $\boldsymbol{ x>1 }.$

***Alternative solution.*** We can also try using the theorem above:
`\begin{align*}
  |x-4|< 3x & \iff -3x < x-4 < 3x \\
  & \iff \begin{cases} -3x < x-4, & \quad \cdots \tcirc{3} \\ x-4 < 3x. & \quad \cdots \tcirc{4} \end{cases}
\end{align*}`

Then
`\begin{align*}
  \tcirc{3} & \iff -4x < -4 \\
  & \iff x > 1,
\end{align*}`

and
`\begin{align*}
  \tcirc{4} & \iff -4 < 2x \\
  & \iff x > -2.
\end{align*}`

The range of $x$ that satisfies both $\tcirc{3}$ and $\tcirc{4}$ is also $\boldsymbol{ x > 1 }$!

{{% /hbox %}}

Try [Practice Question](#practice-questions) 1 before moving on.


## Multiple Absolute Values

Like [for equations with multiple absolute values](../absolute-value-equations/#equations-with-multiple-absolute-values), we need to divide the cases when the expressions inside absolute values change their signs.

{{% hbox %}}

{{% note Example %}} Solve $ |x-1| + 2|x-3| \le 11 $. {{% mn ref120 refs %}}From Seinan Gakuin Univ.{{% /mn %}}

{{% note Solution %}}
Since the signs of $x-1$ and $x-3$ change at $x=1$ and $x=3$ respectively, our choice of cases are {{% enum i %}}$x<1$, {{% enum ii %}}$1\le x < 3$, and {{% enum iii %}}$x \ge 3$. {{% mn 126 tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex2a.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex2b.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex2c.png" %}} The diagram representing the possible ranges of $x$ for Q1.
{{% /mn %}}

{{% ol i %}}
{{% li %}}
When $x<1$,
`\begin{align*}
  & |x-1| + 2|x-3| \le 11 \\
  & \iff \hl{ -(x-1) -2(x-3) } \le 11 \\
  & \iff -x + 1 - 2x + 6 \le 11 \\
  & \iff -3x \le 4 \\
  & \iff x \ge -\dfrac{4}{3}.
\end{align*}`

The intersection with our assumption, $x<1$, is $$ -\dfrac{4}{3} \le x < 1. \quad\cdots\tcirc{1}$$
{{% /li %}}
{{% li %}}
When $1\le x < 3$,
`\begin{align*}
  & |x-1| + 2|x-3| \le 11 \\
  & \iff (x-1) \hl{ -2(x-3) } \le 11 \\
  & \iff x - 1 - 2x + 6 \le 11 \\
  & \iff -x \le 6 \\
  & \iff x \ge -6.
\end{align*}`

The intersection with our assumption, $1 \le x < 3$, is 
$$ 1 \le x < 3. \quad\cdots\tcirc{2}$$
{{% /li %}}
{{% li %}}
When $x \ge 3$,
`\begin{align*}
  & |x-1| + 2|x-3| \le 11 \\
  & \iff (x-1) +2(x-3) \le 11 \\
  & \iff x - 1 + 2x - 6 \le 11 \\
  & \iff 3x \le 18 \\
  & \iff x \le 6.
\end{align*}`

The intersection with our assumption, $x\ge 3$, is 
$$ 3 \le x \le 6. \quad\cdots\tcirc{3}$$
{{% /li %}}
{{% /ol %}}

Therefore, our solution is the union of $\tcirc{1}$, $\tcirc{2}$, and $\tcirc{3}$, which is $\boldsymbol{ -\dfrac{4}{3} \le x \le 6 }.$

{{% /hbox %}}

{{% hbox %}}

{{% note Example %}} Solve $ |x-7| + |x-8| < 3 $. {{% mn ref245 refs %}}From Osaka Univ. of Econ.{{% /mn %}}

{{% note Solution %}}
Likewise, we will solve the inequality when {{% enum i %}}$x<7$, {{% enum ii %}}$7\le x < 8$, and {{% enum iii %}}$x \ge 8$. {{% mn 158 tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex3a.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex3b.png" %}}{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-abs-ex3c.png" %}} The diagram representing the possible ranges of $x$ for Q2.
{{% /mn %}} 

{{% ol i %}}
{{% li %}}
When $x<7$,
`\begin{align*}
  |x-7| + |x-8| < 3 & \iff \hl{ -(x-7) -(x-8) } < 3 \\
  & \iff -x + 7 -x + 8 < 3 \\
  & \iff -2x < -12 \\
  & \iff x > 6.
\end{align*}`
From the assumptions,
$$6 < x < 7. \quad\cdots\tcirc{4}$$
{{% /li %}}
{{% li %}}
When $7\le x<8$,
`\begin{align*}
  |x-7| + |x-8| < 3 & \iff (x-7) \hl{-(x-8) } < 3 \\
  & \iff x-7-x+8 < 3 \\
  & \iff 1 < 3.
\end{align*}`

This statement is always true regardless of the value of $x$, so from the assumptions,
$$7\le x < 8. \quad\cdots\tcirc{5}$$
{{% /li %}}
{{% li %}}
When $x \ge 8$,
`\begin{align*}
  |x-7| + |x-8| < 3 & \iff (x-7) + (x-8) < 3 \\
  & \iff 2x - 15 < 3 \\
  & \iff 2x < 18 \\
  & \iff x < 9.
\end{align*}`

From the assumptions, $$8 \le x < 9. \quad\cdots\tcirc{6}$$
{{% /li %}}
{{% /ol %}}

Our solution is the union of $\tcirc{4}$, $\tcirc{5}$, and $\tcirc{6}$, which is $\boldsymbol{ 6 < x < 9 }.$

{{% /hbox %}}

## Practice Questions

1. Solve the following inequalities. {{% mn ref1 refs %}}d. From Nara Univ. {{% /mn %}}
    1. $ |x+3| \le 2 $
    2. $ |x-4| > 3 $
    3. $ |4x-5| > 1 $
    4. $ 3|x+1| < x+5 $

{{% details title="Answer" %}}

1. 
    1. $ -5 \le x \le -1 $
    2. $ x < 1 \text{ or } x > 7 $
    3. $ x < 1 \text{ or } x > \dfrac{3}{2} $
    4. $ -2 < x < 1 $

{{% note Solution %}}

{{% enum a %}}
`\begin{align*}
  & |x+3| \le 2 \\
  & \iff -2 \le x+3 \le 2 \\
  & \iff \boldsymbol{ -5 \le x \le -1 }.
\end{align*}`
{{% enum b %}}
`\begin{align*}
  & |x-4| > 3 \\
  & \iff x-4 < -3 \text{ or } x-4 > 3 \\
  & \iff \boldsymbol{ x < 1 \text{ or } x > 7 }.
\end{align*}`
{{% enum c %}}
`\begin{align*}
  & |4x-5| > 1 \\
  & \iff 4x-5 < -1 \text{ or } 4x-5 > 1 \\
  & \iff 4x < 4 \text{ or } 4x > 6 \\
  & \iff \boldsymbol{ x < 1 \text{ or } x > \frac{3}{2} }.
\end{align*}`

{{% enum d %}}
The expression inside the absolute value symbol changes its sign at $x = -1$.

{{% ol i %}}
{{% li %}}
When $x\ge -1$,
`\begin{align*}
  & 3|x+1| < x+5 \\
  & \iff 3(x+1) < x+5 \\
  & \iff 3x + 3 < x + 5 \\
  & \iff 2x < 2 \\
  & \iff x < 1.
\end{align*}`

Its intersection with the assumption ($x\ge -1$) is $$-1 \le x < 1. \quad\cdots\tcirc{1}$$
{{% /li %}}
{{% li %}}
When $x < -1$,
`\begin{align*}
  & 3|x+1| < x+5 \\
  & \iff -3(x+1) < x+5 \\
  & \iff -3x - 3 < x + 5 \\
  & \iff -4x < 8 \\
  & \iff x > -2.
\end{align*}`

Its intersection with the assumption ($x<-1$) is $$-2 < x < -1. \quad\cdots\tcirc{2}$$
{{% /li %}}
{{% /ol %}}

From $\tcirc{1}$ and $\tcirc{2}$, the possible range of $x$ is $\boldsymbol{ -2 < x < 1 }.$

{{% /details %}}

2. Solve the following inequalities.{{% mn ref2 refs %}}a. From Osaka Sangyo Univ.<br>b. From Hiroshima Inst. of Tech.{{% /mn %}}
    1. $|x-5| \le \dfrac{2}{3} |x| + 1$
    2. $|x+2|-|x-1|>x$

{{% details title="Answer" %}}

2. 
    1. $\dfrac{12}{5}\le x \le 18$
    2. $ x<-3, \text{ or } -1 < x < 3 $

{{% note Solution %}}

{{% enum a %}}
Because $x-5=0$ when $x=5$, we will divide the cases at $x=0$ and $x=5$.

{{% ol i %}}
{{% li %}}
When $x<0$,
`\begin{align*}
  & |x-5| \le \dfrac{2}{3} |x| + 1 \\
  & \iff \hl{-(x-5)} \le \hl{ -\dfrac{2}{3} x} + 1 \\
  & \iff -x + 5 \le - \dfrac{2}{3}x + 1 \\
  & \iff 4 \le \dfrac{1}{3} x \\
  & \iff x \ge 12.
\end{align*}`

Because this does not satisfy our assumption $x<0$, ***there are no values of $x$*** that satisfies the inequality.
{{% /li %}}
{{% li %}}
When $0\le x < 5$,
`\begin{align*}
  & |x-5| \le \dfrac{2}{3} |x| + 1 \\
  & \iff \hl{-(x-5)} \le \dfrac{2}{3} x + 1 \\
  & \iff -x + 5 \le + \dfrac{2}{3}x + 1 \\
  & \iff 4 \le \dfrac{5}{3} x \\
  & \iff x \ge \dfrac{12}{5}.
\end{align*}`

Because we assumed $0\le x < 5$, the range of $x$ that satisfies the inequality is
$$\dfrac{12}{5}\le x < 5. \quad\cdots\tcirc{1}$$
{{% /li %}}
{{% li %}}
When $x\ge 5$,
`\begin{align*}
  & |x-5| \le \dfrac{2}{3} |x| + 1 \\
  & \iff (x-5) \le \dfrac{2}{3} x + 1 \\
  & \iff \dfrac{1}{3} x \le 6 \\
  & \iff x \le 18.
\end{align*}`

Because we assumed $x\ge 5$, the range of $x$ that satisfies the inequality is $$5\le x \le 18. \quad\cdots\tcirc{2}$$
{{% /li %}}
{{% /ol %}}

From $\tcirc{1}$ and $\tcirc{2}$, the solution is $\boldsymbol{ \dfrac{12}{5}\le x \le 18 }.$

{{% enum b %}}
Because $x+2=0$ at $x=-2$ and $x-1=0$ at $x=1$, we will divide the cases at $x=-2$ and $x=1$.

{{% ol i %}}
{{% li %}}
When $x<-2$,
`\begin{align*}
  & |x+2|-|x-1|>x \\
  & \iff \hl{-(x+2) + (x-1)} > x \\
  & \iff -x-2 +x-1 > x \\
  & \iff -3 > x.
\end{align*}`

Its intersection with $x<-2$ is $$x<-3. \quad\cdots\tcirc{3}$$
{{% /li %}}
{{% li %}}
When $-2 \le x < 1$,
`\begin{align*}
  & |x+2|-|x-1|>x \\
  & \iff (x+2) \hl{+ (x-1)} > x \\
  & \iff 2x + 1 > x \\
  & \iff x > -1.
\end{align*}`

Its intersection with $-2 \le x < 1$ is $$-1 < x < 1. \quad\cdots\tcirc{4}$$
{{% /li %}}
{{% li %}}
When $x\ge 1$,
`\begin{align*}
  & |x+2|-|x-1|>x \\
  & \iff (x+2) - (x-1) > x \\
  & \iff x+2-x+1>x \\
  & \iff 3 > x.
\end{align*}`

Its intersection with $x\ge 1$ is $$1\le x < 3. \quad\cdots\tcirc{5}$$
{{% /li %}}
{{% /ol %}}

From $\tcirc{3}$, $\tcirc{4}$ and $\tcirc{5}$, the complete solution is $\boldsymbol{ x<-3, \text{ or } -1 < x < 3 }.$

{{% /details %}}
