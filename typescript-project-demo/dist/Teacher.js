"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    showInfo() {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}
exports.Teacher = Teacher;
