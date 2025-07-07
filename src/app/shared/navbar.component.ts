import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/login">Login</a>
      <span *ngIf="auth.currentUser">User: {{auth.currentUser.name}} ({{auth.currentUser.role}})</span>
    </nav>
  `,
  imports: [CommonModule, RouterLink]
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}
}
