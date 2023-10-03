---
title: 'Breadcrumb navigation in Hugo'
date: '2021-07-03 19:50:39.320 +1000'

draft: false
toc: true

tags:
  - Hugo
---

{{% note title="Update" %}}
This post is from the old theme. Since I don't have intentions to manage ridiculously deep page structures, there is no longer breadcrumb navigation in this blog.
{{% /note %}}

## Motivation

Breadcrumbs provide an effective method for users to identify the current page's location and navigate back to its parent pages if necessary. It is handy if your site relies heavily on nested sections, like mine.

{{% figure src="breadcrumb-example.JPG" caption="Yes, it used to be *six levels* deep." border="true" %}}

While Hugo does not have built-in support for breadcrumbs, making one from scratch is relatively simple. I will explain two possible methods of writing a breadcrumb partial in Hugo.

## Using the Parent accessor

A Hugo page has a `.Parent` variable, and it returns the parent section of the page. So, for example, the `.Parent` of this post would be `/posts/`. The official [Hugo documentation](https://gohugo.io/content-management/sections/#example-breadcrumb-navigation) provides an excellent partial code that shows the breadcrumb navigation using a recursive method:

```html {path="layouts/partials/breadcrumb.html",id="get"}
<ul class="breadcrumb">
  {{ template "get-items" (dict "cursor" . "page" .) }}
</ul>

{{ define "get-items" }}
  {{ if .cursor.Parent }}
    {{ template "breadcrumbnav" (dict "cursor" .cursor.Parent "page" .page )}}
  {{ else if not .cursor.IsHome }}
    {{ template "breadcrumbnav" (dict "cursor" .cursor.Site.Home "page" .page )}}
  {{ end }}
  <li class="{{ if eq .cursor .page }}active{{ end }}">
    <a href="{{ .cursor.RelPermalink }}">{{ .cursor.Title }}</a>
  </li>
{{ end }}
```

Here is how the `get-items` template works:

{{< hl id="get" at="11" >}} First, render a `<li>` element for the current page.

{{< hl id="get" at="6" >}} Then, if the current page has a parent, *prepend* a `<li>` element for that page.

{{< hl id="get" at="8" >}} Repeat the previous step until it reaches the homepage.

Adding this partial to the `<body>` of this page (`/posts/breadcrumbs-in-hugo/`)

```html {path="layouts/posts/single.html"}
<body>
  {{ partial "breadcrumb" . }}
  <!-- ...rest of body -->
</body>
```

and compiling the site gives the following HTML code:

```html {path="public/posts/breadcrumbs-in-hugo.html"}
<body>
  <ol class="breadcrumb">
    <li>
      <a href="/">Welcome!</a>
    </li>
    <li>
      <a href="/posts/">Posts</a>
    </li>
    <li class="active">
      <a href="/posts/breadcrumbs-in-hugo/">Breadcrumb Navigation in Hugo</a>
    </li>
  </ol>
  <!-- ...rest of body -->
</body>
```

Note that [my homepage](/) does have a title of *Welcome!*, so I will need to do some fixes on that if I would use this code.


## Parsing the URL

Another method of creating a breadcrumb is to use the URL because it will reflect on the section structure of the pages. Here is an example:

```html {path="layouts/partials/breadcrumb.html"}
<ol class="breadcrumb">
  <li><a href="/">Home</a></li>
  {{ $rellink := "" }}
  {{ range (split .RelPermalink "/") }}
    {{ if gt (len . ) 0 -}}
      {{ $rellink = printf "%s/%s" $rellink . }}
      <li><a href="{{ $rellink }}">{{ humanize . }}</a></li>
    {{ end }}
  {{ end }}
</ol>
```
