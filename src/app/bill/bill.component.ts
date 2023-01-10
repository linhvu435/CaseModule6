import {Component, OnInit} from '@angular/core';
import {BillserviceService} from "../service/billservice/billservice.service";
import {Bill} from "../model/Bill";
import {LoginService} from "../service/login.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  bill!: Bill[];

  product1!:any;


  constructor(private showbillshop: BillserviceService  ) {
  }

  ngOnInit() {
    localStorage.setItem("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5oMTIiLCJpYXQiOjE2NzMxOTcwNDgsImV4cCI6ODgwNzMxOTcwNDh9.rgHnexQFeQzbulu-iK3rNogWPo627nXe70Nleg14xITqLZQu_hyNX--PSmqqiprnlsBYah21tZwo1-xCisvnkw");

    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bill = data

      for (let i = 0; i < this.bill[0].product.length; i++) {
        console.log(this.bill[0].product[i])
      }



    })
  }


}
