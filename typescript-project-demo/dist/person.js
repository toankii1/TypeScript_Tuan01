"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const p1 = new Person("Toan", 22);
p1.displayInfo();
