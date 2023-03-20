import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { ForgotPasswordInfo } from '../model/forgotPasswordInfo';
import { SecurityQuestion } from '../model/securityQuestion';
import { SecurityQuestionService } from '../service/security-question.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  forgotPasswordForm: any;

  submitted: boolean = false;

  forgotPasswordInfo: ForgotPasswordInfo = new ForgotPasswordInfo();

  securityQuestionList: SecurityQuestion[] = [];

  customer: Customer = new Customer();

  constructor(
    private formBuilder: FormBuilder,
    private securityQuestionService: SecurityQuestionService,
    private router: Router
  ) {
    securityQuestionService.getAllSecurityQuestions().subscribe(result => {
      this.securityQuestionList = result;
    })
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
      question: [new SecurityQuestion, Validators.required],
      answer: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.forgotPasswordForm.valid) {
      console.log(this.forgotPasswordInfo);
      this.securityQuestionService.securityQuestionInfoValid(this.forgotPasswordInfo).subscribe(result => {
        alert("Credentials Valid");
        this.router.navigate(['/changePassword'], {state: {username: this.forgotPasswordInfo.username}});
      }, error => {
        alert("Credentials not valid");
        this.reset();
      }
      );
    }
  }


  reset(): void {
    this.submitted = false;
    this.forgotPasswordForm.reset();
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }



}
