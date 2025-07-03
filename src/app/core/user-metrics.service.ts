import { Injectable } from '@angular/core';
import { AppInsightsService } from './app-insights.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserMetricsService {
  private pageEnterTime: number = 0;

  constructor(
    private appInsights: AppInsightsService,
    private auth: AuthService
  ) {}

  trackLogin() {
    const user = this.auth.currentUser;
    if (user) {
      this.appInsights.logEvent('UserLogin', {
        userId: user.id,
        role: user.role,
        status: user.status
      });
    }
  }

  trackPageView(pageName: string, url: string) {
    this.pageEnterTime = performance.now();
    this.appInsights.logPageView(pageName, url);
  }

  trackPageLeave(pageName: string, url: string) {
    const engagement = performance.now() - this.pageEnterTime;
    this.appInsights.logMetric('EngagementTime', engagement, { pageName, url });
  }

  trackRenderTime() {
    const renderTime = performance.now();
    this.appInsights.logMetric('ClientRenderTime', renderTime);
  }

  trackNetworkLatency(latency: number) {
    this.appInsights.logMetric('NetworkLatency', latency);
  }
}
