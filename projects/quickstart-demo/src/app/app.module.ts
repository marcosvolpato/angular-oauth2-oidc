import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OAuthModule, OAuthStorage } from 'a-9-oidc-oauth2';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, OAuthModule.forRoot(), HttpClientModule],
  declarations: [AppComponent],
  providers: [
    // { provide: OAuthStorage, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
