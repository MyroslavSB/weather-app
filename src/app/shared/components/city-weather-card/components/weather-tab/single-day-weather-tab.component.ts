import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractWeatherTabComponent} from "../abstract-weather-tab-component";
import {BarHeightPipe} from "../../../../pipes/bar-height.pipe";
import {TemperaturePipe} from "../../../../pipes/temperature.pipe";
import {IWeatherDay} from "../../../../interfaces/services-interfaces/responses/utils-models";
import {ICurrentWeatherResponse} from "../../../../interfaces/services-interfaces/responses/i-current-weather-response";

@Component({
  selector: 'app-weather-tab',
  standalone: true,
  imports: [CommonModule, BarHeightPipe, TemperaturePipe],
  templateUrl: './single-day-weather-tab.component.html',
  styleUrls: ['./single-day-weather-tab.component.scss', '../abstract-weather-tab-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleDayWeatherTab extends AbstractWeatherTabComponent implements OnChanges {
  @Input({required: true})
  weatherData: IWeatherDay | ICurrentWeatherResponse

  @Input()
  singleDayForecast: boolean = true

  @Input()
  singleDayIndex: number = 0

  public thermometerStamps: number[] = [
    40, 20, 0, -20, -40
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherData']) {
      this.setDayWeatherUi(changes['weatherData'].currentValue)
    }
  }
}
