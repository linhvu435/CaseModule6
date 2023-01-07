import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {Img} from "../../model/Img";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
 constructor(private productService:ProductService, private router: Router,private storage: AngularFireStorage) {
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
    this.router.navigate(["/product"]);
  }

  // @ViewChild('uploadFile', {static: true}) public avatarDom1: ElementRef | undefined;
  //
  // selectedImage: any = null;
  // arrayPicture ='';
  // submit(){
  //   if(this.selectedImage !=null){
  //     const filePath = this.selectedImage.name;
  //     const fileRef = this.storage.ref(filePath);
  //     this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
  //       finalize(() => (fileRef.getDownloadURL().subscribe(url => {this.arrayPicture = url
  //       console.log(url) })))
  //     ).subscribe();
  //   }
  // }
  // uploadFileImg(){
  //   this.selectedImage = this.avatarDom1?.nativeElement.files[0];
  //   this.submit();
  // }
}
