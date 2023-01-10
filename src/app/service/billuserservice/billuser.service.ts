import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../../model/Bill";
import {environment} from "../../../environments/environment";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BilluserService {

  constructor(private http:HttpClient) { }

  showbillbyidbill(id:number):Observable<ProductInBillDTO[]>{
    return this.http.get<ProductInBillDTO[]>(`${API_URL}/orderuser/showBillShopbyidbill/${id}`);
  }

  showbillbystatus(id:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/orderuser/showBillShop/${id}`);
  }

  getAllBillshop(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/orderuser/showBillShop`);
  }
}
