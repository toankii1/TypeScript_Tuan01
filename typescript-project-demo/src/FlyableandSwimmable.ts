// Dinh nghia interfaces
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} dang bay tren troi`);
    }
}

class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): void {
        console.log(`${this.name} dang boi duoi nuoc`);
    }
}

const chim = new Bird("Chim se");
chim.fly();

const ca = new Fish("Ca vang");
ca.swim();
