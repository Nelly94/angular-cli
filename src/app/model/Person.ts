export class Person {
  // tslint:disable-next-line:variable-name
  public _firstname: string;
  // tslint:disable-next-line:variable-name
  private _lastname: string;
  // tslint:disable-next-line:variable-name
  private _age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._age = age;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set firstname(value: string) {
    this._firstname = value;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }
}
