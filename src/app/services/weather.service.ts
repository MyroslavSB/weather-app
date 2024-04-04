import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICity} from "../shared/interfaces/services/locations-api/i-city";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public currentCity: BehaviorSubject<ICity> = new BehaviorSubject<ICity>(null)
  
}
