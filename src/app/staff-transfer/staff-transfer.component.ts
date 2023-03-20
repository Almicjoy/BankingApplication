import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Transfer } from '../model/transfer';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-staff-transfer',
  templateUrl: './staff-transfer.component.html',
  styleUrls: ['./staff-transfer.component.css']
})
export class StaffTransferComponent implements OnInit{

  transfer: Transfer = new Transfer();
  transferForm: any;
  submitted: boolean = false;

  constructor (
    private transferService: TransferService,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      fromAccNum: ['', Validators.required],
      toAccNum: ['', Validators.required],
      amount: ['', Validators.required],
      reason: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.transferForm.valid) {
      this.transfer.byUser = 'Staff';
      this.transferService.staffTransfer(this.transfer).subscribe(result => {
        console.log(result);
        alert("Transfer completed successfully");
        this.reset();
      }, error => {
        console.log(error);
        alert(error.error.message);
        this.reset();
      })
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
