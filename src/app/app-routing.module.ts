import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SecurityQuestionsComponent } from "./security-questions/security-questions.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'registration', component: RegistrationComponent },
  { path:'login', component: LoginComponent },
  { path: 'customerDashboard', component: CustomerDashboardComponent},
  { path: 'securityQuestions', component: SecurityQuestionsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
