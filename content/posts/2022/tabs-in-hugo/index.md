---
title: Tabbed Views in Hugo
description: "how to make a tabbed view of contents in Hugo"
date: 2022-09-17 13:05:10.589 +1000

toc: true
draft: false

tags:
  - Hugo
  - JavaScript

---

## Motivation

When writing a tutorial, you often need to write the same logic in multiple different languages based on the user preference. You can most commonly see this in the front-end community, with the [rise of TypeScript](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-programming-scripting-and-markup-languages) and the various config file specifications.

Below is an example of how [Hugo documentation](https://gohugo.io/content-management/front-matter/#example) deals with this.

{{< figure src="hugo-tabs.jpg" caption="[Source](https://gohugo.io/getting-started/configuration/#configuration-directory)" >}}

If we have a closer look at the [raw Markdown](https://github.com/gohugoio/hugoDocs/blob/50f5d4776f647899a3c1d863e84d44ff72972cbe/content/en/getting-started/configuration.md#configuration-directory) and the [shortcode](https://github.com/gohugoio/hugoDocs/blob/master/layouts/shortcodes/code-toggle.html), the shortcode takes the code in one of the three languages and automatically convert it to the others. It is super cool and I might be able to use [Hugo Pipes](https://gohugo.io/hugo-pipes/babel/) to develop similar features with TypeScript--JavaScript conversion, but it feels like an overkill to me and I am not very bothered with manually typing the different versions.

This post provides you a simple approach to generate tabbed views in Hugo with shortcodes and simple JavaScript. Note that the source code for this shortcode is heavily influenced by the [Learn Theme for Hugo](https://learn.netlify.app/en/shortcodes/tabs/). You can view their source code [here](https://github.com/matcornic/hugo-theme-learn/tree/master/layouts/shortcodes).

## Aim

We would like to make a switchable tabs that look like below. You can click the tabs to switch between different languages.

{{% tabs id="preview" %}}

{{% tab name="Python 3.6+" %}}
```python
def hello(name):
    print(f"hello, {name}!")
```
{{% /tab %}}

{{% tab name="Python 3" %}}
```python
def hello(name):
    print("hello, {name}!".format(name=name))
```
{{% /tab %}}

{{% tab name="JavaScript" %}}
```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```
{{% /tab %}}

{{% tab name="TypeScript" %}}
```typescript
function hello(name: string): void {
    console.log(`Hello, ${name}!`);
}
```
{{% /tab %}}

{{% /tabs %}}

Below is the markdown required to render the tabs.

`````html
{{%/* tabs id="preview" */%}}
{{%/* tab name="Python 3.6+" */%}}
```python
def hello(name):
    print(f"hello, {name}!")
```
{{%/* /tab */%}}
{{%/* tab name="Python 3" */%}}
```python
def hello(name):
    print("hello, {name}!".format(name=name))
```
{{%/* /tab */%}}
{{%/* tab name="JavaScript" */%}}
```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```
{{%/* /tab */%}}
{{%/* tab name="TypeScript" */%}}
```typescript
function hello(name: string): void {
    console.log(`Hello, ${name}!`);
}
```
{{%/* /tab */%}}
{{%/* /tabs */%}}
`````

{{% note title="summary" color="gold" %}}

The child shortcodes append its title and content to the `.Scratch` of the parent shortcode. The parent then renders the HTML and provides the necessary JavaScript script to control the tabs.

{{% /note %}}


## Storing content

Let's have a look at the children first. They do not need to render anything, but to store the name of the tab and its content inside parent's `.Scratch` space.

```html {path="layouts/shortcodes/tab.html"}
{{ $parent := .Parent }}
{{ if $parent }}
  {{ $name := trim (.Get "name") " " }}
  {{ if not (.Parent.Scratch.Get "tabs") }}
    {{ $parent.Scratch.Set "tabs" slice }}
  {{ end }}
  {{ with .Inner }}
    {{ $parent.Scratch.Add "tabs" (dict "name" $name "content" .) }}
  {{ end }}
{{ end }}
```

{{% note title="Note" color="gold" %}}

You may wonder that why the children has to call `.Parent.Scratch.Set`, where the following structure looks much more reasonable:

{{% tabs  %}}
{{% tab name="layouts/shortcodes/tabs.html" %}}
```html
<!-- parent shortcode -->
{{ .Scratch.Set "tabs" slice }}
{{ with .Inner }}
  {{/*  ...  */}}
{{ end }}
```
{{% /tab %}}
{{% tab name="layouts/shortcodes/tab.html" %}}
```html
<!-- child shortcode -->
{{ .Parent.Scratch.Add "tabs" ... }}

```
{{% /tab %}}
{{% /tabs %}}

The issue is that [Hugo renders](https://discourse.gohugo.io/t/explanation-of-rendering-order/6162) the child shortcodes *before* rendering their parent and the code above will fail with the following error.

```text {linenos=false}
"layouts\shortcodes\tab.html:2:4": execute of template failed at <.Parent.Scratch.Add>:
error calling Add: can’t apply the operator to the values
```

It is definitely a counterintuitive pattern!

{{% /note %}}


## Rendering

Now, the parent can range over the content and construct the HTML.

```html {path="layouts/shortcodes/tabs.html"}
{{/* do nothing with .Inner but still needs to be called */}}
{{- with .Inner }}{{ end -}}
<div class="tab-container">
  <div class="tab-header">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <button
      class='tab-button {{ cond (eq $idx 0) "active" "" }}'
    >{{ .name }}</button>
  {{- end -}}
  </div>
  <div class="tab-content">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <div
      class='tab-item {{ cond (eq $idx 0) "active" "" }}'>
      {{ .content }}
    </div>
  {{- end -}}
  </div>
</div>
```

Below shows how the shortcodes are rendered.

{{% tabs %}}
{{% tab name="Markdown" %}}
```html {linenos=false}
{{%/* tabs */%}}
{{%/* tab name="Tab 1" */%}}
Content 1
{{%/* /tab */%}}
{{%/* tab name="Tab 2" */%}}
Content 2
{{%/* /tab */%}}
{{%/* tab name="Tab 3" */%}}
Content 3
{{%/* /tab */%}}
{{%/* /tabs */%}}
```
{{% /tab %}}
{{% tab name="HTML" %}}
```html {linenos=false}
<div class="tab-container">
  <div class="tab-header">
    <button class='tab-button active'>Tab 1</button>
    <button class='tab-button'>Tab 2</button>
    <button class='tab-button'>Tab 3</button>
  </div>
  <div class="tab-content">
    <div class='tab-item active'>Content 1</div>
    <div class='tab-item'>Content 2</div>
    <div class='tab-item'>Content 3</div>
  </div>
</div>
```
{{% /tab %}}
{{% /tabs %}}


We can also add some CSS to only show the contents of the active tab.

```CSS {path="assets/css/main.css"}
.tab-item {
  display: none;
}
.tab-item.active {
  display: block;
}
.tab-button.active {
  /* styling for the active tab header */
}
```


## Tab-switching logic

Now it's time to add some JavaScript to control the tabs. There are many possible methods, and you can even achieve the same result with [pure CSS](https://css-tricks.com/css3-tabs/), but I find [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) are the most elegant way.

We first add two data attributes to the tab items and buttons, `data-tab-item` and `data-tab-group`. `data-tab-item` stores the name of each tab, and `data-tab-group` works as a duplicatable element ID to allow multiple tab environments to have the same ID.

```html {path="layouts/shortcodes/tabs.html", hl_lines="3 8-9 17-18"}
{{/* do nothing with .Inner but still needs to be called */}}
{{- with .Inner }}{{ end -}}
{{- $groupId := .Get "id" | default "default" -}}
<div class="tab-container box">
  <div class="tab-nav">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <button
      data-tab-item="{{ .name }}"
      data-tab-group="{{ $groupId }}"
      class='tab-button {{ cond (eq $idx 0) "active" "" }}'
    >{{ .name }}</button>
  {{- end -}}
  </div>
  <div class="tab-content">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <div
      data-tab-item="{{ .name }}"
      data-tab-group="{{ $groupId }}"
      class='tab-item {{ cond (eq $idx 0) "active" "" }}'>
      {{ .content }}
    </div>
  {{- end -}}
  </div>
</div>
```

Then, we can add the following `onclick` event listener that finds all tab items and buttons and toggles the `.active` CSS class:

```js
function switchTab(groupId, name) {
  const tabItems = document.querySelectorAll(
    `.tab-item[data-tab-group="${groupId}"]`
  );
  const tabButtons = document.querySelectorAll(
    `.tab-button[data-tab-group="${groupId}"]`
  );
  [...tabItems, ...tabButtons].forEach(
    (item) => {
      if (item.dataset.tabItem === name) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  );
}
```

{{% note title="Update" %}}

It is somewhat annoying to set unique ids for each tab groups, so you can also generate a [random string](https://geekthis.net/post/hugo-random-numbers/) on the fly:

```html {}
{{/*  ...  */}}
{{- $groupId := now.UnixMicro | sha256 | trunc 6 -}}
{{- with .Get "id" -}}
  {{- $groupid = . -}}
{{- end -}}
{{/*  ...  */}}
```

{{% /note %}}

## Source Code

Finally, below is the full source code for your reference.


{{% tabs %}}
{{% tab name="layouts/shortcodes/tabs.html" %}}
```html
{{/* script */}}
{{- if not (.Page.Scratch.Get "no-tab-script") -}}
  {{ $js := resources.Get "js/tabs.js" }}
  <script src="{{ $js.RelPermalink }}"></script>
{{- end -}}
{{/* HTML */}}
{{- with .Inner }}{{ end -}}
{{- $groupId := .Get "id" | default "default" -}}
<div class="tab-container box">
  <div class="tab-header">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <button
      data-tab-item="{{ .name }}"
      data-tab-group="{{ $groupId }}"
      class='tab-button {{ cond (eq $idx 0) "active" "" }}'
      onclick="switchTab('{{ $groupId }}','{{ .name }}')"
    >{{ .name }}</button>
  {{- end -}}
  </div>
  <div class="tab-content">
  {{- range $idx, $tab := .Scratch.Get "tabs" -}}
    <div
      data-tab-item="{{ .name }}"
      data-tab-group="{{ $groupId }}"
      class='tab-item {{ cond (eq $idx 0) "active" "" }}'>
      {{ .content }}
    </div>
  {{- end -}}
  </div>
</div>
```
{{% /tab %}}
{{% tab name="layouts/shortcodes/tab.html" %}}
```html
{{ if .Parent }}
  {{ $name := trim (.Get "name") " " }}
  {{ if not (.Parent.Scratch.Get "tabs") }}
    {{ .Parent.Scratch.Set "tabs" slice }}
  {{ end }}
  {{ with .Inner }}
    {{ $.Parent.Scratch.Add "tabs" (dict "name" $name "content" .) }}
  {{ end }}
{{ end }}
```
{{% /tab %}}
{{% tab name="assets/js/tabs.js" %}}
```javascript
function toggleActive(element, condition) {
  if (condition) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
};
function switchTab(groupId, name) {
  const tabItems = document.querySelectorAll(
    `.tab-item[data-tab-group=${groupId}]`
  );
  const tabButtons = document.querySelectorAll(
    `.tab-button[data-tab-group=${groupId}]`
  );
  [...tabItems, ...tabButtons].forEach(
    (item) => toggleActive(item, item.dataset.tabItem === name)
  );
};
```
{{% /tab %}}
{{% /tabs %}}
