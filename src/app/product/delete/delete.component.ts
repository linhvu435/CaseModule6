import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit,OnChanges{
id: any;
product: any;
constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findById(this.id).subscribe((data) => {
        this.product = data
      })
    })

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findById(this.id).subscribe((data) => {
        this.product = data
      })
    })
  }
  delete() {
    this.productService.deleteProduct(this.id).subscribe()
    this.router.navigate(["/product"]);
  }


}
