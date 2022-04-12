---
title: "Breadcrumb Navigation in Hugo"
description: "How to write a simple Hugo code for breadcrumbs based on the page URL."

date: 2021-07-03 19:50:39.320 +1000

toc: true
draft: false
highlight: true

tags:
  - Hugo

---

## Introduction

Breadcrumbs provide an effective method for users to identify the current page's location and navigate back to its parent pages if necessary. It is handy if your site relies heavily on nested sections, like mine.

{{% figure src="blogs/2021/breadcrumb-example.JPG" caption="The breadcrumb for [this lesson post](/courses/jpn-maths-1/numbers-and-expressions/polynomials/expanding-identities). Yes, it is *six levels* deep." style="border: 1px solid var(--text-color)" noresize="true" %}}

While Hugo does not have built-in support for breadcrumbs, making one from scratch is relatively simple. I will explain two possible methods of writing a breadcrumb partial in Hugo.

## Breadcrumbs as a Partial

### Using the `.Parent` variable

A Hugo page has a `.Parent` variable, and it returns the parent section of the page. So, for example, the `.Parent` of this post would be `/posts/`. The official [Hugo documentation](https://gohugo.io/content-management/sections/#example-breadcrumb-navigation) provides an excellent partial code that shows the breadcrumb navigation using a recursive method:

```filename
> layouts/partials/breadcrumb.html
```
```golang
<ul class="breadcrumb">
  {{ template "breadcrumbnav" (dict "p1" . "p2" .) }}
</ul>

{{ define "breadcrumbnav" }}
  {{ if .p1.Parent }}
    {{ template "breadcrumbnav" (dict "p1" .p1.Parent "p2" .p2 )  }}
  {{ else if not .p1.IsHome }}
    {{ template "breadcrumbnav" (dict "p1" .p1.Site.Home "p2" .p2 )  }}
  {{ end }}
  <li{{ if eq .p1 .p2 }} class="active"{{ end }}>
    <a href="{{ .p1.RelPermalink }}">{{ .p1.Title }}</a>
  </li>
{{ end }}
```

{{% details title="Explanation" %}}



```golang
<ol class="breadcrumb">
  {{ template "breadcrumbnav" (dict "p1" . "p2" .) }}
</ol>
```

First, it sets up an ordered list and calls a `breadcrumbnav` template with two variables, `p1` and `p2`, both set up to be the current page (`.`). The rest of the code is the definition of this template. Because of how it is set up, we will look at the bottom of the template first.

```golang
{{ define "breadcrumbnav" }}
  ...
  <li{{ if eq .p1 .p2 }} class="active"{{ end }}>
    <a href="{{ .p1.Permalink }}">{{ .p1.Title }}</a>
  </li>
{{ end }}
```

The *last string* the template prints out is the `<li>` item with the title of `p1` (which equals the current page) and its link. Because `p1` and `p2` are both `.`, the list item has the `active` class.

```golang
{{ define "breadcrumbnav" }}
  {{ if .p1.Parent }}
    {{ template "breadcrumbnav" (dict "p1" .p1.Parent "p2" .p2 )  }}
  {{ else if not .p1.IsHome }}
    {{ template "breadcrumbnav" (dict "p1" .p1.Site.Home "p2" .p2 )  }}
  {{ end }}
  ...
{{ end }}
```

The first half of the code checks if `p1` has a section above, either a parent section or the homepage. If this is the case, it will trigger another `breadcrumbnav` template, which will also print out the list item and repeats until it reaches the homepage. Because the check is done before writing the list item, they will be ordered in reverse, from the homepage to the current page!

{{% /details %}}

Adding this partial to the `<body>` of this page (`/posts/breadcrumb-navigation-in-hugo/`)

```filename
> layouts/posts/single.html
```
```html
<body>
  {{ partial "breadcrumb" . }}

  ...
</body>
```

and compiling the site gives the following HTML code:

```filename
> public/posts/breadcrumb-navigation-in-hugo.HTML
```
```html
<body>
  <ol class="breadcrumb">
    <li>
      <a href="/">Welcome!</a>
    </li>
    <li>
      <a href="/posts/">Posts</a>
    </li>
    <li class="active">
      <a href="/posts/breadcrumb-navigation-in-hugo/"
      >Breadcrumb Navigation in Hugo</a>
    </li>
  </ol>
  
  ...
</body>
```

Note that [my homepage](/) does have a title of *Welcome!*, so I will need to do some fixes on that if I would use this code.


### Parsing the URL

Another method of creating a breadcrumb is to use the URL because it will reflect on the section structure of the pages. Here is an example:

```filename
> layouts/partials/breadcrumb.html
```
```golang
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

{{% details title="Explanation" %}}



```golang
<ol class="breadcrumb">
  <li><a href="/">Home</a></li>
  ...
</ol>
```

It first defines an ordered list like before, and the first item in the list is the homepage.

```golang
<ol class="breadcrumb">
  ...
  {{ $rellink := "" }}
  {{ range (split .RelPermalink "/") }}
    ...
  {{ end }}
</ol>
```

The `.RelPermalink` refers to the relative link to the page, so `/posts/breadcrumb-navigation-in-hugo/`. If we split it by slashes, we will get a `slice` that looks like `["", "posts", "breadcrumb-navigation-in-hugo", ""]`. We will loop over these strings to build up the breadcrumb.

```golang
<ol class="breadcrumb">
  ...
    {{ if gt (len . ) 0 -}}
      {{ $rellink = printf "%s/%s" $rellink . }}
      <li><a href="{{ $rellink }}">{{ humanize . }}</a></li>
    {{ end }}
  ...
</ol>
```

First, we will get rid of the empty strings using the `if` statement.{{% sn 186 %}}If you are confused by the `.` notation, have a read of [this awesome article on](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/) scopes in Hugo.{{% /sn %}} Then, we will append the current string to the link variable to retrieve the relative link for each section and use the [humanized](https://gohugo.io/functions/humanize/) version of the string as the title of the list.

{{% /details %}}

Below is the HTML for the breadcrumb of this page:

```filename
> public/posts/breadcrumb-navigation-in-hugo.html
```
```html
<body>
  <ol class="breadcrumb">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/posts/">Posts</a>
    </li>
    <li>
      <a href="/posts/breadcrumb-navigation-in-hugo/"
      >Breadcrumb navigation in hugo</a>
    </li>
  </ol>
  
  ...
</body>
```

The end result may not look very different from the first method, if the slugs of posts and sections are pretty much identical to the titles. Slugs are often much shorter in my blog and this code will make the breadcrumbs much more compact.


### CSS

Finally, we can put the lists on a single line.

```filename
> assets/css/main.css
```
```css
.breadcrumb {
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.breadcrumb li {
  display: inline;
  white-space: nowrap;
}

.breadcrumb li + li:before {
  content: ">";
  padding: 0.3rem;
}
```

Setting `<ol>` as a flexbox enables the list items to naturally wrap to the next line if there is not enough space.
