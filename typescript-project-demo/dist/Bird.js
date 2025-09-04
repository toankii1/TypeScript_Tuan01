"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const Animal_1 = require("./Animal");
class Bird extends Animal_1.Animal {
    makeSound() {
        return "chip chip";
    }
}
exports.Bird = Bird;
