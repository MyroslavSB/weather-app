import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";
import {Observable} from "rxjs";
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";
import {WeatherApiService} from "../../services/weather-api.service";
import {ICity} from "../../shared/interfaces/services-interfaces/i-city";
import {ActivatedRoute} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, BaseIconComponent, CityWeatherCardComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  private destroyRef$: DestroyRef = inject(DestroyRef)

  public userCity$: Observable<ICity> = this.locationService.userCity.asObservable()

  constructor(
    private locationService: LocationService,
    private weatherAPI: WeatherApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subOnRouteParams()
  }

  private subOnRouteParams(): void {
    this.route.params
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(params => {
        console.log(params)
      })
  }

}
