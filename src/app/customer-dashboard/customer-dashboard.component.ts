import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { AddBeneficiaryComponent } from '../add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { CustomerAccountsComponent } from '../customer-accounts/customer-accounts.component';
import { JwtToken } from '../model/jwtToken';
import { RemoveBeneficiaryComponent } from '../remove-beneficiary/remove-beneficiary.component';
import { DataService } from '../service/data.service';
import { LoginService } from '../service/login.service';
import { TransferMoneyComponent } from '../transfer-money/transfer-money.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';


const routes: Routes = [
  {

  }
]
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  providers: [DataService],
  styleUrls: ['./customer-dashboard.component.css'],
  template: '<router-outlet></router-outlet>'
})
export class CustomerDashboardComponent implements OnInit{

  jwtToken: JwtToken = new JwtToken();

  constructor(
    public loginService: LoginService,
    public dataService: DataService
  ) {

  }
  ngOnInit(): void {
    this.jwtToken = history.state.jwtToken;
    this.dataService.sendData(this.jwtToken.id);
  }

  onOutletLoaded(component: CreateAccountComponent | CustomerAccountsComponent
     | AddBeneficiaryComponent | RemoveBeneficiaryComponent | TransferMoneyComponent
     | UpdateProfileComponent) {
    component.userId = this.jwtToken.id;
  }



}
