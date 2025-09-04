import { Person } from "./person";

export class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    public subject: string
  ) {
    super(name, age);
  }

  introduce(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`;
  }
}


const teacher = new Teacher("toan", 21, "Math");
console.log(teacher.introduce());
