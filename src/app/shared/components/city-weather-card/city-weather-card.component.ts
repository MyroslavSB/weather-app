import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ICity} from "../../interfaces/services-interfaces/i-city";
import {filter, Observable, switchMap} from "rxjs";
import {WeatherApiService} from "../../../services/weather-api.service";
import {DefaultWeatherParams} from "../../interfaces/services-interfaces/get-weather-params";
import {BaseTabsComponent} from "../base-tabs/base-tabs.component";
import {INavTab} from "../../interfaces/i-nav-tab";
import {TabsConfig} from "./utils/const/tabs-config";
import {EWeatherTabs} from "./utils/e-weather-tabs";
import {IWeatherForecastResponse} from "../../interfaces/services-interfaces/responses/i-weather-forecast-response";
import {SingleDayWeatherCard} from "./components/single-day-weather-card.ts/single-day-weather-card.component";
import {ICurrentWeatherResponse} from "../../interfaces/services-interfaces/responses/i-current-weather-response";
import {processCurrentWeatherResponse} from "./utils/process-current-weather-response";
import {prepareParams} from "./utils/prepare-params";
import {MultiDayWeatherCardComponent} from "./components/multi-day-weather-card/multi-day-weather-card.component";
import {IWeatherDay} from "../../interfaces/services-interfaces/responses/utils-models";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, BaseTabsComponent, SingleDayWeatherCard, MultiDayWeatherCardComponent],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent implements OnInit {

  @Input({required: true}) city: Observable<ICity>
  private destroyRef$ = inject(DestroyRef)

  public activeTab: INavTab<EWeatherTabs> = TabsConfig[0]

  public cardTabs: INavTab<EWeatherTabs>[] = TabsConfig

  public multipleDaysForecast: IWeatherForecastResponse = null
  public currentDayForecast: ICurrentWeatherResponse = null

  public weatherTabs = EWeatherTabs

  private currentCity: ICity = null

  constructor(
    private weatherAPI: WeatherApiService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.subOnCity()
  }

  private subOnCity(): void {
    this.city.pipe(
      takeUntilDestroyed(this.destroyRef$),
      filter(city => !!city),
      switchMap(city => this.fetchWeatherData(city))
    ).subscribe({
      next: forecast => {
        this.processForecastData(forecast);
        this.cdRef.detectChanges();
      },
      error: error => {
        console.error('Failed to load data', error);
      }
    });
  }

  private fetchWeatherData(city: ICity): Observable<IWeatherForecastResponse> {
    const params: DefaultWeatherParams = prepareParams(city);
    return this.weatherAPI.getCurrentWeather(params).pipe(
      takeUntilDestroyed(this.destroyRef$),
      switchMap(currentWeather => {
        this.currentDayForecast = processCurrentWeatherResponse(currentWeather);
        return this.weatherAPI.getClimateForecast({ ...params, cnt: 16 });
      })
    );
  }

  private processForecastData(forecast: IWeatherForecastResponse): void {
    forecast.list = forecast.list.map(day => ({
      ...day,
      dt: day.dt * 1000,
      sunrise: day.sunrise * 1000,
      sunset: day.sunset * 1000
    }));
    this.multipleDaysForecast = forecast;
  }

  public onTabPick(tab: INavTab<EWeatherTabs>): void {
    this.activeTab = tab
    this.cdRef.detectChanges()
  }

  public get oneWeekWeatherDays(): IWeatherDay[] {
    return this.multipleDaysForecast.list.slice(0, 7)
  }

  public get twoWeeksWeatherDays(): IWeatherDay[] {
    return this.multipleDaysForecast.list.slice(0, 14)
  }
}
