import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-toggle-customer',
  templateUrl: './toggle-customer.component.html',
  styleUrls: ['./toggle-customer.component.css']
})
export class ToggleCustomerComponent implements OnInit{

  customers: Customer[] = [];
  customer: Customer = new Customer();

  constructor(
    private userService: UserService
  ) {

  }
  ngOnInit(): void {
    this.userService.findAllCustomers().subscribe(result => {
      this.customers = result;
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

  setStatus(customerId: number, status: string): void {
    this.customer.id = customerId;
    this.customer.status = status;
    this.userService.changeCustomerStatus(this.customer).subscribe(result => {
      console.log(result);
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }


}
