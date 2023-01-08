import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


register(account: any): Observable<any> {
  return this.http.post<any>("http://localhost:8080/login/register", account);
}

  // setToken(token: string){
  //   localStorage.setItem("token",token);
  // }
  //
  // getToken(){
  //   return localStorage.getItem("token");
  // }
  // setUserToken(userToken: UserToken){
  //   localStorage.setItem("userToken",JSON.stringify(userToken));
  // }
  //
  // getUserToken(): UserToken{
  //   return JSON.parse(<string>localStorage.getItem("userToken"));
  // }
}
