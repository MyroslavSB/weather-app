import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter, switchMap} from "rxjs";
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";
import {WeatherApiService} from "../../services/weather-api.service";
import {
  ClimateForecastParams,
  DefaultWeatherParams
} from "../../shared/interfaces/services-interfaces/get-weather-params";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, BaseIconComponent, CityWeatherCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  private destroyRef$: DestroyRef = inject(DestroyRef)

  public userLocation$ = this.locationService.userLocation.asObservable()

  constructor(
    private locationService: LocationService,
    private weatherAPI: WeatherApiService
  ) {
  }

  ngOnInit() {
    this.subOnLocation()
  }

  private subOnLocation(): void {
    this.locationService.userLocation
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        filter(location => !!location),
        switchMap(location => {
          const params: ClimateForecastParams = {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            units: 'metric',
            cnt: 16
          }
          return this.weatherAPI.getClimateForecast(params)
            .pipe(takeUntilDestroyed(this.destroyRef$))
        })
      ).subscribe(location => {

      })
  }
}
