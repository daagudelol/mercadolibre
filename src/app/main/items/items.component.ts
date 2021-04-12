import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SearchService } from '@services/search/search.service';
import { SharedStatesService } from '@services/searchState/search-state.service';
import { map, take, tap } from 'rxjs/operators';
import _isEmpty from 'lodash/isEmpty';
import { Router } from '@angular/router';
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
    private searchState: SharedStatesService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    let product = this.route.snapshot.queryParams['q']
    this.getProducts(product);
    // Subscribe to search status changes
    this.searchState.getSearchText().subscribe(data => {
      if(!_isEmpty(data)){
        if(data.indexOf('MLA') > -1){
          this.redirectTo(data)
        }else{
          this.getProducts(data)
        }
        
      }
      
    })
  }

  getProducts(product) {
    this.products$ = this.searchService.getProductsList(product).pipe(
      map((items: any) => items.results.slice(0, 4)),
      map((result: any) => result.map(person => ({
        ...person,
        author: this.author
      })))
    )
  }

  redirectTo(urid:string){
    this.router.navigateByUrl('api/items', {skipLocationChange: true}).then(()=>
    this.router.navigate(['api/items', urid]));
  }

  public seeDetail(id) {
    this.router.navigate(['api/items', id]);
  }

}
