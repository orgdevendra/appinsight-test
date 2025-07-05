import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppInsightsService {
  private appInsights: ApplicationInsights;

  constructor() {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.appInsightsKey,
        enableAutoRouteTracking: true
      }
    });
    this.appInsights.loadAppInsights();
  }

  logEvent(name: string, properties?: any) {
    this.appInsights.trackEvent({ name }, properties);
  }

  logPageView(name?: string, url?: string) {
    this.appInsights.trackPageView({ name, uri: url });
  }

  logMetric(name: string, average: number, properties?: any) {
    this.appInsights.trackMetric({ name, average }, properties);
  }
}
