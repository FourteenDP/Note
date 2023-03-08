// 工厂模式 Factory Method

// 简单工厂模式势力

class Product {
  constructor() {
    this.name = 'product'
  }
  init() {
    console.log('init')
  }
  fun1() {
    console.log('fun1')
  }
  fun2() {
    console.log('fun2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

// test
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()
