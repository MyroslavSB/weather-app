import {ICity} from "../../../interfaces/services-interfaces/i-city";
import {DefaultWeatherParams} from "../../../interfaces/services-interfaces/get-weather-params";

export function prepareParams(city: ICity): DefaultWeatherParams {
  return {
    lat: city.lat,
    lon: city.lon,
    units: 'metric'
  }
}
