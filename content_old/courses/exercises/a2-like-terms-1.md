---
title: Collecting Like Terms 1
description: Simplifying polynomials of a single variable
slug: like-terms-1

date: 2020-12-25 21:18:24.523 +1100
lastmod: 2020-12-25 21:18:24.523 +1100

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - AC Year 7
  - AC Year 8
  - AC Year 9

menu:
  exc:
    name: Collecting Like Terms 1
    parent: Algebra
    weight: 21

weight: 21
---

In this exercise, you will practise how to collect like terms to simplify polynomials, for example, $$ \text{simplify}~x+4+6x+2. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="lg" />
<label for="lg">Bigger numbers [ex. $11x - 14x + 9$] </label><br />
<input type="checkbox" id="neg0" />
<label for="neg0">Allow negative coefficients and constants [ex. $-3x + 4 + 7x - 9$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Allow fractional coefficients and constants [ex. $\frac{1}{2}x + \frac{3}{4} +\frac{1}{3}x$] </label><br />
<input type="checkbox" id="deg0" />
<label for="deg0">Allow up to quadratic and cubic terms [ex. $x^2 + 4 + x^3 + 2x$] </label><br />
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
    if (neg0) {poolCoeff.push(...arange(-maxCoeff, -1))};
    const poolLett = 'abcdefghijklmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Simplify the following expressions by collecting like terms.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      const order = deg0? 3 : 1;
      const generator = frac0 
        ? () => yn() ? new Frac(choice(poolCoeff), choice(poolCoeff,"z")) : 0
        : () => yn() ? new Frac(choice(poolCoeff)) : 0;
      const nPoly = choice(arange(2, 3));
      let qTex = "";
      let ans = new Poly([0], lett);
      for (let i=0; i<nPoly; i++) {
        const coeffs = genCoeffs(order, generator, 0);
        const poly = new Poly(coeffs, lett);
        const op = qTex === "" ? "" : (poly.order === 0 ? "s" : "sc");
        qTex += poly.tex(op);
        ans = ans.add(poly);
      }
      const aTex = `=\\boldsymbol{${ans.tex()}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>