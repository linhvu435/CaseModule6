import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges{

  products !: Array<Product>

  constructor(private productService: ProductService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data)=>{
      this.products=data
    })
  }


  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

}
