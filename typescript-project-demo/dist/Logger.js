"use strict";
class Logger {
    // Constructor private de ngan tao truc tiep
    constructor() { }
    // Ham tra ve duy nhat 1 instance
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    // Ham log
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Chuong trinh bat dau");
logger2.log("Dang chay tac vu");
console.log("logger1 === logger2 ?", logger1 === logger2);
