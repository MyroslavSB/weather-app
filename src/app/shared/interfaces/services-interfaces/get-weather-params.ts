import {Params} from "@angular/router";

export type excluded_param = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
export type units_param = 'standard' | 'imperial' | 'metric'

export type daily_count = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16

export interface DefaultWeatherParams extends Params {
  lat: number;
  lon: number;
  units?: units_param;
}

export interface ClimateForecastParams extends DefaultWeatherParams {
  //number of days to return weather
  cnt: daily_count;
}
