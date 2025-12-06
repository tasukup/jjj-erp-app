import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CustomersComponent } from './pages/customers/customers';
import { SettingsComponent } from './pages/settings/settings';

// 追加！
import { DashboardComponent } from './pages/dashboard/dashboard';


export const routes: Routes = [ 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },//追記
  { path: 'dashboard', component: DashboardComponent },// ダッシュボードをトップに
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'settings', component: SettingsComponent },
];
