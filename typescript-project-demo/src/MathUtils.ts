class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Khong the chia cho 0");
        }
        return a / b;
    }
}

console.log("Cong 5 + 3 =", MathUtil.add(5, 3));
console.log("Tru 10 - 4 =", MathUtil.subtract(10, 4));
console.log("Nhan 6 * 7 =", MathUtil.multiply(6, 7));
console.log("Chia 20 / 5 =", MathUtil.divide(20, 5));
