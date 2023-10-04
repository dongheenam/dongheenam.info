---
title: 'Printing Unicode Characters in Hugo'
description: "My learning experience with `printf` in Golang and Hugo."
date: '2023-10-04 15:27:28.278 +1100'

draft: false
toc: true

tags:
  - Hugo

---

Hugo uses Golang's `fmt.Sprintf` to format strings.

```html
{{ $var := "world" }}
{{ printf "Hello %s." $var }} {{/* Hello world. */}}
```

While we mostly need standard options such as `%s` (print as string), `%d` (integer), `$f` (float), and so on, there are some other options that are useful in Hugo.

For example, the following code prints the value in a Go-syntax:

```html
{{ $var := dict "this" 1 "that" 2 }}
{{ printf "%#v" $var }} {{/* map[string]interface {}{"that":2, "this":1} */}}
```

## Dynamic character using `%c`

The `%c` option prints a character corresponding to the given Unicode code point. Using this option, we can create a simple shortcode that converts hex to character.

```html {path="layouts/shortcodes/unicode.html",linenos=false}
{{ .Get 0 | int | printf "%c" }}
```

Using this shortcode, we can print a character using its Unicode code point:

```html
{{</* unicode 0x1F4A9 */>}} {{/* 💩 */}}
```

Here is another example. Say we want to print a circled number. We know that `U+2460` corresponds to {{< unicode 0x2460 >}}, and `U+2461` corresponds to {{< unicode 0x2461 >}}, and so on, so we construct the following logic:

```html
{{ $num := 4 }}
{{ $code := add 0x245F $num }} {{/* U+2463 */}}
{{ printf "%c" $code }}        {{/* ④ */}}
```
