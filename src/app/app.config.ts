import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppInsightsService } from './core/app-insights.service';
import { AuthService } from './core/auth.service';
import { UserMetricsService } from './core/user-metrics.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    AppInsightsService,
    AuthService,
    UserMetricsService
  ]
};
