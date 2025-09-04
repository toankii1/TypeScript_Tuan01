// Dinh nghia interface Vehicle
interface Vehicle {
    brand: string;
    speed: number;
    move(): void;
}

// Lop Oto trien khai Vehicle
class Oto implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.brand} oto chay voi toc do ${this.speed} km/h`);
    }
}

// Lop XeMay trien khai Vehicle
class XeMay implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.brand} xe may di voi toc do ${this.speed} km/h`);
    }
}

const oto1 = new Oto("Toyota", 120);
const xemay1 = new XeMay("Honda", 60);

oto1.move();
xemay1.move();
