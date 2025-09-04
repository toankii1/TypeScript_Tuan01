"use strict";
// CashPayment implements Payment
class CashPayment {
    pay(amount) {
        console.log(`Thanh toan tien mat so tien ${amount} VND`);
    }
}
// CardPayment implements Payment
class CardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Thanh toan bang the ${this.cardNumber} so tien ${amount} VND`);
    }
}
const cash = new CashPayment();
cash.pay(50000);
const card = new CardPayment("1234-5678-9999");
card.pay(200000);
