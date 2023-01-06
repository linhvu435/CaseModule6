import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
   login(user: any): Observable<any>{
    return this.http.post<any>(API_URL+ '/login/login',user);
   }

   setToken(token: any){
    localStorage.setItem("token",token);
   }
   getToken(){
    return localStorage.getItem("token");
  }
  setUsername(username: any){
    localStorage.setItem("username",username);
  }
  getUsername(){
    return localStorage.getItem("username");
  }
  setEmail(email: any){
    localStorage.setItem("email",email);
  }
  getEmail(){
    return localStorage.getItem("email");
  }
  setImg(img : any){
    localStorage.setItem("img",img)
  }
  getImg(){
    return localStorage.getItem("img")
  }
  setRole(roles:any){
    localStorage.setItem("roles",roles)
  }
  getRole(){
    return localStorage.getItem("roles")
  }
}
