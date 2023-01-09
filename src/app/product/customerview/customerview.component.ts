import { Component } from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent {
  id: any;
  product!: Product;
  constructor(private route:ActivatedRoute,private productService:ProductService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findById(this.id).subscribe((data)=>{
        this.product = data

      })
    })
  }
}
