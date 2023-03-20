import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { StaffLoginService } from '../service/staff-login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor (
    public loginService: LoginService,
    public staffLoginService: StaffLoginService
  ) {

  }
}
