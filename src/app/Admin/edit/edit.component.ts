import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id: any;

  account: any;
  editForm: any;
  constructor(private adminService:AdminService,private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.adminService.findById(this.id).subscribe((data) => {
        this.account = data
        this.editForm = new FormGroup({
          name: new FormControl(this.account.name),
          username: new FormControl(this.account.username),
          email: new FormControl(this.account.email),
          phoneNumber: new FormControl(this.account.phoneNumber),
          birthday: new FormControl(this.account.birthday),
          date: new FormControl(this.account.date),
          address: new FormControl(this.account.address),
          img: new FormControl(this.account.img),
          status: new FormControl(this.account.status),
          roles: new FormControl(this.account.roles),
        })
      })
    })
  }
  update() {
    this.account.updateAccount(this.id, this.editForm.value).subscribe();
    this.router.navigate(["/product"]);
  }
}

