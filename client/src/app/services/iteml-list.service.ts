import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemlListService {
  constructor(private http: HttpClient) {}

  async getAllItems() {
    return await this.http
      .get('http://localhost:3000/product/all')
      .subscribe((res) => console.log(res));
  }
}
