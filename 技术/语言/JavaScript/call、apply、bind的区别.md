# call、apply、bind的区别

- call和apply都是为了改变函数的this对象的指向而存在的，都可以利用后续参数传参。
- bind是返回对应函数，便于稍后调用，且能传入部分参数，也可以改变this指向。

## call

- call改变this指向，然后立即执行函数，且可以传入参数。

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

## apply

- apply改变this指向，然后立即执行函数，但是传入的参数必须是数组。

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

## bind

- bind改变this指向，但是不会立即执行函数，而是返回一个新的函数，可以传入部分参数。

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
