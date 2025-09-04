import { School } from "./School";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

const school = new School();

const student1 = new Student("toan", 21);
const student2 = new Student("an", 21);
school.addStudent(student1);
school.addStudent(student2);

const teacher1 = new Teacher("toan", "Math");
const teacher2 = new Teacher("an", "Physics");
school.addTeacher(teacher1);
school.addTeacher(teacher2);

school.displayInfo();
