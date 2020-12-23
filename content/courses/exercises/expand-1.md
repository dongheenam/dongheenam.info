---
title: Expanding Brackets 1
description: Expanding (number) * (linear polynomial).

date: 2020-12-23 08:05:10.485 +1100
lastmod: 2020-12-23 22:10:39.377 +1100

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
    name: Expanding 1
    parent: Algebra
    weight: 21

weight: 21
---

In this exercise, you will practise how to multiply a linear polynomial by a number; for example, $$ 3(2x-4) = 6x - 12. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="lg" />
<label for="lg">Bigger numbers [ex. $14(x+11)$] </label><br />
<input type="checkbox" id="neg0" />
<label for="neg1">Number - negative [ex. $-3(2x+1)$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Number - fraction [ex. $\frac{1}{4}(x+6)$] </label><br />
<input type="checkbox" id="neg1" />
<label for="neg2">Coefficient - negative [ex. $2(-x+4)$] </label><br />
<input type="checkbox" id="frac1" />
<label for="frac1">Coefficient - fraction [ex. $7(\frac{1}{4}x+9)$] </label><br />
<input type="checkbox" id="neg2" />
<label for="neg3">Constant - negative [ex. $7(x-8)$] </label><br />
<input type="checkbox" id="frac2" />
<label for="frac2">Constant - fraction [ex. $5(x+\frac{5}{6})$] </label><br />
<br>
{{< /exercise-html >}}

<script>
  function genQs() {
    // Question area
    const qbox = document.getElementById("questions");
    const qinst = document.getElementById("instructions");
    // Read value from the form
    const nq = document.getElementById("nq").value;
    let lg,neg0,neg1,neg2,frac0,frac1,frac2;
    [lg,neg0,neg1,neg2,frac0,frac1,frac2] = 
      ["lg", "neg0", "neg1", "neg2", "frac0", "frac1", "frac2"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if (!nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const max = lg? 19 : 9;
    let c0 = [...arange(2, max)];
    let c1 = [...arange(1, max)];
    let c2 = [...arange(1, max)];
    const neg_nos = [...arange(-max, -1)];
    if (neg0) { c0.push(...neg_nos); }
    if (neg1) { c1.push(...neg_nos); }
    if (neg2) { c2.push(...neg_nos); }
    // Make questions
    qinst.innerHTML = "Expand the following expressions.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const c = [
        new Frac(choice(c0), frac0? choice(c0.filter(i => i !== 0)) : 1).reduce(),
        new Frac(choice(c1), frac1? choice(c1) : 1).reduce(),
        new Frac(choice(c2), frac2? choice(c2) : 1).reduce()
      ];
      const cq = [c[0].tex(), c[1].tex("c"), c[2].tex("s")];
      const ca = [c[0].mult(c[1]).tex("c"), c[0].mult(c[2]).tex("s")];
      q = `${cq[0]}(${cq[1]}x ${cq[2]})`;
      a = `=\\boldsymbol{${ca[0]}x ${ca[1]}}`;
      render(q, a, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>
