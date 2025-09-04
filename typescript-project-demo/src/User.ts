class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        if (newName.trim().length === 0) {
            console.log("Name cannot be empty!");
            return;
        }
        this.name = newName;
    }
}

const user = new User("Toan");
console.log("Initial name:", user.getName());

user.setName("Toan Nguyen");
console.log("Updated name:", user.getName());

