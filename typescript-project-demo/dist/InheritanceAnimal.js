"use strict";
class DongVat {
    constructor(name) {
        this.name = name;
    }
}
class Lion extends DongVat {
    roar() {
        console.log(`${this.name} keu: Roar roar`);
    }
}
class Chicken extends DongVat {
    cluck() {
        console.log(`${this.name} keu: Cluck cluck`);
    }
}
const lion = new Lion("Su tu");
lion.roar();
const chicken = new Chicken("Ga");
chicken.cluck();
