import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login() {
    console.log('regirecting');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }
  getLoggedUser() {
    return this.afAuth.authState;
  }

}
