import {Routes} from '@angular/router';
import {UserAdministrationComponent} from './user-management/user-administration/user-administration.component';
import {UserEditTemplateComponent} from './user-management/user-edit-template/user-edit-template.component';
import {UserEditReactiveComponent} from './user-management/user-edit-reactive/user-edit-reactive.component';
import {HomeComponent} from './common/home/home.component';

export const appRootRoutes: Routes = [
  {
    path: 'user-administration',
    component: UserAdministrationComponent
  }, {
    path: 'user-edit/template',
    component: UserEditTemplateComponent
  }, {
    path: 'user-edit/reactive',
    component: UserEditReactiveComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: '**',
    component: HomeComponent
  }
];
