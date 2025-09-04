"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(10, 5);
console.log("Width:", 10, "Height:", 5);
console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());
