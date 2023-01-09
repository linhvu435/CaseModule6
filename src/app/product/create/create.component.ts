import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {Img} from "../../model/Img";
import {CategoryService} from "../../service/category.service";
import {ShopService} from "../../service/shop.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
 constructor(private productService:ProductService, private router: Router,private storage: AngularFireStorage,
             private categoryService: CategoryService, private shopService: ShopService) {
 }
createForm: any;
categorys! : Array<Category>
  id! : number
  ngOnInit(): void {
      this.categoryService.getAll().subscribe((data)=>{
        this.categorys = data
        }
      )
    this.createForm = new FormGroup({
      name: new FormControl(""),
      img: new FormControl(""),
      detail: new FormControl(""),
      price: new FormControl(""),
      amount: new FormControl(""),
      category: new FormGroup({brand: new FormControl(this.id)}),
      shop:  new FormGroup({id : new FormControl(localStorage.getItem("idShop"))})
    })
  }
  create() {
    this.productService.saveProduct(this.createForm.value).subscribe()
    this.createForm.reset()
    this.router.navigate(["/product"]);
  }

  // @ViewChild('uploadFile', {static: true}) public avatarDom1: ElementRef | undefined;
  //
  // selectedImage: any = null;
  // arrayPicture: String[] =[];
  // submit(){
  //   if(this.selectedImage !=null){
  //     const filePath = this.selectedImage.name;
  //     const fileRef = this.storage.ref(filePath);
  //     this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
  //       finalize(() => (fileRef.getDownloadURL().subscribe(url => {this.arrayPicture.push(url)
  //       console.log(url) })))
  //     ).subscribe();
  //   }
  // }
  // uploadFileImg(){
  //   this.selectedImage = this.avatarDom1?.nativeElement.files[0];
  //   this.submit();
  // }
}
