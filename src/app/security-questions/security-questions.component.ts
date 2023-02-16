import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityQuestionService } from '../service/security-question.service';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit{

  submitted: boolean = false;

  securityQuestionForm: any;

  securityQuestionList: any = [];

  constructor(private _securityQuestionService: SecurityQuestionService, private _formBuilder: FormBuilder) {
    this._securityQuestionService.getAllSecurityQuestions().subscribe(result => {
      this.securityQuestionList = result;
    })
  }

  ngOnInit(): void {
    this.securityQuestionForm = this._formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required]
    })
  }

  mustNotMatch(question1: any, question2: any, question3: any) {
    return(formGroup: FormGroup) => {
      const question1Control = formGroup.controls[question1];
      const question2Control = formGroup.controls[question2];
      const question3Control = formGroup.controls[question3];
      if(question1Control.value == question2Control.value) {
        question2Control.setErrors({mustNotMatch: true})
      }
    }
  }

  reset(): void {
    this.submitted = false;
    this.securityQuestionForm.reset();
  }

  // showSelection(){
  //   alert("");
  // }

  get f() {
    return this.securityQuestionForm.controls;
  }

}
