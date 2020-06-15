export class Supplier{
  private $company: string;
  private $bankAccount: string;


  constructor($company: string, $bankAccount: string) {
    this.$company = $company;
    this.$bankAccount = $bankAccount;
  }

  get company(): string {
    return this.$company;
  }

  set company(value: string) {
    this.$company = value;
  }

  get bankAccount(): string {
    return this.$bankAccount;
  }

  set bankAccount(value: string) {
    this.$bankAccount = value;
  }
}
