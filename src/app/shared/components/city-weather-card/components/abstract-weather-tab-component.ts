import {Directive} from "@angular/core";
import {IWeatherDay} from "../../../interfaces/services-interfaces/responses/utils-models";
import {IDayWeatherUi} from "../utils/i-day-weather-ui";
import {DefaultDayWeatherUi} from "../utils/const/default-day-weather-ui";
import {processDataIntoUi} from "../utils/process-data-into-ui";
import {ICurrentWeatherResponse} from "../../../interfaces/services-interfaces/responses/i-current-weather-response";
import {ThermometerStamps} from "../utils/const/thermometer-stamps";


// made abstract class for potential future extensions
@Directive()
export abstract class AbstractWeatherTabComponent {
  public currentDayWeatherUI: IDayWeatherUi = DefaultDayWeatherUi

  protected setDayWeatherUi(data: IWeatherDay | ICurrentWeatherResponse): void {
      this.currentDayWeatherUI = processDataIntoUi(data)
  }


  public thermometerStamps: number[] = ThermometerStamps

}
