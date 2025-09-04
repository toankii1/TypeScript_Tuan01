"use strict";
// Generic Repository
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Test voi string
const stringRepo = new Repository();
stringRepo.add("mot");
stringRepo.add("hai");
console.log("String repo:", stringRepo.getAll());
// Test voi number
const numberRepo = new Repository();
numberRepo.add(10);
numberRepo.add(20);
console.log("Number repo:", numberRepo.getAll());
const userRepo = new Repository();
userRepo.add({ id: 1, name: "Toan" });
userRepo.add({ id: 2, name: "Nam" });
console.log("User repo:", userRepo.getAll());
