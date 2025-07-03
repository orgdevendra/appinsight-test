import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserMetricsService } from '../core/user-metrics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the monitored Angular app!</p>
  `,
  imports: []
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private metrics: UserMetricsService, private router: Router) {}

  ngOnInit() {
    this.metrics.trackPageView('Home', this.router.url);
    this.metrics.trackRenderTime();
  }

  ngOnDestroy() {
    this.metrics.trackPageLeave('Home', this.router.url);
  }
}
