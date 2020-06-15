export class Product {
  private $id: number;
  private $name: string;
  private $description: string;
  private $price: number;
  private $promo: number;

  constructor($name: string, $description: string, $price: number, $promo: number) {
    this.$name = $name;
    this.$description = $description;
    this.$price = $price;
    this.$promo = $promo;
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

  get price(): number {
    return this.$price;
  }

  set price(value: number) {
    this.$price = value;
  }

  get promo(): number {
    return this.$promo;
  }

  set promo(value: number) {
    this.$promo = value;
  }
}
