import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@services/search/search.service';
import { SharedStatesService } from '@services/searchState/search-state.service';
import { map, take, tap } from 'rxjs/operators';
import _isEmpty from 'lodash/isEmpty';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public products$;
  public author = {
    name: 'Diego',
    lastname: 'Agudelo'
  }

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private searchState: SharedStatesService
  ) {
    
  }

  ngOnInit() {
    let product = this.route.snapshot.queryParams['q']
    this.getProducts(product);
    // Subscribe to search status changes
    this.searchState.getSearchText().subscribe(data => {
      console.log('search', data)
      if(!_isEmpty(data))
      this.getProducts(data)
    })
  }

  getProducts(product) {
    this.products$ = this.searchService.getProductsList(product).pipe(
      map((items: any) => items.results.slice(0, 4)),
      map((result: any) => result.map(person => ({
        ...person,
        author: this.author
      }))),
      tap(tap => console.log('tap', tap))
    )
  }

}
