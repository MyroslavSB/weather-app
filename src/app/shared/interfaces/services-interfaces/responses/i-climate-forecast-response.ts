import {IWeatherCity, IWeatherDay} from "./utils-models";

export interface IClimateForecastResponse {
  city: IWeatherCity;
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherDay[];
}
