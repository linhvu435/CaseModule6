import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {Shop} from "../../model/Shop";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  shop!: Shop
  id!: any

  constructor(private loginService:LoginService, private router: Router,private shopService : ShopService) {
  }
loginForm = new FormGroup({
  username: new FormControl("",Validators.required),
  password: new FormControl("",Validators.required)
})
  login(){
  this.loginService.login(this.loginForm.value).subscribe((data)=>{
      this.loginService.setId(data.id);
      this.loginService.setToken(data.token);
      this.loginService.setUsername(data.username);
      this.loginService.setImg(data.img);
      this.loginService.setEmail(data.email);
      this.loginService.setRole(JSON.stringify(data.roles[0].id));
      this.id = localStorage.getItem("id")
      this.shopService.findById(this.id).subscribe((data)=>{
      this.shopService.setIdShop(data.id);
      this.shopService.setImgShop(data.img);
      this.shopService.setNameShop(data.name);
      this.shopService.setAddressShop(data.shopAddress)
      console.log(this.shop)
    })
      alert("đăng nhập thành công")
      this.router.navigate(["/"]);
    })
  }
}
