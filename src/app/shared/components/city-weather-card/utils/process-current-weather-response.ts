import {ICurrentWeatherResponse} from "../../../interfaces/services-interfaces/responses/i-current-weather-response";

export function processCurrentWeatherResponse(data: ICurrentWeatherResponse): ICurrentWeatherResponse {
  data.dt = data.dt * 1000
  data.sys.sunset = data.sys.sunset * 1000
  data.sys.sunrise = data.sys.sunrise * 1000


  return data
}
