import {ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../../../services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ICity} from "../../interfaces/services-interfaces/i-city";
import {filter, Observable, switchMap} from "rxjs";
import {WeatherApiService} from "../../../services/weather-api.service";
import {ClimateForecastParams} from "../../interfaces/services-interfaces/get-weather-params";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent implements OnInit {

  @Input({required: true}) city: Observable<ICity>
  private destroyRef$ = inject(DestroyRef)



  constructor(
    private weatherAPI: WeatherApiService
  ) {
  }

  ngOnInit() {
    this.subOnCity()
  }

  private subOnCity(): void {
    this.city
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        filter(city => !!city),
        switchMap(city => {
          console.log(city)
          const params: ClimateForecastParams = {
            lat: city.lat,
            lon: city.lon,
            units: 'metric',
            cnt: 16
          }
          return this.weatherAPI.getClimateForecast(params)
            .pipe(takeUntilDestroyed(this.destroyRef$))
        })
      ).subscribe(forecast => {

    })
  }

}
