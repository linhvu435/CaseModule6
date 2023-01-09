import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
<<<<<<< HEAD

=======
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`;
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
@Injectable({
  providedIn: 'root'
})
export class LoginService {

<<<<<<< HEAD
  constructor(private http:HttpClient) { }


register(account: any): Observable<any> {
  return this.http.post<any>("http://localhost:8080/login/register", account);
}

  // checkUsername(account: any): Observable<any> {
  //   return this.http.get<any>("http://localhost:8080/login/checkUsername",account);
  // }
=======
  constructor(private http: HttpClient) { }
   login(user: any): Observable<any>{
    return this.http.post<any>(API_URL+ '/login/login',user);
   }
   setId(id: any){
    localStorage.setItem("id",id)
   }
   getId(){
    return localStorage.getItem("id");
   }
   setToken(token: any){
    localStorage.setItem("token",JSON.stringify(token));
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
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
}
