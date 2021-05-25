import { ProductCard } from '../components/item/item.component';

export interface IState {
  itemList: ProductCard[];
}

export const initialState = (): IState => {
  return {
    itemList: [],
  };
};
