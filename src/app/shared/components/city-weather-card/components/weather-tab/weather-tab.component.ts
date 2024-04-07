import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractWeatherTabComponent} from "../abstract-weather-tab-component";
import {BarHeightPipe} from "../../../../pipes/bar-height.pipe";
import {TemperaturePipe} from "../../../../pipes/temperature.pipe";

@Component({
  selector: 'app-weather-tab',
  standalone: true,
  imports: [CommonModule, BarHeightPipe, TemperaturePipe],
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.scss', '../abstract-weather-tab-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherTabComponent extends AbstractWeatherTabComponent {

}
