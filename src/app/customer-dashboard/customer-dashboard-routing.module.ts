import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from '../add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { CustomerAccountsComponent } from '../customer-accounts/customer-accounts.component';
import { RemoveBeneficiaryComponent } from '../remove-beneficiary/remove-beneficiary.component';
import { TransferMoneyComponent } from '../transfer-money/transfer-money.component';
import { ViewStatementComponent } from '../view-statement/view-statement.component';
import { CustomerDashboardComponent } from './customer-dashboard.component';

const routes: Routes = [{
  path: '',
  component: CustomerDashboardComponent,
  children: [

    {path: 'accounts', component: CustomerAccountsComponent},
    {path: '', redirectTo: 'accounts'},
    {path: 'createAccount', component: CreateAccountComponent},
    {path: 'addBeneficiary', component: AddBeneficiaryComponent},
    {path: 'removeBeneficiary', component: RemoveBeneficiaryComponent},
    {path: 'transferMoney', component: TransferMoneyComponent},
    {path: 'viewStatement', component: ViewStatementComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }

