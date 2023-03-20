import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';

@Component({
  selector: 'app-approve-beneficiary',
  templateUrl: './approve-beneficiary.component.html',
  styleUrls: ['./approve-beneficiary.component.css']
})
export class ApproveBeneficiaryComponent implements OnInit{

  beneficiaries: Beneficiary[] = [];

  constructor(
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit(): void {
    this.beneficiaryService.getAllBeneficiaries().subscribe(result => {
      console.log(result);
      this.beneficiaries = result;
    }, error => {
      console.log(error);
    })
  }

  approve(beneficiaryId: number): void {
    this.beneficiaryService.approveBeneficiary(beneficiaryId).subscribe(result => {
      console.log(result);
      alert("Beneficiary Approved");
      window.location.reload();
    }, error => {
      alert(error.error.message);
    })
  }

}
