import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fakeData } from 'src/mockData/fakeData';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  inserFakeData() {
    console.log('heeeel', fakeData);

    return this.http.post('http://localhost:3000/product/many', fakeData);
  }
}
