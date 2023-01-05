import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute,Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements  OnInit{
id: any;
editForm: any;
product : any;
constructor(private  productService:ProductService, private router: Router,private route : ActivatedRoute) {
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findById(this.id).subscribe((data) => {
        this.product = data
        this.editForm = new FormGroup({
          name: new FormControl(this.product.name),
          img: new FormControl(this.product.img),
          detail: new FormControl(this.product.detail),
          price: new FormControl(this.product.price),
          amount: new FormControl(this.product.amount),
        })
      })
    })
  }

  edit() {
    this.productService.updateProduct(this.id, this.editForm.value).subscribe();
    this.router.navigate(["/"]);
  }
}
