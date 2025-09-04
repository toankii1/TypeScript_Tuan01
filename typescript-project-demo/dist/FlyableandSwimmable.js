"use strict";
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} dang bay tren troi`);
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} dang boi duoi nuoc`);
    }
}
const chim = new Bird("Chim se");
chim.fly();
const ca = new Fish("Ca vang");
ca.swim();
