import {INavTab} from "../../../../interfaces/i-nav-tab";
import {EWeatherTabs} from "../e-weather-tabs";

export const TabsConfig: INavTab<EWeatherTabs>[] = [
  {
    display: 'Today',
    value: EWeatherTabs.TODAY,
  },
  {
    display: 'Tomorrow',
    value: EWeatherTabs.TOMORROW,
  },
  {
    display: 'This week',
    value: EWeatherTabs.ONE_WEEK,
  },
  {
    display: 'Two weeks',
    value: EWeatherTabs.TWO_WEEKS,
  },
]
