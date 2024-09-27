import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/nav-bar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
