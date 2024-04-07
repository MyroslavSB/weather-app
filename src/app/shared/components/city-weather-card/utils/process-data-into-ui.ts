import {IWeatherDay} from "../../../interfaces/services-interfaces/responses/utils-models";
import {IDayWeatherUi} from "./i-day-weather-ui";
import {DefaultDayWeatherUi} from "./const/default-day-weather-ui";

export function processDataIntoUi(data: IWeatherDay): IDayWeatherUi {
  if (!data) {
    return DefaultDayWeatherUi
  }

  return {
    date: data.dt,
    sunset: data.sunset,
    sunrise: data.sunrise,
    max: data.temp.max,
    min: data.temp.min,
    current_temp: data.temp.day
  }
}
