"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
const Cow_1 = require("./Cow");
const bird = new Bird_1.Bird();
const cow = new Cow_1.Cow();
console.log("Bird:", bird.speak()); 
console.log("Cow:", cow.speak());
