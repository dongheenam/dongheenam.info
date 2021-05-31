---
title: Solving Linear Equations 2
description: Solving linear equations with brackets and fractions
slug: linear-equation-2

date: 2021-01-15 08:45:06.783 +0800
lastmod: 2021-02-07 15:17:30.563 +1100

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
<label for="frac1">Algebraic fractions [ex. $\frac{x+4}{2} = 3$] </label><br />
<input type="checkbox" id="two" />
<label for="two">Allow up to two expressions [ex. $2(3x+2) + 3(x+1) = 16$] </label><br />
<input type="checkbox" id="both" />
<label for="both">└─ Allow the unknown to be on both sides [ex. $2x = \frac{x+10}{3}$] </label><br />
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
    both = two? both : false; // both depends on two
    // Sanity check
    nqIsNumber = /[\d+]/.test(nq);
    if ( !nqIsNumber || nq<1 || nq>10 ) {
      qbox.innerHTML = "Error: Invalid number of questions!";
      return;
    }
    // Coefficients
    const pool5 = arange(2, 5);
    const pool9 = arange(0, 9);
    const poolDenom = arange(2, 9);
    if (neg) {
      pool5.push(...arange(-5, -1));
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
      let lhs, rhs;
      let lhsTex, rhsTex;
      lhs = new Poly([0, ans.d], lett);
      rhs = new Frac(ans.n);
      // if the coefficient of x is not 1, -1, for 50% of chance,
      if (!frac1 && Math.abs(ans.d)!=1 && yn()) { 
        // factorise the coefficient of x to make a bracket
        const op = neg? "n" : "";
        const num0 = new Frac(choice(factorsOf(ans.d, op), "1"));
        const num1 = choice(pool5);
        lhs = lhs.mult(num0.reci()).add(num1);
        lhsTex = `${num0.tex("c")}\\left(${lhs.tex()}\\right)`;
        rhs = rhs.add(num0.mult(num1))
        rhsTex = rhs.tex();
      } else if (!frac1) {
        // multiply the lhs by a number to make a bracket
        const num0 = new Frac(choice(pool5));
        const num1 = choice(pool5);
        const num2 = choice(pool9);
        lhs = lhs.mult(num1).add(num2);
        lhsTex = `${num0.tex("c")}\\left(${lhs.tex()}\\right)`;
        rhs = rhs.mult(num1).add(num2).mult(num0)
        rhsTex = rhs.tex();
      } else {
        // make a fraction
        // choose coefficients so that the rhs has at least one proper factor
        let num0, num1, num2, factors = [];
        while (factors.length < 1) {
          num1 = choice(pool5);
          num2 = choice(pool9);
          factors = factorsOf(num1*rhs+num2, "p");
        }
        num0 = choice(factors);
        lhs = lhs.mult(num1).add(num2);
        lhsTex = `\\dfrac{${lhs.tex()}}{${Math.abs(num0)}}`;
        lhsTex = (num0<0? "-" : "") + lhsTex;
        rhs = rhs.mult(num1).add(num2).mult(new Frac(1, num0));
        rhsTex = rhs.tex();
      }
      if (two) { // add a second expression
        const gen = () => yn()? new Frac(choice(pool9)) : 0;
        let newPoly, newPolyVal = new Frac(1, 2);
        let num11;
        switch (choice(arange(1, frac1? 3 : 2))) {
          case 1 : // add another bracket
            num11 = new Frac(choice(pool5));
            while (newPolyVal.d != 1) { // ensure the value is an integer
              newPoly = new Poly(genCoeffs(1, gen, 1, 2), lett);
              newPolyVal = newPoly.eval(ans).mult(num11);
            }
            if (both && yn()) { // add on the rhs
              rhs = rhs.sub(newPolyVal);
              if (yn()) {
                rhsTex = `${num11.mult(-1).tex("c")}\\left(${newPoly.tex()}\\right)` + rhs.tex("s");
              } else {
                rhsTex = rhs.tex() + `${num11.mult(-1).tex("sc")}\\left(${newPoly.tex()}\\right)`;
              }
            } else { // add on the lhs
              lhsTex += `${num11.tex("sc")}\\left(${newPoly.tex()}\\right)`
              rhs = rhs.add(newPolyVal);
              rhsTex = rhs.tex();
            }
            break;
          case 2 : // add polynomial (without bracket)
            while (newPolyVal.d != 1) { // ensure the value is an integer
              newPoly = new Poly(genCoeffs(1, gen, 0, 1), lett);
              newPolyVal = newPoly.eval(ans);
            }
            if (both && yn()) { // add on the rhs
              rhs = rhs.sub(newPolyVal);
              rhsTex = newPoly.add(rhs).tex();
            } else { // add on the lhs
              const op2 = newPoly.order == 1? "sc" : "s";
              lhsTex += newPoly.tex(op2);
              rhs = rhs.add(newPolyVal);
              rhsTex = rhs.tex();
            }
            break;
          case 3 : // add a fraction
            // choose the denominator from a factor
            while (typeof num11 === "undefined") {
              newPoly = new Poly(genCoeffs(1, gen, 1, 2), lett);
              newPolyVal = newPoly.eval(ans);
              num11 = choice(factorsOf(newPolyVal, neg? "np" : "p"));
            }
            let sign;
            if (both && yn()) { // add on the rhs
              rhs = rhs.sub(newPolyVal.div(num11));
              if (yn()) {
                sign = num11 > 0 ? "" : "-";
                rhsTex = `${sign} \\dfrac{${newPoly.tex()}}{${Math.abs(num11)}}` + rhs.tex("s");
              } else {
                sign = num11 > 0 ? "+" : "-";
                rhsTex = rhs.tex() + `${sign} \\dfrac{${newPoly.tex()}}{${Math.abs(num11)}}`;
              }
            } else { // add on the lhs
              sign = num11 > 0 ? "+" : "-";
              lhsTex += `${sign} \\dfrac{${newPoly.tex()}}{${Math.abs(num11)}}`;
              rhs = rhs.add(newPolyVal.div(num11));
              rhsTex = rhs.tex();
            }
        } // end switch

      } // endif (two)

      const qTex = `${lhsTex} = ${rhsTex}`;
      const aTex = `\\boldsymbol{\\implies ${lett} = ${ans.reduce().tex()}}`;
      render(qTex, aTex, options).then((li) => {
        qbox.appendChild(li);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      });
    }
    return;
  }
</script>
