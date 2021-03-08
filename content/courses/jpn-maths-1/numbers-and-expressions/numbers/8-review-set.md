---
title: Review Set 3
slug: review-3
description: Review questions for absolute values and square roots.

date: 2020-08-31 21:07:32.960 +1000
lastMod: 2020-12-19 19:55:30.013 +1100

type: docs
toc: false
math: true
draft: false

tags:
  - real number
  - square root
  - absolute value
  - algebra

menu:
  math1-numbers:
    parent: Real Numbers
    name: ✏️ Review 3
    weight: 18

weight: 18
---

1. Express the value of $0.\dot{1}\dot{2} \times 0.\dot{2}\dot{7}$ as a simplified fraction. {{% mn ref1 refs %}}From Shinshu Univ.{{% /mn %}}

{{% details title="Answer" %}}
1. $\dfrac{4}{121}$

{{% note solution %}}

{{% mn 36 %}}Refer to [Converting decimals to fractions](../types-of-numbers/#converting-decimals-to-fractions) for more help.{{% /mn %}}If we set $x=0.\dot{1}\dot{2}$, $100x=12.\dot{1}\dot{2}$ and then

\begin{array}{rrll}
  & 100x & = 12.1212 \cdots & \\\\
 -(& x & = \phantom{0}0.1212 \cdots & ) \\\\[0.5em]
  \hline 
  & 99x & = 12. &&
\end{array}

Thus $x=\dfrac{12}{99} = \dfrac{4}{33}$. Likewise, if we set $y=0.\dot{2}\dot{7}$, $100y=27.\dot{2}\dot{7}$ and

\begin{array}{rrll}
  & 100y & = 27.2727\cdots & \\\\
 -(& y & = \phantom{0}0.2727\cdots & ) \\\\[0.5em]
  \hline 
  & 99y & = 27. &&
\end{array}

Thus $y=\dfrac{27}{99} = \dfrac{3}{11}$. Therefore

$$
  0.\dot{1}\dot{2} \times 0.\dot{2}\dot{7} = \frac{4}{\bcancel{33}^{11}} \times \frac{\bcancel{3}}{11} = \boldsymbol{ \frac{4}{121}. }
$$

{{% /details %}}


2. Find the values of the following expressions, without using a calculator.
    1. $\sqrt{1.21}$
    2. $\sqrt{0.0256}$
    3. $\dfrac{\sqrt{12}\sqrt{20}}{\sqrt{15}}$
3. When $a\gt 0, b\lt 0, c\lt 0$, simplify:
    1. $\sqrt{4a^2} + \sqrt{b^2}$
    2. $\sqrt{(a^2bc^3)^3}$

{{% details title="Answer" %}}
2. 
    1. $1.1$
    2. $0.16$
    3. $4$
3. 
    1. $2a - b$
    2. $-a^3bc^4 \sqrt{bc}$

{{% note solution %}}

2. Use the [basic properties of square roots](../square-roots/#basic-identities-of-square-roots).

{{% mn q2a tips %}}
$(1)$ $\sqrt{\dfrac{a}{b}}$ $=\dfrac{\sqrt{a}}{\sqrt{b}}$
{{% /mn %}}
\begin{align}
  \text{a.} \quad \sqrt{1.21} &= \sqrt{\frac{121}{100}} \tag{1} \\\\
  &= \frac{11}{10} = \boldsymbol{ 1.1. }
\end{align}

\begin{align}
  \text{b.} \quad \sqrt{0.0256} &= \sqrt{\frac{256}{10000}} \\\\
  &= \frac{16}{100} = \boldsymbol{ 0.16. }
\end{align}

\begin{align}
  \text{c.} \quad \frac{\sqrt{12}\sqrt{20}}{\sqrt{15}} &= \sqrt{\frac{12\cdot \bcancel{20}^4}{\bcancel{15}^3}} \\\\
  &= \sqrt{\frac{\bcancel{12}^4 \cdot 4}{\bcancel{3}}} \\\\
  &= \sqrt{4^2} = \boldsymbol{ 4. }
\end{align}

<br>

3. {{% mn 105 %}}Refer to [Square root of a polynomial](../removing-roots-2/#square-root-of-a-polynomial) for more help.{{% /mn %}}Think carefully whether the expressions are positive or negative. Remember, $\sqrt{a^2}$ is *not* equal to $a$, but $|a|$.

{{% mn q3a tips %}}
$(2)$ Because $a>0$ and $b<0$, $|2a|=2a$ and $|b|=-b$.
{{% /mn %}}
\begin{alignat}{2}
  \text{a.} \quad \sqrt{4a^2} + \sqrt{b^2} &= \sqrt{(2a)^2} + \sqrt{b^2} \\\\
  &= |2a| + |b| \\\\
  &= \boldsymbol{ 2a - b. } \tag{2}
\end{alignat}

{{% mn q3b tips %}}
$(3)$ Because $a$ is positive and $b, c$ are negative, $a^3bc^4$ has five negative numbers ($bc^4$) multiplied, and hence is negative.
{{% /mn %}}
\begin{alignat}{2}
  \text{b.} \quad \sqrt{(a^2bc^3)^3} &= \sqrt{a^6b^3c^9} \\\\
  &= \sqrt{\left(a^3bc^4\right)^2\cdot bc} \\\\
  &= \boldsymbol{ -a^3bc^4 \sqrt{bc} . } \tag{3}
\end{alignat}

{{% /details %}}


4. The following 'proves' that $8=-8$. Find where the error occurred, and explain why. {{% mn ref4 refs %}}From Miyazaki Univ.{{% /mn %}}
\begin{align}
  8 &= \sqrt{64} = \sqrt{2^6} = \sqrt{(-2)^6} \\\\
  &= \sqrt{ \left\\{ (-2)^3 \right\\}^2 } = (-2)^3 = -8.
\end{align}

{{% details title="Answer" %}}
4. $\sqrt{ \left\\{ (-2)^3 \right\\}^2 }=(-2)^3$ is wrong, because $(-2)^3=-8$ is a negative number. The correct answer is 

\begin{align}
  \sqrt{\\{ (-2)^3 \\}^2 } = \sqrt{(-8)^2} = \hl{|-8|} = 8.
\end{align}

{{% /details %}}


5. Calculate the following expressions.
    1. $\sqrt{200}+\sqrt{98}-3\sqrt{72}$
    2. $\sqrt{48}-\sqrt{27}+5\sqrt{12}$
    3. $\big(1+\sqrt{3}\big)^3$
    4. $\big(2\sqrt{6}+\sqrt{3}\big)\big(\sqrt{6}-4\sqrt{3}\big)$
    5. $\big(1-\sqrt{7}+\sqrt{3}\big)\big(1+\sqrt{7}+\sqrt{3}\big)$
    6. $\big(\sqrt{2}-2\sqrt{3}-3\sqrt{6}\big)^2$

{{% details title="Answer" %}}
5. 
    1. $-\sqrt{2}$
    2. $11\sqrt{3}$
    3. $10 + 6\sqrt{3}$
    4. $-21\sqrt{2}$
    5. $2\sqrt{3} - 3$
    6. $68 + 36\sqrt{2} - 12\sqrt{3} - 4\sqrt{6}$

{{% note solution %}}

Use the [basic identities of square roots](../square-roots/#basic-identities-of-square-roots) and [polynomial identities](../../polynomials/expanding-identities/) to simplify the expressions.

{{% mn q5a tips %}}
$(1)$ Use the identity that $\sqrt{a^2x} = a\sqrt{x}$ when $a$ is positive.
{{% /mn %}}
\begin{align}
  \text{a.} \quad \sqrt{200}+\sqrt{98}-3\sqrt{72} &= \sqrt{2\cdot 10^2} + \sqrt{2 \cdot 7^2} - 3\sqrt{2 \cdot 6^2} \tag{1} \\\\
  &= 10\sqrt{2} + 7\sqrt{2} - 18\sqrt{2} \\\\
  &= \boldsymbol{ -\sqrt{2}. }
\end{align}

{{% mn q5b tips %}}
$(2)$ Use the identity that $\sqrt{a^2x} = a\sqrt{x}$ when $a$ is positive.
{{% /mn %}}
\begin{align}
  \text{b.} \quad \sqrt{48}-\sqrt{27}+5\sqrt{12} &= \sqrt{3 \cdot 4^2} - \sqrt{3\cdot 3^2} + 5\sqrt{3 \cdot 2^2} \tag{2} \\\\
  &= 4\sqrt{3} - 3\sqrt{3} + 10\sqrt{3} \\\\
  &= \boldsymbol{ 11\sqrt{3}. }
\end{align}

{{% mn q5c tips %}}
$(3)$ Polynomial identity 5: $(a+b)^3$ $= a^3 + 3a^2b + 3ab^2 + b^3$
{{% /mn %}}
\begin{align}
  \text{c.} \quad \big(1+\sqrt{3}\big)^3 &= 1 + 3\sqrt{3} + 3\sqrt{3}^2 + \sqrt{3}^3 \tag{3} \\\\
  &= 1 + 3\sqrt{3} + 3\cdot 3 + 3\sqrt{3} \\\\
  &= \boldsymbol{ 10 + 6\sqrt{3}. }
\end{align}

{{% mn q5d tips %}}
$(4)$ Polynomial identity 3: $(ax+b)(cx+d)$ $=acx^2 + (ad+bc)x + bd$
{{% /mn %}}
\begin{align}
  \text{d.} \quad \big(2\sqrt{6}+\sqrt{3}\big)\big(\sqrt{6}-4\sqrt{3}\big) &= 2\cdot 6 + (-8+1)\sqrt{3}\sqrt{6} - 4\cdot 3 \tag{4} \\\\
  &= 12 - 7\sqrt{18} - 12 \\\\
  &= -7\sqrt{18} \\\\
  &= \boldsymbol{ -21\sqrt{2}. }
\end{align}

{{% box %}}
{{% note "Alt. Solution" %}}
You can factorise $\sqrt{3}$ first to make the calculation bit easier:
\begin{align}
  \big(2\sqrt{6}+\sqrt{3}\big)\big(\sqrt{6}-4\sqrt{3}\big) &= \sqrt{3}\big(2\sqrt{2}+1\big)\times \sqrt{3}\big(\sqrt{2}-4\big) \\\\
  &= 3\big(2\sqrt{2}+1\big)\big(\sqrt{2}-4\big) \\\\
  &= 3\big(2\cdot 2 - 7\sqrt{2} - 4\big) \\\\
  &= 3\cdot \big(-7\sqrt{2}\big) \\\\
  &= \boldsymbol{ -21\sqrt{2}. }
\end{align}

{{% /box %}}

{{% mn q5e tips %}}
$(5)$ $(A+B)(A-B)$ form
{{% /mn %}}
\begin{align}
  \text{e.} \quad & \big(1-\sqrt{7}+\sqrt{3}\big)\big(1+\sqrt{7}+\sqrt{3}\big) \\\\
  &= \big\\{ \big(1+\sqrt{3}\big) - \sqrt{7} \big\\}\big\\{ \big(1+\sqrt{3}\big) + \sqrt{7} \big\\} \tag{5}\\\\
  &= \big(1+\sqrt{3}\big)^2 - 7 \\\\
  &= 1 + 2\sqrt{3} + 3 - 7 \\\\
  &= \boldsymbol{ 2\sqrt{3} - 3 .}
\end{align}

{{% mn q5f tips %}}
$(6)$ $(a+b+c)^2$ $= a^2+b^2+c^2$ $+$ $2ab+2bc+2ca$
{{% /mn %}}
\begin{align}
  \text{f.} \quad & \big(\sqrt{2}-2\sqrt{3}-3\sqrt{6}\big)^2 \\\\
  &= \sqrt{2}^2 + \big(-2\sqrt{3}\big)^2 + \big(-3\sqrt{6}\big)^2 \\\\
  &\phantom{=}+ 2\sqrt{2}\cdot\big(-2\sqrt{3}\big) + 2\big(-2\sqrt{3}\big)\cdot\big(-3\sqrt{6}\big) + 2\big(-3\sqrt{6}\big)\cdot\sqrt{2} \tag{6} \\\\
  &= 2 + 12 + 54 -4\sqrt{6} + 12\sqrt{18} -6\sqrt{12} \\\\
  &= \boldsymbol{ 68 - 4\sqrt{6} + 36\sqrt{2} - 12\sqrt{3}. }
\end{align}

{{% /details %}}


6. Rationalise the denominators and simplify the fractions.
    1. $\dfrac{1}{\sqrt{3}-\sqrt{5}}$
    2. $\dfrac{\sqrt{3}}{1+\sqrt{6}}-\dfrac{\sqrt{2}}{4+\sqrt{6}}$
    3. $\dfrac{1}{\sqrt{2}+1}+\dfrac{1}{\sqrt{3}+\sqrt{2}}+\dfrac{1}{\sqrt{4}+\sqrt{3}}+\dfrac{1}{\sqrt{5}+\sqrt{4}}$
    4. $\dfrac{1}{\sqrt{2}+\sqrt{3}+\sqrt{5}}+\dfrac{1}{\sqrt{2}-\sqrt{3}-\sqrt{5}}$

{{% details title="Answer" %}}
6. 
    1. $-\dfrac{\sqrt{3}+\sqrt{5}}{2}$
    2. $\dfrac{\sqrt{2}}{5}$
    3. $\sqrt{5}-1$
    4. $\dfrac{ 3\sqrt{2}-\sqrt{30}}{6}$

{{% note solution %}}

Use different [rationalising strategies](../removing-roots-1/#rationalising-the-denominators) to remove the square roots in the denominators.

{{% mn q6a tips %}}
$(1)$ Note the end result is negative, because $\sqrt{3}-\sqrt{5}$ is negative.
{{% /mn %}}
\begin{align}
  \text{a.} \quad \frac{1}{\sqrt{3}-\sqrt{5}} &= \frac{\big(\sqrt{3}+\sqrt{5}\big)}{\big(\sqrt{3}-\sqrt{5}\big)\big(\sqrt{3}+\sqrt{5}\big)} \\\\
  &= \frac{\sqrt{3}+\sqrt{5}}{3-5} \\\\
  &= \boldsymbol{ -\frac{\sqrt{3}+\sqrt{5}}{2} . } \tag{1}
\end{align}

{{% mn q6b tips %}}
$(2)$ We multiply the first fraction with $\sqrt{6}-1$ instead of $1-\sqrt{6}$, which is negative.
{{% /mn %}}
\begin{align}
  \text{b.} \quad & \dfrac{\sqrt{3}}{1+\sqrt{6}}-\dfrac{\sqrt{2}}{4+\sqrt{6}} \\\\
  &= \dfrac{\sqrt{3}\big(\sqrt{6}-1\big)}{\big(\sqrt{6}+1\big)\big(\sqrt{6}-1\big)}-\dfrac{\sqrt{2}\big(4-\sqrt{6}\big)}{\big(4+\sqrt{6}\big)\big(4-\sqrt{6}\big)} \tag{2} \\\\
  &= \dfrac{\sqrt{18}-\sqrt{3}}{6-1} - \dfrac{4\sqrt{2} - \sqrt{12}}{16-6} \\\\
  &= \dfrac{3\sqrt{2}-\sqrt{3}}{5} - \dfrac{4\sqrt{2} - 2\sqrt{3}}{10} \\\\
  &= \dfrac{6\sqrt{2}-2\sqrt{3}}{10} + \dfrac{-4\sqrt{2} + 2\sqrt{3}}{10} \\\\
  &= \dfrac{2\sqrt{2}}{10} \\\\
  &= \boldsymbol{ \dfrac{\sqrt{2}}{5}. }
\end{align}

{{% mn q6c tips %}}
$(3)$ First rationalise the denominators.
{{% /mn %}}
\begin{align}
  \text{c.} \quad & \dfrac{1}{\sqrt{2}+1}+\dfrac{1}{\sqrt{3}+\sqrt{2}}+\dfrac{1}{\sqrt{4}+\sqrt{3}}+\dfrac{1}{\sqrt{5}+\sqrt{4}} \tag{3} \\\\
  &= \big(\sqrt{2}-1\big) + \big(\sqrt{3}-\sqrt{2}\big) + \big(\sqrt{4}-\sqrt{3}\big) + \big(\sqrt{5}-\sqrt{4}\big) \\\\
  &= \boldsymbol{ \sqrt{5}-1. }
\end{align}


$\hspace{0.5em} \text{d.} \quad $ We can rationalise each fraction and combine the result. Note that because $\sqrt{2}^2+\sqrt{3}^2=\sqrt{5}^2$, it is more convenient to split the square roots as $(\sqrt{2}+\sqrt{3})$ and $\sqrt{5}$.

\begin{align}
  \dfrac{1}{\big(\sqrt{2}+\sqrt{3}\big)+\sqrt{5}}
  &= \dfrac{\big(\sqrt{2}+\sqrt{3}\big)-\sqrt{5}}{\big\\{\big(\sqrt{2}+\sqrt{3}\big)+\sqrt{5}\big\\}\big\\{\big(\sqrt{2}+\sqrt{3}\big)-\sqrt{5}\big\\}} \\\\
  &= \dfrac{\sqrt{2}+\sqrt{3}-\sqrt{5}}{\big(\sqrt{2}+\sqrt{3}\big)^2 - 5} \\\\
  &= \dfrac{\sqrt{2}+\sqrt{3}-\sqrt{5}}{2 + 2\sqrt{6} + 3 - 5} \\\\
  &= \dfrac{\sqrt{2}+\sqrt{3}-\sqrt{5}}{2\sqrt{6}},
\end{align}

\begin{align}
  \dfrac{1}{\big(\sqrt{2}-\sqrt{3}\big)-\sqrt{5}}
  &= \dfrac{\big(\sqrt{2}-\sqrt{3}\big)+\sqrt{5}}{\big\\{\big(\sqrt{2}-\sqrt{3}\big)-\sqrt{5}\big\\}\big\\{\big(\sqrt{2}-\sqrt{3}\big)+\sqrt{5}\big\\}} \\\\
  &= \dfrac{\sqrt{2}-\sqrt{3}+\sqrt{5}}{\big(\sqrt{2}-\sqrt{3}\big)^2 - 5} \\\\
  &= \dfrac{\sqrt{2}-\sqrt{3}+\sqrt{5}}{2 - 2\sqrt{6} + 3 - 5} \\\\
  &= \dfrac{\sqrt{2}-\sqrt{3}+\sqrt{5}}{-2\sqrt{6}} \\\\
  &= \dfrac{-\sqrt{2}+\sqrt{3}-\sqrt{5}}{2\sqrt{6}}.
\end{align}

Then

{{% mn q6d tips %}}
$(4)$ Rationalise the denominator.
{{% /mn %}}
\begin{align}
  & \dfrac{1}{\sqrt{2}+\sqrt{3}+\sqrt{5}}+\dfrac{1}{\sqrt{2}-\sqrt{3}-\sqrt{5}} \\\\
  &= \dfrac{\sqrt{2}+\sqrt{3}-\sqrt{5}}{2\sqrt{6}} + \dfrac{-\sqrt{2}+\sqrt{3}-\sqrt{5}}{2\sqrt{6}} \\\\
  &= \dfrac{2\sqrt{3}-2\sqrt{5}}{2\sqrt{6}} \\\\
  &= \dfrac{\sqrt{3}-\sqrt{5}}{\sqrt{6}} \\\\
  &= \dfrac{\sqrt{18}-\sqrt{30}}{6} \tag{4} \\\\
  &= \boldsymbol{ \dfrac{3\sqrt{2}-\sqrt{30}}{6}. }
\end{align}

{{% box %}}
{{% note "Alt. Solution" %}}

{{% mn q6d2 tips %}}
$(5)$ Reduce the fractions to the common denominator, and add them together.<br><br>
$(6)$ Rationalise the denominator.
{{% /mn %}}
\begin{align}
  & \dfrac{1}{\sqrt{2}+\big(\sqrt{3}+\sqrt{5}\big)}+\dfrac{1}{\sqrt{2}-\sqrt{3}-\sqrt{5}} \\\\
  &= \dfrac{1}{\hl{\sqrt{2}+\big(\sqrt{3}+\sqrt{5}\big)}}+\dfrac{1}{\hl{\sqrt{2}-\big(\sqrt{3}+\sqrt{5}\big)}} \\\\
  &= \dfrac{\sqrt{2}-\big(\sqrt{3}+\sqrt{5}\big)}{\big\\{\sqrt{2}+\big(\sqrt{3}+\sqrt{5}\big)\big\\}\big\\{\sqrt{2}-\big(\sqrt{3}+\sqrt{5}\big)\big\\}} \\\\
  &\phantom{=}+\dfrac{\sqrt{2}+\big(\sqrt{3}+\sqrt{5}\big)}{\big\\{\sqrt{2}-\big(\sqrt{3}+\sqrt{5}\big)\big\\}\big\\{\sqrt{2}+\big(\sqrt{3}+\sqrt{5}\big)\big\\}} \tag{5} \\\\
  &= \dfrac{2\sqrt{2}}{\sqrt{2}^2-\big(\sqrt{3}+\sqrt{5}\big)^2} \\\\
  &= \dfrac{2\sqrt{2}}{2 - 3 - 2\sqrt{15} - 5} \\\\
  &= \dfrac{2\sqrt{2}}{-6-2\sqrt{15}} \\\\
  &= \dfrac{-\sqrt{2}}{3+\sqrt{15}} \\\\
  &= \dfrac{-\sqrt{2}\big(\sqrt{15}-3\big)}{\big(3+\sqrt{15}\big)\big(\sqrt{15}-3\big)} \tag{6} \\\\
  &= \dfrac{-\sqrt{30}+3\sqrt{2}}{15-9} \\\\
  &= \boldsymbol{ \dfrac{ 3\sqrt{2}-\sqrt{30}}{6}. }
\end{align}

{{% /box %}}

{{% /details %}}


7. When $A=\sqrt{x^2-6x+9}-\sqrt{x^2+6x+9}$, find all possible values of $A$.

{{% details title="Answer" %}}

7. $$
A=\begin{cases}
6, & \text{when $x<-3$,} \\\\
-2x, & \text{when $-3\le x<3$,} \\\\
-6, & \text{when $x\ge 3$.}
\end{cases}
$$

{{% note solution %}}

{{% mn 362 %}} See [Square root of a polynomial](../removing-roots-2/#square-root-of-a-polynomial) for more help.{{% /mn %}}
Let's complete the square first:
\begin{align}
  A &= \sqrt{x^2-6x+9}-\sqrt{x^2+6x+9} \\\\
  &= \sqrt{(x-3)^2}-\sqrt{(x+3)^2} \\\\
  &= |x-3| - |x+3|. 
\end{align}

We can see, the value of $A$ would change when the signs of $x-3$ or $x+3$ change.

  - When $x\ge 3$, both $x-3$ and $x+3$ are positive, and $$ A = x-3 - (x+3) = \boldsymbol{ -6. } $$
  - When $-3\le x<3$, $x-3$ is negative but $x+3$ is positive, and $$ A = -(x-3) - (x+3) = \boldsymbol{ -2x. } $$
  - When $x<-3$, both $x-3$ and $x+3$ are negative, and $$ A = -(x-3) + (x+3) = \boldsymbol{ 6. } $$

{{% /details %}}


8. Solve the double square roots and simplify the expressions. {{% mn ref8 refs %}}a. From Tokyo Univ. of Marine Science and Technology.<br>b. From Polytechnic Univ.<br>c. From Tokyo Denki Univ.{{% /mn %}}
    1. $\sqrt{11+4\sqrt{6}}$
    2. $\dfrac{1}{\sqrt{7-4\sqrt{3}}}$
    3. $\sqrt{3+\sqrt{5}}+\sqrt{3-\sqrt{5}}$
9. Simplify the following expressions. {{% mn ref9 refs %}}a. From Osaka Sangyo Univ.<br>b. From Hokkaido College of Pharmacy.{{% /mn %}}
    1. $\sqrt{9+4\sqrt{4+2\sqrt{3}}}$
    2. $\sqrt{7-\sqrt{21+\sqrt{80}}}$

{{% details title="Answer" %}}
8. 
    1. $2\sqrt{2} + \sqrt{3}$
    2. $2+\sqrt{3}$
    3. $\sqrt{10}$
9. 
    1. $1+2\sqrt{3}$
    2. $2$

{{% note solution %}}

8. Refer to [Double square roots](../removing-roots-2/#double-square-roots) for more help.

{{% mn q8a tips %}}
$(1)$ $4\sqrt{6}$ $=2\cdot 2\sqrt{6}$ $=2\cdot\sqrt{2^2\cdot 6}$ $=2\sqrt{24}$<br><br>
$(2)$ $a + b + 2\sqrt{ab}$ $=\big(\sqrt{a}+\sqrt{b}\big)^2$
{{% /mn %}}
\begin{align}
  \text{a.} \quad \textstyle\sqrt{11+4\sqrt{6}} &= \textstyle\sqrt{11+2\sqrt{24}} \tag{1} \\\\
  &= \textstyle\sqrt{8 + 3 + 2\sqrt{8}\sqrt{3}} \\\\
  &= \textstyle\sqrt{\big(\sqrt{8}+\sqrt{3}\big)^2} \tag{2} \\\\
  &= \sqrt{8} + \sqrt{3} \\\\
  &= \boldsymbol{ 2\sqrt{2} + \sqrt{3}. }
\end{align}

$\hspace{0.5em} \text{b.} \quad$ The denominator of the expression is

{{% mn q8b tips %}}
$(3)$ $4\sqrt{3}$ $=2\cdot 2\sqrt{3}$ $=2\cdot\sqrt{2^2\cdot 3}$ $=2\sqrt{12}$<br><br>
$(4)$ This is *not* equal to $\sqrt{3}-\sqrt{4}$, which is a negative number.
{{% /mn %}}
\begin{align}
  \textstyle\sqrt{7-4\sqrt{3}} &= \textstyle\sqrt{7-2\sqrt{12}} \tag{3} \\\\
  &= \textstyle\sqrt{3 + 4 - 2\sqrt{3}\sqrt{4}} \\\\
  &= \textstyle\sqrt{\big(\sqrt{4}-\sqrt{3}\big)^2} \\\\
  &= \sqrt{4}-\sqrt{3} \tag{4} \\\\
  &= 2 - \sqrt{3}.
\end{align}

Therefore

{{% mn q8b2 tips %}}
$(5)$ Rationalising the denominator.
{{% /mn %}}
\begin{align}
  \dfrac{1}{\sqrt{7-4\sqrt{3}}} &= \dfrac{1}{2-\sqrt{3}} \\\\
  &= \dfrac{2+\sqrt{3}}{4-3} \tag{5} \\\\
  &= \boldsymbol{ 2+\sqrt{3}. }
\end{align}

$\hspace{0.5em} \text{c.} \quad$ We will multiply and divide the double square roots by $\sqrt{2}$ to complete the square:

{{% mn q8c tips %}}
$(6)$ Note that $\sqrt{\smash{(\sqrt{1}-\sqrt{5})^2}\vphantom{\sqrt{5}}}$ does *not* equal $1-\sqrt{5}$, which is negative.
{{% /mn %}}
\begin{align}
  & \textstyle\sqrt{3+\sqrt{5}}+\textstyle\sqrt{3-\sqrt{5}} \\\\
  &= \hl{\dfrac{\sqrt{6+2\sqrt{5}}}{\sqrt{2}}}+\hl{\dfrac{\sqrt{6-2\sqrt{5}}}{\sqrt{2}}} \\\\
  &= \dfrac{\sqrt{1+5+2\sqrt{\smash{1}\vphantom{5}}\sqrt{5}}}{\sqrt{2}}+\dfrac{\sqrt{1+5-2\sqrt{\smash{1}\vphantom{5}}\sqrt{5}}}{\sqrt{2}} \\\\
  &= \dfrac{1+\sqrt{5}}{\sqrt{2}} + \dfrac{\hl{\sqrt{5}-1}}{\sqrt{2}} \tag{6} \\\\
  &= \dfrac{2\sqrt{5}}{\sqrt{2}} \\\\
  &= \dfrac{2\sqrt{10}}{2} \\\\
  &= \boldsymbol{ \sqrt{10}. }
\end{align}

<br>

9. First remove the inner square root, and then try removing the outer one.

{{% mn q9a tips %}}
$(7)$ $\sqrt{12}$ $=\sqrt{2^2\cdot 3}$ $=2\sqrt{3}$
{{% /mn %}}
\begin{align}
  \text{a.} \quad \textstyle\sqrt{9+4\sqrt{4+2\sqrt{3}}} &= \textstyle\sqrt{9+4\sqrt{1+3+2\sqrt{\smash{1}\vphantom{3}}\sqrt{3}}} \\\\
  &= \textstyle\sqrt{9+4\sqrt{\big(1+\sqrt{3}\big)^2}} \\\\
  &= \textstyle\sqrt{9+4\big(1+\sqrt{3}\big)} \\\\
  &= \textstyle\sqrt{13+4\sqrt{3}} \\\\
  &= \textstyle\sqrt{13+2\sqrt{12}} \tag{7} \\\\
  &= \textstyle\sqrt{1+12+2\sqrt{1}\sqrt{12}} \\\\
  &= \textstyle\sqrt{\big(1+\sqrt{12}\big)^2} \\\\
  &= 1+\sqrt{12} \\\\
  &= \boldsymbol{ 1+2\sqrt{3} }.
\end{align}

{{% mn q9b tips %}}
$(8)$ $\sqrt{5}-1>0$
{{% /mn %}}
\begin{align}
  \text{b.} \quad \textstyle\sqrt{7-\sqrt{21+\sqrt{80}}} 
  &= \textstyle\sqrt{7-\sqrt{21+2\sqrt{20}}} \\\\
  &= \textstyle\sqrt{7-\sqrt{1+20+2\sqrt{1}\sqrt{20}}} \\\\
  &= \textstyle\sqrt{7-\sqrt{(1+\sqrt{20})^2}} \\\\
  &= \textstyle\sqrt{7-(1+\sqrt{20})} \\\\
  &= \textstyle\sqrt{6-\sqrt{20}} \\\\
  &= \textstyle\sqrt{6-2\sqrt{5}} \\\\
  &= \textstyle\sqrt{1+5-2\sqrt{1}\sqrt{5}} \\\\
  &= \textstyle\sqrt{(1-\sqrt{5})^2} \\\\
  &= \boldsymbol{ \sqrt{5}-1 }. \tag{8}
\end{align}

{{% /details %}}


10. When $x=\dfrac{1}{\sqrt{3}-\sqrt{2}}$ and $y=\dfrac{1}{\sqrt{3}+\sqrt{2}}$, find $x^3+x^2y+xy^2+y^3$. {{% mn ref10 refs %}}From Konan Univ.{{% /mn %}}
11. When $a=\dfrac{2}{3-\sqrt{5}}$, find: {{% mn ref11 refs %}}From Kagoshima Univ.{{% /mn %}}
    1. $a+\dfrac{1}{a}$
    2. $a^2+\dfrac{1}{a^2}$
    3. $a^5+\dfrac{1}{a^5}$

{{% details title="Answer" %}}
10. $20\sqrt{2}$
11. 
    1. $3$
    2. $7$
    3. $123$

{{% note solution %}}

10. Note the expression is [symmetric](../expressions-square-roots-2/#symmetric-expressions) in $x$ and $y$. So we can express the expression in terms of $x+y$ and $xy$. Let's calculate the values of $x+y$ and $xy$ first:

\begin{align}
  x+y &= \frac{1}{\sqrt{3}-\sqrt{2}} + \frac{1}{\sqrt{3}+\sqrt{2}} \\\\
  &= \frac{\big(\sqrt{3}+\sqrt{2}\big)+\big(\sqrt{3}-\sqrt{2}\big)}{\big(\sqrt{3}-\sqrt{2}\big)\big(\sqrt{3}+\sqrt{2}\big)} \\\\
  &= \frac{2\sqrt{3}}{3-2} \\\\
  &= 2\sqrt{3}
\end{align}
and
\begin{align}
  xy &= \dfrac{1}{\big(\sqrt{3}-\sqrt{2}\big)\big(\sqrt{3}+\sqrt{2}\big)} \\\\
  &= \dfrac{1}{3-2} \\\\
  &= 1.
\end{align}

Then,

{{% mn q10 tips %}}
$(1)$ $x^2+y^2$ $= (x+y)^2 - 2xy$
{{% /mn %}}
\begin{align}
  x^3+x^2y+xy^2+y^3 &= x^2(x+y)+y^2(x+y) \\\\
  &= (x+y)(x^2+y^2) \\\\
  &= (x+y)\\{ (x+y)^2 - 2xy \\} \tag{1} \\\\
  &= 2\sqrt{3}\big\\{ \big(2\sqrt{3}\big)^2 - 2\cdot 1 \big\\} \\\\
  &= 2\sqrt{3}(12-2) \\\\
  &= \boldsymbol{ 20\sqrt{2} }.
\end{align}

<br>

11. Note that we can use the answer to Part (a) to solve Parts (b) and (c).

\begin{align}
  \text{a.} \quad a+\frac{1}{a} &= \frac{2}{3-\sqrt{5}} + \frac{3-\sqrt{5}}{2} \\\\
  &= \frac{2\big(3+\sqrt{5}\big)}{3^2-5} + \frac{3-\sqrt{5}}{2} \\\\
  &= \frac{2\big(3+\sqrt{5}\big)}{4} + \frac{3-\sqrt{5}}{2} \\\\
  &= \frac{3+\sqrt{5}}{2} + \frac{3-\sqrt{5}}{2} \\\\
  &= \boldsymbol{ 3 }.
\end{align}

\begin{align}
  \text{b.} \quad a^2+\dfrac{1}{a^2} &= \left( a + \dfrac{1}{a} \right)^2 - 2 \\\\
  &= 3^2 - 2 \\\\
  &= \boldsymbol{ 7 }.
\end{align}

$\hspace{0.5em} \text{c.} \quad$ We will find the value of $a^3+\dfrac{1}{a^3}$ first:

\begin{align}
  a^3 + \dfrac{1}{a^3} &= \left(a+\dfrac{1}{a}\right)^3 - 3\left(a+\dfrac{1}{a}\right) \\\\
  &= 3^3 - 3\cdot 3 \\\\
  &= 18.
\end{align}

Then, because
\begin{align}
  \left(a^3+\dfrac{1}{a^3}\right)\left(a^2+\dfrac{1}{a^2}\right) &= \hl{a^5} + a + \frac{1}{a} + \hl{\frac{1}{a^5}},
\end{align}

\begin{align}
  a^5 + \frac{1}{a^5} &= \left(a^3+\dfrac{1}{a^3}\right)\left(a^2+\dfrac{1}{a^2}\right) - \left(a+\frac{1}{a}\right) \\\\[0.5em]
  &= 18\cdot 7 - 3 \\\\[0.5em]
  &= \boldsymbol{ 123 }.
\end{align}

{{% /details %}}


12. Let the decimal part of $\sqrt{9+4\sqrt{5}}$ be $a$. Find:
    1. $a^2-\dfrac{1}{a^2}$
    2. $a^3$
    3. $a^4-2a^2+1$

{{% details title="Answer" %}}
12. 
    1. $-8\sqrt{5}$
    2. $17\sqrt{5} - 38$
    3. $144 - 64\sqrt{5}$

{{% note solution %}}

We will first solve the [double square root](../removing-roots-2/#double-square-roots) of $a$ first.

\begin{align}
  \textstyle\sqrt{9+4\sqrt{5}} &= \textstyle\sqrt{9+2\sqrt{20}} \\\\
  &= \textstyle\sqrt{4+5+2\sqrt{20}} \\\\
  &= \textstyle\sqrt{(2+\sqrt{5})^2} \\\\
  &= 2+\sqrt{5}.
\end{align}

Because $\sqrt{5}$ is greater than $2(=\sqrt{4})$ but smaller than $3(=\sqrt{9})$, $$ 4 \le 2+\sqrt{5} \lt 5. $$ Hence its decimal part is

\begin{align}
  a &= 2+\sqrt{5}-4 = \sqrt{5}-2.
\end{align}

---

$\text{a.} \quad$ Because $$ a^2 - \frac{1}{a^2} = \left(a+\frac{1}{a}\right)\left(a-\frac{1}{a}\right), $$ let's find the value of $\dfrac{1}{a}$ first:

\begin{align}
  \frac{1}{a} &= \frac{1}{\sqrt{5}-2} \\\\
  &= \frac{\sqrt{5}+2}{5-2^2} \\\\
  &= \sqrt{5}+2.
\end{align}

Thus
\begin{align}
  a^2 - \frac{1}{a^2} &= \left(a+\frac{1}{a}\right)\left(a-\frac{1}{a}\right) \\\\
  &= \big\\{ \big(\sqrt{5}-2\big)+\big(\sqrt{5}+2\big) \\}\\{ \big(\sqrt{5}-2\big)-\big(\sqrt{5}+2\big) \big\\} \\\\
  &= \big( 2\sqrt{5} \big)\cdot( -4 ) \\\\
  &= \boldsymbol{ -8\sqrt{5} }.
\end{align}

---

{{% mn q12b tips %}}
$(1)$ $(a-b)^3$ $=a^3-3a^2b+3ab^2-b^3$
{{% /mn %}}
\begin{align}
  \text{b.} \quad a^3 &= \big(\sqrt{5}-2\big)^3 \\\\
  &= \sqrt{5}^3 - 3\sqrt{5}^2\cdot 2 + 3\sqrt{5}\cdot 2^2 - 2^3 \tag{1} \\\\
  &= 5\sqrt{5} - 30 + 12\sqrt{5} - 8 \\\\
  &= \boldsymbol{ 17\sqrt{5} - 38 }.
\end{align}

---

$\text{c.} \quad$ We will factorise the expression first before substituting.

{{% mn q12c tips %}}
$(2)$ $A^2-2A+1$ $=(A-1)^2$, where $A=a^2$.
{{% /mn %}}
\begin{align}
  a^4-2a^2+1 &= (a^2-1)^2 \tag{2} \\\\
  &= \\{ (a+1)(a-1) \\}^2 \\\\
  &= \big\\{ \big(\sqrt{5}-2+1\big)\big(\sqrt{5}-2-1\big) \big\\}^2 \\\\
  &= \big\\{ \big(\sqrt{5}-1\big)\big(\sqrt{5}-3\big) \big\\}^2 \\\\
  &= \big( 5 - 4\sqrt{5} + 3 \big)^2 \\\\
  &= \big(8-4\sqrt{5}\big)^2 \\\\
  &= 8^2 - 2\cdot 8\cdot 4\sqrt{5} + \big(4\sqrt{5}\big)^2 \\\\
  &= 64 - 64\sqrt{5} + 80 \\\\
  &= \boldsymbol{ 144 - 64\sqrt{5} }.
\end{align}

{{% /details %}}