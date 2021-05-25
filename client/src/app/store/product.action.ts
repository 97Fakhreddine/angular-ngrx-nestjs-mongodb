import { Action } from '@ngrx/store';
import { ActionWithPayload } from './ActionWithPayload';
import { ProductCard } from '../components/item/item.component';

export const GET_ITEMS = '[ITEMS] GET_ITEMS';
export const CREATE_ITEMS = '[ITEMS] CREATE_ITEMS';

export class GetItems implements ActionWithPayload<ProductCard[]> {
  readonly type = GET_ITEMS;
  payload: ProductCard[];
  
  constructor(payload: ProductCard[]) {
    this.payload = payload;
  }
}

export class CreateItems implements ActionWithPayload<ProductCard> {
  readonly type = CREATE_ITEMS;
  payload: ProductCard;

  constructor(payload: ProductCard) {
    this.payload = payload;
  }
}

export type All = GetItems | CreateItems;
