---
title: Solving Quadratic Equations 2
description: Solving quadratic equations with quadratic formula
slug: quadratic-equation-2

date: 2021-01-12 17:46:19.818 +0800
lastmod: 2021-01-12 17:46:19.818 +0800

toc: false
type: docs
math: true
nerdamer: true

tags:
  - algebra
  - polynomial
  - Year 10A

menu:
  exc:
    name: Quadratic Equations 2
    parent: Algebra
    weight: 62

weight: 62
---

In this exercise, you will practise how to use the quadratic formula $ x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a} $ to solve quadratic equations; for example, $$ \text{solve}~x^2 + x - 1 = 0. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="nm" />
<label for="nm">Allow non-monic quadratics [ex. $2x^2 - 2x - 5 = 0$] </label><br />
<input type="checkbox" id="cpl" />
<label for="cpl">Allow non-real solutions [ex. $x^2 + x + 4 = 0$] </label><br />
<input type="checkbox" id="both" />
<label for="both">Allow the unknown to be on both sides [ex. $x^2 - 2x + 7 = x - 4$] </label><br />
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
    let nm,cpl,both;
    [nm,cpl,both] = 
      ["nm","cpl","both"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const maxCoeff = 9;
    const poolCoeff = [...arange(-maxCoeff, -1), ...arange(1, maxCoeff)];
    const poolLett = 'abcdefghkmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Solve the following quadratic equations.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      let a, b, c, dis;
      while (true) {
        a = nm? choice(poolCoeff) : 1;
        b = choice(poolCoeff);
        c = choice(poolCoeff);
        dis = b**2 - 4*a*c
        if (cpl || dis >= 0) break; 
      }
      const poly = new Poly([c, b, a], lett);
      let qTex;
      if (both) {
        const generator = () => yn()? choice(poolCoeff) : 0;
        const order = nm? 2 : 1;
        const poly2 = new Poly(genCoeffs(order, generator), lett);
        qTex = `${poly.add(poly2).tex()} = ${poly2.tex()} `;
      } else {
        qTex = `${poly.tex()} = 0`;
      }
      const ans1 = `( -(${b}) + sqrt(${dis}) ) / (2*(${a}))`
      const ans2 = `( -(${b}) - sqrt(${dis}) ) / (2*(${a}))`
      const a1Tex = nerdamerToTex(nerdamer(ans1).expand());
      const a2Tex = nerdamerToTex(nerdamer(ans2).expand());
      const aTex = `\\boldsymbol{\\implies ${lett} = ${a1Tex},~${a2Tex}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>