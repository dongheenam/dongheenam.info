---
title: Solving Linear Equations 1
description: Solving basic linear equations
slug: linear-equation-1

date: 2021-01-12 16:19:44.120 +0800
lastmod: 2021-01-12 16:19:44.120 +0800

toc: false
type: docs
math: true
nerdamer: true

tags:
  - algebra
  - polynomial
  - Year 8
  - Year 9

menu:
  exc:
    name: Linear Equations 1
    parent: Algebra
    weight: 24

weight: 24
---

In this exercise, you will practise how to solve simple linear equations; for example, $$ \text{solve}~2x + 1 = 9. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="neg0" />
<label for="neg0">Coefficients and numbers - negative [ex. $-2x - 3 = 7$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Coefficients and numbers - fraction [ex. $\frac{1}{3} x + \frac{1}{2} = 1$] </label><br />
<input type="checkbox" id="both" />
<label for="both">Allow unknown to be on both sides [ex. $2x+3 = x+5$] </label><br />
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
    let neg0,frac0,both;
    [neg0,frac0,both] = 
      ["neg0","frac0","both"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const maxCoeff = 9;
    const poolCoeff = arange(1, maxCoeff);
    const poolNum = arange(0, maxCoeff);
    if (neg0) {
      poolCoeff.push(...arange(-maxCoeff, -1));
      poolNum.push(...arange(-maxCoeff, -1));
    }
    const poolLett = 'abcdefghijklmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Solve the following linear equations.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      const generator = () => yn()? 
        new Frac(choice(poolCoeff), frac0? choice(poolCoeff,"z") : 1) : 0;
      const coeffs = genCoeffs(1, generator, 1, 1);
      const lhs = new Poly(coeffs, lett);
      let rhs;
      if (both) {
        const coeffs2 = genCoeffs(1, generator, 1, 1);
        rhs = new Poly(coeffs2, lett);
      } else {
        rhs = new Frac(choice(poolNum), frac0? choice(poolNum,"z") : 1);
      }
      const qTex = `${lhs.tex()} = ${rhs.tex()}`;
      const ans = nerdamer.convertFromLaTeX(qTex).solveFor(lhs.x);
      const aTex = `\\boldsymbol{\\implies ${lhs.x}=${nerdamer.convertToLaTeX(ans.toString())}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>