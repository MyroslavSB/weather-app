import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiKeyInterceptor} from "./shared/interceptors/api-key.interceptor";
import {GeocodingApiService} from "./services/geocoding-api.service";
import {WeatherHeaderComponent} from "./shared/components/weather-header/weather-header.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherHeaderComponent,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    },
    GeocodingApiService
  ], bootstrap: [AppComponent]
})
export class AppModule {
}
