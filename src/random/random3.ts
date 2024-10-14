class Order {
  private items: OrderItem[] = [];

  addItem(item: OrderItem) {
    this.items.push(item);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}

class OrderItem {
  constructor(private readonly product: Product, private readonly quantity: number) {}

  getPrice(): number {
    return this.product.getPrice() * this.quantity;
  }
}

class Product {
  constructor(private readonly name: string, private readonly price: number) {}

  getPrice(): number {
    return this.price;
  }
}

const order = new Order();
order.addItem(new OrderItem(new Product('Laptop', 1000), 1));
order.addItem(new OrderItem(new Product('Mouse', 20), 2));

console.log(order.getTotalPrice()); // Output: 1040