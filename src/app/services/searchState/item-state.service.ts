import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemStatesService {
  private itemText$: BehaviorSubject<any> = new BehaviorSubject<string>('');

  updatedData(itemText) {
    this.itemText$.next(itemText);
  }

  getItemStatus(): Observable<any> {
    return this.itemText$.asObservable();
  }
}
