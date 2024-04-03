import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ApiKeyInterceptor} from "./shared/interceptors/api-key.interceptor";
import {GeocodingApiService} from "./services/geocoding-api.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    },
    GeocodingApiService
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
