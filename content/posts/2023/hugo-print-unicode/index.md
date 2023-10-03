---
title: 'Print Unicode in Hugo'
date: '2023-10-03T11:58:14+11:00'

draft: true
toc: true

tags:
  - Hugo

---

```html
{{/* U+2460 is circled 1, U+2461 is circled */}}
{{- $ref := add 0x245F (.Page.Scratch.Get "ref") -}}
{{ printf "%c" $ref }}
```