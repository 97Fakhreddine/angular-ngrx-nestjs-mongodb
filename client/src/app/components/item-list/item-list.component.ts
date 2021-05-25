import { ProductCard } from './../item/item.component';
import { ItemlListService } from './../../services/iteml-list.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState } from 'src/app/store/product.state';
import { GET_ITEMS } from 'src/app/store/product.action';
import { getItems, getState } from 'src/app/store/product.selector';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemList: Observable<ProductCard[]>;
  state: any;
  constructor(private store: Store<IState>) {
    this.itemList = this.store.select(getItems);
  }
  ngOnInit() {
    console.log('items from stores===>', this.itemList);
  }
}
