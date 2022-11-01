import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'signin',component: SigninComponent},
  {path:'signup',component: SignupComponent},
  {path:'update',component: UpdateComponent},
  {path:'dashboard',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
