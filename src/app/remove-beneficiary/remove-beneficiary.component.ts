import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';

@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css']
})
export class RemoveBeneficiaryComponent implements OnInit{

  userId: number = 0;
  beneficiaries: Beneficiary[] = [];

  constructor(
    private beneficiaryService: BeneficiaryService
  ) {

  }
  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('id'));
    this.beneficiaryService.getBeneficiaries(this.userId).subscribe(result => {
      this.beneficiaries = result;
    })
  }

  deleteBeneficiary(beneficiaryId: number): void {
    this.beneficiaryService.deleteBeneficiary(this.userId, beneficiaryId).subscribe(result => {
      console.log(result);
      alert("Beneficiary deleted");
      window.location.reload();
    }, error => {
      alert("Issue deleting beneficiary");
      console.log(error);
    })
  }

}
