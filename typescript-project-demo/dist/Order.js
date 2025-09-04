"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}
// --- Test ---
const order = new Order();
order.addProduct(new Product_1.Product("Laptop", 1200));
order.addProduct(new Product_1.Product("Mouse", 25));
order.addProduct(new Product_1.Product("Keyboard", 75));
console.log("Tong tien la:", order.calculateTotal());
