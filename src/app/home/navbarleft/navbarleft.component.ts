import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-navbarleft',
  templateUrl: './navbarleft.component.html',
  styleUrls: ['./navbarleft.component.css']
})
export class NavbarleftComponent implements OnInit{

  category : any;

  product : any;


  constructor(private searchService: SearchService ) {
  }

  ngOnInit() {
    this.searchService.getAll().subscribe((data) => {
      this.category = data
    })
  }
}
