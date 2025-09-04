// Lop truu tuong Shape
abstract class Shape {
    abstract area(): number;
}

// Lop Square ke thua Shape
class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const hinhVuong = new Square(5);
console.log(`Dien tich hinh vuong: ${hinhVuong.area()}`);

const hinhTron = new Circle(3);
console.log(`Dien tich hinh tron: ${hinhTron.area().toFixed(2)}`);
