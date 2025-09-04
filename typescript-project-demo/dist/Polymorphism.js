"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DongVat_1 = require("./DongVat");
class Vit extends DongVat_1.DongVat {
    makeSound() {
        console.log(`${this.name} keu: Quac quac`);
    }
}
class Bvoi extends DongVat_1.DongVat {
    makeSound() {
        console.log(`${this.name} keu: UUUUU`);
    }
}
const dsDongVat = [
    new Vit("Vit"),
    new Bvoi("Voi"),
    new DongVat_1.DongVat("Dong vat khac")
];
dsDongVat.forEach(dv => dv.makeSound());
