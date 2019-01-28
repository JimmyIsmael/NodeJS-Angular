import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CreateUsersComponent } from './create-users/create-users.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateUsersComponent },
  { path: 'list-users', component: ListUsersComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
