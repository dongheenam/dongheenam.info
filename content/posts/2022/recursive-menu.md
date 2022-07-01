---
title: "Generating a Recursive Menu in Hugo"
description: "Rendering a multi-level list using recursion in Hugo (and other languages!)"

date: 2022-06-29 08:20:06.460 +1000

toc: true
draft: false
highlight: true

tags:
  - Hugo
  - Python
  - recursion

---

## Introduction

Hugo lets you generate menus from the `menu` parameters of individual pages. For example, if you have a Menu `example-menu` with a top page, Projects 1 and 2 directly beneath it, two examples under Project 1, it will have the following structure:{{% mn Tree %}}Made with a wonderful tool [tree.nathanfriend.io/](https://tree.nathanfriend.io/). {{% /mn %}}

```plaintext
example-menu
└── Top
    ├── Project 1
    │   ├── Example 1
    │   └── Example 2
    └── Project 2
```

This can be done post-by-post in the front matter and it is a little painful to set it up at first. Have a look at the code below to see how you can construct `example-menu`.

{{% details title="Structuring a menu using the front matter" %}}

{{% code filename="posts/index.md" %}}
```yaml
---
menu:
  example-menu:
    name: "Top"
---
...
```
{{% /code %}}


{{% code filename="posts/project-1.md" %}}
```yaml
---
menu:
  example-menu:
    parent: "Top"
    name: "Project 1"
    weight: 10
---
...
```
{{% /code %}}

{{% code filename="posts/example-11.md" %}}
```yaml
---
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 1"
    weight: 10
---
...
```
{{% /code %}}

{{% code filename="posts/example-12.md" %}}
```yaml
---
menu:
  example-menu:
    parent: "Project 1"
    name: "Example 2"
    weight: 20
---
...
```
{{% /code %}}

{{% code filename="posts/project-2.md" %}}
```yaml
---
menu:
  example-menu:
    parent: "Top"
    name: "Project 2"
    weight: 20
---
...
```
{{% /code %}}

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

### Foundation

This `Menu` class has the structure and functions pretty similar to the menu object in Hugo. Arbitrary argument `*args` is used to reduce the number of square brackets in the code.

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
```

Then, we can set up `example-menu` using the `Menu` class:

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
```

Let's first think of the "show-all" case first. All it needs is a function that prints the title of the menu, and then loop over its children. Each time it is looping over the children, we should increase the level of indentation because we are diving deeper.

```python
def show_menu(menu, indent=""):
    # print the title
    print(f"{indent}{menu.title}")

    # then loop over its children
    for child in menu.children:
      show_menu(child, indent=indent+"  ")
```

Putting everything together and running `show_menu` with `example_menu` as its input gives this.

{{% code filename="menu.py" %}}
```python
class Menu:
    ...

def show_menu(menu, indent=""):
    ...

example_menu = (
    ...
)

show_menu(example_menu)
```
{{% /code %}}

{{% code filename="console" %}}
```shell
$ python menu.py
Top
  Project 1
    Example 1
    Example 2
  Project 2
```
{{% /code %}}

Now we can start implementing the logic!

### Selective rendering

To determine which menu tree should be rendered, the function needs to know where we are at. Let's add another argument called `current`, to specify the page we are currently at.

{{% code filename="menu.py" %}}
```python
class Menu:
    ...

def show_menu(menu, current, indent=""):
    # puts a star sign at the end of the current menu
    show_current = "*" if menu == current else ""

    # print the title
    print(f"{indent}{menu.title}{show_current}")

    # then loop over its children
    for child in menu.children:
        show_menu(child, current, indent=indent+"  ")

example_menu = (
    ...
)

show_menu(example_menu, Menu("Project 2"))
```
{{% /code %}}

{{% code filename="console" %}}
```shell
$ python menu.py
Top
  Project 1
    Example 1
    Example 2
  Project 2*
```
{{% /code %}}

Then, we can add an if statement before we enter the loop. This is to block any menu items that are not related with `current` from showing their children.

{{% code filename="menu.py" %}}
```python
class Menu:
    ...

def show_menu(menu, current, indent=""):
    # puts a star sign at the end of the current menu
    show_current = "*" if menu == current else ""

    # print the title
    print(f"{indent}{menu.title}{show_current}")

    # then loop over its children
    # only if the item has the current page
    if menu.has(current):
        for child in menu.children:
            show_menu(child, current, indent=indent+"  ")

example_menu = (
    ...
)

show_menu(example_menu, Menu("Project 2"))
```
{{% /code %}}

If we run this code as if we are at the Project 2 page,

{{% code filename="console" %}}
```shell
$ python menu.py
Top
  Project 1
  Project 2*
```
{{% /code %}}

the examples are all gone!

The only issue with the code is that we cannot navigate only with the menu because the current page does not show its children:

{{% code filename="menu.py" %}}
```python
...
show_menu(example_menu, Menu("Top"))
```
{{% /code %}}

{{% code filename="console" %}}
```shell
$ python menu.py
Top*
```
{{% /code %}}

so we can modify the code slightly to view the children of the current page as well.

{{% code filename="menu.py" %}}
```python
class Menu:
    ...

def show_menu(menu, current, indent=""):
    ...
    if menu.has(current) or menu == current:
        for child in menu.children:
            show_menu(child, current, indent=indent+"  ")

example_menu = (
    ...
)

show_menu(example_menu, Menu("Top"))
```
{{% /code %}}

{{% code filename="console" %}}
```shell
$ python menu.py
Top*
  Project 1
  Project 2
```
{{% /code %}}

Let's see how this awesome Python code translates to Hugo.

## Hugo Partials

It would be probably the easiest for us to use [partial template](https://gohugo.io/templates/partials) to mimic the behaviour of `show_list()` and render each item.

Let's start with having a look at the overall structure first. This is where the menu list sits inside `<aside>`.

{{% code filename="layouts/partials/sidenav.html" %}}
```golang
{{ $current_page := . }}
{{ $menu_id := "" }}
{{ range $key, $value := .Params.menu }}
  {{ $menu_id = $key }}
{{ end }}

<aside class="sidenav">
...
  <div class="sidenav-menu">
    {{ partial "menu-item" (dict 
        "menu" $menu_id
        "list" (index .Site.Menus $menu_id)
        "current" $current_page) }}
  </div>
</aside>
```
{{% /code %}}

You can see that the partial is called with three variables, `menu`, `list`, and `current`.

- `menu` is the name of the menu. In our example it has the value `example-menu`. This is used as the first argument in [`.IsMenuCurrent`](https://gohugo.io/functions/ismenucurrent/) and [`.HasMenuCurrent`](https://gohugo.io/functions/hasmenucurrent/) function.
- `list` is the list of the pages. The value, `index .Site.Menus $menu_id` will pull all the top-level pages in the menu. In our example this will be \[Top\].
- `current` is the current page. Because of [how Hugo scopes work](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/), you will find many partials and shortcodes start by first defining the current page, which is done here as well.

Let's look inside what the partial looks like.

{{% code filename="layouts/partials/menu-item.html" %}}
```golang
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
{{% /code %}}

It definitely wasn't as tricky as it sounded!

Here would be the result of rendering `example-menu` from the Project 2 page.

{{% code filename="public/posts/project-2.HTML" %}}
```html
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
{{% /code %}}

Finally, you can see this code in action in [one of my courses](/courses/jpn-maths-1/).