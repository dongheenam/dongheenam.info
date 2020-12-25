---
title: Substitution 2
description: Substituting a number into a polynomial with degree greater than 1.
slug: substitution-2

date: 2020-12-23 20:16:36.801 +1100
lastmod: 2020-12-24 20:27:17.384 +1100

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - Year 8
  - Year 9

menu:
  exc:
    name: Substitution 2
    parent: Algebra
    weight: 12

weight: 12
---

In this exercise, you will practise how to substitute a variable with a number, for example, $$ \text{find}~x^2 - 3x + 5~\text{when}~x=2. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="lim" />
<label for="lim">Limit the answer to be less than 100 (Warning - unstable) </label><br />
<input type="checkbox" id="neg0" />
<label for="neg0">Variable - negative [ex. $x=-3$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Variable - fraction [ex. $x=\frac{2}{3}$] </label><br />
<input type="checkbox" id="deg2" />
<label for="deg2">Cubic term [ex. find $x^3 - 2$] </label><br />
<input type="checkbox" id="deg3" />
<label for="deg3">Quartic term [ex. find $2x^4 + 3x^2 - 6x$] </label><br />
<br>
{{< /exercise-html >}}

<script>
  function genQs() {
    // Question area
    const qbox = document.getElementById("questions");
    const qinst = document.getElementById("instructions");
    // Read value from the form
    const nq = document.getElementById("nq").value;
    let lim,neg0,frac0,deg2,deg3;
    [lim,neg0,frac0,deg2,deg3] = 
      ["lim","neg0","frac0","deg2","deg3"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const poolX = [...arange(neg0? -9 : 1, 9)];
    const poolCoeff = [...arange(-9, -1), ...arange(1, 9)];
    const poolLett = 'abcdefghijklmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Evaluate the following expressions.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      const order = deg3? 4 : deg2? 3 : 2;
      const generator = () => yn()? new Frac(choice(poolCoeff)) : 0;
      let x, coeffs, poly, ans;
      while (true) {
        x = new Frac(choice(poolX), frac0? choice(poolX, "z") : 1).reduce();
        coeffs = genCoeffs(order, generator, true);
        poly = new Poly(coeffs, lett);
        ans = poly.eval(x);
        if (!lim || Math.abs(ans)<100) {break;}
      }
      const qTex = `${poly.tex()},~\\text{when}~${lett}=${x.tex()}`;
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
