import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";
import {LocationService} from "./services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, EMPTY, switchMap} from "rxjs";
import {GeocodingApiService} from "./services/geocoding-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  private destroyRef: DestroyRef = inject(DestroyRef)

  constructor(
    public iconsRegistry: BaseIconsRegistryService,
    private locationService: LocationService,
    private geocodingApi: GeocodingApiService,
  ) {
    this.iconsRegistry.registerIcons(completeIconSet)
  }

  ngOnInit() {
    this.getUserCity()

  }

  private getUserCity(): void {
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

          return this.geocodingApi.getPotentialUserCities(params)
            .pipe(takeUntilDestroyed(this.destroyRef))
        })
      ).subscribe(cities => {
        this.locationService.userCity.next(cities[0])
    })
  }
}
