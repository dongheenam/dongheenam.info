---
title: "Grouping a List by First Letter in Hugo"
description: "Alphabetically sorting a list or a taxonomy with headings."

date: 2021-07-05 13:02:51.167 +1000

toc: true
draft: false
highlight: true

tags:
  - Hugo

---

## Introduction

Hugo provides a powerful content management tool called [taxonomies](https://gohugo.io/content-management/taxonomies). In addition to default taxonomies such as categories and tags, you can define one on your own and customise as you like (see [this repo](https://github.com/guayom/hugo-taxonomies) for a cool example!). 

## The Problem

One important feature of taxonomies is that you can show the list of terms (keywords) across the site, such as the list of tags. By default, the list looks like a regular branch bundle of a section because it follows the same layout:

{{% figure src="blogs/2021/tag1.JPG" caption="The list of [all tags](/tags/) in this blog using the default list layout." style="border: 1px solid var(--text-color)" noresize="true" %}}

Now, how can we improve this page? We can certainly reduce the spacing between terms using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [sort them alphabetically](https://gohugo.io/templates/taxonomy-templates/#order-taxonomies).

{{% figure src="blogs/2021/tag2.JPG" caption="The list of [all tags](/tags/) in this blog using a custom layout with alphabetical sorting." style="border: 1px solid var(--text-color)" noresize="true" %}}

It looks much better than before, but you can expect this list will grow to a messy clutter of words as the number of tags increases over time. It would look much better if we could divide them into smaller chunks based on the first letter.

{{% figure src="blogs/2021/tag3.JPG" caption="The list of [all tags](/tags/) in this blog grouped by the first letter." style="border: 1px solid var(--text-color)" noresize="true" %}}

## The Solution(s)

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


### Classifying the items

We will first build the dictionary, which we call `$pages_by_letters`, where the keys are the letters of the alphabet, and the values are the list of tags that start with that letter. Here is the full code:

```html {path="layouts/_default/terms.html"}
{{ define "main" }}

{{- $letters := split "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "" -}}
{{- $pages := .Pages.ByTitle -}}
{{- $pages_by_letters := dict -}}
{{ range $pages }}
  {{- $page := . -}}
  {{- $first_letter := upper ( substr $page.Name 0 1 ) -}}
  {{- if not (in $letters $first_letter) }}
    {{ $first_letter = "#" }}
  {{ end }}
  {{- $new_list := slice -}}
  {{ with index $pages_by_letters $first_letter }}
    {{- $new_list = . | append $page -}}
  {{ else }}
    {{- $new_list = slice $page -}}
  {{ end }}
  {{- $pages_by_letters = merge $pages_by_letters (dict $first_letter $new_list) -}}
{{ end }}

<!-- ...rest of page -->

{{ end }}
```


{{% details title="Explanation" %}}

```html {hl_lines="1-3"}
{{- $letters := split "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "" -}}
{{- $pages := .Pages.ByTitle -}}
{{- $pages_by_letters := dict -}}
{{ range $pages }}
  {{- $page := . -}}
  {{- $first_letter := upper ( substr $page.Name 0 1 ) -}}
  {{- if not (in $letters $first_letter) }}
    {{ $first_letter = "#" }}
  {{ end }}
  {{- $new_list := slice -}}
  {{ with index $pages_by_letters $first_letter }}
    {{- $new_list = . | append $page -}}
  {{ else }}
    {{- $new_list = slice $page -}}
  {{ end }}
  {{- $pages_by_letters = merge $pages_by_letters (dict $first_letter $new_list) -}}
{{ end }}
```

Let's first define some useful variables. Here, `$letters` is the slice (list) of the English alphabet, and `$pages` is the slice of all terms, sorted alphabetically. Then, we will loop over `$pages` to look at individual terms.

```html {hl_lines="4-9 17"}
{{- $letters := split "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "" -}}
{{- $pages := .Pages.ByTitle -}}
{{- $pages_by_letters := dict -}}
{{ range $pages }}
  {{- $page := . -}}
  {{- $first_letter := upper ( substr $page.Name 0 1 ) -}}
  {{- if not (in $letters $first_letter) }}
    {{ $first_letter = "#" }}
  {{ end }}
  {{- $new_list := slice -}}
  {{ with index $pages_by_letters $first_letter }}
    {{- $new_list = . | append $page -}}
  {{ else }}
    {{- $new_list = slice $page -}}
  {{ end }}
  {{- $pages_by_letters = merge $pages_by_letters (dict $first_letter $new_list) -}}
{{ end }}
```

Because we need to [change the scope](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/), we first need to define `$page`. Then, `$first_letter`, as the name suggests, is the (capitalised) first letter of the name of `$page`. A term can start with numbers or non-alphabetic letters, so we need to classify them separately. 

```html {hl_lines="10-16"}
{{- $letters := split "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "" -}}
{{- $pages := .Pages.ByTitle -}}
{{- $pages_by_letters := dict -}}
{{ range $pages }}
  {{- $page := . -}}
  {{- $first_letter := upper ( substr $page.Name 0 1 ) -}}
  {{- if not (in $letters $first_letter) }}
    {{ $first_letter = "#" }}
  {{ end }}
  {{- $new_list := slice -}}
  {{ with index $pages_by_letters $first_letter }}
    {{- $new_list = . | append $page -}}
  {{ else }}
    {{- $new_list = slice $page -}}
  {{ end }}
  {{- $sort_list := sort $new_list ".Name" -}}
  {{- $pages_by_letters = merge $pages_by_letters (dict $first_letter $sort_list) -}}
{{ end }}
```

Then, we will try to search the dictionary with `$first_letter`. If there is an entry, we can attend the current `$page` to the entry. Otherwise, we need to make a new slice. The loop ends after we update the dictionary.

{{% /details %}}


### Printing the items

We can then make the list from the dictionary. Since we will make use of the [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/), the keys can just sit inside a `<span>`.

```html {path="layouts/_default/terms.html"}
<!-- ...rest of page -->

<section class="section-pages-tag">
{{ range $key, $items := $pages_by_letters }}
  <span class="key">{{ $key }}</span>
  <ul>
  {{- range $items -}}
    <li>
      <a href="{{ .RelPermalink }}">{{ .Name }}</a><sup>{{ len .Pages }}</sup>
    </li>
  {{- end -}}
  </ul>
{{ end }}
</section>
```

`{{ len .Pages }}` calculates the number of posts for a single tag.


### CSS

Finally, we can put everything together using (S)CSS.

```scss {path="assets/scss/main.scss"}
.section-pages-tag {
  display: grid;
  grid-template-columns: 3rem auto;
  align-items: baseline;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    line-height: 1.5;
  }

  li {
    margin-right: 1em;
  }

  .key {
    font-style: italic;
    font-size: 1.7rem;
  }
}
```

