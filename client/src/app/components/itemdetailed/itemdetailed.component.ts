import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/product.interface';
import { IState } from 'src/app/store/product.state';
import { Store } from '@ngrx/store';
import { getOneItems } from '../../store/product.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itemdetailed',
  templateUrl: './itemdetailed.component.html',
  styleUrls: ['./itemdetailed.component.css'],
})
export class ItemdetailedComponent implements OnInit {
  oneItem: Observable<ProductCard[]> | any;
  constructor(private store: Store<IState>) {
    this.oneItem = this.store.select(getOneItems);
  }

  ngOnInit() {}
}
