"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car: ${this.brand}, ${this.model}, Year: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();
const car2 = new Car("doggle challenger", "doggle", 2007);
car2.showInfo();
