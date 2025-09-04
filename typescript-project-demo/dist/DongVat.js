"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} keu: Gau gau`);
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} keu: Meo meo`);
    }
}
const animals = [
    new Dog("Cho con"),
    new Cat("Meo mun")
];
animals.forEach(a => a.sound());
