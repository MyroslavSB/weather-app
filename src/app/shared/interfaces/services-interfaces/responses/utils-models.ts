export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IRain {
  '1h': number;
}

export interface IWeatherCity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number
}

export interface ITemperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IWeatherDay {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: ITemperature;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  weather: IWeather[];
  speed: number;
  deg: number;
  clouds: number;
  rain: number;

}
