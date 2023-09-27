---
title: "Generating a Recursive Menu in Hugo"
description: "Rendering a multi-level list using recursion in Hugo"

date: 2022-06-29 08:20:06.460 +1000

draft: false
toc: true

tags:
  - Hugo
  - Python
  - recursion
---

## Introduction

Hugo lets you generate menus from the `menu` parameters of individual pages. For example, if you have a Menu `example-menu` with a top page, Projects 1 and 2 directly beneath it, two examples under Project 1, it will have the following structure:

{{% aside %}}
Made with [tree.nathanfriend.io/](https://tree.nathanfriend.io/).
{{% /aside %}}

```
example-menu
└── Top
    ├── Project 1
    │   ├── Example 1
    │   └── Example 2
    └── Project 2
```

This menu can be created using the following frontmatter structure:

{{% tabs id="posts" %}}
{{% tab name="posts/index.md" %}}

```yaml
---
menu:
  example-menu:
    name: "Top"
---
```

{{% /tab %}}
{{% tab name="posts/project-1.md" %}}

```yaml
---
menu:
  example-menu:
    parent: "Top"
    name: "Project 1"
    weight: 10
---
```

{{% /tab %}}
{{% tab name="posts/example-11.md" %}}

```yaml
---
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 1"
    weight: 10
---
```

{{% /tab %}}
{{% tab name="posts/example-12.md" %}}

```yaml
---
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 2"
    weight: 20
---
```

{{% /tab %}}
{{% tab name="posts/project-2.md" %}}

```yaml
---
menu:
  example-menu:
    parent: "Top"
    name: "Project 2"
    weight: 20
---
```

{{% /tab %}}
{{% /tabs %}}

So, how do we render this? The Hugo [documentation](https://gohugo.io/templates/menu-templates/) shows some good examples of a menu template, but it also has a few shortcomings:

{{% aside %}}
The [template](https://gohugo.io/templates/menu-templates/#example) in the official documentation now uses recursion as well to render deeply nested lists. Well done!
{{% /aside %}}

- ~~The menu is only two levels deep. The examples in `example-menu` will never be visible.~~
- It shows the entire menu at once. If the menu contained items with lots of children, it will be pretty difficult to navigate.

You can definitely see the result of this from the official Hugo website as well, just have a look at how many pages there are in the [Functions section](https://gohugo.io/functions/)!

Inspired by this Vue [example case](https://vuejs.org/examples/#tree), I decided to design a recursive menu template that can:

- display arbitrarily nested menus (and only the designers would stop us), and
- show only the parents and siblings of the current page.

## Hugo Partials

Let's start with having a look at the overall structure first. This is where the menu list sits inside `<aside>`.

```html {path="layouts/partials/sidenav.html"}
{{ $current_page := . }}
{{ $menu_id := "" }}
{{ range $key, $value := .Params.menu }}
  {{ $menu_id = $key }}
{{ end }}

<aside class="sidenav">
  {{/* ...rest of code */}}
  <div class="menu">
    <ul>
      {{ partial "menu-item" (dict
        "menu" $menu_id
        "list" (index .Site.Menus $menu_id)
        "current" $current_page) }}
    </ul>
  </div>
</aside>
```

You can see that the partial is called with three variables, `menu`, `list`, and `current`.

- `menu` is the name of the menu. In our example it has the value `example-menu`. This is used as the first argument in [`.IsMenuCurrent`](https://gohugo.io/functions/ismenucurrent/) and [`.HasMenuCurrent`](https://gohugo.io/functions/hasmenucurrent/) function.
- `list` contains the children pages to be displayed. The initial value, `index .Site.Menus $menu_id` will pull all the top-level pages in the menu. In our example, this will be `Top`.
- `current` is the current page. Because of how Hugo scopes [work](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/), you will find many partials and shortcodes start by first saving the current page, which is done here as well.

Let's look inside what the partial looks like.

```html {path="layouts/partials/menu-item.html"}
{{ $menu_id := .menu }}
{{ $list := .list }}
{{ $current_page := .current }}
{{ range $list }}
  {{- $is_current := $current_page.IsMenuCurrent $menu_id . -}}
  <li>
    {{- if .URL -}}
      <a {{ if $is_current }}class="current" {{ end }} href="{{ .URL }}">{{ .Name }}</a>
    {{- else -}}
      <span {{ if $is_current }}class="current" {{ end }}>{{ .Name }}</span>
    {{- end -}}

    {{/* only render the child elements of the current page and
        the ancestors of the current page. */}}
    {{- if and
      .HasChildren
      (or
        ($current_page.IsMenuCurrent $menu_id .)
        ($current_page.HasMenuCurrent $menu_id .)
      ) -}}
      <ul>
        {{ partial "menu-item" (dict
          "menu" $menu_id
          "list" .Children
          "current" $current_page) }}
      </ul>
  {{- end -}}
  </li>
{{ end }}{{/* end range $list */}}
```

It definitely wasn't as tricky as it sounded!

Here would be the result of rendering `example-menu` from the Project 2 page.

```html {path="public/posts/project-2.html"}
<aside>
  ...
  <div class="sidenav-menu">
    <ul>
      <li><a href="/posts/">Top</a></li>
      <ul>
        <li><a href="/posts/project-1/">Project 1</a></li>
        <li class="current"><a href="/posts/project-2/">Project 2</a></li>
      </ul>
    </ul>
  </div>
</aside>
```

{{% note title="Update" %}}

The menu template was originally developed from the [example template](https://gohugo.io/templates/menu-templates/) in the Hugo documentation, which renders like this:

```html {hl_lines="3-6"}
<ul>
  <li>Item 1</li>
  <ul>
    <li>Subitem 1</li>
    <li>Subitem 2</li>
  </ul>
  <li>Item 2</li>
</ul>
```

However, according to [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#nesting_lists) and [HTML Standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element), nested lists should look like this instead:

```html {hl_lines="3-6"}
<ul>
  <li>
    Item 1
    <ul>
      <li>Subitem 1</li>
      <li>Subitem 2</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>
```

Hugo documentation is now fixed as well.

{{% /note %}}
