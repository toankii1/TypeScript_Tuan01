"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    makeSound() {
        return "Some generic animal sound";
    }
    speak() {
        return this.makeSound();
    }
}
exports.Animal = Animal;
