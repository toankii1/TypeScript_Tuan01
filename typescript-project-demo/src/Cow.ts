import { Animal } from "./Animal";

export class Cow extends Animal {
  protected makeSound(): string {
    return "bo bo";
  }
}
