import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './user-management/user-administration/user-administration.component';
import {FlexModule} from '@angular/flex-layout';
import {UserCardComponent} from './user-management/user-card/user-card.component';
import {FormsModule} from '@angular/forms';
import {HoverDirective} from './common/directives/hover.directive';
import {UserService} from './user-management/service/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserCardComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FlexModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
