import { ProductCard } from 'src/app/models/product.interface';

export interface IState {
  itemList: ProductCard[];
  oneItem: ProductCard | Object;
}

export const initialState = (): IState => {
  return {
    itemList: [],
    oneItem: {},
  };
};
