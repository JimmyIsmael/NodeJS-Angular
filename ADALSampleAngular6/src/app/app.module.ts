import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { AppRoutingModule } from './app.routing';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'yourtenant.onmicrosoft.com',
      clientId: 'your_client_ID',
      redirectUri: window.location.origin,
      endpoints: {},
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
    }),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
