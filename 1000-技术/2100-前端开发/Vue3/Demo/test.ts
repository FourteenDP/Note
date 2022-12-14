function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve
    }, 1000)
  })
}

function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve
    }, 1000)
  })
}

foo.bar = bar;
// 描述A的类型
interface A {
  // 对象key
  [key: string]: {
    (): Promise<unknown>
    [key: string]: Promise<unknown>
  }
}

let a: A = {
  foo
}
