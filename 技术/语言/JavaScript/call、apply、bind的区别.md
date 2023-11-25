---
title: call、apply、bind的区别
aliases:
  - call、apply、bind 的区别
tags: []
date created: 2023-05-07 14:01:32
date updated: 2023-11-25 13:50:50
---

# call、apply、bind 的区别

- call 和 apply 都是为了改变函数的 this 对象的指向而存在的，都可以利用后续参数传参。
- bind 是返回对应函数，便于稍后调用，且能传入部分参数，也可以改变 this 指向。

## Call

- call 改变 this 指向，然后立即执行函数，且可以传入参数。

```js
var name = 'window';

function test() {
  console.log(this.name);
}

var obj = {
  name: 'obj'
}

test.call(obj); // obj

```

## Apply

- apply 改变 this 指向，然后立即执行函数，但是传入的参数必须是数组。

```js
var name = 'window';

function test() {
  console.log(this.name);
}

var obj = {
  name: 'obj'
}

test.apply(obj); // obj

```

## Bind

- bind 改变 this 指向，但是不会立即执行函数，而是返回一个新的函数，可以传入部分参数。

```js

var name = 'window';

function test(a, b) {
  console.log(this.name);
  console.log(a, b);
}

var obj = {
  name: 'obj'
}

var newTest = test.bind(obj, 1);

newTest(2); // obj 1 2

```
