"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const Animal_1 = require("./Animal");
class Cow extends Animal_1.Animal {
    makeSound() {
        return "bo bo";
    }
}
exports.Cow = Cow;
