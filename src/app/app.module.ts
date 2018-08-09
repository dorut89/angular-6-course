import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {UserService} from './user-management/service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './common/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './common/shared.module';
import {UserAuthenticationService} from './common/user-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [UserService, UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
