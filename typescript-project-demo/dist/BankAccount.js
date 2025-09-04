"use strict";
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
console.log("Initial Balance:", account.getBalance());
account.deposit(500);
account.withdraw(200);
