import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityQuestion } from '../model/securityQuestion';
import { UserQuestionAnswers } from '../model/userQuestionAnswers';
import { SecurityQuestionService } from '../service/security-question.service';
import { RegistrationComponent } from '../registration/registration.component';
import { Customer } from '../model/customer';
import { UserQuestionPK } from '../model/UserQuestionPK';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit{

  submitted: boolean = false;

  securityQuestionForm: any;

  securityQuestionList: SecurityQuestion[] = [];

  userQuestionList: UserQuestionAnswers[] = [];

  customer:Customer = new Customer();

  userId: number = 0;

  resultStr: String = '';

  securityQuestion1: UserQuestionAnswers = new UserQuestionAnswers();
  securityQuestion2: UserQuestionAnswers = new UserQuestionAnswers();
  securityQuestion3: UserQuestionAnswers = new UserQuestionAnswers();

  constructor(
    private _securityQuestionService: SecurityQuestionService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this._securityQuestionService.getAllSecurityQuestions().subscribe(result => {
      this.securityQuestionList = result;
    })

  }

  ngOnInit(): void {
    this.securityQuestionForm = this._formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      question1: [new SecurityQuestion(), Validators.required],
      question2: [new SecurityQuestion(), Validators.required],
      question3: [new SecurityQuestion(), Validators.required]
    }
    // ,{
    //   validators: this.mustNotMatch('question1', 'question2', 'question3')
    // }
    )

    this.customer = history.state.customer;
    this.securityQuestion1.user = history.state.customer;
    this.securityQuestion2.user = history.state.customer;
    this.securityQuestion3.user = history.state.customer;

    console.log("Please work: " + history.state.customer.id);

  }

  mustNotMatch(question1: any, question2: any, question3: any) {
    return(formGroup: FormGroup) => {
      // console.log(formGroup.controls[question1]);
      const question1Control = formGroup.controls[question1];
      const question2Control = formGroup.controls[question2];
      const question3Control = formGroup.controls[question3];
      if(question1Control.value == question2Control.value) {
        question2Control.setErrors({mustNotMatch: true})
        question1Control.setErrors({mustNotMatch: true})
      }

      else if(question1Control.value == question3Control.value) {
        question1Control.setErrors({mustNotMatch: true})
        question3Control.setErrors({mustNotMatch: true})
      }
      else if(question2Control.value == question3Control.value) {
        question2Control.setErrors({mustNotMatch: true})
        question3Control.setErrors({mustNotMatch: true})
      }
      else{
        question3Control.setErrors(null)
        question2Control.setErrors(null)
        question1Control.setErrors(null)
      }

    }
  }


  reset(): void {
    this.submitted = false;
    this.securityQuestionForm.reset();
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.securityQuestionForm.valid)
    console.log(this.securityQuestion2.question)
    if(this.securityQuestionForm.valid) {
      this.userQuestionList.push(this.securityQuestion1);
      this.userQuestionList.push(this.securityQuestion2);
      this.userQuestionList.push(this.securityQuestion3);
      console.log(this.userQuestionList);
      this._securityQuestionService.saveSecurityQuestions(this.userQuestionList).subscribe(result => {
        this.resultStr = result
        console.log(this.resultStr);
      });
      this.router.navigate(["/home"]);
    }
  }

  getRegistrationData(data:number){
    console.log(data)
  }

  get f() {
    return this.securityQuestionForm.controls;
  }

}
