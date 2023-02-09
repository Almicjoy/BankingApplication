import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { LoginService } from '../service/login.service';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any;

  submitted: boolean = false;

  customer: Customer = new Customer();

  responseStatus: number = 0;

  constructor(private _formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginCustomer(): void {
    this.submitted = true;
    if(this.loginForm.valid) {
      console.log(this.customer);
      this.loginService.loginCustomer(this.customer).subscribe(response => {
        alert("Login Successful");
        this.router.navigate(['/customerDashboard']);
      }, error => {
        alert("Username or password is incorrect");
        this.reset();
      });
    }
  }

  reset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

  get f() {
    return this.loginForm.controls;
  }

}
