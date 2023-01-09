import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {Account} from "../../model/Account";

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
    gender : new FormControl("",Validators.required),

  })

  register() {
    if (this.registerForm.invalid){
      alert("đăng kí khong được");
      return;
    }else {
      this.loginService.register(this.registerForm.value).subscribe((data) =>  {
        this.router.navigate(["/login"]);
      })
    }

  }

  public validateAreEqual(c: AbstractControl): {notSame: boolean} | null {
    return  c.value.password  ===  c.value.confirmPassword ? null : {notSame: true};
  }
  checkConfirmPassword() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("abc").style.display = "block";
    }
  }

}


