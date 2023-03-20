import { Component, OnInit } from '@angular/core';
import { JwtToken } from '../model/jwtToken';
import { LoginService } from '../service/login.service';
import { StaffLoginService } from '../service/staff-login.service';

@Component({
  selector: 'app-logged-in-layout',
  templateUrl: './logged-in-layout.component.html',
  styleUrls: ['./logged-in-layout.component.css']
})
export class LoggedInLayoutComponent implements OnInit{


  constructor(
    public loginService: LoginService
  ) {

  }
  ngOnInit(): void {

  }
}
