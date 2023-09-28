---
title: "Syntax Highlighting with Chroma in Hugo"
description: "And adding filename support using render hooks"

date: 2022-09-10 14:30:58.875 +1000

toc: true
draft: false

tags:
  - Hugo

---

## Motivation

You can config Hugo to generate highlighted code blocks with [Chroma](https://github.com/alecthomas/chroma). This post records my experience of switching from [`highlight.js`](https://highlightjs.org/) to Chroma, and implementation of some popular code block features such as adding filename as titles.

You can find the complete Hugo documentation [here](https://gohugo.io/content-management/syntax-highlighting).

## Result

This markdown

`````
```html {path="layouts/partials/head.html", hl_lines="2-4"}
<head>
    <meta name="author" content="{{ with .Site.Params.author }}{{ . }}{{ end }}" />
    <meta name="description" content="{{if .IsHome }}{{ $.Site.Params.description }}{{ else }}{{ .Description }}{{ end }}" />
    <meta name="theme-color" content="#111111" />
</head>
```
`````

is rendered as

```html {path="layouts/partials/head.html", hl_lines="2-4"}
<head>
    <meta name="author" content="{{ with .Site.Params.author }}{{ . }}{{ end }}" />
    <meta name="description" content="{{if .IsHome }}{{ $.Site.Params.description }}{{ else }}{{ .Description }}{{ end }}" />
    <meta name="theme-color" content="#111111" />
</head>
```

## Quick Chroma Tutorial

Chroma is enabled by default, so we can start highlighting codes by either specifying one of the languages Chroma supports in the markdown:

`````
```javascript
function addOne(number) {
    return number + 1;
}
```
`````

or by using the built-in `highlight` shortcode:

```html
{{</* highlight javascript */>}}
function addOne(number) {
    return number + 1;
}
{{</* /highlight */>}}
```

You can also add parameters to adjust the code blocks further. For example, both markdown blocks:

`````
```javascript {linenos=inline, hl_lines="1 4-6"}
function addOne(number) {
    return number + 1;
}
function addTwo(number) {
    return number + 2;
}
```
`````

```html
{{</* highlight javascript "linenos=inline, hl_lines=1 4-6" */>}}
function addOne(number) {
    return number + 1;
}
function addTwo(number) {
    return number + 2;
}
{{</* /highlight */>}}
```

render as follows.

```javascript {linenos=inline, hl_lines="1 4-6"}
function addOne(number) {
    return number + 1;
}
function addTwo(number) {
    return number + 2;
}
```

For the full list of options, visit the [Hugo documentation](https://gohugo.io/functions/highlight/#options).


## Adding Titles

The usual approach to add a custom title to a code block is to write a separate shortcode above the code fence.

`````html
{{</* path "/src/lib/util.js" */>}}
```javascript
function addOne(number) {
    return number + 1;
}
```
`````

This is rather cumbersome, so I added a custom [markdown render hook](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks) so that the path can be specified within the inline option.

```html {path="layouts/_default/_markup/render-codeblock.html"}
<div class="codeblock">
  {{- with (index .Attributes "path") -}}
    <div class="code-header">&gt; {{ . }}</div>
  {{- end -}}
  <div class="code-body">
    {{- highlight .Inner .Type .Options -}}
  </div>
</div>
```

This custom template allows us to provide a `path` option in code fences. For example, the source code for the code block above looks like this.

`````
```html {path="layouts/_default/_markup/render-codeblock.html"}
<div class="code-container">
  ...
</div>
```
`````
