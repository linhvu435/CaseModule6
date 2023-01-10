import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  checkUser! : any
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {


  }

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    // name : new FormControl("",Validators.required),
    phoneNumber : new FormControl("",Validators.maxLength(12)),
    username : new FormControl("", Validators.maxLength(20)),
    password : new FormControl("",[Validators.minLength(3), Validators.maxLength(20)]),
    confirmPassword : new FormControl("",[Validators.minLength(3), Validators.maxLength(20)]),
    adress : new FormControl("",Validators.required),
    gender : new FormControl(""),

  })

  register() {
    if (!this.registerForm.valid || this.registerForm.get("confirmPassword")?.value != this.registerForm.get("password")?.value){
       alert("đăng kí không được các ô không được để trống")
    }else {
      this.loginService.register(this.registerForm.value).subscribe((data) =>  {
        alert("đăng kí thành công")
        this.router.navigate(["/login"]);

      })
    }
  }

}


