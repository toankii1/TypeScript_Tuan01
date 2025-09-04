class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const numberStack = new Stack<number>();
console.log("Stack rong:", numberStack.isEmpty());

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Phan tu tren cung:", numberStack.peek());
console.log("Pop:", numberStack.pop());
console.log("Pop:", numberStack.pop());
console.log("Stack rong:", numberStack.isEmpty());
