---
title: Solving Linear Equations 2
description: Solving linear equations with brackets and fractions
slug: linear-equation-2

date: 2021-01-15 08:45:06.783 +0800
lastmod: 2021-01-15 08:45:06.783 +0800

toc: false
type: docs
math: true
nerdamer: true 
draft: false

tags:
  - algebra
  - polynomial
  - Year 8
  - Year 9

menu:
  exc:
    name: Linear Equations 2
    parent: Algebra
    weight: 52

weight: 52
---

In this exercise, you will practise how to solve linear equations by removing brackets and fractions; for example, $$ \text{solve}~3(x+1) = 27. $$

Use the panel below to create randomised questions. You can click each question to reveal its answer, or click "Reveal All Answers" button to see all answers.

{{< exercise-html >}}
<input type="checkbox" id="neg" />
<label for="neg">Allow negative numbers and roots [ex. $3(x-2) = -9$] </label><br />
<input type="checkbox" id="frac0" />
<label for="frac0">Allow fractional answers [ex. $2(x+3) = 7$] </label><br />
<input type="checkbox" id="frac1" />
<label for="frac1">Fractional terms [ex. $\frac{x+4}{2} = 3$] </label><br />
<input type="checkbox" id="two" />
<label for="two">Allow up to two expressions [ex. $2(3x+2) + 3(x+1) = 16$] </label><br />
<input type="checkbox" id="both" />
<label for="both">Allow the unknown to be on both sides [ex. $2x = \frac{x+10}{3}$] </label><br />
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
    let neg,frac0,frac1,two,both;
    [neg,frac0,frac1,two,both] = 
      ["neg","frac0","frac1","two","both"].map(chked);
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if ( !nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const pool4 = arange(2, 4);
    const pool9 = arange(0, 9);
    const poolDenom = arange(2, 9);
    if (neg) {
      pool4.push(...arange(-4, -1));
      pool9.push(...arange(-9, -1));
      poolDenom.push(...arange(-9, -2));
    }
    const poolLett = 'abcdefghijkmnpqrstuvwxyz'.split('');
    // Make questions
    qinst.innerHTML = "Solve the following linear equations.";
    qbox.innerHTML = "";
    let options = MathJax.getMetricsFor(qbox);
    options.display = false;
    MathJax.texReset();
    for (let i = 0; i < nq; i++) {
      const lett = choice(poolLett);
      const ans = new Frac(choice(pool9), frac0? choice(pool9,"z") : 1);
      let lhs = new Poly([-ans.n, ans.d], lett);
      let rhs = new Frac(0);
      let lhsTex, rhsTex;
      // either put a fraction or bracket
      if (frac1) {
        const num0 = choice(pool9,"z");
        const num1 = choice(poolDenom);
        lhs = lhs.add(num0 * num1);
        lhsTex = `\\dfrac{${lhs.tex()}}{${Math.abs(num1)}}`;
        lhsTex = (num1<0? "-" : "") + lhsTex;
        rhs = rhs.add(num0);
        rhsTex = rhs.tex();
      } else {
        const num0 = choice(pool9,"z");
        const num1 = choice(poolDenom);
        lhsTex = `${num1}\\left(${lhs.add(num0).tex()}\\right)`
        rhs = rhs.add(num0).mult(num1);
        rhsTex = rhs.tex();
      }
      // second bracket if necessary
      if (two) {
        const gen = () => yn()? new Frac(choice(pool9)) : 0;
        let newPoly = new Poly(genCoeffs(1, gen, 1, 2), lett);
        let newPolyVal = newPoly.eval(ans);
        let num2;
        switch (choice(arange(1, frac1? 4 : 3))) {
          case 1 : // add another bracket
            console.log("case 1");
            num2 = new Frac(choice(pool4));
            if (both && yn()) {
              // add bracket on the rhs
              rhsTex += `${num2.tex("sc")}\\left(${newPoly.tex()}\\right)`
              lhsTex += `${num2.mult(newPolyVal).tex("s")}`
            } else {
              // add bracket on the lhs
              lhsTex += `${num2.tex("sc")}\\left(${newPoly.tex()}\\right)`
              rhs = rhs.add(num2.mult(newPolyVal));
              rhsTex = rhs.tex();
            }
            break;
          case 2 : // add polynomial (without bracket)
            console.log("case 2");
            if (both && yn()) {
              // add the polynomial on the rhs
              rhsTex += newPoly.tex("sc");
              lhsTex += newPolyVal.tex("s");
            } else {
              // add the polynomial on the lhs
              lhsTex += newPoly.tex("sc");
              rhs = rhs.add(newPolyVal);
              rhsTex = rhs.tex();
            }
            break;
          case 3 : // add a number
            console.log("case 3");
            num2 = new Frac(choice(pool9));
            lhsTex += num2.tex("s");
            rhs = rhs.add(num2);
            rhsTex = rhs.tex();
            break;
          case 4 : // add a fraction
            console.log("case 4");
            while (typeof num2 === "undefined") {
              newPoly = new Poly(genCoeffs(1, gen, 1, 2), lett);
              newPolyVal = newPoly.eval(ans);
              num2 = choice(poolDenom.filter(i => isFactorOf(i, newPolyVal)));
            }
            const sign = num2 > 0 ? "+" : "-";
            if (both && yn()) {
              // add the fraction on the rhs
              rhsTex += `${sign} \\dfrac{${newPoly.tex()}}{${Math.abs(num2)}}`;
              lhsTex += newPolyVal.div(num2).tex("s");
            } else {
              // add the fraction on the lhs
              lhsTex += `${sign} \\dfrac{${newPoly.tex()}}{${Math.abs(num2)}}`;
              rhs = rhs.add(newPolyVal.div(num2));
              rhsTex = rhs.tex();
            }
        }
      }

      const qTex = `${lhsTex} = ${rhsTex}`;
      const aTex = `\\boldsymbol{\\implies ${lett} = ${ans.tex()}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>
