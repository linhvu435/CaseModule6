import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-navbarleft',
  templateUrl: './navbarleft-component1.component.html',
  styleUrls: ['./navbarleft-component1.component.css']
})


export class NavbarleftComponent1 implements OnInit{

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
