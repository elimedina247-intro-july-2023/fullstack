import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header.component";
import { NavigationComponent } from './components/navigation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavigationComponent]
})
export class AppComponent {
  title = 'Intro to Programming';
  favoritecolor = 'Blue';
}
