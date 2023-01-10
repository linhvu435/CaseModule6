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

  ngOnInit(): void {
    this.id = this.shopService.getIdShop();
    this.productService.getProductByIdShop(this.id).subscribe((data)=>{
      this.products = data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.productService.getAll().subscribe((data)=>{this.products = data

    this.id = this.shopService.getIdShop()
    this.productService.getProductByIdShop(this.id).subscribe((data)=>{
    this.products = data

  })
})


}}
