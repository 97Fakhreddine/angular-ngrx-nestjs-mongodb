import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreStoreName } from './product.reducer';
import { IState } from './product.state';

export const getState = createFeatureSelector<IState>(StoreStoreName);

export const getItems = createSelector(
  getState,
  (state: IState) => state.itemList
);

export const getOneItems = createSelector(
  getState,
  (state: IState) => state.oneItem
);
