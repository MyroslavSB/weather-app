import {ICoord, IMain, IRain, ISys, IWeather, IWind} from "./utils-models";

export interface ICurrentWeatherResponse {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  rain: IRain;
  clouds: { all: number };
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
//timezone: string;
//   timezone_offset: string;
//   current?: any;
//   minutely?: any;
//   hourly?: any;
//   daily?: any;
//   alerts?: any[]
