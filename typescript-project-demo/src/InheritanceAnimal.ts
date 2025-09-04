class DongVat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Lion extends DongVat {
    roar(): void {
        console.log(`${this.name} keu: Roar roar`);
    }
}

class Chicken extends DongVat {
    cluck(): void {
        console.log(`${this.name} keu: Cluck cluck`);
    }
}

const lion = new Lion("Su tu");
lion.roar();

const chicken = new Chicken("Ga");
chicken.cluck();
