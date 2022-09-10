---
title: "Generating a Recursive Menu in Hugo"
description: "Rendering a multi-level list using recursion in Hugo (and other languages!)"

date: 2022-06-29 08:20:06.460 +1000

toc: true
draft: false

tags:
  - Hugo
  - Python
  - recursion

---

## Introduction

Hugo lets you generate menus from the `menu` parameters of individual pages. For example, if you have a Menu `example-menu` with a top page, Projects 1 and 2 directly beneath it, two examples under Project 1, it will have the following structure:{{% mn Tree %}}Made with a wonderful tool [tree.nathanfriend.io/](https://tree.nathanfriend.io/). {{% /mn %}}

```
example-menu
└── Top
    ├── Project 1
    │   ├── Example 1
    │   └── Example 2
    └── Project 2
```

This can be done post-by-post in the front matter and it is a little painful to set it up at first. Have a look at the code below to see how you can construct `example-menu`.

{{% details title="Structuring a menu using the front matter" %}}

```yaml {path="posts/index.md"}
---
# ...
menu:
  example-menu:
    name: "Top"
---
```

```yaml {path="posts/project-1.md"}
---
# ...
menu:
  example-menu:
    parent: "Top"
    name: "Project 1"
    weight: 10
---
```

```yaml {path="posts/example-11.md"}
---
# ...
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 1"
    weight: 10
---
```

```yaml {path="posts/example-12.md"}
---
# ...
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 2"
    weight: 20
---
```

```yaml {path="posts/project-2.md"}
---
# ...
menu:
  example-menu:
    parent: "Top"
    name: "Project 2"
    weight: 20
---
```

{{% /details %}}

[The Documentation](https://gohugo.io/templates/menu-templates/) shows some good examples of a menu template, but it also has a few shortcomings:

- The menu is only two levels deep. The Examples in `example-menu` will never be visible.
- It shows the entire menu at once. If the menu contained items with lots of children, it will be pretty difficult to navigate.

You can definitely see the result of this from the official Hugo website as well, just have a look at how many pages there are in [the Functions section](https://gohugo.io/functions/)!

Inspired by this [Vue example case](https://vuejs.org/examples/#tree), I decided to design a recursive menu template that can:

- display arbitrarily nested menus (and only the designers would stop us), and
- show only the parents and siblings of the current page.

## Python Proof-of-concept

Because recursive programming requires a lot of thinking and I am not proficient in Hugo yet, I decided to first build a model using Python.

```python
class Menu:
    """
    mimics menu in Hugo
    """
    def __init__(self, title, *children):
        self.title = title
        self.children = children
    
    """
    mimics .Page.IsMenuCurrent
    """
    def __eq__(self, other):
        return self.title == other.title

    """
    mimics .Page.HasMenuCurrent
    foo.has(bar) returns True if bar is a descendant of foo
    """
    def has(self, other):
        if any([child == other for child in self.children]):
            return True
        else:
            return any([child.has(other) for child in self.children])

    """
    recursive menu rendering
    """
    def show_menu(menu, current, indent=""):
        # puts a star sign at the end of the current menu
        show_current = "*" if menu == current else ""

        # print the title
        print(f"{indent}{menu.title}{show_current}")

        # then loop over its children
        # if the item is related to the current page
        if menu.has(current) or menu == current:
            for child in menu.children:
                show_menu(child, current, indent=indent+"  ")
```

Below is an example usage and output.

```python
example_menu = (
    Menu("Top", 
        Menu("Project 1", 
            Menu("Example 1"), 
            Menu("Example 2")
        ), 
        Menu("Project 2")
    )
)

show_menu(example_menu, Menu("Top"))
# Top*
#   Project 1
#   Project 2
```


## Hugo Partials

It would be probably the easiest for us to use [partial template](https://gohugo.io/templates/partials) to mimic the behaviour of `show_list()` and render each item.

Let's start with having a look at the overall structure first. This is where the menu list sits inside `<aside>`.

```html {path="layouts/partials/sidenav.html"}
{{ $current_page := . }}
{{ $menu_id := "" }}
{{ range $key, $value := .Params.menu }}
  {{ $menu_id = $key }}
{{ end }}

<aside class="sidenav">
{{/* ... */}}
  <div class="sidenav-menu">
    {{ partial "menu-item" (dict 
        "menu" $menu_id
        "list" (index .Site.Menus $menu_id)
        "current" $current_page) }}
  </div>
</aside>
```

You can see that the partial is called with three variables, `menu`, `list`, and `current`.

- `menu` is the name of the menu. In our example it has the value `example-menu`. This is used as the first argument in [`.IsMenuCurrent`](https://gohugo.io/functions/ismenucurrent/) and [`.HasMenuCurrent`](https://gohugo.io/functions/hasmenucurrent/) function.
- `list` contains the children pages to be displayed. The initial value, `index .Site.Menus $menu_id` will pull all the top-level pages in the menu. In our example this will be \[Top\]. 
- `current` is the current page. Because of [how Hugo scopes work](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/), you will find many partials and shortcodes start by first defining the current page, which is done here as well.

Let's look inside what the partial looks like.

```html {path="layouts/partials/menu-item.html"}
{{ $menu_id := .menu }}
{{ $list := .list }}
{{ $current_page := .current }}

<ul>
{{ range $list }}
  {{/* current items */}}
  <li{{ if $current_page.IsMenuCurrent $menu_id . }} class="current"{{ end }}>
  {{- if .URL -}}
    <a href="{{ .URL }}">{{ .Name }}</a>
  {{- else -}}
    {{ .Name }}
  {{- end -}}
  </li>

  {{/* only render the child elements of the current page
       and the ancestors of the current page. */}}
  {{- if and 
      .HasChildren
      (or 
          ($current_page.IsMenuCurrent $menu_id .)
          ($current_page.HasMenuCurrent $menu_id .)) }}
    {{ partial "menu-item" (dict 
        "menu" $menu_id
        "list" .Children
        "current" $current_page) }}
  {{ end }}
{{ end }}{{/* end range $list */}}
</ul>
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

Finally, you can see this code in action in [my course](/courses/jpn-maths-1/).