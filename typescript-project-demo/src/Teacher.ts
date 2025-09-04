export class Teacher {
  constructor(
    public name: string,
    public subject: string
  ) {}

  showInfo(): void {
    console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
  }
}
