import { Customer } from "./customer";
import { SecurityQuestion } from "./securityQuestion";
import { UserQuestionPK } from "./UserQuestionPK";

export class UserQuestionAnswers {



  answer: string = '';

  user: Customer = new Customer();
  question: SecurityQuestion = new SecurityQuestion();
  // userQuestionPK: UserQuestionPK;

  // userId: number = 0;
  // questionId: number = 0;

  // constructor() {
  //   this.userQuestionPK = new UserQuestionPK(this.user, this.question);
  // }

  // public set _userQuestionPK(pk: UserQuestionPK) {
  //   this.userQuestionPK = pk;
  // }
}
