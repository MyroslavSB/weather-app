import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityWeatherCardComponent} from "../../shared/components/city-weather-card/city-weather-card.component";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Subject, switchMap} from "rxjs";
import {GeocodingApiService} from "../../services/geocoding-api.service";
import {ICity} from "../../shared/interfaces/services-interfaces/i-city";

@Component({
  selector: 'app-city-page',
  standalone: true,
  imports: [CommonModule, CityWeatherCardComponent],
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPageComponent implements OnInit {
  private destroyRef$ = inject(DestroyRef)

  public isLoading = false

  public currentCity$: Subject<ICity> = new Subject<ICity>()


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private geocodingAPI: GeocodingApiService
  ) {
  }

  ngOnInit() {
    this.subOnRouteParams()
  }

  private subOnRouteParams(): void {
    this.route.params
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        switchMap(params => {
          if (!params['city']) {
            this.router.navigateByUrl('')
          }

          const req_params = {
            q: params['city'],
            limit: 1
          }
          return this.geocodingAPI.getCitiesByParams(req_params)
        })
        )
      .subscribe(cities => {
        this.currentCity$.next(cities[0])
      })
  }

}
