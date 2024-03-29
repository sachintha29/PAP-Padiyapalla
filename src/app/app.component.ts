import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PAP-Padiyapalla';

  constructor(
    private afAuth: AngularFireAuth
   ) { }


  ngOnInit() {
    this.afAuth.authState
      .subscribe(user => {
        console.log( user );
      });

  }

}
