import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../model/Account';
import { Beneficiary } from '../model/beneficiary';
import { Customer } from '../model/customer';
import { Transfer } from '../model/transfer';
import { BeneficiaryService } from '../service/beneficiary.service';
import { CreateAccountService } from '../service/create-account.service';
import { TransferService } from '../service/transfer.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit{

  userId: number = 0;
  accounts: Account[] = [];
  beneficiaries: Beneficiary[] = [];
  transferForm: any;
  submitted: boolean = false;
  transfer: Transfer = new Transfer();
  customer: Customer = new Customer();

  constructor(
    private accountService: CreateAccountService,
    private beneficiaryService: BeneficiaryService,
    private transferService: TransferService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.accountService.getAccounts(this.userId).subscribe(result => {
      this.accounts = result;
    });
    this.beneficiaryService.getBeneficiaries(this.userId).subscribe(result => {
      this.beneficiaries = result;
    });
    this.transferForm = this.formBuilder.group({
      fromAccNumber: ['', Validators.required],
      toAccNumber: ['', Validators.required],
      amount: ['', Validators.required],
      reason: ['', Validators.required]
    });
    this.userService.findUserById(this.userId).subscribe(result => {
      this.customer = result;
    })
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.transferForm.valid){
      this.transfer.byUser = this.customer.username;
      console.log("Transfer details: " + this.transfer);
      this.transferService.transferMoney(this.transfer).subscribe(result => {
        alert("Transfer requested. Transaction will be completed shortly.");
      }, error => {
        console.log(error);
        alert(error.error.message);
      });
      this.reset();
    }
  }

  reset(): void {
    this.submitted = false;
    this.transferForm.reset();
  }

  get f() {
    return this.transferForm.controls;
  }

}
