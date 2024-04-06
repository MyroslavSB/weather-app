import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseInputComponent} from "../base-input/base-input.component";
import {FormControl} from "@angular/forms";
import {BaseIconComponent} from "../base-icon/base-icon.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {debounceTime, switchMap} from "rxjs";
import {GeocodingApiService} from "../../../services/geocoding-api.service";
import {Params} from "@angular/router";
import {ICity} from "../../interfaces/services-interfaces/i-city";

@Component({
  selector: 'app-weather-header',
  standalone: true,
  imports: [CommonModule, BaseInputComponent, BaseIconComponent],
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherHeaderComponent implements OnInit {
  private destroyRef$: DestroyRef = inject(DestroyRef)

  public searchControl: FormControl = new FormControl('')

  public autoCompleteCities: ICity[] = []


  constructor(
    private geocodingAPI: GeocodingApiService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.subOnSearch()
  }

  private subOnSearch(): void {
    this.searchControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        debounceTime(500),
        switchMap(search => {
          const params: Params = {
            q: search,
            limit: 10
          }

          return this.geocodingAPI.getCitiesByParams(params)

        })
      ).subscribe(cities => {
      this.autoCompleteCities = cities
      this.cdRef.detectChanges()
    })
  }

  public onCityPicked(city: ICity): void {
    console.log(city)
  }
}
