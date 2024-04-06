import { Injectable } from '@angular/core';
import {AbstractHttpComponent} from "../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Params} from "@angular/router";
import {ICity} from "../shared/interfaces/services-interfaces/i-city";

@Injectable({
  providedIn: 'root'
})
export class GeocodingApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public getCitiesByParams(params: Params = {}): Observable<ICity[]> {
    return this.httpGetRequest(this.apiUrls.GEOCODING_API, params)
  }

  public getPotentialUserCities(params: Params): Observable<ICity[]> {
    return this.httpGetRequest(this.apiUrls.REVERSE_GEOCODING_API, params)
  }
}
