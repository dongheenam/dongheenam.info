---
title: Code Tabs in Hugo
description: "how to make a tabbed view of codes in Hugo"
date: 2022-09-16 22:11:07 +1000

toc: true
draft: true

tags:
  - Hugo
  - JavaScript

---



{{< tabs >}}
{{% tab name="Python" %}}
```python {path="/lib/hello.py"}
def hello(name):
    print(f"hello, {name}!")
```
{{% /tab %}}
{{% tab name="JavaScript" %}}
```javascript {path="/lib/hello.js"}
function hello(name) {
    console.log(`Hello, ${name}!`);
}
```
{{% /tab %}}
{{% tab name="TypeScript" %}}
```typescript {path="/lib/hello.ts"}
function hello(name: string): void {
    console.log(`Hello, ${name}!`);
}
```
{{% /tab %}}
{{< /tabs >}}