import {IWeatherCity, IWeatherDay} from "./utils-models";

export interface IWeatherForecastResponse {
  city: IWeatherCity;
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherDay[];
}
