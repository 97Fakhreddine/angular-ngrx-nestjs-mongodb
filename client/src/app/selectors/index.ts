import { createSelector } from '@ngrx/store';

export type ProductCard = {
  id: string;
  title: string;
  image: string;
  price: Number;
  overview: string;
};
export interface FeatureState {
  products: ProductCard[];
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.products
);
