import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { HomeComponent } from './pages/home.component';
import { NavbarComponent } from './shared/navbar.component';
import { AppComponent } from './app.component';
import { AppInsightsService } from './core/app-insights.service';
import { AuthService } from './core/auth.service';
import { UserMetricsService } from './core/user-metrics.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  providers: [AppInsightsService, AuthService, UserMetricsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
