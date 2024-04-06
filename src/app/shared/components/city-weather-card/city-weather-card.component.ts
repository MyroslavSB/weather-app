import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ICity} from "../../interfaces/services-interfaces/i-city";
import {filter, Observable, switchMap} from "rxjs";
import {WeatherApiService} from "../../../services/weather-api.service";
import {ClimateForecastParams} from "../../interfaces/services-interfaces/get-weather-params";
import {BaseTabsComponent} from "../base-tabs/base-tabs.component";
import {INavTab} from "../../interfaces/i-nav-tab";
import {TabsConfig} from "./utils/tabs-config";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, BaseTabsComponent],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent implements OnInit {

  @Input({required: true}) city: Observable<ICity>
  private destroyRef$ = inject(DestroyRef)

  public activeTab: INavTab<number> = TabsConfig[0]

  public cardTabs: INavTab<number>[] = TabsConfig

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
          console.log(city)

          const params: ClimateForecastParams = {
            lat: city.lat,
            lon: city.lon,
            units: 'metric',
            cnt: 1
          }

          return this.weatherAPI.getClimateForecast(params)
            .pipe(takeUntilDestroyed(this.destroyRef$))
        })
      ).subscribe(forecast => {
      console.log(forecast)
    })
  }

  public onTabPick(tab: INavTab<number>): void {
    this.activeTab = tab
    this.cdRef.detectChanges()
  }
}
