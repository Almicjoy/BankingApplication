import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from '../service/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  submitted: boolean = false;

  changePasswordForm: any;

  password: string = '';

  username: string = '';

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private changePasswordService: ChangePasswordService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validators:this.mustMatch('password', 'confirmPassword')
    })
    this.username = history.state.username;
    console.log(this.username);
  }

  mustMatch(password: any, confirmPassword: any){
    return(formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch']){
        return;
      }

      if(passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({mustMatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.changePasswordForm.valid){
      console.log(this.username)
      console.log(this.password)
      this.changePasswordService.changePassword(this.username, this.password).subscribe(result => {
        alert("Password successfully changed");
        this.router.navigate(['/home']);
      }, error => {
        this.errorMessage = error;
        alert("Error: " + this.errorMessage);
      })
    }
  }

  get f() {
    return this.changePasswordForm.controls;
  }

}
