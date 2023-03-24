import { Component } from '@angular/core';
import { StaffLoginService } from '../service/staff-login.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor(
    public loginService: StaffLoginService
  ){

  }
}
