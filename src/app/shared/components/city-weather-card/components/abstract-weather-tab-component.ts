import {Directive, Input} from "@angular/core";
import {IWeatherDay} from "../../../interfaces/services-interfaces/responses/utils-models";
import {IDayWeatherUi} from "../utils/i-day-weather-ui";
import {DefaultDayWeatherUi} from "../utils/const/default-day-weather-ui";
import {processDataIntoUi} from "../utils/process-data-into-ui";


// made abstract class for potential future extensions
@Directive()
export abstract class AbstractWeatherTabComponent {
  public currentDayWeatherUI: IDayWeatherUi = DefaultDayWeatherUi

  protected setDayWeatherUi(data: IWeatherDay): void {
      this.currentDayWeatherUI = processDataIntoUi(data)
  }

}
