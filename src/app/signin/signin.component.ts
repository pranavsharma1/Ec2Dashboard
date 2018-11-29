import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../shared/users.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signinForm:NgForm;
  model:any = {};
  loginFailed:boolean = false;

  constructor(private router:Router, private user: UsersService) { }

  ngOnInit() {
  }

  onSignin(signinForm:NgForm){
    let email = this.signinForm.controls.email.value;
    let password = this.signinForm.controls.password.value;
    let userCred = {"email": email,"password":password};
    this.user.matchCredentials(userCred).subscribe(
      data => {
        this.router.navigate(['dashboard'])
      },
      error => {
        this.router.navigate(['signin'])
      }
    )
  }
}
