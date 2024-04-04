import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../../base-icons/base-icon.component";
import {LocationService} from "../../services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, EMPTY, takeUntil} from "rxjs";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, BaseIconComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef)


  constructor(
    private locationService: LocationService
  ) {
  }

  ngOnInit() {
    this.locationService.getCurrentLocation()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError(err => {
          console.error(err)
          return EMPTY
        })
      ).subscribe(location => {
        console.log(location)
    })

  }
}
