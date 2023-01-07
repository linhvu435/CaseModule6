import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit,OnChanges {
  products !: Array<Product>
  id!: any
  constructor(private productService: ProductService, private shopService : ShopService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.id = this.shopService.getIdShop()
    this.productService.getProductByIdShop(this.id).subscribe((data)=>{
    this.products = data
  })
}


  ngOnInit(): void {
    this.id = this.shopService.getIdShop();
    this.productService.getProductByIdShop(this.id).subscribe((data)=>{
      this.products = data
    })
  }


}
