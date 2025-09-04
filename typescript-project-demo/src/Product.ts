class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getInfo(): string {
        return `${this.name} - ${this.price} VND`;
    }
}

const products: Product[] = [
    new Product("But bi", 20),
    new Product("Vo", 120),
    new Product("Ba lo", 250),
    new Product("But chi", 15),
    new Product("Giay", 300)
];

const filtered = products.filter(p => p.price > 100);

console.log("Danh sach san pham co gia > 100:");
filtered.forEach(p => console.log(p.getInfo()));
