import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store/product.state';
import { getItems } from 'src/app/store/product.selector';
import { Observable } from 'rxjs';
import { ProductCard } from 'src/app/models/product.interface';
import { SEE_ITEMS } from '../../store/product.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemList: Observable<ProductCard[]>;
  items: any;
  constructor(private store: Store<IState>, private router: Router) {
    this.itemList = this.store.select(getItems);
  }
  ngOnInit() {
    this.itemList.subscribe((data) => {
      this.items = data;
    });
  }
  public seeDetailedCard(item: ProductCard) {
    this.store.dispatch({
      type: SEE_ITEMS,
      payload: item,
    });
    this.router.navigate(['productdetail']);
  }
}
