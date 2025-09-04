export class Animal {
  protected makeSound(): string {
    return "Some generic animal sound";
  }

  public speak(): string {
    return this.makeSound();
  }
}
