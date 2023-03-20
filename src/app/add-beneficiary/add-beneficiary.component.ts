import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../model/Account';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit{
  userId: number = 0;
  addBeneficiaryForm: any;
  submitted: boolean = false;
  beneficiary: Beneficiary = new Beneficiary();

  constructor(
    private formBuilder: FormBuilder,
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit(): void {
    this.submitted = false;
    this.addBeneficiaryForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      confirmAccountNumber: ['', Validators.required],
      accountType: ['', Validators.required]
    }, {
      validators: this.mustMatch('accountNumber', 'confirmAccountNumber')
    });
  }

  mustMatch(accountNumber: any, confirmAccountNumber: any){
    return(formGroup: FormGroup) => {
      const accountNumberControl = formGroup.controls[accountNumber];
      const confirmAccountNumberControl = formGroup.controls[confirmAccountNumber];
      if(confirmAccountNumberControl.errors && !confirmAccountNumberControl.errors['mustMatch']){
        return;
      }

      if(accountNumberControl.value !== confirmAccountNumberControl.value){
        confirmAccountNumberControl.setErrors({mustMatch: true});
      } else {
        confirmAccountNumberControl.setErrors(null);
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.addBeneficiaryForm.valid){
      this.beneficiaryService.addBeneficiary(this.userId, this.beneficiary).subscribe(result => {
        alert("Beneficiary added. Awaiting approval.");
      }, error => {
        alert("Beneficiary not added");
      });
      this.reset();
    }

  }

  reset(): void {
    this.submitted = false;
    this.addBeneficiaryForm.reset();
  }

  get f() {
    return this.addBeneficiaryForm.controls;
  }

}
