export class Person {
  constructor(
    public name: string,
    public age: number
  ) {}

  introduce(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}
