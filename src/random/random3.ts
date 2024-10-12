class Order {
  private _items: OrderItem[] = [];

  addItem(item: OrderItem): void {
    this._items.push(item);
  }

  getTotalPrice(): number {
    return this._items.reduce((total, item) => total + item.getPrice(), 0);
  }
}

class OrderItem {
  constructor(private readonly _name: string, private readonly _price: number) {}

  getName(): string {
    return this._name;
  }

  getPrice(): number {
    return this._price;
  }
}