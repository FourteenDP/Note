# call、apply、bind的区别

## call

```js
function.call(thisArg, arg1, arg2, ...)
```

## apply

```js
function.apply(thisArg, [argsArray])

// 与call的区别在于，apply的第二个参数是一个数组
```

## bind

```js
function.bind(thisArg[, arg1[, arg2[, ...]]])

// 返回一个新的函数，当这个函数被调用时，它的this值会被传递给bind的第一个参数，而其余参数将作为新函数的参数供调用时使用。
```
