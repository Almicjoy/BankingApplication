import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  customerForm: any;
  submitted: boolean = false;

  customer: Customer = new Customer();

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.customerForm = this._formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validators:this.mustMatch('password', 'confirmPassword')
    }

    )
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

  addCustomer(): void {
    this.submitted = true;

    if(this.customerForm.valid) {
      console.log(this.customer);
      this.router.navigate(['/home']);
      alert("Registered Successfully");
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
