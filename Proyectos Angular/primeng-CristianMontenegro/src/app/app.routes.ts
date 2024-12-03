import { Routes } from '@angular/router';
import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FilteruserComponent } from './components/filter-user/filter-user.component';

export const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'logintest',
    component:LoginTestComponent
  },
  {
    path: 'other-form',
    component:OtherFormComponent
  },
  {
    path: 'other-form-cb',
    component:OtherFormCbComponent
  },
  {
    path: 'myupdate',
    component:UserManagementComponent
  },
  {
    path: 'list',
    component:ListUsersComponent
  },
  {
    path: 'filter',
    component:FilteruserComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
