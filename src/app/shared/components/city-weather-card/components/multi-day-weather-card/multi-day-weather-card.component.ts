import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TrackByFunction
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractWeatherTabComponent} from "../abstract-weather-tab-component";
import {IWeatherDay} from "../../../../interfaces/services-interfaces/responses/utils-models";
import {BarHeightPipe} from "../../../../pipes/bar-height.pipe";
import {TemperaturePipe} from "../../../../pipes/temperature.pipe";
import {BaseIconComponent} from "../../../base-icon/base-icon.component";
import {DegreeRotationPipe} from "../../../../pipes/degree-rotation.pipe";

@Component({
  selector: 'app-multi-day-weather-card',
  standalone: true,
    imports: [CommonModule, BarHeightPipe, TemperaturePipe, BaseIconComponent, DegreeRotationPipe],
  templateUrl: './multi-day-weather-card.component.html',
  styleUrls: [
    './multi-day-weather-card.component.scss',
    '../abstract-weather-tab-component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiDayWeatherCardComponent extends AbstractWeatherTabComponent implements OnInit {
  @Input({required: true}) weatherDays: IWeatherDay[] = []

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    if (this.weatherDays.length > 0) {
      this.setDayWeatherUi(this.weatherDays[0])
    }
  }

  public onDayPick(day: IWeatherDay): void {
    this.setDayWeatherUi(day)
    this.cdRef.detectChanges()
  }

  public trackDays: TrackByFunction<IWeatherDay> = (index, day) => {
    return day.dt
  }
}
