import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './common/home/home.component';
import {NgModule} from '@angular/core';

export const appRootRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'user-administration',
    loadChildren: './user-management/user-management.module#UserManagementModule'
  }, {
    path: '**',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
