import { Injectable } from '@angular/core';
import {AbstractHttpComponent} from "../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Params} from "@angular/router";
import {ICity} from "../shared/interfaces/services-interfaces/i-city";
import {EApiUrls} from "../shared/enums/e-api-urls";

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
    return this.httpGetRequest(EApiUrls.GEOCODING_API, params)
  }
}
