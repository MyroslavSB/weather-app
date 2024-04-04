import { Component } from '@angular/core';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  constructor(
    public iconsRegistry: BaseIconsRegistryService
  ) {
    this.iconsRegistry.registerIcons(completeIconSet)
  }
}
