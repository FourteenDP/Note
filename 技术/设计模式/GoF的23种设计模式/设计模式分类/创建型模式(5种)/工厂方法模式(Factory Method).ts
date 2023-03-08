namespace DesignPatterns.FactoryMethod {
  interface Product {
    use(): void;
  }

  class IDCard implements Product {
    private owner: string;
    constructor(owner: string) {
      console.log(`制作${owner}的ID卡`);
      this.owner = owner;
    }
    use(): void {
      console.log(`使用${this.owner}的ID卡`);
    }
    getOwner(): string {
      return this.owner;
    }
  }

  abstract class Factory {
    create(owner: string): Product {
      const p = this.createProduct(owner);
      this.registerProduct(p);
      return p;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
  }

  class IDCardFactory extends Factory {
    private owners: string[] = [];
    protected createProduct(owner: string): Product {
      return new IDCard(owner);
    }
    protected registerProduct(product: Product): void {
      this.owners.push((product as IDCard).getOwner());
    }
    getOwners(): string[] {
      return this.owners;
    }
  }

  const factory = new IDCardFactory();
  const card1 = factory.create('小明');
  const card2 = factory.create('小红');
  const card3 = factory.create('小刚');
  card1.use();
  card2.use();
  card3.use();
  console.log(factory.getOwners());
}
