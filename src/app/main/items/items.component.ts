import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.queryParams['q'])
  }

  ngOnInit() {
  }

}
