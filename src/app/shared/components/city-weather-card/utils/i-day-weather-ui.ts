export interface IDayWeatherUi {
  max: number;
  min: number;
  date: number;
  sunrise: number;
  sunset: number;
  current_temp: number;
  wind_speed?: number;
  wind_deg?: number;
}
