import { Animal } from "./Animal";

export class Bird extends Animal {
  protected makeSound(): string {
    return "chip chip";
  }
}
