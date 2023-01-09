import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/Category";
import {Bill} from "../../model/Bill";
const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class BillserviceService {

  constructor(private http:HttpClient) { }
  getAllBillshop(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop`);
  }

  getallBillStatus():Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/getallbillstatus`);
  }

  setbill(idbill:number,idstatus:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/getallbillstatus`);
  }

  showbillbystatus(id:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop/${id}`);
  }

}
