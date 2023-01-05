import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

 constructor(private productService:ProductService, private router: Router) {
 }
createForm: any;
  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl(""),
      img: new FormControl(""),
      detail: new FormControl(""),
      price: new FormControl(""),
      amount: new FormControl(""),
    })
  }
  create() {
    this.productService.saveProduct(this.createForm.value).subscribe()
    this.createForm.reset()
    this.router.navigate(["/"]);
  }

}
