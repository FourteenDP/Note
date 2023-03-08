namespace DesignPatterns.FactoryMethod {
  // 工厂
  abstract class Factory {
    public abstract createProduct(): Product;
    public doSomething() {
      const product = this.createProduct();
      product.doSomething();
    }
  }
}
