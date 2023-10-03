---
title: "Grouping Hugo tags by first letter"
description: 'We will probably never get `.Pages.GroupBy "title.firstLetter"`.'

date: 2021-07-05 13:02:51.167 +1000

toc: true
draft: false

tags:
  - Hugo

---

{{% note title="Update" %}}
This post is from the old theme, so the screenshots will look different to what you see [here](/tags).
{{% /note %}}

## Introduction

Hugo provides a powerful content management tool called [taxonomies](https://gohugo.io/content-management/taxonomies). In addition to default taxonomies such as categories and tags, you can define one on your own and customise as you like (see [this repo](https://github.com/guayom/hugo-taxonomies) for a cool example!).


## Problem

One important feature of taxonomies is that you can show the list of terms (keywords) across the site, such as the list of tags. By default, the list looks like a regular branch bundle of a section because it follows the same layout:

{{% figure src="tag1.JPG" caption="The list of [all tags](/tags/) in this blog using the default list layout." border="true" %}}

Now, how can we improve this page? We can certainly reduce the spacing between terms using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [sort them alphabetically](https://gohugo.io/templates/taxonomy-templates/#order-taxonomies).

{{% figure src="tag2.JPG" caption="The list of [all tags](/tags/) in this blog using a custom layout with alphabetical sorting." border="true" %}}

It looks much better than before, but you can expect this list will grow to a messy clutter of words as the number of tags increases over time. It would look much better if we could divide them into smaller chunks based on the first letter.

{{% figure src="tag3.JPG" caption="The list of [all tags](/tags/) in this blog grouped by the first letter." border="true" %}}

{{% note title="note" color="gold" %}}

In Hugo, a *taxonomy* consists of many *terms*. So, the layout for the full list of tags should be `tags/taxonomy.html`, and the layout for a single tag should be named as `tags/term.html`. See below where Hugo pulls the layout from depending on the folder structure. For the full picture, check the [documentation](https://gohugo.io/templates/lookup-order/).

{{% tabs %}}
{{% tab name="No layouts" %}}
```text
.
└── layouts/
    ├── _default/
    │   ├── baseof.html
    │   ├── list.html      <- /posts
    │   │                  <- /tags, /tags/cool-tag
    │   │                  <- /categories, /categories/Hugo
    │   └── single.html    <- /posts/my-first-post
    └── tags/
```
{{% /tab %}}
{{% tab name="With taxonomy layout" %}}
```text{hl_lines="9"}
.
└── layouts/
    ├── _default/
    │   ├── baseof.html
    │   ├── list.html      <- /posts
    │   │                  <- /categories, /categories/Hugo
    │   └── single.html    <- /posts/my-first-post
    └── tags/
        └── taxonomy.html  <- /tags, /tags/cool-tag
```
{{% /tab %}}
{{% tab name="With taxonomy and term layouts" %}}
```text{hl_lines="9-10"}
.
└── layouts/
    ├── _default/
    │   ├── baseof.html
    │   ├── list.html      <- /posts
    │   │                  <- /categories, /categories/Hugo
    │   └── single.html    <- /posts/my-first-post
    └── tags/
        ├── taxonomy.html  <- /tags
        └── term.html      <- /tags/cool-tag
```
{{% /tab %}}
{{% /tabs %}}
{{% /note %}}

## Approach

I want to clarify that this is not the first solution to this problem. There was [a discussion](https://discourse.gohugo.io/t/lists-of-content-divided-by-posts-first-letter/8534) on this matter a while ago, and you can also find a [different solution](https://gohugohq.com/howto/hugo-create-first-letter-indexed-list/). These methods basically sort the titles alphabetically, track the first letter, and start the `<ul>` element again whenever it detects a change. I wanted to try a more conventional approach, where you first build a dictionary of tags that look like this:

```JSON
{
  "A": [
    "absolute value",
    "algebra"
  ],

  "D": [
    "decimal",
    "distributive law"
  ],

  // ...
}
```

and build the document using this information.

## Grouping the items

We will first build the dictionary, which we call `$by_letter`, where the keys are the letters of the alphabet, and the values are the list of tags that start with that letter. Here is the full code:

{{% aside %}}

{{< hl id="taxonomy" at="3" >}} Terms are sorted alphabetically, so they remain sorted after we group them.

{{< hl id="taxonomy" at="6" >}} Check this [post](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/) if you want to learn more about scopes.

{{% /aside %}}

```html {path="layouts/_default/taxonomy.html",id="taxonomy",linenostart=114}
{{ define "main" }}
{{ $letters := split "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "" }}
{{ $pages := .Pages.ByTitle }}
{{ $by_letter := dict }}
{{ range $pages }}
  {{ $page := . }}
  {{ $first_letter := upper ( substr $page.Name 0 1 ) }}
  {{ if not (in $letters $first_letter) }}
    {{ $first_letter = "#" }}
  {{ end }}
  {{ $new_list := slice $page }}
  {{ with index $by_letter $first_letter }}
    {{ $new_list = . | append $page }}
  {{ end }}
  {{ $by_letter = merge $by_letter (dict $first_letter $new_list) }}
{{ end }}
<!-- ...rendering happens here -->
{{ end }}
```


## Rendering

We can then make the list from the dictionary. Since we will make use of the [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/), the keys can just sit inside a `<span>`.

{{% aside %}}
`{{ len .Pages }}` calculates the number of posts for a single tag.
{{% /aside %}}

```html {path="layouts/_default/taxonomy.html"}
{{ define "main" }}
<!-- ...sorting happened here -->
<div class="taxonomy">
{{ range $key, $items := $by_letter }}
  <span class="key">{{ $key }}</span>
  <ul>
  {{ range $items }}
    <li>
      <a href="{{ .RelPermalink }}">{{ .Name }}</a><sup>{{ len .Pages }}</sup>
    </li>
  {{ end }}
  </ul>
{{ end }}
</div>
```


Finally, we can put everything together using CSS.

```scss {path="assets/scss/main.scss"}
.taxonomy {
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: baseline;

  .key {
    font-style: italic;
    font-size: 1.7rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  li {
    margin-right: 1em;
  }
}
```
