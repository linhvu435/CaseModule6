import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {BillserviceService} from "../../service/billservice/billservice.service";

@Component({
  selector: 'app-navbarleftbill',
  templateUrl: './navbarleftbill.component.html',
  styleUrls: ['./navbarleftbill.component.css']
})
export class NavbarleftbillComponent implements OnInit{
  billstatus:any;

  bill:any;
  constructor(private showbillshop: BillserviceService ) {
  }

  ngOnInit() {
    this.showbillshop.getallBillStatus().subscribe((data) => {
      this.billstatus = data
    })

    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bill = data
    })
  }
}
