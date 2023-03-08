namespace DesignPatterns.FactoryMethod {
  interface Product {
    use(): void;
    getOwner(): string;

  }

  class Product implements Product {
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
}
