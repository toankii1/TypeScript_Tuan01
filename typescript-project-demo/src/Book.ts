class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo(): string {
        return `${this.title} - ${this.author} (${this.year})`;
    }
}

const book1 = new Book("Sach ve typescript", "Thay Thuan", 1950);
const book2 = new Book("Sach ve typescript 2", "Thay Tien", 1951);

console.log(book1.getInfo());
console.log(book2.getInfo());
