class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

const numberBox = new Box<number>(123);
console.log("Gia tri trong numberBox:", numberBox.getValue());

const stringBox = new Box<string>("Xin chao");
console.log("Gia tri trong stringBox:", stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log("Gia tri trong booleanBox:", booleanBox.getValue());
