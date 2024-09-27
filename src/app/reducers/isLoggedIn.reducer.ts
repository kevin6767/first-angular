import { createReducer, on } from '@ngrx/store';
import { login, logout, userLogInReset } from '../actions/isLoggedIn.actions';

export const initialState = false;

export const isLoggedInReducer = createReducer(
  initialState,
  on(login, (state) => true),
  on(logout, (state) => false),
  on(userLogInReset, (state) => false),
);
