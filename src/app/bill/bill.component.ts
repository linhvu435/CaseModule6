import {Component, OnInit} from '@angular/core';
import {BillserviceService} from "../service/billservice/billservice.service";
import {Bill} from "../model/Bill";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  bill!: Bill[];

  bill1 !: Bill[];

  constructor(private showbillshop: BillserviceService ,private login:LoginService) {
  }

  ngOnInit() {
    localStorage.setItem("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5oMTIiLCJpYXQiOjE2NzMxOTcwNDgsImV4cCI6ODgwNzMxOTcwNDh9.rgHnexQFeQzbulu-iK3rNogWPo627nXe70Nleg14xITqLZQu_hyNX--PSmqqiprnlsBYah21tZwo1-xCisvnkw");

    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bill = data
    })
  }

  xembill():void{
    for (let i = 0; i < this.bill.length; i++) {
      if (this.bill[i].billStatus.id==1){
        this.bill1.push(this.bill[i])
      }
    }
    this.bill=this.bill1;
  }
}
