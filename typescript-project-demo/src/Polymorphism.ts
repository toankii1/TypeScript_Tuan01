import { DongVat } from "./DongVat";

class Vit extends DongVat {
    makeSound(): void {
        console.log(`${this.name} keu: Quac quac`);
    }
}

class Bvoi extends DongVat {
    makeSound(): void {
        console.log(`${this.name} keu: UUUUU`);
    }
}

const dsDongVat: DongVat[] = [
    new Vit("Vit"),
    new Bvoi("Voi"),
    new DongVat("Dong vat khac")
];

dsDongVat.forEach(dv => dv.makeSound());