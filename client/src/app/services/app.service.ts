import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { fakeData } from 'src/mockData/fakeData';
import { Store } from '@ngrx/store';
import { IState } from '../store/product.state';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductCard } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  private url: string = environment.url;
  // public inserFakeData() {
  //   console.log('=>', fakeData);
  //   return this.http
  //     .post(this.url + '/product/many', fakeData)
  //     .subscribe((res) => console.log(res))
  // }

  public getAllItems(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.url + '/product/all');
  }
}
