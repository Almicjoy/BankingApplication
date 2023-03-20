import { Customer } from "./customer";
import { SecurityQuestion } from "./securityQuestion";

export class UserQuestionPK {
  customer: Customer;
  securityQuestion: SecurityQuestion;

  constructor(customer: Customer, securityQuestion: SecurityQuestion) {
    this.customer = customer;
    this.securityQuestion = securityQuestion;
  }


}
