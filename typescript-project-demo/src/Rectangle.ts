class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(10, 5);
console.log("Width:", 10, "Height:", 5);
console.log("Area:", rect.getArea());         
console.log("Perimeter:", rect.getPerimeter()); 
