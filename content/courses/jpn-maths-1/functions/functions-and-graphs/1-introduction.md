---
title: "Introduction to Functions"
slug: introduction
description: "Definition of functions, domain and range."

date: 2021-03-21 17:00:09.816 +1100
lastMod: 2021-03-21 17:00:09.816 +1100

toc: true
type: docs
math: true
draft: true

menu:
  math1-func:
    name: Introduction
    parent: Functions and Graphs
    weight: 11

weight: 11
---

## Introduction

In this lesson, we will:

- Review the definition of mathematical functions.
- Evaluate a function at a given point.
- Define the domain and range of a function.


## Functions

{{% mn %}}{{% img loc="sidenote" src="courses/jpn-maths-1/functions/function_machine2.svg" %}} The function acting as a 'black box'. Figure by [Wvbailey](https://en.wikipedia.org/wiki/Function_(mathematics)#/media/File:Function_machine2.svg) via Wikipedia. {{% /mn %}}
The word *function* comes from the Latin word meaning *to perform*. Following its name, a mathematical function *acts on* a number to do certain calculations. {{% sn 35 %}}Also, the traditional Chinese/Japanese translation of functions is "函数", which means *box numbers*. I think this translation encapsulates the nature of a function as a 'black box' so well!{{% /sn %}}

{{% box %}}

{{% note Definition %}} Suppose two variables $x$ and $y$. When the value of $x$ *uniquely* determines the value of $y$, $y$ is a *function* of $x$.

*Note.* The common notation for a function (of $x$) is $f(x)$. For example, the value of $y$ when $x=1$ is $f(1)$.

{{% /box %}}

Let me elaborate the above sentence a little more. Think a function as a hard-working robot. Each time you give the robot a number, it will return a number. Here are the two important properties it must have:

- it must not return more than one outputs for a single input.
- it must always return some output when given an input.

From the first property, we know that such robots are *consistent*. If a robot exchanges $2$ with $1$, it should *always* give you $1$ whenever you put a $2$ in. Functions are like that: $f(2)$ must always equal $f(2)$.

{{% box %}}

{{% note Example %}} The following are functions.

- $f(x) = 2x$
- $f(x)$ is the sign of $x$ (the sign function, $\text{sgn}(x)$).

The following are NOT functions.

- $f(x)$ is the outcome of throwing $x$ coins (the result changes every time).
- $f(x)$ is the square root of $x$ (there are two square roots for a single $x$).

{{% /box %}}

