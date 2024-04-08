import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";
import {catchError, EMPTY, Observable, switchMap} from "rxjs";
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";
import {ICity} from "../../shared/interfaces/services-interfaces/i-city";
import {GeocodingApiService} from "../../services/geocoding-api.service";
import {Router} from "@angular/router";
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
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.getUserCity()

  }

  private getUserCity(): void {
    this.isLoading = true
    this.locationService.getCurrentLocation()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError(err => {
          this.onLocationError(err)
          return EMPTY
        }),
        switchMap(location => {
          const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
          }

          return this.geocodingApi.getPotentialUserCities(params)
            .pipe(
              takeUntilDestroyed(this.destroyRef),
              catchError(err => {
                this.onLocationError(err)

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

  private onLocationError(err: any): void {
    console.error(err)
    this.router.navigateByUrl('wroclaw')
    this.isLoading = false
    this.cdRef.detectChanges()
  }

}
