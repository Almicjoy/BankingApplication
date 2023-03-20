import { Component } from '@angular/core';
import { StaffLoginService } from '../service/staff-login.service';

@Component({
  selector: 'app-staff-layout',
  templateUrl: './staff-layout.component.html',
  styleUrls: ['./staff-layout.component.css']
})
export class StaffLayoutComponent {
  constructor(
    public staffLoginService: StaffLoginService
  ) {

  }
}
