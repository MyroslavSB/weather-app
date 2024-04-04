import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseInputComponent} from "../base-input/base-input.component";
import {FormControl} from "@angular/forms";
import {BaseIconComponent} from "../base-icon/base-icon.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {debounceTime, distinctUntilChanged} from "rxjs";

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

  ngOnInit() {
    this.subOnSearch()
  }

  private subOnSearch(): void {
      this.searchControl.valueChanges
        .pipe(
          takeUntilDestroyed(this.destroyRef$),
          debounceTime(500),
          distinctUntilChanged((prev_search, current_search) => current_search === prev_search)
        ).subscribe(search => {
          console.log(search)
      })
  }

}
