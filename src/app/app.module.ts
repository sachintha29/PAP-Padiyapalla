
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { AuthComponent } from './auth/auth.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VertifyEmailComponent } from './auth/vertify-email/vertify-email.component';
// Auth service
import { AuthService } from './shared/services/auth.service';
import { AdminComponent } from './users/admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    AboutComponent,
    ContactComponent,
    DashbordComponent,
    ForgetPasswordComponent,
    VertifyEmailComponent,
    AdminComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
