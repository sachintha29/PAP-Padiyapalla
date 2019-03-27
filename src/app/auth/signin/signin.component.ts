import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private service: SigninService
  ) { }

  ngOnInit() {
  }

  loginGoogle() {
    console.log('Login..');
    this.service.login();
  }

  logout(){
    this.service.logout();
  }

}
