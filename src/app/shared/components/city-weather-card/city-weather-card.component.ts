import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../../../services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent implements OnInit {

  private destroyRef$ = inject(DestroyRef)



  constructor(
    private route: ActivatedRoute,
    private userLocationService: LocationService
  ) {
  }

  ngOnInit() {
  }

  private subOnRouteParams(): void {
    this.route.params
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(route => {
        if (route['city']) {

        }

      })
  }

}
