import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@services/search/search.service';
import { map, take, tap } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public product
  public description
  public image: string;
  public condition: string;
  public sold: string;
  public author = {
    name: 'Diego',
    lastname: 'Agudelo'
  }

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
    
  }

  ngOnInit() {
    let product = this.route.snapshot.params['id']
    this.getProduct(product);
    this.getProductDescription(product);

  }

  getProduct(product) {
    this.searchService.getProduct(product).pipe(      
      map((result: any) => ({
        ...result,
        author: this.author,
        imagen: result.pictures[0].secure_url
      }))
    ).subscribe( data => {
      this.product = [data];
      this.image = this.product[0].pictures[0].secure_url;
      this.condition = this.product[0].condition === 'new'? 'Nuevo':'Usado';
      this.sold = this.product[0].sold_quantity;
    })
  }

  getProductDescription(product) {
    this.searchService.getProductDescription(product).pipe(      
      map((result: any) => ({
        ...result,
        author: this.author
      }))
    ).subscribe( data =>{      
      const descriptionArray = [data];
      this.description = descriptionArray[0].plain_text;
    });
  }
}
