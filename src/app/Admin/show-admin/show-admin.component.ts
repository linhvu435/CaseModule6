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
export class ShowAdminComponent implements OnInit ,OnChanges{
  constructor(private adminService: AdminService) {
  }
  id: number = 1;
  role!: Array<Roles>
  account!: Account[]

  ngOnInit(): void {
    this.adminService.showroles().subscribe((data)=>{
      console.log(data)
      this.role=data
    })
    this.showAccount()
  }

  showAccount(){
    this.adminService.showAccountRoles(this.id).subscribe((data)=>{
      console.log(this.id)
      this.account=data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
