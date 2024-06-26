import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";
import {catchError, EMPTY, Observable, switchMap} from "rxjs";
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";
import {ICity} from "../../shared/interfaces/services-interfaces/i-city";
import {GeocodingApiService} from "../../services/geocoding-api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BaseLoaderComponent} from "../../shared/components/base-loader/base-loader.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, BaseIconComponent, CityWeatherCardComponent, BaseLoaderComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  public userCity$: Observable<ICity> = this.locationService.userCity.asObservable()
  private destroyRef: DestroyRef = inject(DestroyRef)

  public isLoading: boolean = false

  constructor(
    private locationService: LocationService,
    private geocodingApi: GeocodingApiService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.getUserLocation()

  }

  private getUserLocation(): void {
    this.locationService.getCurrentLocation()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError(err => {
          console.error(err)
          return EMPTY
        }),
        switchMap(location => {
          const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
          }

          this.isLoading = true
          this.cdRef.detectChanges()

          return this.geocodingApi.getPotentialUserCities(params)
            .pipe(
              takeUntilDestroyed(this.destroyRef),
              catchError(err => {
                console.error(err)
                this.isLoading = false
                this.cdRef.detectChanges()
                return EMPTY
              }),
            )
        })
      ).subscribe(cities => {
      if (cities.length === 0) {
        this.isLoading = false
        this.cdRef.detectChanges()
        return
      }
      this.locationService.userCity.next(cities[0])

      this.isLoading = false
      this.cdRef.detectChanges()
    })
  }
}
