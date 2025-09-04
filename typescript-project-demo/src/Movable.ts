interface Movable {
  move(): void;
}

class Car implements Movable {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`Car: ${this.brand}, ${this.model}, Year: ${this.year}`);
  }

  move(): void {
    console.log(`${this.brand} ${this.model} dang lai o tren dung pho`);
  }
}

class Robot implements Movable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`Robot ${this.name} dang di bo tren pho`);
  }
}

// --- Test ---
const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();
car1.move();

const car2 = new Car("Dodge", "Challenger", 2007);
car2.showInfo();
car2.move();

const robot1 = new Robot("Alpha");
robot1.move();
