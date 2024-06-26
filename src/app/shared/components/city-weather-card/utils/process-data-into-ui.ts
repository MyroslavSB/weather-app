import {IWeatherDay} from "../../../interfaces/services-interfaces/responses/utils-models";
import {IDayWeatherUi} from "./i-day-weather-ui";
import {DefaultDayWeatherUi} from "./const/default-day-weather-ui";
import {ICurrentWeatherResponse} from "../../../interfaces/services-interfaces/responses/i-current-weather-response";

export function processDataIntoUi(data: IWeatherDay | ICurrentWeatherResponse): IDayWeatherUi {
  if (!data) {
    return DefaultDayWeatherUi
  }

  // CurrentWeatherResponse
  if ('name' in data) {
    return {
      date: data.dt,
      sunset: data.sys.sunset,
      sunrise: data.sys.sunrise,
      max: data.main.temp_max,
      min: data.main.temp_min,
      current_temp: data.main.temp,
      wind_deg: data.wind.deg,
      wind_speed: data.wind.speed
    }
  }

  // IWeatherDay
  return {
    date: data.dt,
    sunset: data.sunset,
    sunrise: data.sunrise,
    max: data.temp.max,
    min: data.temp.min,
    current_temp: data.temp.day,
    wind_deg: data.deg,
    wind_speed: data.speed
  }

}
