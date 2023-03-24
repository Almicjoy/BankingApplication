import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { Role } from '../model/role';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit{

  submitted: boolean = false;
  createStaffForm: any;
  customer: Customer = new Customer();

  constructor (
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {

  }

  ngOnInit(): void {
    this.createStaffForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    })
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

  onSubmit() {
    this.submitted = true;
    console.log(this.customer);
    if(this.createStaffForm.valid) {
      this.registerService.registerStaff(this.customer).subscribe(result => {
        alert("Staff created");
        console.log(result);
        this.reset();
      }, error => {
        alert(error.error.message);
        console.log(error);
        this.reset();
      })
    }
  }
  reset() {
    this.submitted = false;
    this.createStaffForm.reset();
  }
  get f() {
    return this.createStaffForm.controls;
  }
}
