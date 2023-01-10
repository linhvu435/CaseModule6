import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  carts : any = []
  totalPrice: number = this.productService.getCartTotalPrice()
  constructor( private productService: ProductService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.carts = JSON.parse(localStorage.getItem("carts"))
  }

  subTotal(cart : any){
    return cart.price*cart.amount
  }

  updatePrice(idx : number, ev: any){
    let newAmount = ev.target.value;
    newAmount = newAmount > 0 ? newAmount : 1;
    ev.target.value = newAmount;
    this.carts[idx].amount = ev.target.value
    this.productService.saveCart(this.carts)
    this.totalPrice = this.productService.getCartTotalPrice()
  }
  removeCart(index : number){
    this.carts.splice(index,1);
    this.productService.saveCart(this.carts)
    this.totalPrice = this.productService.getCartTotalPrice()
  }


}
