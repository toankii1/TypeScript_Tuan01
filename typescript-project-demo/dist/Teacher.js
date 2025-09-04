"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const person_1 = require("./person");
class Teacher extends person_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`;
    }
}
exports.Teacher = Teacher;
const teacher = new Teacher("toan", 21, "Math");
console.log(teacher.introduce());
