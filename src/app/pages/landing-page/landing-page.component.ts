import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseIconComponent} from "../../shared/components/base-icon/base-icon.component";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, BaseIconComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  public userLocation$ = this.locationService.userLocation.asObservable()

  constructor(
    private locationService: LocationService
  ) {
  }

}
