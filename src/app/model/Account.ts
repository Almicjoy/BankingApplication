import { Transaction } from "./transaction";

export class Account {
  id: number = 0;
  balance: number = 0;
  firstname: string = '';
  lastname: string = '';
  accountType: string = '';
  accountNumber: number = 0;
  approved: string = '';
  transactions: Transaction[] = [];
}
