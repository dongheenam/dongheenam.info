---
title: Expanding Brackets 1
description: Expanding (number) * (linear polynomial).
slug: expanding-1

date: 2020-12-23 08:05:10.485 +1100
lastmod: 2020-12-23 22:10:39.377 +1100

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - AC Year 8
  - AC Year 9

menu:
  exc:
    name: Expanding 1
    parent: Algebra
    weight: 22

weight: 22
---

In this exercise, you will practise how to multiply a linear polynomial by a number; for example, $$ \text{expand}~3(2x-4). $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="lg" />
<label for="lg">Bigger numbers [ex. $14(x+11)$] </label><br />
<input type="checkbox" id="neg0" />
<label for="neg0">Allow ngetaive coefficients and numbers [ex. $-3(2x-1)$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Allow fractional coefficients and numbers [ex. $\frac{1}{4}(\frac{2}{3}x+6)$] </label><br />
<input type="checkbox" id="deg0" />
<label for="deg0">Allow up to quadratic and cubic terms [ex. $4(x^2+3x+1)$] </label><br />
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
    let lg,neg0,frac0,deg0;
    [lg,neg0,frac0,deg0] = 
      ["lg","neg0","frac0","deg0"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const maxCoeff = lg? 19 : 9;
    const poolCoeff = [...arange(1, maxCoeff)];
    const poolNum = [...arange(2, maxCoeff)];
    if (neg0) {
      poolCoeff.push(...arange(-maxCoeff, -1));
      poolNum.push(...arange(-maxCoeff, -1));
    }
    const poolLett = 'abcdefghijklmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Expand the following expressions.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      const order = deg0? 3 : 1;
      const minOrder = deg0? 2 : 1;
      const generator = () => (!deg0 || yn())? 
        new Frac(choice(poolCoeff), frac0? choice(poolCoeff,"z") : 1) : 0;
      const coeffs = genCoeffs(order, generator, minOrder, 2);
      const poly = new Poly(coeffs, lett);
      let n = 1;
      while (n == 1) {
        n = new Frac(choice(poolNum), frac0? choice(poolNum): 1);
      }
      const qTex = `${n.tex("c")}\\left(${poly.tex()}\\right)`;
      const aTex = `=\\boldsymbol{${poly.mult(n).tex()}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>
