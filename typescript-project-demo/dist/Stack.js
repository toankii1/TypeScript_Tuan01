"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
console.log("Stack rong:", numberStack.isEmpty());
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Phan tu tren cung:", numberStack.peek());
console.log("Pop:", numberStack.pop());
console.log("Pop:", numberStack.pop());
console.log("Stack rong:", numberStack.isEmpty());
