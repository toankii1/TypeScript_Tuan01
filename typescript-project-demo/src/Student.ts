export class Student {
  constructor(
    public name: string,
    public age: number
  ) {}

  showInfo(): void {
    console.log(`Student: ${this.name}, Age: ${this.age}`);
  }
}
