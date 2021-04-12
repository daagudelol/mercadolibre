import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStatesService {
  private searchText$: BehaviorSubject<any> = new BehaviorSubject<string>('');

  updatedData(searchText) {
    this.searchText$.next(searchText);
  }

  getSearchText(): Observable<any> {
    return this.searchText$.asObservable();
  }
}
