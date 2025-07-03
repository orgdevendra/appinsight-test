import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {}
