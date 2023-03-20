import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoggedInLayoutComponent } from './logged-in-layout/logged-in-layout.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffLayoutComponent } from './staff-layout/staff-layout.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';
import { ApproveBeneficiaryComponent } from './approve-beneficiary/approve-beneficiary.component';
import { ManageStatementComponent } from './manage-statement/manage-statement.component';
import { ToggleCustomerComponent } from './toggle-customer/toggle-customer.component';
import { StaffTransferComponent } from './staff-transfer/staff-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    CustomerDashboardComponent,
    SecurityQuestionsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    LoggedInLayoutComponent,
    FooterComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransferMoneyComponent,
    ViewStatementComponent,
    CustomerAccountsComponent,
    UpdateProfileComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
    StaffLayoutComponent,
    ApproveAccountComponent,
    ApproveBeneficiaryComponent,
    ManageStatementComponent,
    ToggleCustomerComponent,
    StaffTransferComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
