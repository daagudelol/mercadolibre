import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public seeDetail(id) {
    this.router.navigate(['api/items', id]);
  }

}
