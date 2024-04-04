import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseInputComponent} from "../base-input/base-input.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-weather-header',
  standalone: true,
  imports: [CommonModule, BaseInputComponent],
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherHeaderComponent {

  public searchControl: FormControl = new FormControl('')
}
