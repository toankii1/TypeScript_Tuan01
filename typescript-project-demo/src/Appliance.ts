abstract class Appliance {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Phuong thuc truu tuong
    abstract turnOn(): void;
}

// Lop Fan ke thua Appliance
class Fan extends Appliance {
    turnOn(): void {
        console.log(`${this.name} dang quay`);
    }
}

// Lop AirConditioner ke thua Appliance
class AirConditioner extends Appliance {
    turnOn(): void {
        console.log(`${this.name} dang lam mat`);
    }
}

const fan = new Fan("Quat");
fan.turnOn();

const ac = new AirConditioner("Dieu hoa");
ac.turnOn();
