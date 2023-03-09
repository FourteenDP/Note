# call、apply、bind的区别

## call

```js
function.call(thisArg, arg1, arg2, ...)
```

- `thisArg`：在`function`运行时指定的`this`值。需要注意的是，指定的`this`值并不一定是该`function`执行时真正的`this`值，如果这个函数处于非严格模式下，则指定为`null`和`undefined`的`this`值会自动指向全局对象（浏览器中就是`window`对象），同时值为原始值（数字，字符串，布尔值）的`this`会指向该原始值的自动包装对象。
- `arg1, arg2, ...`：指定的参数列表。
