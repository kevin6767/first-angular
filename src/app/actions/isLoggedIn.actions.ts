import { createAction } from '@ngrx/store';

export const login = createAction('[isLoggedIn] Login');

export const logout = createAction('[isLoggedIn] Logout');

export const userLogInReset = createAction('[isLoggedIn] User Log In Reset');
