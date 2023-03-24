import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../model/Account';
import { CreateAccountService } from '../service/create-account.service';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent implements OnInit{

  chooseAccountForm: any;
  accounts: Account[] = [];
  userId: number = 0;
  accountId: number = 0;
  selectedAccount: Account = new Account();
  submitted: boolean = false;

  constructor (
    private accountService: CreateAccountService,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('id'));
    this.accountService.getAccounts(this.userId).subscribe(result => {
      this.accounts = result;
    }, error => {
      console.log(error);
    })
    this.chooseAccountForm = this.formBuilder.group({
      accountId: ['', Validators.required]
    })
  }


  onSubmit(): void {
    this.submitted = true;
    if(this.chooseAccountForm.valid) {
      this.accountService.getAccountById(this.userId, this.accountId).subscribe(result => {
        console.log(result);
        this.selectedAccount = result;
        this.reset();
      }, error => {
        console.log(error);
        this.reset();
      })
    }
  }

  printPage() {
    let print: any;
    let printContent: any;
    printContent = document.getElementById("print")?.innerHTML;
    print = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    print.document.write(printContent);
    print.document.close();
    print.focus();
    print.print();
    print.close();
  }

  reset(): void {
    this.submitted = false;
    this.chooseAccountForm.reset();
  }

  get f() {
    return this.chooseAccountForm.controls;
  }


}
