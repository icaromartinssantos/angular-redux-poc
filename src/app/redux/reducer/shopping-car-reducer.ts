import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, removeAll } from '../actions/shopping-car-action';

export const initialQtdItemShoppingCart = 0;

const _shoppingCarReducer = createReducer(
  initialQtdItemShoppingCart,
  on(addItem, (qtdItemShoppingCart) => qtdItemShoppingCart + 1),
  on(removeItem, (qtdItemShoppingCart) => qtdItemShoppingCart - 1),
  on(removeAll, (qtdItemShoppingCart) => 0)
);

export function shoppingCarReducer(state: any, action: any) {
  return _shoppingCarReducer(state, action);
}
