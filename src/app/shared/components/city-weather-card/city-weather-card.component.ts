import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent {

}
