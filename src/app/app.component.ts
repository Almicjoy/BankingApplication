import { Component } from '@angular/core';
import { AllLoggedInService } from './service/all-logged-in.service';
import { LoginService } from './service/login.service';
import { StaffLoginService } from './service/staff-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankingApplication';

  constructor(
    public loginService: LoginService,
    public staffLoginService: StaffLoginService,
    public allLoggedIn: AllLoggedInService
  ) {

  }
}
