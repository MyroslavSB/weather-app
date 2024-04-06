import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AbstractHttpComponent} from "../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {
  ClimateForecastParams,
  DefaultWeatherParams
} from "../shared/interfaces/services-interfaces/get-weather-params";
import {ICurrentWeatherResponse} from "../shared/interfaces/services-interfaces/responses/i-current-weather-response";
import {EApiUrls} from "../shared/enums/e-api-urls";
import {IClimateForecastResponse} from "../shared/interfaces/services-interfaces/responses/i-climate-forecast-response";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public getCurrentWeather(params: DefaultWeatherParams): Observable<ICurrentWeatherResponse> {
    return this.httpGetRequest(EApiUrls.CURRENT_WEATHER_API, params)
  }

  public getClimateForecast(params: ClimateForecastParams): Observable<IClimateForecastResponse> {
    return this.httpGetRequest(EApiUrls.DAILY_FORECAST_16_API, params)
  }
}
