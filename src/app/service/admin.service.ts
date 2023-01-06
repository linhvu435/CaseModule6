import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {environment} from "../../environments/environment";
import {Roles} from "../model/Roles";
import {Account} from "../model/Account";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  showroles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(API_URL +  '/admin/showrole');
  }

  showAccountRoles(id:number): Observable<Account[]>{
    return this.http.get<Account[]>(`${API_URL}/admin/showAccount/${id}`);
  }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`${API_URL}/admin/account/${id}`);
  }
}
