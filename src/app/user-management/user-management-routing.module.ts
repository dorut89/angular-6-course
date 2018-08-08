import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {UserEditTemplateComponent} from './user-edit-template/user-edit-template.component';
import {UserEditReactiveComponent} from './user-edit-reactive/user-edit-reactive.component';

export const userManagementRoutes: Routes = [{
  path: 'user-administration',
  component: UserAdministrationComponent
}, {
  path: 'user-edit/template',
  component: UserEditTemplateComponent
}, {
  path: 'user-edit/reactive',
  component: UserEditReactiveComponent
}];

@NgModule({
  imports: [RouterModule.forChild(userManagementRoutes)],
  exports: [AppRoutingModule]
})
export class UserManagementRoutingModule {

}
