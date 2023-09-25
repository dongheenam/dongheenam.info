---
title: "Version 2 test"
description: "This is a new version for the blog theme!"

date: 2023-09-17 16:10:04.312 +1000

toc: true
draft: false

tags:
  - Hugo
  - Typo
  - Hello!


---

## What is Lorem Ipsum?

abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz

{{% note title="Definition" color="gray" %}}
Lorem

Ipsum
{{% /note %}}

{{% note title="Definition" color="gold" %}}
Lorem

Ipsum
{{% /note %}}

{{% note title="Definition" color="accent" %}}
Lorem

Ipsum
{{% /note %}}

Lorem Ipsum has been the industry's {{% smallcaps %}}standard dummy{{% /smallcaps %}} text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Images

{{% figure src="cathedral.jpg" caption="Central dome of Salzburg Cathedral, Austria." %}}

{{% figure src="map.svg" border="true" %}}

## Codeblock

single line `code`?

```html {path="layouts/partials/head.html", hl_lines="2-4"}
<head>
    <meta name="author" content="{{ with .Site.Params.author }}{{ . }}{{ end }}" />
    <meta name="description" content="{{if .IsHome }}{{ $.Site.Params.description }}{{ else }}{{ .Description }}{{ end }}" />
    <meta name="theme-color" content="#111111" />
</head>
```

```python {path="my.py", hl_lines="2"}
print("Hello, world!")
print("Bye, world!")
```

```python {path="my.py", linenos="false"}
print("Hello, world!")
print("Bye, world!")
```

```python
print("Hello, world!")
print("Bye, world!")
```


## Why do we use it?

{{% aside %}}
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
{{% /aside %}}

It is a *long established fact* that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

{{% aside %}}
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
{{% /aside %}}

## Examples

### Unordered Lists

- Nulla maximus ac libero eget fermentum.
- Duis aliquet venenatis bibendum.
- Donec vitae tellus quis ligula dignissim aliquam. Sed tincidunt gravida tortor non euismod. Pellentesque congue, felis ac gravida volutpat, magna enim malesuada nisi, eget dictum urna enim quis dui. Sed tincidunt dignissim lorem sit amet vestibulum.
- Pellentesque vitae dui at risus faucibus interdum non vitae lacus. Donec aliquet placerat lectus sit amet interdum. Etiam porttitor rutrum nulla a aliquet.
- Suspendisse potenti.
  - Nulla tincidunt malesuada tortor nec porttitor.
  - Quisque at pellentesque libero, quis mattis lorem.
  - Ut imperdiet ac eros pulvinar ultricies. Donec luctus, turpis quis luctus volutpat, ex massa fermentum ante, sit amet rutrum velit turpis ac enim. Suspendisse id enim sapien.
  - Proin et libero varius, malesuada nunc sit amet, vestibulum tortor. In ut tincidunt massa. Aenean rhoncus viverra sem id posuere. Curabitur mauris felis, eleifend at lacus posuere, gravida ullamcorper sem.

### Ordered Lists

1. Nulla maximus ac libero eget fermentum.
2. Duis aliquet venenatis bibendum.
3. Donec vitae tellus quis ligula dignissim aliquam. Sed tincidunt gravida tortor non euismod. Pellentesque congue, felis ac gravida volutpat, magna enim malesuada nisi, eget dictum urna enim quis dui. Sed tincidunt dignissim lorem sit amet vestibulum.

    Maecenas quam turpis, interdum et dui sed, vehicula lobortis mauris. Vivamus viverra dui vel sem euismod accumsan. Cras sit amet felis nec metus facilisis rhoncus.
4. Pellentesque vitae dui at risus faucibus interdum non vitae lacus. Donec aliquet placerat lectus sit amet interdum. Etiam porttitor rutrum nulla a aliquet.
5. Suspendisse potenti.
    1. Nulla tincidunt malesuada tortor nec porttitor.
    2. Quisque at pellentesque libero, quis mattis lorem.
    3. Ut imperdiet ac eros pulvinar ultricies. Donec luctus, turpis quis luctus volutpat, ex massa fermentum ante, sit amet rutrum velit turpis ac enim. Suspendisse id enim sapien.
    4. Proin et libero varius, malesuada nunc sit amet, vestibulum tortor. In ut tincidunt massa. Aenean rhoncus viverra sem id posuere. Curabitur mauris felis, eleifend at lacus posuere, gravida ullamcorper sem.

Hey?

11. Pellentesque vitae dui at risus faucibus interdum non vitae lacus. Donec aliquet placerat lectus sit amet interdum. Etiam porttitor rutrum nulla a aliquet.
12. Donec condimentum iaculis urna, a imperdiet ex fringilla quis. Duis eget libero eu turpis condimentum porta non ac lorem. In odio velit, tempor vel scelerisque id, faucibus at felis. Praesent erat ante, tempus sit amet ipsum sed, feugiat molestie nisl. Nunc posuere orci vel cursus convallis.


## Sed tincidunt gravida tortor non euismod