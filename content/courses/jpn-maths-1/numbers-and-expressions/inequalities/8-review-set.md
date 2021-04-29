---
title: Review Set 4
slug: review-4
description: Review of inequalities and their applications.

date: 2021-03-08 10:33:10.000 +1100
lastMod: 2021-03-08 10:33:10.000 +1100

type: docs
toc: false
math: true
draft: false

tags:
  - inequality
  - linear equation
  - absolute value
  - algebra

menu:
  math1-numbers:
    parent: Linear Inequalities
    name: ✏️ Review 4
    weight: 18

# previous/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 18
---

1. If you divide a certain integer by $20$ and round the result to the nearest whole, the answer is $17$. Find the smallest and largest possible values for that integer.

{{% details title="Solution" %}}

1. Smallest value is $330$, largest value is $349$.

{{% note Solution %}} Let the integer be $n$. Then, the range of $n\div 20$ should be $$ 16.5 \le \dfrac{n}{20} < 17.5 $$ because it should round to $17.$ Then

\begin{align}
  16.5 \le \dfrac{n}{20} < 17.5 &\implies 16.5 \times 20 \le n < 17.5 \times 20 \\\\
  &\implies 330 \le n < 350.
\end{align}

Therefore, the lowest value for $n$ is $ \boldsymbol{ 330 }$ and the highest value is $ \boldsymbol{ 349 }$.

{{% /details %}}

2. Solve the following inequalities.
    1. $2(x-3)\le -x+8$
    2. $\dfrac{1}{3}x > \dfrac{3}{5}x - 2$
    3. $\dfrac{5x+1}{3}-\dfrac{3+2x}{4}\ge \dfrac{1}{6}(x-5)$
    4. $0.3x - 7.2>0.5(x-2)$

3. Solve the following inequalities.{{% mn ref3 %}}a. From Kurashiki Univ. of Sci. and the Arts.{{% /mn %}}
    1. $\displaystyle \begin{cases} 6(x+1)>2x-5 \\\\ 25-\dfrac{6-x}{2}\le 3x \end{cases}$
    2. $\dfrac{5(x-1)}{2}\le 2(2x+1) < \dfrac{7(x-1)}{4}$


{{% details title="Answer" %}}

2. 
    1. $x \le \dfrac{14}{3}$
    2. $x < \dfrac{15}{2}$
    3. $x \ge -\dfrac{12}{5}$
    4. $x < -31$

3. 
    1. $x \ge \dfrac{44}{5}$
    2. $-3 \le x < -\dfrac{5}{3}$

{{% note Solution %}} 

2. 

\begin{align}
  \text{a.} \qquad & 2(x-3)\le -x+8 \\\\
  \implies & 2x - 6 \le -x + 8 \\\\
  \implies & 3x \le 14 \\\\
  \implies & \boldsymbol{ x \le \dfrac{14}{3} }.
\end{align}

\begin{align}
  \text{b.} \qquad & \dfrac{1}{3}x > \dfrac{3}{5}x - 2 \\\\
  \implies & 2 > \dfrac{3}{5}x - \dfrac{1}{3}x \\\\
  \implies & 2 > \dfrac{4}{15}x \\\\
  \implies & 2\cdot \dfrac{15}{4} > x \\\\
  \implies & \boldsymbol{ x < \dfrac{15}{2} }. 
\end{align}

{{% mn q2c tips %}}
$(1)$ Multiplied both sides by the LCM of $3$, $4$, and $6$ ($12$).
{{% /mn %}}
\begin{align}
  \text{c.} \qquad & \dfrac{5x+1}{3}-\dfrac{3+2x}{4}\ge \dfrac{1}{6}(x-5) \\\\
  \implies & 4(5x+1) - 3(3+2x) \ge 2(x-5) \tag{1} \\\\
  \implies & 20x + 4 - 9 - 6x \ge 2x - 10 \\\\
  \implies & 12x \ge -5 \\\\
  \implies & \boldsymbol{ x \ge -\dfrac{12}{5} }.
\end{align}

\begin{align}
  \text{d.} \qquad & 0.3x - 7.2>0.5(x-2) \\\\
  \implies & 0.3x - 7.2 > 0.5x - 1 \\\\
  \implies & -6.2 > 0.2x \\\\
  \implies & -6.2 \cdot 5 > x \\\\
  \implies & \boldsymbol{ x < -31 }.
\end{align}

<br>

3. 

$\hspace{0.5em} \text{a.} \quad$ From the first inequality,
\begin{align}
  & 6(x+1)>2x-5 \\\\
  \implies & 6x + 6 > 2x - 5 \\\\
  \implies & 4x > -11 \\\\
  \implies & x > -\dfrac{11}{4}, \qdcirc{1}
\end{align}

and from the second inequality,
\begin{align}
  & 25-\dfrac{6-x}{2}\le 3x \\\\
  \implies & 50 - (6-x) \le 6x \\\\
  \implies & 50 -6 + x \le 6x \\\\
  \implies & 44 \le 5x \\\\
  \implies & x \ge \dfrac{44}{5}. \qdcirc{2}
\end{align}

The intersection of $\tcirc{1}$ and $\tcirc{2}$ is $\boldsymbol{ x \ge \dfrac{44}{5} }.$

$\hspace{0.5em} \text{b.} \quad$ The given inequality is equivalent to
$\displaystyle \begin{cases}
  \dfrac{5(x-1)}{2}\le 2(2x+1), \\\\
  2(2x+1) < \dfrac{7(x-1)}{4}.
\end{cases}$

From the first inequality,
\begin{align}
  & \dfrac{5(x-1)}{2}\le 2(2x+1) \\\\
  \implies & 5(x-1) \le 4(2x+1) \\\\
  \implies & 5x-5 \le 8x + 4 \\\\
  \implies & -9 \le 3x \\\\
  \implies & x \ge -3. \qdcirc{3}
\end{align}

From the second inequality,
\begin{align}
  & 2(2x+1) < \dfrac{7(x-1)}{4} \\\\
  \implies & 8(2x+1) < 7(x-1) \\\\
  \implies & 16x + 8 < 7x - 7 \\\\
  \implies & 9x < -15 \\\\
  \implies & x < -\dfrac{5}{3}.  \qdcirc{4}
\end{align}

The intersection of $\tcirc{3}$ and $\tcirc{4}$ is $\boldsymbol{ -3 \le x < -\dfrac{5}{3} }.$

{{% /details %}}

4. For the simultaneous inequality $\displaystyle \begin{cases} x>3a+1 \\\\ 2x-1>6(x-2)\end{cases}$, find the range of $a$ that satisfies the following conditions. {{% mn ref4 refs %}}From Kobe Gakuin Univ.{{% /mn %}}
    1. There does not exist any solutions.
    2. $2$ is a solution.
    3. There are exactly three integer solutions.

{{% details title="Answer" %}}

4. 
    1. $a \ge \dfrac{7}{12}$
    2. $a < \dfrac{1}{3}$
    3. $-\dfrac{2}{3} \le a < -\dfrac{1}{3}$

{{% note Solution %}} Let's first solve the inequalities in terms of $x$. The first inequality is already solved, and we will name it as $\tcirc{1}$. The second inequality leads to
\begin{align}
  & 2x-1>6(x-2) \\\\
  \implies & 2x-1>6x-12 \\\\
  \implies & 11>4x \\\\
  \implies & x<\dfrac{11}{4}. \qdcirc{2}
\end{align}

{{% mn q4a tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-rev-4a.png" %}} Diagram for $(a)$.
{{% /mn %}}
$\hspace{0.5em} \text{a.} \quad$ For $\tcirc{1}$ and $\tcirc{2}$ to share no common range, we must have $ 3a+1 \ge \dfrac{11}{4} $. Thus
\begin{align}
  & 3a+1 \ge \dfrac{11}{4} \\\\
  \implies & 3a \ge \dfrac{7}{4} \\\\
  \implies & \boldsymbol{ a \ge \dfrac{7}{12} }.
\end{align}

{{% mn q4b tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-rev-4b.png" %}} Diagram for $(b)$.
{{% /mn %}}
$\hspace{0.5em} \text{b.} \quad$ In order to have $2$ as a solution, $\tcirc{1}$ must also include $2$ in their range. Thus
\begin{align}
  & 3a + 1 < 2 \\\\
  \implies & 3a < 1 \\\\
  \implies & \boldsymbol{ a < \dfrac{1}{3} }.
\end{align}

{{% mn q4c tips %}}
{{% img loc="sidenote" src="courses/jpn-maths-1/numbers-and-expressions/ineq-rev-4c.png" %}} Diagram for $(c)$.
{{% /mn %}}
$\hspace{0.5em} \text{c.} \quad$ Because $2 < \dfrac{11}{4} < 3$, the largest integer that can be part of the solution is $2$. Then the smallest integer solution must be $0$, which $\tcirc{1}$ should include.
\begin{align}
  & -1 \le 3a+1 < 0 \\\\
  & -2 \le 3a < -1 \\\\
  & \boldsymbol{ -\dfrac{2}{3} \le a < -\dfrac{1}{3}}.
\end{align}

<hr style="visibility:hidden" />

{{% /details %}}

5. If $a$ and $b$ are constants, solve $ax > 3x - b$.

{{% details title="Answer" %}}

5. $\begin{cases} 
x > \dfrac{b}{3-a} & \text{if $a>3$}, \\\\
x < \dfrac{b}{3-a} & \text{if $a<3$}, \\\\
\text{any real number} & \text{if $a=3$ and $b>0$}, \\\\
\text{no solution} & \text{if $a=3$ and $b<0$}.
\end{cases}$

{{% note Solution %}} From the inequality we find $(a-3)x > -b$. We then need to consider the possible signs of $a-3$.

- When $a-3>0$, $x > -\dfrac{b}{a-3}.$
- When $a-3<0$, $x < -\dfrac{b}{a-3}.$
- When $a-3=0$, the equality becomes $0 > -b$. This inequality is true if $ b>0 $.

Combining the above, we conclude

\begin{cases} 
\boldsymbol{ x > \dfrac{b}{3-a} } & \textbf{if $\boldsymbol{ a>3 }$}, \\\\
\boldsymbol{ x < \dfrac{b}{3-a} } & \textbf{if $\boldsymbol{ a<3 }$}, \\\\
\textbf{any real number} & \textbf{if $\boldsymbol{ a=3 }$ and $\boldsymbol{ b>0 }$}, \\\\
\textbf{no solution} & \textbf{if $\boldsymbol{ a=3 }$ and $\boldsymbol{ b<0 }$}.
\end{cases}

{{% /details %}}

6. Sarah needs to get to the station 1.5 km away from her house within 12 minutes. If she can walk at 60 m/min and run at 180 m/min, at least how many metres does she run for?

*Hint:* $\text{(distance)} = \text{(speed)} \times \text{(time)}$.

7. Kim mixes 8% saltwater with 800 g of 5% saltwater. If she wants to set the concentration in between 6% and 6.5% (inclusive), how much 8% saltwater does she need to add?

*Hint:* $\text{concentration(\%)} = \dfrac{\text{(amount of salt)}}{\text{(amount of salt water)}}\times 100 \\% $

{{% details title="Answer" %}}

6. $\text{1170 m}$
7. $\text{no less than 400 g and no more than 800 g}$

{{% note Solution %}}

6. If we set the distance Sarah runs as $d$ metres, Sarah can walk $1500 - d$ metres. The time she spends running is thus $\dfrac{d}{180}$ minutes and the time she spends walking is $\dfrac{1500-d}{60} minutes.{{% sn q5 %}}$\text{(time)}$ $=\dfrac{\text{(distance)}}{\text{(speed)}}$.{{% /sn %}} Then
{{% mn q5 tips %}}
$(1)$ Multiply $180$ on both sides
{{% /mn %}}
\begin{align}
  & \dfrac{d}{180} + \dfrac{1500-d}{60} \le 12 \tag{1} \\\\
  \implies & d + 3(1500-d) \le 12 \cdot 180 \\\\
  \implies & d + 4500 - 3d \le 2160 \\\\
  \implies & 2340 \le 2d \\\\
  \implies & d \ge 1170.
\end{align}
Therefore, she needs to run at least $\textbf{1170 m}.$

<br>

7. Let the mass of 8% salt water be $m$ g. The amount of salt in 500 g of 5% saltwater is $$ \text{800 g} \times 0.05 = \text{40 g}, $$ and the amount of salt in $m$ g of 8% saltwater is $$ \text{$m$ g} \times 0.08 = \text{$0.08m$ g}. $$ Then the total amount of salt is $ (40 + 0.08m)$ g, and the total mass of the saltwater is $ (800 + m) $ g. Because the concentration needs to be in between 6% and 6.5%,
\begin{align}
  & 6 \le \dfrac{40 + 0.08 m}{800 + m} \times 100 \le 6.5 \\\\
  \implies & 6(800+m) \le 100(40+0.08m) \le 6.5(800+m) \\\\
  \implies & 4800 + 6m \le 4000 + 8m \le 5200 + 6.5m.
\end{align}
From the first inequality,
\begin{align}
  4800 + 6m \le 4000 + 8m &\implies 800 \le 2m \\\\
  &\implies m \ge 400,
\end{align}
and from the second inequality,
\begin{align}
  4000 + 8m \le 5200 + 6.5m &\implies 1.5m \le 1200 \\\\
  &\implies m \le 1200 \times \dfrac{2}{3} \\\\
  &\implies m \le 800.
\end{align}
Therefore, Kim needs to add $\textbf{no less than 400 g and no more than 800 g}$ of 8% saltwater.

{{% /details %}}

8. Solve the following equations and inequalities. {{% mn ref8 refs %}}a. From Tohoku Fukushi Univ.<br>c. From Aichi Gakusen Univ.{{% /mn %}}
    1. $ |x-3|+|2x-3| = 9 $
    2. $ ||x-2|-4| = 3x$
    3. $ |2x-3| \le |3x+2| $
    4. $ 2|x+2| + |x-4| < 15 $

{{% details title="Answer" %}}

8. 
    1. $ x= -1, 5 $
    2. $ x=1 $
    3. $ x\le -5 \text{ or } x \ge \dfrac{1}{5} $
    4. $ -5 < x < 5 $

{{% note Solution %}}

$\hspace{0.5em} \text{a.} \quad$ We need to divide the ranges of $x$ at $x=3$ and $x=\dfrac{3}{2}$.

$\text{(i)}\quad$ When $x<\dfrac{3}{2}$,
\begin{align}
  |x-3|+|2x-3| = 9 &\implies -(x-3)-(2x-3) = 9 \\\\
  &\implies -x+3 -2x+3 = 9 \\\\
  &\implies -3x + 6 = 9 \\\\
  &\implies x = -1.
\end{align}
This answer is within the range of our assumption.

$\text{(ii)}\quad$ When $\dfrac{3}{2} \le x < 3$,
\begin{align}
  |x-3|+|2x-3| = 9 &\implies -(x-3)+(2x-3) = 9 \\\\
  &\implies -x+3 +2x-3 = 9 \\\\
  &\implies x = 9
\end{align}
This is not a solution because $x=9$ is outside $\dfrac{3}{2} \le x < 3$.

$\text{(iii)}\quad$ When $x\ge 3$,
\begin{align}
  |x-3|+|2x-3| = 9 &\implies (x-3)+(2x-3) = 9 \\\\
  &\implies x-3 +2x-3 = 9 \\\\
  &\implies 3x-6 = 9 \\\\
  &\implies x = 5.
\end{align}
This answer is within the range of our assumption.

Therefore, the solution to the equation is $\boldsymbol{ x= -1, 5 }.$

<br>

$\hspace{0.5em} \text{b.} \quad$ Let's first assume $x\ge 2$ and remove the inner absolute value.
\begin{align}
  ||x-2|-4| = 3x &\implies |(x-2) -4| = 3x \\\\
  &\implies |x-6| = 3x.
\end{align}

$\text{(i)}\quad$ When $x \ge 6$,
\begin{align}
  |x-6| = 3x &\implies x-6 = 3x \\\\
  &\implies -6 = 2x \\\\
  &\implies x = -3.
\end{align}
This is outside our assumed range of $x$.

$\text{(ii)}\quad$ When $2 \le x < 6$,
\begin{align}
  |x-6| = 3x &\implies -(x-6) = 3x \\\\
  &\implies -x+6 = 3x \\\\
  &\implies 6 = 4x \\\\
  &\implies x = \dfrac{3}{2}.
\end{align}
This is outside our assumed range of $x$.

Thus, we find there are no solutions if we assume $x\ge 2$. Now, let's assume $x<2$:
\begin{align}
  ||x-2|-4| = 3x &\implies |-(x-2) -4| = 3x \\\\
  &\implies |-x-2| = 3x \\\\
  &\implies |x+2| = 3x.
\end{align}

$\text{(iii)}\quad$ When $-2 \le x < 2$,
\begin{align}
  |x+2| = 3x &\implies x+2 = 3x \\\\
  &\implies 2 = 2x \\\\
  &\implies x = 1.
\end{align}
This solution satisfies our assumption.

$\text{(iv)}\quad$ When $x < -2$,
\begin{align}
  |x+2| = 3x &\implies -(x+2) = 3x \\\\
  &\implies -x-2 = 3x \\\\
  &\implies -2 = 4x \\\\
  &\implies x = -\dfrac{1}{2}.
\end{align}
This is outside our assumed range of $x$.

Therefore, we conclude that the solution to the equation is $\boldsymbol{ x=1 }.$

<br>

$\hspace{0.5em} \text{c.} \quad$ We need to divide the cases at $x=\dfrac{3}{2}$ and $x=-\dfrac{2}{3}$.

$\text{(i)}\quad$ When $x < -\dfrac{2}{3}$,
\begin{align}
  |2x-3| \le |3x+2| &\implies -(2x-3) \le -(3x+2) \\\\
  &\implies 2x-3 \ge 3x+2 \\\\
  &\implies -5 \ge x.
\end{align}
The intersection with our assumption $x \le -\dfrac{2}{3}$ is $x \le -5. \qdcirc{1}$

$\text{(ii)}\quad$ When $-\dfrac{2}{3} \le x < \dfrac{3}{2}$,
\begin{align}
  |2x-3| \le |3x+2| &\implies -(2x-3) \le (3x+2) \\\\
  &\implies -2x + 3 \le 3x + 2 \\\\
  &\implies 1 \le 5x \\\\
  &\implies x \ge \dfrac{1}{5}.
\end{align}
The intersection with our assumption $-\dfrac{2}{3} < x \le \dfrac{3}{2}$ is $\dfrac{1}{5} \le x < \dfrac{3}{2}. \qdcirc{2}$

$\text{(iii)}\quad$ When $x \ge \dfrac{3}{2}$,
\begin{align}
|2x-3| \le |3x+2| &\implies (2x-3) \le (3x+2) \\\\
&\implies -5 \le x.
\end{align}
The intersection with our assumption $x \ge \dfrac{3}{2}$ is $x \ge \dfrac{3}{2}. \quad \cdots \tcirc{3}$

The complete range of $x$ that satisfies the inequality is the union of $\tcirc{1}$, $\tcirc{2}$ and $\tcirc{3}$. Therefore $\boldsymbol{ x\le -5 \textbf{ or } x \ge \dfrac{1}{5}}.$

<br>

$\hspace{0.5em} \text{d.} \quad$ We need to divide the range of $x$ at $x=-2$ and $x=4$. 

$\text{(i)}\quad$ When $x < -2$,
\begin{align}
  2|x+2| + |x-4| < 15 &\implies -2(x+2) -(x-4) < 15 \\\\
  &\implies -2x-4 -x+4 < 15 \\\\
  &\implies -3x < 15 \\\\
  &\implies x > -5.
\end{align}
Since we assumed $x<-2$, we find $-5 < x <-2. \qdcirc{1}$

$\text{(ii)}\quad$ When $-2 \le x < 4$,
\begin{align}
  2|x+2| + |x-4| < 15 &\implies 2(x+2) -(x-4) < 15 \\\\
  &\implies 2x + 4 -x + 4 < 15 \\\\
  &\implies x < 7.
\end{align}
Since we assumed $-2 \le x < 4$, we find $-2 \le x < 4. \qdcirc{2}$

$\text{(iii)}\quad$ When $x \ge 4$,
\begin{align}
  2|x+2| + |x-4| < 15 &\implies 2(x+2) +(x-4) < 15 \\\\
  &\implies 2x+4 +x-4 < 15 \\\\
  &\implies 3x < 15 \\\\
  &\implies x<5.
\end{align}
Since we assumed $x \ge 4$, we find $4 \le x < 5. \qdcirc{3}$

From $tcirc{1}$, $tcirc{2}$ and $tcirc{3}$, we conclude that $\boldsymbol{ -5 < x < 5 }.$


{{% /details %}}