---
title: Test post
description: this is a test post!
date: 2020-12-04 23:24:05.919 +1100

nerdamer: true
---

<p>
Input: <span id="nerdamer-input"></span><br>
Result: <span id="nerdamer-result"></span>
</p>

<script>
    const input = "4 + (x+7)/2 + 11";
    const a = nerdamer(input);

    document.getElementById("nerdamer-input").innerHTML = input;
    document.getElementById("nerdamer-result").innerHTML = a.toTeX();
</script>