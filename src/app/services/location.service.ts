import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ICity} from "../shared/interfaces/services-interfaces/i-city";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public userCity: BehaviorSubject<ICity> = new BehaviorSubject<ICity>(null)

  public getCurrentLocation(): Observable<GeolocationPosition> {
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            observer.next(position);
            observer.complete();
          },
          (error: GeolocationPositionError) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }

}
