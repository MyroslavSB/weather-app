import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter} from "rxjs";
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";

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
    private locationService: LocationService
  ) {
  }

  ngOnInit() {
    this.subOnLocation()
  }

  private subOnLocation(): void {
    this.locationService.userLocation
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        filter(location => !!location)
      ).subscribe(location => {
        console.log(location)
      })
  }
}
