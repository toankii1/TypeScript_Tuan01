class Person{
    name: String;
    age: number;

    constructor (name: String, age: number){
        this.name = name;
        this.age = age;
    }
    displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class student extends Person{
    grade: String;

    constructor(name:String, age:number, grade: String){
        super(name, age);
        this.grade = grade;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        
    }
}
const s1 = new student("Toan", 18, "B");
s1.displayInfo();
