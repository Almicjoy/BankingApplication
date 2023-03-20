import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../model/Account';
import { CreateAccountService } from '../service/create-account.service';

@Component({
  selector: 'app-manage-statement',
  templateUrl: './manage-statement.component.html',
  styleUrls: ['./manage-statement.component.css']
})
export class ManageStatementComponent implements OnInit{

  chooseAccountForm: any;
  accountId: number = 0;
  accounts: Account[] = [];
  selectedAccount: Account = new Account();

  constructor(
    private accountService: CreateAccountService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(result => {
      this.accounts = result;
    }, error => {
      console.log(error);
    })
    this.chooseAccountForm = this.formBuilder.group({
      accountId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.accountService.getAccountAndUser(this.accountId).subscribe(result => {
      this.selectedAccount = result;
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }
  get f() {
    return this.chooseAccountForm.controls;
  }

}
