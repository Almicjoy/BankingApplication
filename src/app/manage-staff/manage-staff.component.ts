import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit{

  staff: Customer[] = [];
  _staff: Customer = new Customer();

  constructor(
    private userService: UserService
  ) {

  }
  ngOnInit(): void {
    this.userService.findAllStaff().subscribe(result => {
      this.staff = result;
    })
  }

  setStatus(staffId: number, status: string) {
    this._staff.id = staffId;
    this._staff.status = status;
    this.userService.changeStaffStatus(this._staff).subscribe(result => {
      console.log(result);
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }
}
