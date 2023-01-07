import { Component } from '@angular/core';
import {SearchService} from "../service/search.service";
import {SearchComponent} from "../home/search/search.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  textsearch :any
  constructor(private searchService: SearchService ) {
  }

  searchProduct(textsearch : string) :void{
    textsearch= textsearch.toString();
    this.searchService.getSearchProduct(textsearch).subscribe(data => {
    })

  }



}
