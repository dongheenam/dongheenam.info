---
title: Test post
description: this is a test post!
date: 2020-12-04 23:24:05.919 +1100

nerdamer: true
---

<script>
    let text = nerdamer("0.5 * (2 + sqrt(8))")
    var e = nerdamer(`0.5 * (2 + sqrt(32))`).expand();
    console.log(e.toTeX());
</script>