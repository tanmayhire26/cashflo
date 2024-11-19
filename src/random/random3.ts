class Order {
    private items: OrderItem[] = [];

    addItem(item: OrderItem): void {
        this.items.push(item);
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    }
}

class OrderItem {
    constructor(private readonly product: Product, private readonly quantity: number) {}

    getPrice(): number {
        return this.product.getPrice() * this.quantity;
    }
}


class Product {
    constructor(private readonly price: number) {}

    getPrice(): number {
        return this.price;
    }
}


class OrderService {
    createOrder(items: OrderItem[]): Order {
        const order = new Order();
        items.forEach(item => order.addItem(item));
        return order;
    }

    getOrderTotal(order:Order):number{
        return order.getTotal();
    }
}