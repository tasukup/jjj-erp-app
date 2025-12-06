import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TimeClockComponent } from './widgets/time-clock/time-clock';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TimeClockComponent,
  ],
})
export class AppComponent {}
