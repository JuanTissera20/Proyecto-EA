import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl:  './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto-ea-604';
}
