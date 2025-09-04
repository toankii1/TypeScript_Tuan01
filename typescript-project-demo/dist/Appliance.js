"use strict";
class Appliance {
    constructor(name) {
        this.name = name;
    }
}
// Lop Fan ke thua Appliance
class Fan extends Appliance {
    turnOn() {
        console.log(`${this.name} dang quay`);
    }
}
// Lop AirConditioner ke thua Appliance
class AirConditioner extends Appliance {
    turnOn() {
        console.log(`${this.name} dang lam mat`);
    }
}
const fan = new Fan("Quat");
fan.turnOn();
const ac = new AirConditioner("Dieu hoa");
ac.turnOn();
