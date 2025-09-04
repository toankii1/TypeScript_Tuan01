import { Product } from "./Product";

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}

// --- Test ---
const order = new Order();
order.addProduct(new Product("Laptop", 1200));
order.addProduct(new Product("Mouse", 25));
order.addProduct(new Product("Keyboard", 75));

console.log("Tong tien la:", order.calculateTotal()); 

