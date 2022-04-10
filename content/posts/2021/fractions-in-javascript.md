---
title: "Fractions in JavaScript"
description: "How to implement fractional arithmetic with JavaScript."

date: 2020-12-26 15:10:03.222 +1100
lastMod: 2021-01-03 16:33:26.443 +1100

toc: true
math: true
draft: false
highlight: true

tags:
  - javascript
  - fraction

---

## Introduction

In the world of programming, hardly anyone cares about the differences between $\dfrac{1}{3}$ and `1.0/3.0 = 0.333333`. However, in Maths class, you need to learn how to deal with fractions as-is; for example, what is $\dfrac{2}{3} x - \dfrac{1}{2}$ equal to when $x = \dfrac{1}{6}$? The answer is
\begin{align*}
  \dfrac{2}{3} x - \dfrac{1}{2} &= \dfrac{2}{3} \cdot \dfrac{1}{6} - \dfrac{1}{2} \\\\
  &= \dfrac{2}{18} - \dfrac{1}{2} \\\\
  &= \dfrac{2}{18} - \dfrac{9}{18} \\\\
  &= -\dfrac{7}{18}.
\end{align*}
While we can argue about whether this skill is necessary for our future generation or not, it is certainly useful for me to have a set of code that performs arithmetic with fractions, instead of something like

```javascript
console.log(1/3 * 1/6 - 1/2); // -0.3888888888888889
```

and then trying to build a code that converts `-0.3888888888888889` into $-\dfrac{7}{18}$. Of course, there already exists a library that implements fractions beautifully in JavaScript - [Fraction.js](https://github.com/infusion/Fraction.js/), which would be very useful for general purposes. However, most of the features `Fraction.js` provide are unnecessary for this site, and I specifically wanted the ability to print a fraction instance as a LaTeX expression, such as

```javascript
new Frac(3, 7).tex(); // \dfrac{3}{7}
```

Therefore, I decided to build my own fraction package from scratch, and document the journey to my first (useful) JavaScript class! While this post (and the code) is mostly for myself, I hope the readers to learn something from here - whether it is about fractions, about JavaScript, or both!

### Update with Nerdamer

Shortly after I wrote this post, I found [Nerdamer](https://nerdamer.com/), which encompasses most of the features I wish to accomplish. Rather than spending months to reinvent the wheel, I decided to use `Nerdamer` in conjunction with my classes. Check more information on [setting up Nerdamer in Hugo](../nerdamer-in-hugo).


## The `Frac(tion)` class

### Data structure and constructor

A fraction has a numerator and a denominator, and its value is really just its numerator divided by its denominator; for example, $$ \dfrac{2}{5} = 2\div 5 = 0.4. $$ Hence we can start with our (very simple) constructor and `valueOf()` function:

```javascript
class Frac {
  constructor(n, d = 1) {
    if (d == 0) {
      throw new Error("denominator cannot be zero!");
    }
    this.n = n;
    this.d = d;
  }
  valueOf() {
    return this.n / this.d;
  }
}
```

To create `Frac` instances, we feed the values of the numerator and the denominator, or just a single number, in which case it will be interpreted as a whole number.

```javascript
new Frac(1, 2); // returns 1/2
new Frac(3);    // returns 3/1 = 3
new Frac(1, 0); // Error: denominator cannot be zero!
```

The `valueOf()` function is executed when you compare its value with another object. This makes comparison between a fraction with another or a float very easy.

```javascript
new Frac(2, 5).valueOf()        // 0.4
new Frac(1, 4) > new Frac(2, 7) // false
new Frac(0, 3) == 0             // true
new Frac(-1, 2) < 0             // true
```

### Simplifying fractions

To simplify a fraction, we need to divide the numerator and the denominator by their greatest common divisor (GCD): $$ \dfrac{12}{18} = \dfrac{12\hl{\div 6}}{18\hl{\div 6}} = \dfrac{2}{3}. $$ So how do we calculate the GCD of two numbers? We can use the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm): the GCD of two numbers is the same as the GCD of one number, and the remainder when you divide the other number with that number. So we can write a recursive function that does the job:{{% sn gcd %}}You may notice the GCD of two numbers should always be positive, but this function may return a negative number depending on the signs of `a` and `b`. To prevent this, we can pass the variables on `Math.abs()` function, but this is not necessary for simplifying a fraction.{{% /sn %}}


```javascript
function findGcd(a, b) {
  if (b != 0) {
    return findGcd(b, a % b);
  } else {
    return a;
  }
}
```

or, using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) `?`:

```javascript
function findGcd(a, b) {
  return b ? findGcd(b, a % b) : a;
}
```

With this, we can write our function that simplifies the fraction:

```javascript
class Frac {
  ...
  reduce() {
    const gcd = findGcd(this.n, this.d); // find the GCD

    // reduced fraction is (n/GCD)/(d/GCD)
    return new Frac(this.n / gcd, this.d / gcd);
  }
}
```

This is an example:

```javascript
const exampleFrac = new Frac(3, 6);   // returns 3/6
const newFrac = exampleFrac.reduce(); // returns 1/2
```

<br>

{{% details title="Note on why newFrac !== exampleFrac" %}}

Note that I created another instance of `Frac` and returned it at the end of `reduce()`, so `exampleFrac` and `newFrac` are two different instances, but their values are equal.

```javascript
exampleFrac === newFrac                    // false
exampleFrac.valueOf() == newFrac.valueOf() // true
```

This may sound awkward to you, because the more memory-efficient method of achieving this is to manipulate `this.n` and `this.d` directly:

```javascript
class Frac {
  ...
  reduce2() {
    const gcd = findGcd(this.n, this.d); // find the GCD
    this.n = this.n / gcd; // new numerator
    this.d = this.d / gcd; // new denominator
  }
}
```

However, I prefer to make another instance after each operation, so that I can still refer to the original fraction after I perform all the necessary operations.

{{% /details %}}


### Dealing with decimal entries

What do you think these will return?

```javascript
new Frac(0.5, 2).reduce();
new Frac(6, 0.7).reduce();
```

While the first one equals `1/4`, which is expected, the second one equals `27021597764222976/3152519739159347` -- clearly an overflow happened! So, to fix this issue, I updated `reduce()` so that it will try to multiply both the numerator and the denominator by 10 until both of them become integers.

```javascript
class Frac {
  ...
  reduce() {
    // if both n and d are integers
    if (Number.isInteger(this.n) && Number.isInteger(this.d)) { 
      // find the GCD
      const gcd = findGcd(this.n, this.d);
      // reduced fraction is (n/GCD)/(d/GCD)
      return new Frac(this.n / gcd, this.d / gcd);
    } else {
      // multiply n and d by 10 and try reducing again
      return new Frac(this.n * 10, this.d * 10).reduce();
    }
  }
}
```

This code simplifies fractions with decimal entries correctly:

```javascript
new Frac(0.5, 2).reduce(); // returns 1/4
new Frac(6, 0.7).reduce(); // returns 60/7
```


### Adding fractions

Our aim is to make a function that adds a number, or another `Func` instance to itself:

```javascript
new Frac(1, 4).add(new Frac(1, 6)); // returns 5/12
new Frac(1, 2).add(-2);             // returns -3/2
```

Obviously the second is equivalent to adding `new Frac(-2, 1)`, we only need to deal with the first case. Let's think about how we add two fractions - we find the least common multiple (LCM) of the denominators, and match the denominators to their LCM in order to add them:
\begin{align*}
  \dfrac{1}{4} + \dfrac{1}{6} &= \dfrac{1\hl{\times 3}}{4\hl{\times 3}} + \dfrac{1\hl{\times 2}}{6\hl{\times 2}} \qquad \text{(LCM is 12)} \\\\
  &= \dfrac{3}{12} + \dfrac{2}{12} = \dfrac{5}{12}.
\end{align*}

While this is the *simplest* method for humans, multiplying the numbers to their LCM is a complicated process. We use the fact $$ \text{LCM}(a, b)\times \text{GCD}(a,b)=a\times b $$ to generalise addition of two fractions:
\begin{align*}
  \dfrac{n_1}{d_1} + \dfrac{n_2}{d_2} &= \dfrac{n_1 \hl{\times d_2/\text{GCD}(d_1,d_2)}}{d_1\hl{\times d_2/\text{GCD}(d_1,d_2)}} + \dfrac{n_2\hl{\times d_1/\text{GCD}(d_1,d_2)}}{d_2\hl{\times d_1/\text{GCD}(d_1,d_2)}} \\\\
  &= \dfrac{n_1 d_2 / \text{GCD}(d_1, d_2)}{\text{LCM}(d_1, d_2)} + \dfrac{n_2 d_1 / \text{GCD}(d_1, d_2)}{\text{LCM}(d_1, d_2)} \\\\
  &= \dfrac{n_1 d_2 / \text{GCD}(d_1, d_2) + n_2 d_1 / \text{GCD}(d_1, d_2)}{\text{LCM}(d_1, d_2)}.
\end{align*}

If we write this up, we have the `add()` function!

```javascript
class Frac {
  ...
  add(other) {
    if (other instanceof Frac) {
      // if other is also a Func instance
      let gcd = findGcd(this.d, other.d);
      return new Frac(
        this.n * other.d / gcd + other.n * this.d / gcd,
        this.d * other.d / gcd
      ).reduce();
    } else {
      // if other is just a number
      return this.add(new Frac(other));
    }
  }
}

```

<br>

{{% details title="Better addition with a number" %}}

While

```javascript
return this.add(new Frac(other));
```

is perfectly fine, we can speed up the process a little bit. Because $$ \dfrac{n_1}{d_1} + k = \dfrac{n_1 + d_1\times k}{d_1}, $$

```javascript
return new Frac(this.n + other * this.d, this.d).reduce();
```

gives the identical result without having to call `findGcd()` and performing the complicated calculations.

{{% /details %}}


### Multiplying fractions

Likewise, we would like to achieve something like this:

```javascript
new Frac(2,9).mult(-3,2); // returns -1/3
new Frac(1,4).mult(6);    // returns 3/2
```

Fortunately, multiplying two fractions is much easier than adding!
\begin{align*}
  \dfrac{n_1}{d_1} \times \dfrac{n_2}{d_2} = \dfrac{n_1\times n_2}{d_1 \times d_2},
\end{align*}

hence

```javascript
class Frac {
  ...
  mult(other) {
    if (other instanceof Frac) {
      // if other is another Func instance
      return new Frac(this.n * other.n, this.d * other.d).reduce();
    } else {
      // if other is a number
      return this.mult(new Frac(other));
    }
  }
}
```

<br>

{{% details title="Better multiplication with a number" %}}

Just like with adding, because $$ \dfrac{n_1}{d_1} \times k = \dfrac{n_1 \times k}{d_1}, $$

```javascript
return new Frac(this.n * other, this.d).reduce();
```

is a better choice for multiplying a number.

{{% /details %}}


### Negation and subtracting, reciprocal and dividing

Because subtracting a number is equivalent to adding its negative, and dividing by a number is equivalent to multiplying its reciprocal, we can simply define subtraction and division as follows.

```javascript
class Frac {
  ...
  // returns the reciprocal of the fraction
  reci() {
    return new Frac(this.d, this.n);
  }

  // subtracts a number or fraction from this fraction
  sub(other) {
    if (other instanceof Frac) {
      // if other is a fraction, use mult() to multiply by -1
      return this.add(other.mult(-1));
    } else {
      // if other is a number, simply put a negative sign
      return this.add(-other);
    }
  }

  // divide this fraction by a number or fraction
  div(other) {
    if (other instanceof Frac) {
      // if other is a fraction, multiply its reciprocal
      return this.mult(other.reci());
    } else {
      // if other is a number, multiply 1/other
      return this.mult(new Frac(1, other));
    }
  }
}
```

### Power

We know the following holds for any integer $n$ :
\begin{align*}
  & \left( \dfrac{a}{b} \right)^n = \dfrac{a^n}{b^n}, \\\\
  & \left( \dfrac{a}{b} \right)^{-n} = \left( \dfrac{b}{a} \right)^n.
\end{align*}

We can write this up as a simple code.

```javascript
class Frac {
  ...
  // calculate the n-th power of the fraction
  pow(exp) {
    if (exp < 0) {
      return this.reci().pow(-exp);
    } else if (exp == 1) {
      return this;
    } else {
      return new Frac(this.n ** exp, this.d ** exp);
    }
  }
}
```

Note that this does allow `exp` to be rational as well, but we cannot deal with irrational numbers now, so we need to be careful.

```javascript
new Frac(1, 2).pow(0.5).reduce() // 125000000000000/176776695296637
```

### Printing as LaTeX

Finally, we need a function that returns the LaTeX code.

```javascript
new Frac(3, -7).tex() // returns -\dfrac{3}{7}
```

This seems as straightforward as `\\dfrac\{${this.n}\}\{${this.d}\}`, there are some issues when writing this function:

- If the instance is an integer (e.g. `new Frac(3, 1)`), it should not print something like `\dfrac{3}{1}`, but just the number.
- If the instance is a negative fraction, we need to pull the negative sign from `this.n` or `this.d` to the front.

Below is the code that reflects these issues.

```javascript
class Frac {
  ...
  function tex() {
    let isNeg = this.valueOf() < 0;      // fraction is negative
    let isInt = this.n % this.d == 0; // fraction is a whole number
    let base = "";
    if (isInt) {
      base = `${this.n / this.d}`;
    } else {
      // attach its sign in front of the fraction
      base =
        (isNeg ? "-" : "+") +
        `\\dfrac\{${Math.abs(this.n)}\}\{${Math.abs(this.d)}\}`;
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
- `"c"` if the fraction is a *coefficient*: $\hl{-}x^3 \hl{+ \dfrac{2}{3}}x^2 \hl{-\dfrac{1}{4}}x - 1 $. <br>When writing a coefficient, you can omit $1$.
- `"s"` if the fraction needs a *sign*: $-x^3 \hl{+ \dfrac{2}{3}}x^2 \hl{-\dfrac{1}{4}}x \hl{- 1} $. <br>You explicitly need a $+$ sign.
- `"b"` if the fraction follows an operator: $\dfrac{1}{4}\times\hl{\left(-\dfrac{2}{3}\right)}$. <br>You need to enclose the fraction with a bracket if it has a negative sign in front.

Then, we update the code:

```javascript
class Frac {
  ...
  function tex(op = "") {
    let isNeg = this.valueOf() < 0;       // this is negative
    let wholeNum = this.n % this.d === 0; // this is a whole number
    let base = "";
    if (wholeNum) {
      base = `${this.n / this.d}`;
    } else {
      base =
        (isNeg ? "-" : "") +
        `\\dfrac\{${Math.abs(this.n)}\}\{${Math.abs(this.d)}\}`;
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
].join('');
// - x^3 +\dfrac{2}{3} x^2 -\dfrac{1}{4} x -1
```

which, when rendered with MathJax, becomes: $ - x^3 +\dfrac{2}{3} x^2 -\dfrac{1}{4} x -1. $

## Example Codes

If you want to see more `Frac` class in action, visit the [Exercises](../../courses/exercises) and check the source code.

### Random fractions

I rewrote my NumPy favourites `numpy.arange` and `numpy.random.choice` in JavaScript to help generate a random number within a given range:

```javascript
// returns [min, min+1, ..., max]
function arange(min, max) {
  const array = [];
  for (var i = min; i < max + 1; i++) {
    array.push(i);
  }
  return array;
}
// randomly choose one element from the given array
function choice(arr, op="") {
  // remove zero from arr if op="z" is given
  const arr2 = /z/.test(op) ? arr.filter((i) => i != 0) : arr;
  // choose one element from arr2 using Math.random()
  return arr2[Math.floor(Math.random() * arr2.length)];
}
```

With this, we can easily create a fraction with single-digit entries easily. Note the `"z"` option is necessary to remove zero when choosing the denominator.

```javascript
const pool = arange(-9, 9);
const frac = new Frac(choice(pool), choice(pool, "z"));
```

<br>

<div class="qna-box">

Click on this button to generate a new random fraction: <button id="gen" onclick="genQRand();">Generate</button>
<ul>
  <li>Generated string: <code id="rand-q"> </code></li>
  <li>Rendered fraction: <span id="rand-a"> </span></li>
</ul>
</div>

{{< exercise-script >}}

<script>
  function genQRand() {
    const pool = arange(-9, 9);
    const frac = new Frac(choice(pool), choice(pool, "z"));
    const fracTex = frac.tex();

    const qForm = document.getElementById("rand-q");
    const aForm = document.getElementById("rand-a");
    
    qForm.innerHTML = fracTex;
    aForm.innerHTML = "";
    MathJax.tex2chtmlPromise(fracTex, {display: false}).then((node) => {
      aForm.appendChild(node);
    });
  }
</script>


### Fractional arithmetic

Let's create a question where you have to multiply one fraction with another, and then add a third one to it.

```javascript
const pool = arange(-9, 9);
// three fractions
const f1 = new Frac(choice(pool), choice(pool, "z"));
const f2 = new Frac(choice(pool), choice(pool, "z"));
const f3 = new Frac(choice(pool), choice(pool, "z"));
// the answer is f1 + f2 * f3
const ans = f2.mult(f3).add(f1);
// write the question and answer
const qTex = `${f1.tex()} ${f2.tex("s")} \\times ${f3.tex("b")}`;
const aTex = `=${ans.tex()}`;
```

Below is the code in action!

<div class="qna-box">

Click on this button to generate a new random question: <button id="gen" onclick="genQArit();">Generate</button>
<ul>
  <li>Generated question: <code id="arit-tex"> </code></li>
  <li>Rendered question: <span id="arit-q"> </span></li>
  <li>Rendered answer: <span id="arit-a"> </span></li>
</ul>
</div>

<script>
  function genQArit() {
    const pool = arange(-9, 9);
    // three fractions
    const f1 = new Frac(choice(pool), choice(pool, "z"));
    const f2 = new Frac(choice(pool), choice(pool, "z"));
    const f3 = new Frac(choice(pool), choice(pool, "z"));
    // the answer is f1 + f2 * f3
    const ans = f2.mult(f3).add(f1);
    // write the question and answer
    const qTex = `${f1.tex()} ${f2.tex("s")} \\times ${f3.tex("b")}`;
    const aTex = `=${ans.tex()}`;

    const texForm = document.getElementById("arit-tex");
    const qForm = document.getElementById("arit-q");
    const aForm = document.getElementById("arit-a");
    
    texForm.innerHTML = qTex;
    qForm.innerHTML = "";
    aForm.innerHTML = "";
    MathJax.tex2chtmlPromise(qTex, {display: false}).then((node) => {
      qForm.appendChild(node);
    });
    MathJax.tex2chtmlPromise(aTex, {display: false}).then((node) => {
      aForm.appendChild(node);
    });
  }
</script>


## Possible Expansions

### Fractions with irrational and complex numbers

This will probably happen if I write `Sqrt` (for square roots) and `Cmplx` (for complex numbers) classes. These are the features I wish to have:

```javascript
const irrFunc = new Func(3, new Sqrt(2));  // 3 / sqrt(2)
const ratFunc = irrFunc.reduce();          // 3sqrt(2) / 2

const cplxFunc = new Func(2, new Cmplx(1, -1)); // 2 / (1+i)
const realFunc = cplxFunc.reduce();             // 1-i
```


### Tracing the work out

It may be a nice idea to have the instance to track the operations acted on itself. For example,

```javascript
const oldFunc = new Func(1, 4);  // 1/4
const newFunc = oldFunc.mult(3).add(new Func(-1, 2)).div(2, 7);

console.log(newFunc.work);
/* [["init", {n: 1, d: 4}], ["mult", {n: 3, d: 1}],
    ["add", {n: -1, d: 2}], ["div", {n: 2, d: 7}]] */
```

and executing `newFunc.workTex()` and passing it to MathJax would render $$ \left( \dfrac{1}{4} \times 3 - \dfrac{1}{2} \right) \div \dfrac{2}{7}. $$

One obvious problem is that, when you have more than one "trees" of operation, for example:

```javascript
const func1 = new Func(1, 2);
const func2 = new Func(3, 5);

// (1/2 * 3) + (3/5 * 11/3)
const newFunc = func1.mult(3).add(func2.mult(11, 3));
```

In this case, it will be quite tricky to recover the full expression that led to `newFunc`.