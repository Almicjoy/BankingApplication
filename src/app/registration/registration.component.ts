import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { RegisterService } from '../service/register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  customerForm: any;
  submitted: boolean = false;

  customer: Customer = new Customer();

  constructor(private _formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.customerForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validators:this.mustMatch('password', 'confirmPassword')
    }

    );
  }

  //makes sure that password and confirm password match
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

  addCustomer(): void {
    this.submitted = true;

    if(this.customerForm.valid) {
      console.log(this.customer);
      this.registerService.registerCustomer(this.customer).subscribe();
      alert("Registered Successfully");
      this.router.navigate(['/securityQuestions']);
    }

  }

  reset(): void {
    this.submitted = false;
    this.customerForm.reset();
  }

  get f() {
    return this.customerForm.controls;
  }

}
