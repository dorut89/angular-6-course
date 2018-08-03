import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserAdministrationComponent} from './user-management/user-administration/user-administration.component';
import {FlexModule} from '@angular/flex-layout';
import {UserCardComponent} from './user-management/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAdministrationComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
