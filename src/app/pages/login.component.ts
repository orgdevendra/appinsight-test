import { Component } from '@angular/core';
import { AuthService, User } from '../core/auth.service';
import { UserMetricsService } from '../core/user-metrics.service';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required />
      <input [(ngModel)]="role" name="role" placeholder="Role" required />
      <button type="submit">Login</button>
    </form>
  `,
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  role = '';

  constructor(private auth: AuthService, private metrics: UserMetricsService) {}

  login() {
    const user: User = {
      id: this.username,
      name: this.username,
      role: this.role,
      status: 'active'
    };
    this.auth.login(user);
    this.metrics.trackLogin();
  }
}
