import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Roles} from "../../model/Roles";
import {identity} from "rxjs";
import {Account} from "../../model/Account";

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css']
})
export class ShowAdminComponent implements OnInit {
  constructor(private adminService: AdminService) {
  }

  id: number = 1;
  S: number = 1;
  role!: Array<Roles>
  account!: Account[]

  ngOnInit(): void {
    this.adminService.showroles().subscribe((data) => {
      console.log(data)
      this.role = data
    })
    this.showAccount()
  }

  showAccount() {
    this.adminService.showAccountRoles(this.id).subscribe((data) => {
      console.log(this.id)
      this.account = data
    })
  }


  searchByname(value: string) {
    let check = "#";
    if (value[0]==check) {
     let value1 = value.replace("#", "")
      this.adminService.searchByPhone(value1).subscribe((data) => {
        console.log(this.id)
        this.account = data
      })
    } else {
      this.adminService.searchByname(value).subscribe((data) => {
        console.log(this.id)
        this.account = data
      })
    }
  }

}
