"use strict";
class Account {
    constructor(username, password, accountId) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }
    checkPassword(input) {
        return this.password === input;
    }
    changePassword(oldPass, newPass) {
        if (this.password === oldPass) {
            this.password = newPass;
            console.log("Mat khau da duoc thay doi thanh cong.");
        }
        else {
            console.log("Sai mat khau cu, khong the doi.");
        }
    }
}
const acc = new Account("toan", "123456", 1001);
console.log("Username:", acc.username);
console.log("Account ID (readonly):", acc.accountId);
console.log("Check password 123456:", acc.checkPassword("123456"));
console.log("Check password 111111:", acc.checkPassword("111111"));
acc.changePassword("123456", "abcdef");
console.log("Check password abcdef:", acc.checkPassword("abcdef"));
