"use strict";
// Lop truu tuong Shape
class Shape {
}
// Lop Square ke thua Shape
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const hinhVuong = new Square(5);
console.log(`Dien tich hinh vuong: ${hinhVuong.area()}`);
const hinhTron = new Circle(3);
console.log(`Dien tich hinh tron: ${hinhTron.area().toFixed(2)}`);
