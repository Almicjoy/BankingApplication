import { Component, OnDestroy, OnInit } from '@angular/core';
import { Account } from '../model/Account';
import { AccountResponse } from '../model/AccountResponse';
import { CreateAccountService } from '../service/create-account.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit{

  userId: number = 0;
  // accountResponse: AccountResponse = new AccountResponse();
  accounts: Account [] = [];

  constructor(
    private accountService: CreateAccountService
  ) {

  }

  ngOnInit(): void {
    console.log("User id in oninit: " + this.userId);
    this.accountService.getAccounts(this.userId).subscribe(result => {
      this.accounts = result;
    })
    console.log(this.accounts);
  }

}
