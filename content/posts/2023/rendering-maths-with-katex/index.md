---
title: 'Rendering mathematics expressions in Hugo'
description: ...and getting used to "excessive DOM size" errors.
date: '2023-10-04 13:34:47.135 +1100'

draft: false
toc: true
math: true

tags:
- Hugo
- LaTeX

menu:
    new-hugo-blog-theme:
        weight: 20

---

Maths is fun, but embedding maths in a digital document is not. In the world of digitalisation, students still submit hand-written assignments and teachers still mark them by hand. The reason is simple: it is hard to write maths on a computer.

Thankfully, we have [LaTeX](https://www.latex-project.org/). Although it can be [pretty inefficient](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0115069), LaTeX is capable of drawing beautiful mathematics equations:

{{< raw >}}
$$\begin{align*}
  f (x) &= \int_{-\infty}^\infty \hat f(\xi) \,e^{2 \pi i \xi x} \,{\rm d}\xi \\
  g (a) &= \frac{1}{2\pi i} \oint_\gamma \frac{g(z)}{z-a} \,{\rm d}z
\end{align*}$$
{{< /raw >}}

There are two JavaScript libraries for parsing LaTeX expressions: [MathJax](https://www.mathjax.org/) and [KaTeX](https://www.katex.org/). As of 2023, there aren't significant differences in performance and bundle sizes. MathJax offers more features, such as rendering SVGs and supporting more LaTeX commands. On the other hand, KaTeX fits better in inline environment in general because of automatic line breaking.

In this post, we will go with KaTeX. I might eventually switch to MathJax, depending on how its 4th version turns out.

## Installing

KaTeX comes in three different parts: the core library, CSS with the fonts, and the auto-render extension that detects and renders LaTeX expressions. The simplest way to use KaTeX is to fetch the bundle from a CDN:

{{% aside %}}
Because the bundles are updated frequently, use the template from the [official documentation](https://katex.org/docs/browser#starter-template).

{{% /aside %}}

```html {path="layouts/partials/head.html"}
<!-- css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">

<!-- katex object -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossorigin="anonymous"></script>

<!-- auto-render extension -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"
  onload="renderMathInElement(document.body);"></script>
```

## Tweaks

{{% figure src="katex-example.png" caption="Example text rendered with default KaTeX settings." border="true" %}}

Figure above shows the default rendering of KaTeX. I find there are three problems with it:

1. Default font size for KaTeX environment (`1.2em`) is too large.
2. For inline expressions, there is often not enough spacing between the expression and the next line.
3. By default, the auto-renderer does not parse inline expressions between two dollar signs, so you have to write `\\(x^2\\)` instead of `$x^2$`.

To fix these issues (and add any other customisations), we can put some inline CSS and JavaScript after the bundles are loaded:

```html {path="layouts/partials/head.html", hl_lines="3-9 16-26"}
<!-- css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">
<style>
  .katex {
    font-size: 1.1em;
    display: inline-block;
    padding: 0.175em 0; /* mimic line-height of 1.35 */
  }
</style>

<!-- katex object -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossorigin="anonymous"></script>

<!-- auto-render extension -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
      ],
      // other options, such as macros, output, fleqn, ...
    });
  });
</script>
```

## Preventing extra backslashes

Because backslashes `\` have a special meaning in markdown syntax, we cannot naturally write LaTeX expressions in markdown files. For example, the expressions presented above is rendered from:

```latex
$$\begin{align*}
  f(x)&=\int_{-\infty}^\infty \hat f(\xi)\\,e^{2\pi i \xi x}\\,{\rm d}\xi\\\\
  g(a)&=\frac{1}{2\pi i}\oint_\gamma \frac{g(z)}{z-a}\\,{\rm d}z
\end{align*}$$
```

Note the additional backslashes in the expression and having to use `\\\\` to break lines, instead of the usual `\\`.

To fix this, we can create a super simple shortcode and use it with the raw string literal delimiter `<>`:

```html {path="layouts/shortcode/raw.html"}
<p>{{ .Inner }}</p>
```

```html {path="content/posts/example.md"}
{{</* raw */>}}
$$\begin{align*}
  f(x)&=\int_{-\infty}^\infty \hat f(\xi)\,e^{2\pi i \xi x}\,{\rm d}\xi\\
  g(a)&=\frac{1}{2\pi i}\oint_\gamma \frac{g(z)}{z-a}\,{\rm d}z
\end{align*}$$
{{</* /raw */>}}
```