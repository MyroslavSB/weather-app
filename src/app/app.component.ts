import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";
import {LocationService} from "./services/location.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, EMPTY, switchMap} from "rxjs";
import {GeocodingApiService} from "./services/geocoding-api.service";
import {Router} from "@angular/router";
import {AppRoutes} from "./shared/const/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';

}
