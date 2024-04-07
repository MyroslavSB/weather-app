import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ICity} from "../../interfaces/services-interfaces/i-city";
import {filter, Observable, switchMap} from "rxjs";
import {WeatherApiService} from "../../../services/weather-api.service";
import {ClimateForecastParams} from "../../interfaces/services-interfaces/get-weather-params";
import {BaseTabsComponent} from "../base-tabs/base-tabs.component";
import {INavTab} from "../../interfaces/i-nav-tab";
import {TabsConfig} from "./utils/const/tabs-config";
import {EWeatherTabs} from "./utils/e-weather-tabs";
import {IClimateForecastResponse} from "../../interfaces/services-interfaces/responses/i-climate-forecast-response";
import {SingleDayWeatherTab} from "./components/weather-tab/single-day-weather-tab.component";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, BaseTabsComponent, SingleDayWeatherTab],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent implements OnInit {

  @Input({required: true}) city: Observable<ICity>
  private destroyRef$ = inject(DestroyRef)

  public activeTab: INavTab<EWeatherTabs> = TabsConfig[0]

  public cardTabs: INavTab<EWeatherTabs>[] = TabsConfig

  public currentForecast: IClimateForecastResponse = null

  public weatherTabs = EWeatherTabs

  constructor(
    private weatherAPI: WeatherApiService,
    private cdRef: ChangeDetectorRef
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
        // in response time is in seconds. so I need to multiply by 1000 to get milliseconds

        forecast.list = forecast.list.map(day => ({
          ...day,
          dt: day.dt * 1000,
          sunrise: day.sunrise * 1000,
          sunset: day.sunset * 1000
        }))

      this.currentForecast = forecast

      this.cdRef.detectChanges()
    })
  }

  public onTabPick(tab: INavTab<EWeatherTabs>): void {
    this.activeTab = tab
    this.cdRef.detectChanges()
  }
}
