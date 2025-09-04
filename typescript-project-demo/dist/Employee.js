"use strict";
// Lop cha Employee
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showInfo() {
        console.log(`Nhan vien: ${this.name}, luong: ${this.salary} VND`);
    }
}
// Lop Manager ke thua Employee
class Manager extends Employee {
    manage() {
        console.log(`${this.name} dang quan ly nhan vien`);
    }
}
// Lop Developer ke thua Employee
class Developer extends Employee {
    code() {
        console.log(`${this.name} dang viet code`);
    }
}
const quanly = new Manager("toan", 20000);
quanly.showInfo();
quanly.manage();
const laptrinhvien = new Developer("toan1", 15000);
laptrinhvien.showInfo();
laptrinhvien.code();
