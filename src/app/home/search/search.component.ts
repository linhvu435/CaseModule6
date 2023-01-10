import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges,OnInit{
  category : any;

  product : any;


  constructor(private searchService: SearchService ) {
}

  ngOnInit() {
    this.searchService.getAll().subscribe((data) => {
      this.category = data
    })
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  getSearchProduct(product : any) : void{
    this.product =product;
  }



}
