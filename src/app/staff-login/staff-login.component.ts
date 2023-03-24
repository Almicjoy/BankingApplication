import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtToken } from '../model/jwtToken';
import { LoginRequest } from '../model/loginRequest';
import { LoginService } from '../service/login.service';
import { StaffLoginService } from '../service/staff-login.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit{

  submitted: boolean = false;
  loginForm: any;
  jwtToken: JwtToken = new JwtToken();
  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: StaffLoginService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.loginForm.valid) {
      this.loginService.loginStaff(this.loginRequest).subscribe(response => {
        alert("Staff Login Successful");
        this.router.navigate(['/staffDashboard'], {state: {jwtToken: response}})
        .then(() => {
          window.location.reload();
        });
      });

      this.loginService.loginAdmin(this.loginRequest).subscribe(response => {
        alert("Admin Login Successful");
        this.router.navigate(['/adminDashboard'], {state: {jwtToken: response}})
        .then(() => {
          window.location.reload();
        });
      });

      const staffToken = sessionStorage.getItem('staffToken');
      const adminToken = sessionStorage.getItem('adminToken');
      if(adminToken == null && staffToken == null) {
        this.loginForm.reset();
      }
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
