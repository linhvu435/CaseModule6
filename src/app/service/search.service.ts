import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {Category} from "../model/Category";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_URL}/search/getallcategory`);
  }

  getSearchProduct(name :String): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${name}`)
  }



}
