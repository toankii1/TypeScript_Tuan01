// Generic Repository
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}


// Test voi string
const stringRepo = new Repository<string>();
stringRepo.add("mot");
stringRepo.add("hai");
console.log("String repo:", stringRepo.getAll());

// Test voi number
const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log("Number repo:", numberRepo.getAll());

// Test voi object
type User = { id: number; name: string };
const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Toan" });
userRepo.add({ id: 2, name: "Nam" });
console.log("User repo:", userRepo.getAll());
