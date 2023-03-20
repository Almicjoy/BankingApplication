import { Customer } from "./customer";

export class Beneficiary {
  id: number = 0;
  accountNumber: number = 0;
  accountType: string = '';
  approved: string = '';
  dateAdded: string = '';
  customer: Customer = new Customer();
}
