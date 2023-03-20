import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { LoginService } from '../service/login.service';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/loginRequest';
import { JwtToken } from '../model/jwtToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any;

  submitted: boolean = false;

  loginRequest: LoginRequest = new LoginRequest();

  responseStatus: number = 0;

  jwtToken: JwtToken = new JwtToken();

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
      console.log(this.loginRequest);
      this.loginService.loginCustomer(this.loginRequest).subscribe(response => {
        alert("Login Successful");
        console.log(response);
        this.router.navigate(['/customerDashboard'], {state: {jwtToken: response}})
        .then(() => {
          window.location.reload();
        });
      }, error => {
        console.log(error.error);
        alert(error.error.message);
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
