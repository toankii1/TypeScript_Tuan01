"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const numberBox = new Box(123);
console.log("Gia tri trong numberBox:", numberBox.getValue());
const stringBox = new Box("Xin chao");
console.log("Gia tri trong stringBox:", stringBox.getValue());
const booleanBox = new Box(true);
console.log("Gia tri trong booleanBox:", booleanBox.getValue());
