import {Directive, Input} from "@angular/core";
import {IWeatherDay} from "../../../interfaces/services-interfaces/responses/utils-models";


// made abstract class for potential future extensions
@Directive()
export abstract class AbstractWeatherTabComponent {
  @Input({required: true})
  weatherDaysList: IWeatherDay[]

  @Input()
  singleDayForecast: boolean = true

  @Input()
  singleDayIndex: number = 0

  public thermometerStamps: number[] = [
    40, 20, 0, -20, -40
  ]

  public get activeSingleDay(): IWeatherDay {
    if (!this.weatherDaysList || this.weatherDaysList?.length < 1) {
      return null
    }

    return this.weatherDaysList[this.singleDayIndex] || this.weatherDaysList[0]
  }
}
