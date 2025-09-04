"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        if (newName.trim().length === 0) {
            console.log("Name cannot be empty!");
            return;
        }
        this.name = newName;
    }
}
const user = new User("Toan");
console.log("Initial name:", user.getName());
user.setName("Toan Nguyen");
console.log("Updated name:", user.getName());
