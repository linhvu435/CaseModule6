import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService, private router: Router) {
  }
loginForm = new FormGroup({
  username: new FormControl("",Validators.required),
  password: new FormControl("",Validators.required)
})
  login(){
  this.loginService.login(this.loginForm.value).subscribe((data)=>{

    console.log(JSON.parse(JSON.stringify(data)))
      this.loginService.setToken(data.accessToken);
      this.loginService.setUsername(data.username);
      this.loginService.setUsername(JSON.stringify(data.roles))
      alert("đăng nhập thành công")
      this.router.navigate(["/"]);
    })
  }
}
