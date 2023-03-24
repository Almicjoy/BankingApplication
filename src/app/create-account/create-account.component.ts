import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from '../model/Account';
import { CreateAccountService } from '../service/create-account.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{

  userId: number = 0;

  accountForm: any;
  submitted: boolean = false;

  deposit: number = 0;
  accountType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private createAccountService: CreateAccountService,
    private dataService: DataService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('id'));
    this.accountForm = this.formBuilder.group({
      deposit: ['', Validators.required],
      accountType: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.accountForm.valid) {
      console.log("User ID from create account:" + this.userId);
      this.createAccountService.createAccount(this.userId, this.deposit, this.accountType).subscribe(result => {
        alert("Account created. Awaiting verification");
        this.router.navigate(['/accounts']);
        this.reset();
      }, error => {
        alert("Account not created");
        this.reset();
      });

    }
  }

  reset(): void {
    this.submitted = false;
    this.accountForm.reset();
  }

  get f() {
    return this.accountForm.controls;
  }

}
