import { createAction } from '@ngrx/store';

export const addItem = createAction('[Counter Component] Increment');
export const removeItem = createAction('[Counter Component] Decrement');
export const removeAll = createAction('[Counter Component] Reset');
