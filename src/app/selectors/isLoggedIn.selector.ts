import { createSelector } from '@ngrx/store';
import { State } from '../reducers/index'; // Adjust the path if necessary

// Direct selector for isLoggedIn boolean value
export const selectIsLoggedIn = createSelector(
  (state: State) => state.isLoggedIn, // Directly access isLoggedIn boolean
  (isLoggedIn: boolean) => isLoggedIn, // Return the boolean
);
