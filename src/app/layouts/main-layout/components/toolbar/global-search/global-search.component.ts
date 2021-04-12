import { SharedStatesService } from '@services/searchState/search-state.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  searchForm = new FormControl('');

  // SEARCHBOX
  @ViewChild('searchBox', { static: true }) public searchBox: NgModel;

  constructor(private readonly router: Router, private searchState: SharedStatesService) { }

  ngOnInit() {
  }  

  public search(value: string): void {
    if(this.validateValue(value)){
      this.searchState.updatedData(value)
      this.router.navigate(['api/items'], { queryParams: { q: value}});
      
    }  
  }

  validateValue(value) {
    return value !== null &&
      value !== undefined &&
      value !== '';
  }

  

}
