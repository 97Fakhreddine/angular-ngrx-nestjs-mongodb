import { ProductCard } from '../models/product.interface';
import { ActionWithPayload } from './ActionWithPayload';

export const GET_ITEMS = '[ITEMS] GET_ITEMS';
export const CREATE_ITEMS = '[ITEMS] CREATE_ITEMS';
export const SEE_ITEMS = '[ITEMS] SEE_ITEMS';

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

export class SEEItems implements ActionWithPayload<ProductCard> {
  readonly type = SEE_ITEMS;
  payload: ProductCard;

  constructor(payload: ProductCard) {
    this.payload = payload;
  }
}

export type All = GetItems | CreateItems | SEEItems;
