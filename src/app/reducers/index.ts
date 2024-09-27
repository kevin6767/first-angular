import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { isLoggedInReducer } from './isLoggedIn.reducer';

export interface State {
  isLoggedIn: boolean; // Update state interface
}

export const reducers: ActionReducerMap<State> = {
  isLoggedIn: isLoggedInReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
