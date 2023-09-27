---
title: "Polynomials in JavaScript"
description: "An (bad) attempt to reinvent polynomial algebra with JavaScript."

date: 2021-01-11 14:02:29.052 +0800

toc: true
math: true
draft: false
highlight: true

tags:
  - JavaScript
  - polynomial

menu:
  math-in-JS:
    weight: 20

---

## Introduction

Just like [fractions](../fractions-in-javascript), I also wrote a simple library that creates a polynomial (with a single variable). Because most of the advanced calculations will be performed with [Nerdamer](../setting-up-nerdamer-in-hugo), I will only implement basic functionalities such as adding and multiplying, and the ability to print polynomials as LaTeX expressions.


## The `Poly(nomial)` class

Since a polynomial (in $x$) has a shape of $$ a_0 + a_1x + a_2x^2 + a_3x^3 + \dots, $$ it sounds natural to associate a polynomial with its coefficients, i.e., the above polynomial is equivalent to `[a_0, a_1, a_2, a_3, ...]`. Because this approach is inefficient to represent polynomials liks $ 3x^{100} $, one can use objects instead: `{ 0: a_0, 1: a_1, 2: a_2, 3: a_3, ...}`, and $ 3x^{100}$ is just `{ 100: 3 }`.

Because it is often convenient to loop coefficients from the highest order to the lowest order, I wrote up a small function that returns the keys of an object in a descending order.

```javascript
function findKeys(obj) {
  return [...Object.keys(obj)] // create an array with the keys
    .map(parseFloat)           // convert strings into numbers
    .sort((a, b) => b - a);    // sort the keys in descending order
}
```

Here is one example:

```javascript
const coeffs = {1: 4, 3: 2, 2: 0, 0: -3};
console.log(findKeys(coeffs)); // [3, 2, 1, 0]
```

Then, we can write the constructor function for the polynomial class:

{{% aside %}}
Check the [fractions in JavaScript](../fractions-in-javascript) post for more information on the `Frac` class.
{{% /aside %}}

```javascript
class Poly {
  constructor(coeffs, x = "x") {
    this.x = x;        // variable of the polynomial
    this.coeffs = {};  // its coefficients

    // If the input is an array
    if (Array.isArray(coeffs)) {
      coeffs.map((e, i) => {
        if (e === 0) return; // only store non-zero coefficients
        this.coeffs[i] = (e instanceof Frac)? e : new Frac(e);
      });
    // if the input is an object
    } else if (typeof coeffs === "object") {
      const keys = findKeys(coeffs);
      for (let k of keys) {
        if (coeffs[k] !== 0) continue; // only store non-zero coefficients
        const e = coeffs[k];
        this.coeffs[k] = (e instanceof Frac)? e : new Frac(e);
      }
    }
    // order of polynomial equals order of the leading term
    this.order = findKeys(this.coeffs)[0];
  }
}
```

Note that you can either feed in an array or an object to create a polynomial instance,

```javascript
const polyA = new Poly([3, 1, 2]);   // 2x^2 + x + 3
const polyB = new Poly({ 5: -1, 1: 7 }); // -x^5 + 7x
```

and any zero entries are ignored.

```javascript
const polyC = new Poly([1, 0, 0, -4]); // -4x^3 + 1
```

You can also nominate any other variable name.

```javascript
const polyD = new Poly([5, -1, 2], "t"); // 2t^2 - t + 5
```

## Addition

Adding two polynomials can be done term-by-term:
\begin{align*}
& (a_0 + a_1 x + a_2 x^2 + \dots ) + (b_0 + b_1 x + b_2 x^2 + \dots ) \\\\
&= (a_0 + b_0) + (a_1 + b_1) x + (a_2 + b_2) x^2 + \dots.
\end{align*}

Here is one example of an `add()` function:

```javascript
class Poly {
  ...
  add(other) {
    const coeffs1 = this.coeffs;
    const coeffs2 = other.coeffs;
    const newCoeffs = {};
    const maxOrder = Math.max(this.order, other.order);
    for (let i=0; i<maxOrder+1; i++) {
      newCoeffs[i] = coeffs1[i] + coeffs2[i];
    }
    return new Poly(newCoeffs);
  }
}
```

The problem is, when any of the coefficients $a_i$ or $b_i$ are zero, they are not registered in the `coeffs` object. Naively looping over all orders is not ideal here since adding a number to an `undefined` type will result in a `NaN`.

{{% aside %}}
This is why I find JavaScript quite scary to work with, because a lot of other programming languages will throw an index error instead and stop running.
{{% /aside %}}

```javascript
const polyA = new Poly([0, 3, 2]); // 2x^2 + 3x
const polyB = new Poly([1, 1]);    // x + 1
const newPoly = polyA.add(polyB);  // NaNx^2 + 4x + NaN
```

Here are two tricks to solve this issue. First, I can make a wrapper function that adds the coefficients, which automatically replaces any undefined values with `0`.

```javascript
function addTerms(t1, t2) {
  return new Frac(0)
    .add(t1? t1 : 0)
    .add(t2? t2 : 0);
}
```

Then, we can iterate over the *union* of the keys of the two coefficient objects. To do this, we need to modify `findKey()` function a little bit:

{{% aside %}}
The JavaScript [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object is useful here.
{{% /aside %}}

```javascript
function findKeys(coeffs1, coeffs2 = {}) {
  return [...new Set(
      [...Object.keys(coeffs1), ...Object.keys(coeffs2)]
    )]
    .map(parseFloat)
    .sort((a, b) => b - a);
}
```

Here is the complete function:

```javascript
class Poly {
  ...
  add(other) {
    // if other is another polynomial
    if (other instanceof Poly) {
      // if the two polynomials have the same variable or one is a constant
      if (this.x == other.x || other.order == 0) {
        const coeffs1 = this.coeffs;
        const coeffs2 = other.coeffs;
        const newCoeffs = {};
        // iterate over the union of the terms
        for (let k of findKeys(coeffs1, coeffs2)) {
          const temp = addTerms(coeffs1[k], coeffs2[k]);
          // only non-zero results are useful
          if (temp != 0) {
            newCoeffs[k] = temp;
          }
        }
        // in case this is a constant polynomial
        const newVar = (this.order > other.order) ? this.x : other.x;
        return new Poly(newCoeffs, newVar);
      // if the two polynomials are in different variables
      } else {
        throw new Error(
          "adding polynomials in different variables is not yet supported."
        );
      }
    // if other is not a polynomial
    } else {
      return this.add(new Poly([other], this.x));
    }
  }
}
```

The new tricks should now handle the addition properly,

```javascript
const polyA = new Poly([0, 3, 2]); // 2x^2 + 3x
const polyB = new Poly([1, 1]);    // x + 1
const newPoly = polyA.add(polyB);  // 2x^2 + 4x + 1
```

while preventing something like $(x+1) + 3t = 4x + 1$ from happening.

```javascript
const polyT = new Poly([0, 3], "t"); // 3t
const newPoly2 = polyB.add(polyT);
/* Error: adding polynomials in different variables is not yet supported. */
```


## Multiplication

It is a little more difficult to visualise multiplication:
\begin{align*}
& (a_0 + a_1 x + a_2 x^2 + \dots ) \times (b_0 + b_1 x + b_2 x^2 + \dots ) \\\\
&= a_0 (b_0 + b_1 x + b_2 x^2 + \dots ) \\\\
&\phantom{=}+ a_1 x (b_0 + b_1 x + b_2 x^2 + \dots ) \\\\
&\phantom{=}+ a_2 x^2 (b_0 + b_1 x + b_2 x^2 + \dots ) + \dots \\\\
&= a_0 b_0 + a_0 b_1 x + a_0 b_2 x^2 + \dots \\\\
&\phantom{=}+ a_1 b_0 x + a_1 b_1 x^2 + a_1 b_2 x^3 + \dots \\\\
&\phantom{=}+ a_2 b_0 x^2 + a_2 b_1 x^3 + a_2 b_2 x^4 + \dots,
\end{align*}

but if you look closely into it, all the terms have a shape of $ a_i b_j x^{i+j} $, so we can simplify this using the summation notation:
\begin{align*}
& (a_0 + a_1 x + a_2 x^2 + \dots ) \times (b_0 + b_1 x + b_2 x^2 + \dots ) = \\\\
&\sum_{i} \sum_{j} a_i b_j x^{i+j}
\end{align*}

and this identity can easily be translated into JavaScript. We also need the equivalence of the `addTerms()` function to deal with the program accidently accessing non-existing values:

```javascript
function multTerms(t1, t2) {
  return new Frac(1)
    .mult(t1? t1 : 0)
    .mult(t2? t2 : 0);
}
```

Finally, this is our `mult()` function:

```javascript
class Poly {
  ...
  mult(other) {
    // if other is another polynomial
    if (other instanceof Poly) {
      // if the two polynomials have the same variable or one is a constant
      if (this.x == other.x || other.order == 0) {
        const coeffs1 = this.coeffs;
        const coeffs2 = other.coeffs;
        const newCoeffs = {};
        // iterate over every term of the two polynomials
        for (let k of findKeys(coeffs1)) {
          for (let j of findKeys(coeffs2)) {
            newCoeffs[k + j] = addTerms(
              multTerms(coeffs1[k], coeffs2[j]),
              newCoeffs[k + j]
            );
          }
        }
        // in case this is a constant polynomial
        const newVar = this.order > other.order ? this.x : other.x;
        return new Poly(newCoeffs, newVar);
      } else {
        throw new Error(
          "multiplying polynomials in different variables is not yet supported."
        );
      }
    // if the input is not a polynomial
    } else {
      return this.mult(new Poly([other], this.x));
    }
  }
}

```

We can use this function to multiply a polynomial by a single term, or by another polynomial.

```javascript
const polyA = new Poly([1, -5, 2]); // 2x^2 - 5x + 1
const term = new Poly({3: -2});     // -2x^3
const polyB = new Poly([2, 1]);     // x + 2

const ansA = polyA.mult(term);      // -4x^5 + 10x^4 - 2x^3
const ansB = polyA.mult(polyB);     // 2x^3 - x^2 - 9x + 2
```


## Evaluation

We can evaluate the value of a polynomial when its variable equals a certain value. For example, for $P(x) = 2x^3 + x^2 - x + 7$,
\begin{align*}
  P(-2) &= 2\cdot(-2)^3 + (-2)^2 - (-2) + 7 \\\\
  &= -16 + 4 + 2 + 7 \\\\
  &= -3.
\end{align*}

This operation is fairly simple, because we just need to replace the variable with some number. We can take advantage of how `coeffs` is set up: the constant term (the coefficient of $x^0$) is `coeffs[0]`, and the coefficient of $x^1$ is `coeffs[1]`, and so on.

```javascript
class Poly {
  ...
  eval(x) {
    const coeffs = this.coeffs;
    // make a Frac instance if x is not already one
    const xFrac = (x instanceof Frac)? x : new Frac(x);
    let out = new Frac(0);
    // iterate over all keys of coeffs
    for (let i in coeffs) {
      out = out.add(coeffs[i].mult(xFrac.pow(i)));
    }
    return out;
  }
}
```

Here is an example of the code in action.

```javascript
const poly = new Poly([7, -1, 1, 2]); // 2x^3 + x^2 - x + 7
const ans = poly.eval(-2);            // -3
```


## Printing as LaTeX

Finally, we want to print any polynomials as a LaTeX expression. This is an easy task because we already have a code that [prints a Frac instance as a LaTeX expression](../latex-fractions-in-javascript), but there are still a few things to consider. We first need some code that converts $x^1$ to $x$ and $x^0$ to nothing.

```javascript
function printTerm(coeff, x, ind, op = "") {
  let base = coeff.tex(op);
  // if the coefficient is 0
  if (coeff == 0) {
    return "";
  // constant term
  } else if (ind == 0) {
    return `${base}`;
  // x term
  } else if (ind == 1) {
    return `${base}${x}`;
  // any other terms
  } else {
    return `${base}${x}^${ind}`;
  }
}
```

Then we can loop over the `coeffs` and print each term.

```javascript
class Poly {
  ...
  tex(opFirst = "") {
    const coeffs = this.coeffs;
    const keys = findKeys(coeffs);
    let out = "";
    for (let k of keys) {
      let op = "";
      op += (k != 0 ? "c" : "");    // option "c" for coefficients
      op += (out == "" ? "" : "s"); // option "s" for the first term
      // if opFirst is given, override op for the first term
      if (opFirst != "" && out == "") {
        op = opFirst;
      }
      // print the term
      out += printTerm(coeffs[k], this.x, k, op);
    }
    // if the polynomial is empty, return "0"
    if (out == "") {
      out = new Frac(0).tex(opFirst);
    }
    return out;
  }
}
```

We can print normal polynomials as LaTeX, as well as constant polynomials.

```javascript
const texA = new Poly([0]).tex();        // "0"
const texB = new Poly([1, -3, 4]).tex(); // "4x^2-3x+1"
```
