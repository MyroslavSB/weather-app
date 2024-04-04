import {Component, DestroyRef, inject} from '@angular/core';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";
import {LocationService} from "./services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, EMPTY} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  private destroyRef: DestroyRef = inject(DestroyRef)

  constructor(
    public iconsRegistry: BaseIconsRegistryService,
    private locationService: LocationService
  ) {
    this.iconsRegistry.registerIcons(completeIconSet)
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
        })
      ).subscribe(location => {
      this.locationService.userLocation.next(location)
    })
  }
}
