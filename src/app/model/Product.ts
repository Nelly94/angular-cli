export class Product {
  private $id: number;
  private $name: string;
  private $description: string;

  constructor($name: string, $description: string) {
    this.$name = $name;
    this.$description = $description;
  }

  get id(): number {
    return this.$id;
  }

  set id(value: number) {
    this.$id = value;
  }

  get name(): string {
    return this.$name;
  }

  set name(value: string) {
    this.$name = value;
  }

  get description(): string {
    return this.$description;
  }

  set description(value: string) {
    this.$description = value;
  }
}
