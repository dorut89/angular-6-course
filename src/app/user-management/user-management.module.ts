import {NgModule} from '@angular/core';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {UserDisplayCardComponent} from './user-display-card/user-display-card.component';
import {UserEditReactiveComponent} from './user-edit-reactive/user-edit-reactive.component';
import {UserEditTemplateComponent} from './user-edit-template/user-edit-template.component';
import {FormsModule} from '@angular/forms';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../common/shared.module';

@NgModule({
  declarations: [UserAdministrationComponent,
    UserDisplayCardComponent,
    UserEditReactiveComponent,
    UserEditTemplateComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    UserManagementRoutingModule
  ],
  exports: []
})
export class UserManagementModule {

}
