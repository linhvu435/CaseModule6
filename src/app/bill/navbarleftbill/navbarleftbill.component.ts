import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {BillserviceService} from "../../service/billservice/billservice.service";
import {BillComponent} from "../bill.component";

@Component({
  selector: 'app-navbarleftbill',
  templateUrl: './navbarleftbill.component.html',
  styleUrls: ['./navbarleftbill.component.css']
})
export class NavbarleftbillComponent implements OnInit{
  billstatus:any;



  constructor(private showbillshop: BillserviceService ,private bill : BillComponent) {
  }

  ngOnInit() {
    this.showbillshop.getallBillStatus().subscribe((data) => {
      this.billstatus = data
    })

  }

  showbillbystatus(id:number):void{
    this.showbillshop.showbillbystatus(id).subscribe((data) => {
      this.bill.bills=data;
    })

  }

  showbillshop1():void{
    this.bill.showbillshop1();
  }
}
