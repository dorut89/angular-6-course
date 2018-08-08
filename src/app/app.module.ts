import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './user-management/user-administration/user-administration.component';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HoverDirective} from './common/directives/hover.directive';
import {UserService} from './user-management/service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './common/home/home.component';
import {UserDisplayCardComponent} from './user-management/user-display-card/user-display-card.component';
import {UserEditReactiveComponent} from './user-management/user-edit-reactive/user-edit-reactive.component';
import {UserEditTemplateComponent} from './user-management/user-edit-template/user-edit-template.component';
import {RouterModule} from '@angular/router';
import {appRootRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserDisplayCardComponent,
    HomeComponent,
    HoverDirective,
    UserEditReactiveComponent,
    UserEditTemplateComponent
  ],
  imports: [
    BrowserModule,
    FlexModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRootRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
