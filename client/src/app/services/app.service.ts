import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fakeData } from 'src/mockData/fakeData';
import { Store, select, Action } from '@ngrx/store';
import { GET_ITEMS } from '../store/product.action';
import { ProductCard } from '../components/item/item.component';
import { ActionWithPayload } from '../store/ActionWithPayload';
import { IState, initialState } from '../store/product.state';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient, private store: Store<IState>) {}
  // inserFakeData() {
  //   console.log('=>', fakeData);
  //   return this.http
  //     .post('http://localhost:3000/product/many', fakeData)
  //     .subscribe((res) => console.log(res))

  // }

  getAllItems() {
    return this.http
      .get('http://localhost:3000/product/all')

  }
}
