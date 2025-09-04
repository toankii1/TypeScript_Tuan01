interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} keu: Gau gau`);
    }
}


class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} keu: Meo meo`);
    }
}

const animals: Animal[] = [
    new Dog("Cho con"),
    new Cat("Meo mun")
];

animals.forEach(a => a.sound());
