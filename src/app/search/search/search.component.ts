import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges{
  category!: Array<Category>
constructor(private searchService: SearchService ) {
}

  ngOnChanges(changes: SimpleChanges): void {
    this.searchService.getAll().subscribe((data) => {
      this.category = data
    })
  }

}
