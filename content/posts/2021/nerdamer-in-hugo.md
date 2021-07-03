---
title: "Setting up Nerdamer in Hugo"
description: "How to use the symbolic mathematics library Nerdamer in Hugo."

date: 2021-01-12 15:37:27.321 +0800
lastMod: 2021-01-12 15:37:27.321 +0800

toc: true
math: true
draft: false
highlight: true
nerdamer: true

tags:
  - JavaScript
  - Nerdamer
  - Hugo

---

## Introduction

[Nerdamer](https://nerdamer.com) is a JavaScript library for symbolic algebra calculations. Because it is written in pure JavaScript and does not require any server-side calculation, Nerdamer fits in quite nicely when you need your [Hugo](https://gohugo.io) website to be able to solve some algebra problems on-the-run.

## Installing Nerdamer on a Hugo Project

If your Hugo webpage is maintained as a Git repository, the easiest method of installing Nerdamer is to use [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). At the base directory, run

```console
$ git submodule add https://github.com/jiggzson/nerdamer assets/js/nerdamer/
$ git submodule init
```

to attach the [Nerdamer depository](https://github.com/jiggzson/nerdamer) to `assets/js/nerdamer/`. Note that we are putting the files under the Assets folder, not the Static folder, because you would want to minify the files first with [Hugo Pipes](https://gohugo.io/hugo-pipes/minification/).{{% sn minify %}}The library is delivered without minification. You can reduce its size from 1 MB to about 500 kB by minifying the files.{{% /sn %}} Inside the folder, you will see five JavaScript files:

```filename
> /
```
```plaintext
├───.github
├───archetypes
├───assets
│   └───js
│       └───nerdamer
│           ├───spec
│           ├───Algebra.js
│           ├───Calculus.js
│           ├───Extra.js
│           ├───nerdamer.core.js
│           └───Solve.js
├───config
├───content
├───static
└───themes
```

`nerdamer.core.js` contains the core functionality of Nerdamer, and the four other 'add-ons' provide some extra features (the full list of functions each add-on provides on [the documentation page](https://nerdamer.com/documentation.html)). Create a partial that minifies and loads the necessary files:

```filename
> layouts/partials/nerdamer.html
```
```golang
{{- $nerdamer_loc := "js/nerdamer" -}}
{{- $nerdamer_files := slice "nerdamer.core.js" "Algebra.js" "Calculus.js" "Extra.js" "Solve.js" -}}
{{- range $nerdamer_files }}
{{- $minified_js := resources.Get (printf "%s/%s" $nerdamer_loc .) | resources.Minify }}
<script src="{{ $minified_js.Permalink }}"></script>
{{- end }}
```

and attach it to the site's head:

```filename
> layouts/_default/baseof.html
```
```html
<head>
  ...
  {{- if .Params.nerdamer -}}
    {{ partial "nerdamer" . }}
  {{- end -}}
</head>
```

If you want to load Nerdamer in a specific page, simply set `nerdamer: true` in the page's YAML.


