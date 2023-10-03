---
title: "Fractions in JavaScript"
description: "Does it take more time to teach fractions to JavaScript than to a 12-year-old?"

date: 2020-12-26 15:10:03.222 +1100

math: true
draft: false
toc: true

tags:
  - JavaScript
  - fraction

menu:
  math-in-JS:
    weight: 10

---

## Motivation

In the world of programming, hardly anyone cares about the differences between $\frac{1}{3}$ and `1.0/3.0 = 0.333333`. However, in Maths class, you need to learn how to deal with fractions as-is; for example, what is $\frac{2}{3} x - \frac{1}{2}$ equal to when $x = \frac{1}{6}$? The answer is
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

and then trying to build a code that converts `-0.3888888888888889` into $-\frac{7}{18}$. Of course, there already exists a library that implements fractions beautifully in JavaScript - [Fraction.js](https://github.com/infusion/Fraction.js/), which would be very useful for general purposes. However, most of the features `Fraction.js` provide are unnecessary for this site, and I specifically wanted the ability to print a fraction instance as a LaTeX expression, such as

```javascript
new Frac(3, 7).tex(); // \frac{3}{7}
```

Therefore, I decided to build my own fraction package from scratch, and document the journey to my first (useful) JavaScript class! While this post (and the code) is mostly for myself, I hope the readers to learn something from here - whether it is about fractions, about JavaScript, or both!

{{% note title="update" %}}
Shortly after I wrote this post, I found [Nerdamer](https://github.com/together-science/nerdamer-prime), which encompasses most of the features I wish to accomplish. Rather than spending months to reinvent the wheel, I decided to use `Nerdamer` in conjunction with my classes. Check more information on [setting up Nerdamer in Hugo](../nerdamer-in-hugo).
{{% /note %}}


## The `Frac(tion)` class

A fraction has a numerator and a denominator, and its value is really just its numerator divided by its denominator; for example, $$ \frac{2}{5} = 2\div 5 = 0.4. $$ Hence we can start with our (very simple) constructor and `valueOf()` function:

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
new Frac(1, 2); // 1/2
new Frac(3);    // 3/1 = 3
new Frac(1, 0); // Error: denominator cannot be zero!
```

The `valueOf()` function is executed when you compare its value with another object. This makes comparison between a fraction with another or a float very easy.

```javascript
new Frac(2, 5).valueOf()        // 0.4
new Frac(1, 4) > new Frac(2, 7) // false
new Frac(0, 3) == 0             // true
new Frac(-1, 2) < 0             // true
```

## Simplification

To simplify a fraction, we need to divide the numerator and the denominator by their greatest common divisor (GCD): $$ \frac{12}{18} = \frac{12\hl{\div 6}}{18\hl{\div 6}} = \frac{2}{3}. $$ So how do we calculate the GCD of two numbers? We can use the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm): the GCD of two numbers is the same as the GCD of one number, and the remainder when you divide the other number with that number. So we can write a recursive function that does the job:

{{% aside %}}
You may notice the GCD of two numbers should always be positive, but this function may return a negative number depending on the signs of `a` and `b`. To prevent this, we can pass the variables on `Math.abs()` function, but this is not necessary for simplifying a fraction.
{{% /aside %}}


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
    const gcd = findGcd(this.n, this.d);
    return new Frac(this.n / gcd, this.d / gcd);
  }
}
```

This is an example:

```javascript
const exampleFrac = new Frac(3, 6);   // 3/6
const newFrac = exampleFrac.reduce(); // 1/2
```

<br>

{{% note title="Note" %}}

Returning a new instance of `Frac`, instead of doing something like,

```javascript
class Frac {
  reduce() {
    const gcd = findGcd(this.n, this.d);
    this.n /= gcd;
    this.d /= gcd;
  }
}
```

allows us to chain operations:

```javascript
const myFrac = new Frac(3, 6).add(new Frac(1, 3)); // 5/6
```

{{% /note %}}


### Decimal entries

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
    if (Number.isInteger(this.n) && Number.isInteger(this.d)) {
      const gcd = findGcd(this.n, this.d);
      return new Frac(this.n / gcd, this.d / gcd);
    } else {
      // try reducing 10n / 10d
      return new Frac(this.n * 10, this.d * 10).reduce();
    }
  }
}
```

This code simplifies fractions with decimal entries correctly:

```javascript
new Frac(0.5, 2).reduce(); // 1/4
new Frac(6, 0.7).reduce(); // 60/7
```


## Addition

Our aim is to make a function that adds a number, or another `Func` instance to itself:

```javascript
new Frac(1, 4).add(new Frac(1, 6)); // 5/12
new Frac(1, 2).add(-2);             // -3/2
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
      let gcd = findGcd(this.d, other.d);
      return new Frac(
        this.n * other.d / gcd + other.n * this.d / gcd,
        this.d * other.d / gcd
      ).reduce();
    } else if (!isNaN(other)) {
      // if other is a number
      return this.add(new Frac(other));
    } else {
      throw new Error("can only add numbers!");
    }
  }
}
```


## Multiplication

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
      return new Frac(this.n * other.n, this.d * other.d).reduce();
    } else if (!isNaN(other)) {
      // if other is a number
      return this.mult(new Frac(other));
    } else {
      throw new Error("can only multiply numbers!");
    }
  }
}
```

## Subtraction and division

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
      return this.add(other.mult(-1));
    } else if (!isNaN(other)) {
      return this.add(-other);
    } else {
      throw new Error("can only subtract numbers!");
    }
  }

  // divide this fraction by a number or fraction
  div(other) {
    if (other instanceof Frac) {
      return this.mult(other.reci());
    } else if (!isNaN(other)) {
      return this.mult(new Frac(1, other));
    } else {
      throw new Error("can only divide numbers!");
    }
  }
}
```

## Power

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


<!-- ## Examples

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
  <li>Generated string: <code id="tex-1"> </code></li>
  <li>Rendered fraction: <span id="rendered-1"> </span></li>
</ul>
</div>

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
  <li>Generated question: <code id="tex-2"> </code></li>
  <li>Rendered question: <span id="rendered-2"> </span></li>
  <li>Rendered answer: <span id="answer-2"> </span></li>
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
</script> -->


## Extensions

1. Extending the fractions to have surds or complex numbers. Then, calling `.reduce()` will also rationalise or realise the denominator.
2. Tracking the operations acted on itself, so it is easier to write questions. For example, we can do

    ```javascript
    const answer = oldFunc.mult(3).add(new Func(-1, 2)).div(2, 7);

    console.log(answer.trace);
    /* [["init", {n: 1, d: 4}], ["mult", {n: 3, d: 1}],
       ["add", {n: -1, d: 2}], ["div", {n: 2, d: 7}]]  */
    answer.trace.tex()
    /* \left(\frac{1}{4} \times 3 - \frac{1}{2} \right) \div \frac{2}{7} */
    ```