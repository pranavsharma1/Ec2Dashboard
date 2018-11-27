import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signinForm:NgForm;
  model:any = {};
  loginFailed:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSignin(signinform:NgForm){
    console.log(signinform);
    let email = this.signinForm.controls.email.value;
    let password = this.signinForm.controls.password.value;

    if(email == 'admin@admin.com' && password == '12345678'){
      this.router.navigate(['dashboard'])
    }else{
      this.loginFailed = true;
    }

  }
}
