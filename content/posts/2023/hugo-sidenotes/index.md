---
title: 'Sidenotes in Hugo'
description: 'Yet another sidenote implementation.'
date: '2023-10-05T13:06:04+11:00'

draft: false
toc: true

tags:
  - Hugo

menu:
    new-hugo-blog-theme:
        weight: 30

related-pages:
  - title: How I Made This Site
    url: https://gertjanvandenburg.com/blog/how_i_made/
  - title: JavaScript-Free Sidenotes in Hugo
    url: https://danilafe.com/blog/sidenotes/
  - title: Sidenotes using ox-hugo
    url: https://scripter.co/sidenotes-using-ox-hugo
  - title: Adding Margin Notes to my Hugo Theme
    url: https://capnfabs.net/posts/margin-notes-hugo-theme/

---

Sidenotes are amazing. They add just enough distraction and provide more context while reading the main text. There are already [so many different tutorials](#related-posts) on how to implement sidenotes in Hugo, but when I first designed this blog, I followed [Tufte CSS](https://edwardtufte.github.io/tufte-css/)'s approach. In short,

1. Put whatever you want to be in the sidenote in a `<span>` tag inside a paragraph.
2. Float the `<span>` to the side using relative positioning and a [negative margin](https://www.smashingmagazine.com/2009/07/the-definitive-guide-to-using-negative-margins/#negative-margins-on-static-elements).
3. Give `clear: right` property to the `<span>` to prevent it from overlapping with the next sidenote.
4. Add a `<label>` tag and an invisible checkbox to toggle the visibility of the sidenote in mobile environments.

Below is the screenshot of [this paragraph](https://edwardtufte.github.io/tufte-css/#sidenotes) and its source code from Tufte CSS's documentation.

{{% figure src="tufte.png" alt="Screen capture of Tufte CSS" border="true" %}}

```html {hl_lines="5"}
<p>
    One of the most distinctive features of Tufte’s style is his extensive use of sidenotes.
    <label for="sn-extensive-use-of-sidenotes" class="margin-toggle sidenote-number"></label>
    <input type="checkbox" id="sn-extensive-use-of-sidenotes" class="margin-toggle">
    <span class="sidenote">This is a sidenote.</span>
    Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already. You are very astute.
</p>
```

This approach works well, but it has a few problems:

- Any block elements inside a shortcode will break its layout because shortcodes are inline elements inside `<p>`.
- There is no guarantee it will work with Hugo shortcodes, which often create [spurious `<p>` tags](https://github.com/gohugoio/hugo/issues?q=is%3Aissue+shortcode+p+tag).
- Because the checkbox is not rendered, you must specify a unique `id` for each sidenote.

## Slight modification

Here is a slightly different approach we can take.

- Write a sidenote as an `<aside>` before the paragraph, so sidenotes are aligned with paragraphs, not specific words.
- Remove the need of checkboxes by always showing the sidenote in mobile environments using a different style.

Below is a minimal example of this approach in Hugo.

{{% tabs %}}
{{% tab name="/assets/sass/main.scss" %}}
```scss
$aside-width: ...;
$aside-gap: ...;

aside {
    // sidenotes in mobile
    border: 1px solid currentColor;
    border-left-width: 3px;
    background-color: rgba(0, 0, 0, 0.2);

    // sidenotes in desktop
    @media (min-width: 768px) {
        position: relative;
        float: left;
        clear: left;

        width: $aside-width;
        margin: 0;
        margin-left: -$aside-width - $side-gap;
        margin-bottom: 1rem;
        padding: 0;

        text-align: right;
        border: none;
        background-color: initial;
    }
}
```
{{% /tab %}}
{{% tab name="/layouts/partials/sidenote.html" %}}
```html
<aside>
  {{ .Inner | .Page.RenderString }}
</aside>
```
{{% /tab %}}
{{% /tabs %}}
