import { Action } from '@ngrx/store';
import * as ProductActions from './product.action';
import { initialState, IState } from './product.state';
import { ActionWithPayload } from './ActionWithPayload';
import { ProductCard } from '../models/product.interface';

const initState = initialState();

export const ProductReducer = (state: IState = initState, action: Action) => {
  switch (action.type) {
    case ProductActions.GET_ITEMS:
      return {
        ...state,
        itemList: state.itemList,
      };

    case ProductActions.CREATE_ITEMS:
      return {
        ...state,
        itemList: state.itemList.concat(
          (action as ActionWithPayload<ProductCard>).payload
        ),
      };
    case ProductActions.SEE_ITEMS:
      return { ...state, oneItem: state.oneItem };

    default:
      return state;
  }
};

export const StoreStoreName = 'itemList';
