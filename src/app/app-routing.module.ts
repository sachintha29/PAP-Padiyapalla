import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'auth', component : AuthComponent},
  { path : 'users', component : UsersComponent},
  { path : 'signin', component : SigninComponent},
  { path : 'signup', component : SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
