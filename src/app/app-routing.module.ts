import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBeneficiaryComponent } from "./add-beneficiary/add-beneficiary.component";
import { ApproveAccountComponent } from "./approve-account/approve-account.component";
import { ApproveBeneficiaryComponent } from "./approve-beneficiary/approve-beneficiary.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { CustomerAccountsComponent } from "./customer-accounts/customer-accounts.component";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ManageStatementComponent } from "./manage-statement/manage-statement.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RemoveBeneficiaryComponent } from "./remove-beneficiary/remove-beneficiary.component";
import { SecurityQuestionsComponent } from "./security-questions/security-questions.component";
import { StaffDashboardComponent } from "./staff-dashboard/staff-dashboard.component";
import { StaffLoginComponent } from "./staff-login/staff-login.component";
import { StaffTransferComponent } from "./staff-transfer/staff-transfer.component";
import { ToggleCustomerComponent } from "./toggle-customer/toggle-customer.component";
import { TransferMoneyComponent } from "./transfer-money/transfer-money.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { ViewStatementComponent } from "./view-statement/view-statement.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'registration', component: RegistrationComponent },
  { path:'login', component: LoginComponent },
  {
    path: 'customerDashboard',
    component: CustomerDashboardComponent,
    children: [
      {path: '', redirectTo: 'accounts', pathMatch: 'full'},
      {path: 'accounts', component: CustomerAccountsComponent},
      {path: 'createAccount', component: CreateAccountComponent},
      {path: 'addBeneficiary', component: AddBeneficiaryComponent},
      {path: 'removeBeneficiary', component: RemoveBeneficiaryComponent},
      {path: 'transferMoney', component: TransferMoneyComponent},
      {path: 'viewStatement', component: ViewStatementComponent},
      {path: 'updateProfile', component: UpdateProfileComponent}
    ]
  },
  { path: 'securityQuestions',  component: SecurityQuestionsComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'staffLogin', component: StaffLoginComponent },
  {
    path: 'staffDashboard',
    component: StaffDashboardComponent,
    children: [
      {path: '', redirectTo: 'manageStatement', pathMatch: 'full'},
      {path: 'manageStatement', component: ManageStatementComponent},
      {path: 'approveAccount', component: ApproveAccountComponent},
      {path: 'approveBeneficiary', component: ApproveBeneficiaryComponent},
      {path: 'toggleCustomer', component: ToggleCustomerComponent}
    ] },
    { path: 'staffTransfer', component: StaffTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
