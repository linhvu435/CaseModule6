import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProductByIdShop(id : number): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products/${id}`,);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL +  '/products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/edit/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
  GetCarts(){
    // @ts-ignore
    let CartJson = JSON.parse(localStorage.getItem("carts"));
    return CartJson
  }
  saveCart(carts :any){
    let cartJson = JSON.stringify(carts)
    localStorage.setItem("carts",cartJson)
  }

  getCartTotalPrice(){
    let carts : any = this.GetCarts();
    let total : number = 0;
    carts.forEach((item: any)=>{
      total += item.amount*item.price
    })
    return total;
  }

}
