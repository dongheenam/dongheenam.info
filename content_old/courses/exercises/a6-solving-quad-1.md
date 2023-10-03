---
title: Solving Quadratic Equations 1
description: Solving basic quadratic equations
slug: quadratic-equation-1

date: 2021-01-12 16:56:21.873 +0800
lastmod: 2021-01-12 16:56:21.873 +0800

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - AC Year 10
  - AC Year 10A

menu:
  exc:
    name: Quadratic Equations 1
    parent: Algebra
    weight: 61

weight: 61
---

In this exercise, you will practise how to solve simple quadratic equations; for example, $$ \text{solve}~x^2 - 2x - 8 = 0. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="co0" />
<label for="co0">Allow non-monic quadratics [ex. $x^2 - 3x + 2 = 0$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Allow fractional roots [ex. $2x^2 - 5x + 2 = 0$] </label><br />
<input type="checkbox" id="both" />
<label for="both">Allow the unknown to be on both sides [ex. $x^2 - 4x + 5 = 2x - 4$] </label><br />
<br>
{{< /exercise-html >}}

{{< exercise-script >}}

<script>
  function genQs() {
    // Question area
    const qbox = document.getElementById("questions");
    const qinst = document.getElementById("instructions");
    // Read value from the form
    const nq = document.getElementById("nq").value;
    let co0,frac0,both;
    [co0,frac0,both] = 
      ["co0","frac0","both"].map(isChecked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const maxCoeff = 9;
    const poolNum = arange(-maxCoeff, maxCoeff);
    const poolMult = [...arange(-3, -1), ...arange(2, 3)];
    const poolLett = 'abcdefghijkmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Solve the following quadratic equations.";
    qbox.innerHTML = "";
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      let poly;
      soln1 = new Frac(choice(poolNum), frac0? choice(poolNum, "z") : 1).reduce();
      soln2 = new Frac(choice(poolNum), frac0? choice(poolNum, "z") : 1).reduce();
      if (co0) {
        const polyTemp = new Poly([-soln1.n, soln1.d], lett).mult(new Poly([-soln2.n, soln2.d], lett));
        poly = polyTemp.mult(randBoolean()? 1 : choice(poolMult));
      } else {
        poly = new Poly([soln1.mult(-1), 1], lett).mult(new Poly([soln2.mult(-1), 1], lett));
      }
      let qTex;
      if (both) {
        const generator = () => randBoolean()? new Frac(choice(poolNum), frac0? choice(poolNum, "z") : 1) : 0;
        const order = co0? 2 : 1;
        const poly2 = new Poly(genCoeffs(order, generator), lett);
        qTex = `${poly.add(poly2).tex()} = ${poly2.tex()} `;
      } else {
        qTex = `${poly.tex()} = 0`;
      }
      const aTex = `\\boldsymbol{\\iff ${lett}=${soln1.tex()},~${soln2.tex()}}`;
      render(qTex, aTex).then((li) => {
        qbox.appendChild(li);
      });
    }
    return;
  }
</script>