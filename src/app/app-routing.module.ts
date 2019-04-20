import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './about/about.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VertifyEmailComponent } from './auth/vertify-email/vertify-email.component';
import { AdminComponent } from './users/admin/admin.component';


const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'auth', component : AuthComponent},
  { path : 'users', component : UsersComponent},
  { path : 'signin', component : SigninComponent },
  { path : 'signup', component : SignupComponent },
  { path : 'about', component : AboutComponent},
  { path : 'dashboard', component:  DashbordComponent },
  { path : 'contact', component: ContactComponent},
  { path : 'vertify-email', component: VertifyEmailComponent},
  { path : 'forget-password', component:  ForgetPasswordComponent },
  {path :  'admin', component : AdminComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
