import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherHeaderComponent {

}
