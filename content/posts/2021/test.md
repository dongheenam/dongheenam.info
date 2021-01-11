---
title: Test post
description: this is a test post!
date: 2020-12-04 23:24:05.919 +1100

nerdamer: true
---

<script>
    let text = nerdamer.convertFromLaTeX('(x+1)(x-3)(x-5)').expand();
    var e = nerdamer(text);
    console.log(e.toTeX().replace(/ \\cdot /gm, ""));
</script>