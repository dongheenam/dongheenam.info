---
title: "Fractions to LaTeX expressions"
description: "Writing fractions down takes more effort than you think."

date: 2020-12-27 15:10:03.222 +1100

math: true
draft: false
toc: true

tags:
  - JavaScript
  - fraction
  - LaTeX

menu:
  math-in-JS:
    weight: 11

---

## Requirements

Given we now have a functional class that represents fractions well, we can now design a function that returns the LaTeX code. Our goal is:

```javascript
new Frac(3, -7).tex() // -\frac{3}{7}
```

This seems as straightforward as `` `\\frac\{${this.n}\}\{${this.d}\}` ``, there are some issues when writing this function:

- If the instance is an integer (e.g. `new Frac(3, 1)`), it should not print something like `\frac{3}{1}`, but just `3`.
- If the instance is a negative fraction, we need to pull the negative sign from `this.n` or `this.d` to the front.

## Implementation

Below is the code that reflects these issues.

```javascript
class Frac {
  ...
  function tex() {
    let isNeg = this < 0;             // fraction is negative
    let isInt = this.n % this.d == 0; // fraction is a whole number
    let base = "";
    if (isInt) {
      base = `${this.n / this.d}`;
    } else {
      // attach its sign in front of the fraction
      base =
        (isNeg ? "-" : "+") +
        `\\frac\{${Math.abs(this.n)}\}\{${Math.abs(this.d)}\}`;
    }
    return base;
  }
}
```

It looks complete, but there is yet another problem: we often drop a lot of details when we write an expression. For example,
\begin{align*}
  & \hl{+\dfrac{2}{3}}x+4 = \dfrac{2}{3}x + 4, \\\\
  & \hl{-1}x - 7 = -x - 7.
\end{align*}

To deal with this mess, I feed in a string that tells the location of the fraction:
- `"c"` if the fraction is a *coefficient*: $\hl{-}x^3 \hl{+ \frac{2}{3}}x^2 \hl{-\frac{1}{4}}x - 1 $. <br>When writing a coefficient, you can omit $1$.
- `"s"` if the fraction needs a *sign*: $-x^3 \hl{+ \frac{2}{3}}x^2 \hl{-\frac{1}{4}}x \hl{- 1} $. <br>You explicitly need a $+$ sign.
- `"b"` if the fraction follows an operator: $\frac{1}{4}\times\hl{\left(-\frac{2}{3}\right)}$. <br>You need to enclose the fraction with a bracket if it has a negative sign in front.

Then, we update the code:

```javascript
class Frac {
  ...
  function tex(op = "") {
    let isNeg = this < 0;
    let wholeNum = this.n % this.d === 0;
    let base = "";
    if (wholeNum) {
      base = `${this.n / this.d}`;
    } else {
      base =
        (isNeg ? "-" : "") +
        `\\frac\{${Math.abs(this.n)}\}\{${Math.abs(this.d)}\}`;
    }
    let out =
      // add + symbol if sign is required
      (/s/.test(op) && !isNeg ? "+" : "") +
      // reduce 1 to nothing and -1 to - if it is a coefficient
      (/c/.test(op) ? (base == "1" ? "" : base == "-1" ? "-" : base) : base);
    // put the fraction in bracket if bracket is needed
    out = /b/.test(op) && isNeg ? "\\left(" + out + "\\right)" : out;
    return out;
  }
}
```

The example polynomial can be written as follows:

```javascript

let polyTex = [
  `${new Frac(-1).tex("c")} x^3 `,
  `${new Frac(2, 3).tex("cs")} x^2 `,
  `${new Frac(-1,4).tex("cs")} x `,
  `${new Frac(-1).tex("s")}`
].join(''); // - x^3 +\frac{2}{3} x^2 -\frac{1}{4} x -1
```

which, when rendered with MathJax or Katex, becomes: $ - x^3 +\frac{2}{3} x^2 -\frac{1}{4} x -1. $