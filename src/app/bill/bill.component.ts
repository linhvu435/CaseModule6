import {Component, OnInit} from '@angular/core';
import {BillserviceService} from "../service/billservice/billservice.service";
import {Bill} from "../model/Bill";
import {LoginService} from "../service/login.service";
import {Product} from "../model/Product";
import {Router} from "@angular/router";
import {ProductInBillDTO} from "../model/DTO/ProductInBillDTO";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  bills :Bill[]=[];

  product:ProductInBillDTO[]=[];

  product1!:any;


  constructor(private showbillshop: BillserviceService ,private router:Router) {
  }

  ngOnInit() {
    localStorage.setItem("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5oMTIiLCJpYXQiOjE2NzMxOTcwNDgsImV4cCI6ODgwNzMxOTcwNDh9.rgHnexQFeQzbulu-iK3rNogWPo627nXe70Nleg14xITqLZQu_hyNX--PSmqqiprnlsBYah21tZwo1-xCisvnkw");
    this.showbillshop1
  }

  showbillshop1():void{
    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bills = data
    })
  }

  setbillshop(idstatus:number,idbill:number):void {
    this.showbillshop.setbill(idbill, idstatus).subscribe((data) => {
      this.showbillshop1()
    })
    this.router.navigate(["/bill"])
  }

  showbillbyidbill(id:number):void{
    this.showbillshop.showbillbyidbill(id).subscribe((data) => {
      this.product = data
      console.log(this.product);
      let str = ""
      let str1=`<h4>Thông tin đơn hàng :</h4>`

      for (let i = 0; i < this.product.length; i++) {
        str += `
                    <table style="margin-left: 50px">
                      <hr>
                      <tr>
                      <th>Sản phẩm :</th>
</tr>
                      <tr  >
                        <td>Tên : ${this.product[i].name} </td>

                        <td>Ảnh sp : <img src="${this.product[i].img} " style="width: 100px;height: 50px" alt=""></td>
                                                <td> </td>

                        <td>Giá : ${this.product[i].price} </td>
                    </tr>
                    </table>
                    <hr>

`
      }
      // @ts-ignore
      document.getElementById(id).innerHTML = str;
      // @ts-ignore
      document.getElementById("thongtin"+id).innerHTML = str1;
    })

  }


}
