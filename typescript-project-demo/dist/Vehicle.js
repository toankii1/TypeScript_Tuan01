"use strict";
// Lop Oto trien khai Vehicle
class Oto {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`${this.brand} oto chay voi toc do ${this.speed} km/h`);
    }
}
// Lop XeMay trien khai Vehicle
class XeMay {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`${this.brand} xe may di voi toc do ${this.speed} km/h`);
    }
}
const oto1 = new Oto("Toyota", 120);
const xemay1 = new XeMay("Honda", 60);
oto1.move();
xemay1.move();
