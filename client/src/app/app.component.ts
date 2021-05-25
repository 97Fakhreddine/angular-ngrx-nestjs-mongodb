import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ItemlListService } from './services/iteml-list.service';
import { IState } from './store/product.state';
import { GET_ITEMS } from 'src/app/store/product.action';

import { AppService } from './services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  constructor(private appService: AppService, private store: Store<IState>) {}
  ngOnInit() {
    // this.appService.inserFakeData();

    // trying to do get request and fetch the data then log it in the console
    this.appService.getAllItems().subscribe((data) => {
      // console.log(data);

      this.store.dispatch({
        type: GET_ITEMS,
        payload: data,
      });
    });
  }
}
