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

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    // name : new FormControl("",Validators.required),
    phoneNumber : new FormControl("",Validators.required),
    username : new FormControl("", Validators.maxLength(20)),
    password : new FormControl("",[Validators.minLength(3), Validators.maxLength(20)]),
    confirmPassword : new FormControl("",[Validators.minLength(3), Validators.maxLength(20)]),
    img : new FormControl("",Validators.required)
  })

  register() {
    this.loginService.register(this.registerForm.value).subscribe((data) => {
      this.router.navigate(["/login"]);
    })
  }

}


