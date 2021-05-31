---
title: Expanding Brackets 2
description: Expanding (polynomial) * (polynomial).
slug: expanding-2

date: 2021-01-12 15:37:27.321 +0800
lastmod: 2021-01-12 15:37:27.321 +0800

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - AC Year 9
  - AC Year 10

menu:
  exc:
    name: Expanding 2
    parent: Algebra
    weight: 23

weight: 23
---

In this exercise, you will practise how to multiply two polynomials (including binomial products); for example, $$ \text{expand}~(x+3)(2x+1). $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="co0" />
<label for="co0">Only allow monic polynomials [ex. $(x+3)(x+7)$] </label><br />
<input type="checkbox" id="neg0" />
<label for="neg0">Allow negative coefficients and numbers [ex. $(x-2)(-2x+1)$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Allow fractional coefficients and numbers [ex. $(x+\frac{1}{2})(\frac{1}{3}x+4)$] </label><br />
<input type="checkbox" id="deg0" />
<label for="deg0">Allow quadratic terms [ex. $(x+2)(x^2 + 3x + 4)$] </label><br />
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
    let co0,neg0,frac0,deg0;
    [co0,neg0,frac0,deg0] = 
      ["co0","neg0","frac0","deg0"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const maxCoeff = 9;
    const poolNum = [...arange(1, maxCoeff)];
    if (neg0) {
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
      const order = deg0? 2 : 1;
      const minOrder = 1;
      const generator = () => (!deg0 || yn())? 
        new Frac(choice(poolNum), frac0? choice(poolNum,"z") : 1) : 0;
      const coeffs1 = genCoeffs(order, generator, minOrder, 2);
      const coeffs2 = genCoeffs(order, generator, minOrder, 2);
      if (co0) {
          coeffs1[findKeys(coeffs1)[0]] = 1;
          coeffs2[findKeys(coeffs2)[0]] = 1;
      }
      const poly1 = new Poly(coeffs1, lett);
      const poly2 = new Poly(coeffs2, lett);
      const qTex = `\\left(${poly1.tex()}\\right)\\left(${poly2.tex()}\\right)`;
      const aTex = `=\\boldsymbol{${poly1.mult(poly2).tex()}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>