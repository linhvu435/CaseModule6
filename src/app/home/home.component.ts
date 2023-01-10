import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Bill} from "../model/Bill";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {

  products !: Array<Product>
  bill!: Bill
  // @ts-ignore
  carts = JSON.parse(localStorage.getItem("carts"));

  constructor(private productService: ProductService) {
    if(this.carts == null){
      this.carts = []
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }


  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

  pushInCart(product: any) {
    console.log(product)
    console.log(this.carts)
    let idx = this.carts.findIndex((item : any)=>{
      return item.id == product.id
    })
    if(idx >=0){
      this.carts[idx].amount +=1;
    }
    else {
        let cartItem: any= {
          id: product.id,
          name: product.name,
          img: product.img,
          detail: product.detail,
          price: product.price,
          category: product.category,
          amount: 1,
          }
          this.carts.push(cartItem)

    }
    // let cartJson = JSON.stringify(this.carts)
    // localStorage.setItem("carts",cartJson)
    this.productService.saveCart(this.carts)
  }

}
