---
title: Test post
description: this is a test post!
date: 2020-12-04 23:24:05.919 +1100

nerdamer: true
---

<script>
    let text = nerdamer.convertFromLaTeX('\\dfrac{2}{3} x \\times (-7)');
    var e = nerdamer(text);
    console.log(e.toTeX());
</script>