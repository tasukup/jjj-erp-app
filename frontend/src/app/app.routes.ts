import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CustomersComponent } from './pages/customers/customers';
import { SettingsComponent } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'settings', component: SettingsComponent },
];
