export class DongVat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} phat ra am thanh`);
    }
}