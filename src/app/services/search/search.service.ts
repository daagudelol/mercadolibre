import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '@app-core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpService: HttpService) { }

  public getProductsList(product:string) {
    const path = `sites/MLA/search?q=${product}`;
    const params = new HttpParams();
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.httpService.get<any>(path, { params, headers });
  }

  public getProduct(id) {
    const path = `items/${id}`;
    const params = new HttpParams();
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.httpService.get<any>(path, { params, headers });
  }

  public getProductDescription(id) {
    const path = `items/${id}/description`;
    const params = new HttpParams();
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.httpService.get<any>(path, { params, headers });
  }
}
