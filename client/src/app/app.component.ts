import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './store/product.state';

import { AppService } from './services/app.service';
import { CREATE_ITEMS } from './store/product.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'client';
  constructor(private appService: AppService, private store: Store<IState>) {}
  ngOnInit() {
    // this.appService.inserFakeData();

    // trying to do get request and fetch the data then log it in the console
    this.appService.getAllItems().subscribe((data) => {
      this.store.dispatch({
        type: CREATE_ITEMS,
        payload: data,
      });
    });
  }
}
