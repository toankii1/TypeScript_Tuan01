interface Payment {
    pay(amount: number): void;
}

// CashPayment implements Payment
class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Thanh toan tien mat so tien ${amount} VND`);
    }
}

// CardPayment implements Payment
class CardPayment implements Payment {
    cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void {
        console.log(`Thanh toan bang the ${this.cardNumber} so tien ${amount} VND`);
    }
}

const cash = new CashPayment();
cash.pay(50000);

const card = new CardPayment("1234-5678-9999");
card.pay(200000);
