
function foo() {

}

function bar() {

}

foo.bar = bar;
// 描述A的类型
interface A {
  foo: typeof foo;
}

let a:A = {
  foo
}
