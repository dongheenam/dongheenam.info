---
title: "Syntax Highlighting with Chroma in Hugo"
description: "Syntax highlighting with Chroma library in Hugo and adding filename support using markdown render hooks"

date: 2022-09-10 14:30:58.875 +1000

toc: true
draft: false

tags:
  - Hugo
  - Hugo Render Hooks

---

## Introduction

You can config Hugo to generate highlighted code blocks with [Chroma](https://github.com/alecthomas/chroma). This post records my experience of switching from [`highlight.js`](https://highlightjs.org/) to Chroma, and implementation of some popular code block features such as adding filename as titles.

You can find the complete Hugo documentation [here](https://gohugo.io/content-management/syntax-highlighting).

### Preview

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

The block will expand horizontally on hover when the media width is at least `1600px`.

## Chroma Setup

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

### Using custom CSS

There are many [Chroma styles](https://xyproto.github.io/splash/docs/all.html) you can choose from, and you can just specify the styles with config parameter `markup.highlight.style`.

```yaml {path="config/config.yaml"}
markup:
  highlight:
    style: monokai
```

You can also use custom stylesheet by turning off the inline CSS feature:

```yaml {path="config/config.yaml"}
markup:
  highlight:
    noClasses: false
```

and providing your own CSS file, such as the [github-dark](https://github.com/icy-comet/github-dark-chroma-theme) theme.


### Inline options

You can add inline parameters to code blocks. For example, both markdown blocks:

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

## Additional Features

### Adding titles

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
<div class="code-container">
  <div class="code-block">
  {{- with (index .Attributes "path") -}}
    <div class="code-path">&gt; {{ . }}</div>
  {{- end -}}
  {{- highlight .Inner .Type .Options -}}
  </div>
</div>
```

{{% details title="Explanation" %}}

When the markdown is parsed, all valid option parameters are stored in `.Options`, and the additional parameters are stored in `.Attributes` and attached as HTML attributes. So if `linenos=table, path="path/to/file"` is passed as option, we will have

```html
{{ .Attributes := dict "path" "path/to/file" }}
{{ .Options := dict "linenos" "table" }}
```

and the code block will be rendered as:

```html
<div class="highlight" path="path/to/file">
  <pre tabindex="0" class="chroma">
    <!-- code with line numbers -->
  </pre>
</div>
```

My strategy is to check if the `path` key from the map of attributes, and then add a `<div class="code-path">` element that contains its value. Ideally, `.Attributes` need to be fed into the highlighter as well, but I am currently not using custom attributes in my code fences, and manipulating maps in Hugo is still a [painful process](https://github.com/gohugoio/hugo/issues/7232).

{{% /details %}}

This custom template allows us to provide a `path` option in code fences. For example, the source code for the code block above looks like this.

`````
```html {path="layouts/_default/_markup/render-codeblock.html"}
<div class="code-container">
  ...
</div>
```
`````
