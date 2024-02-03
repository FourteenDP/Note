---
标题: call、apply、bind 的区别
描述: null
封面: null
uid: 20240123112807164
aliases: []
tags:
  - 计算机/技术
  - 计算机/语言
  - 计算机/前端/JavaScript
  - call
  - apply
  - bind
cssclasses: null
创建时间: 2023-05-07T14:01:32.000Z
更新时间: 2024-01-22T16:57:43.000Z
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
