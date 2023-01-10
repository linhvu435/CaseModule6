import {Component, OnInit} from '@angular/core';
import {Bill} from "../model/Bill";
import {ProductInBillDTO} from "../model/DTO/ProductInBillDTO";
import {BillserviceService} from "../service/billservice/billservice.service";
import {Router} from "@angular/router";
import {BilluserService} from "../service/billuserservice/billuser.service";

@Component({
  selector: 'app-billuser',
  templateUrl: './billuser.component.html',
  styleUrls: ['./billuser.component.css']
})
export class BilluserComponent implements OnInit{
  billsuser:Bill[]=[];

  productuser:ProductInBillDTO[]=[];

  product1!:any;


  constructor(private showbillshop: BillserviceService ,private router:Router,private billusersv:BilluserService) {
  }

  ngOnInit() {
    this.showbillshop1
  }

  showbillshop1():void{
    this.billusersv.getAllBillshop().subscribe((data) => {
      this.billsuser = data
    })
  }

  setbillshop(idstatus:number,idbill:number):void {
    this.showbillshop.setbill(idbill, idstatus).subscribe((data) => {
      this.showbillshop1()
    })
  }

  showbillbyidbill(id:number):void{
    this.billusersv.showbillbyidbill(id).subscribe((data) => {
      this.productuser = data
      console.log(this.productuser);
      let str = ""
      let str1=`<h4>Thông tin đơn hàng :</h4>`

      for (let i = 0; i < this.productuser.length; i++) {
        str += `
                    <table style="margin-left: 50px">
                      <hr>
                      <tr>
                      <th>Sản phẩm :</th>
</tr>
                      <tr  >
                        <td>Tên : ${this.productuser[i].name} </td>

                        <td>Ảnh sp : <img src="${this.productuser[i].img} " style="width: 100px;height: 50px" alt=""></td>
                                                <td> </td>

                        <td>Giá : ${this.productuser[i].price} </td>
                    </tr>
                    </table>
                    <hr>

`
      }
      // @ts-ignore
      document.getElementById("idbill"+id).innerHTML = str;
      // @ts-ignore
      document.getElementById("thongtinbilluser"+id).innerHTML = str1;
    })

  }


}
