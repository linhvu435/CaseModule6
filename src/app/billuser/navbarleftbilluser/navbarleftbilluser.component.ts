import {Component, OnInit} from '@angular/core';
import {BillserviceService} from "../../service/billservice/billservice.service";
import {BillComponent} from "../../bill/bill.component";
import {BilluserService} from "../../service/billuserservice/billuser.service";
import {BillStatus} from "../../model/BillStatus";
import {BilluserComponent} from "../billuser.component";

@Component({
  selector: 'app-navbarleftbilluser',
  templateUrl: './navbarleftbilluser.component.html',
  styleUrls: ['./navbarleftbilluser.component.css']
})
export class NavbarleftbilluserComponent implements OnInit{
  billstatususer:BillStatus[]=[];



  constructor(private showbillshop: BillserviceService ,private billuser : BilluserComponent,private billusersv: BilluserService ) {
  }

  ngOnInit() {
    this.showbillshop.getallBillStatus().subscribe((data) => {
      this.billstatususer = data
    })

  }

  showbillbystatus(id:number):void{
    this.billusersv.showbillbystatus(id).subscribe((data) => {
      this.billuser.billsuser=data;
    })

  }

  showbillshop1():void{
    this.billuser.showbillshop1();
  }
}
