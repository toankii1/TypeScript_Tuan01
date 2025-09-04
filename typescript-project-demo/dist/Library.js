"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const User_1 = require("./User");
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Da them sach: ${book.getInfo()}`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`Da them nguoi dung: ${user.getName()}`);
    }
    showBooks() {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(b => console.log(b.getInfo()));
    }
}
const lib = new Library();
const book1 = new Book_1.Book("Lap trinh TS", "Nguyen Van A", 2024);
const book2 = new Book_1.Book("Co so du lieu", "Tran Thi B", 2023);
const user1 = new User_1.User("Toan");
const user2 = new User_1.User("Minh");
lib.addBook(book1);
lib.addBook(book2);
lib.addUser(user1);
lib.addUser(user2);
lib.showBooks();
