import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../../actions/isLoggedIn.actions';
import { selectIsLoggedIn } from '../../selectors/isLoggedIn.selector';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css', // Complete relative path
})
export class NavbarComponent {
  isLoggedIn?: boolean;

  private store = inject(Store);

  constructor() {
    console.log(this.store); // Should be a Store instance
    this.store.select(selectIsLoggedIn).subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.store.dispatch(logout());
    console.log(this.isLoggedIn); // Should now be true after logout call
  }

  login() {
    this.store.dispatch(login());
  }

  reset() {
    // Reset user state or other relevant data
    console.log('Resetting user state...');
    this.store.dispatch(logout());
    console.log(this.isLoggedIn); // Should now be false after reset
  }
}
