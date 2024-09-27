import { Component, inject } from '@angular/core';
import { NavbarComponent } from './modules/navbar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from './actions/isLoggedIn.actions';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-app';
}
