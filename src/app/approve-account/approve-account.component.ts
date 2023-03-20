import { Component, OnInit } from '@angular/core';
import { Account } from '../model/Account';
import { CreateAccountService } from '../service/create-account.service';

@Component({
  selector: 'app-approve-account',
  templateUrl: './approve-account.component.html',
  styleUrls: ['./approve-account.component.css']
})
export class ApproveAccountComponent implements OnInit{

  accounts: Account[] = [];

  constructor(
    private accountService: CreateAccountService
  ) {

  }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(result => {
      console.log(result);
      this.accounts = result;
    }, error => {
      console.log(error);
    });
  }

  approveAccount(accountId: number): void {
    this.accountService.approveAccount(accountId).subscribe(result => {
      console.log(result);
      alert("Account Approved");
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

}
