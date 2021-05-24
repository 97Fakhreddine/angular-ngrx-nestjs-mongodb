import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fakeData } from 'src/mockData/fakeData';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  async inserFakeData() {
    console.log('heeeel', fakeData);
    return await this.http
      .post('http://localhost:3000/product/many', fakeData)
      .subscribe((res) => console.log(res));
  }
}
