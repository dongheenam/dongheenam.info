---
title: Substitution 1
description: Substituting a number into a simple linear polynomial.

date: 2020-12-23 20:16:36.801 +1100
lastmod: 2020-12-23 22:10:39.377 +1100

toc: false
type: docs
math: true

tags:
  - algebra
  - polynomial
  - Year 7
  - Year 8

menu:
  exc:
    name: Substitution 1
    parent: Algebra
    weight: 11

weight: 11
---

In this exercise, you will practise how to substitute a variable with a number, for example, $$ \text{find}~2x-3~\text{when}~x=7. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="lg" />
<label for="lg">Bigger numbers [ex. $x=18$] </label><br />
<input type="checkbox" id="neg0" />
<label for="neg1">Variable - negative [ex. $x=-3$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Variable - fraction [ex. $x=\frac{2}{3}$] </label><br />
<input type="checkbox" id="neg1" />
<label for="neg2">Coefficient - negative [ex. find $-3x+2$] </label><br />
<input type="checkbox" id="frac1" />
<label for="frac1">Coefficient - fraction [ex. find $\frac{1}{4}x+2$] </label><br />
<input type="checkbox" id="neg2" />
<label for="neg3">Constant - negative [ex. find $2x-7$] </label><br />
<input type="checkbox" id="frac2" />
<label for="frac2">Constant - fraction [ex. find $x + \frac{2}{5}$] </label><br />
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
    let c0 = [...arange(0, max)];
    let c1 = [...arange(1, max)];
    let c2 = [...arange(1, max)];
    const neg_nos = [...arange(-max, -1)];
    if (neg0) { c0.push(...neg_nos); }
    if (neg1) { c1.push(...neg_nos); }
    if (neg2) { c2.push(...neg_nos); }
    const letter = 'abcdefghijklmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Evaluate the following expressions.";
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
      const v = choice(letter);
      const cq = [c[0].tex(), c[1].tex("c"), c[2].tex("s")];
      const ca = c[1].mult(c[0]).add(c[2]).tex();
      const q = `${cq[1]}${v} ${cq[2]},~\\text{when}~${v}=${cq[0]}`;
      const a = `=\\boldsymbol{${ca}}`;
      render(q, a, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>
