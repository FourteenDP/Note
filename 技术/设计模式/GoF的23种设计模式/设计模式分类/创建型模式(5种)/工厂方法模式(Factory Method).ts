namespace DesignPatterns.FactoryMethod {
  // 产品
  interface Product {
    use(): void;
  }
  abstract class Factory {
    public create(owner: string): Product {
      const product = this.createProduct(owner);
      this.registerProduct(product);
      return product;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
  }

  // 具体产品
  class IDCard implements Product {
    constructor(private owner: string) { }
    public use() {
      console.log(`use ${this.owner}'s ID card`);
    }
    public getOwner() {
      return this.owner;
    }
  }

  // 具体工厂
  class IDCardFactory extends Factory {
    private owners: string[] = [];
    protected createProduct(owner: string): Product {
      return new IDCard(owner);
    }
    protected registerProduct(product: Product) {
      this.owners.push((product as IDCard).getOwner());
    }
    public getOwners() {
      return this.owners;
    }
  }


  const factory = new IDCardFactory();
  const card1 = factory.create('Alice');
  const card2 = factory.create('Bob');
  const card3 = factory.create('Charlie');
  card1.use();
  card2.use();
  card3.use();
}
