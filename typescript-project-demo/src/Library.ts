import { Book } from "./Book";
import { User } from "./User";

class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Da them sach: ${book.getInfo()}`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`Da them nguoi dung: ${user.getName()}`);
    }

    showBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(b => console.log(b.getInfo()));
    }
}

const lib = new Library();

const book1 = new Book("Lap trinh TS", "Nguyen Van A", 2024);
const book2 = new Book("Co so du lieu", "Tran Thi B", 2023);

const user1 = new User("Toan");
const user2 = new User("Minh");

lib.addBook(book1);
lib.addBook(book2);

lib.addUser(user1);
lib.addUser(user2);

lib.showBooks();
