import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public userLocation: BehaviorSubject<GeolocationPosition> = new BehaviorSubject<GeolocationPosition>(null)

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

  public setUserLocation(location: GeolocationPosition): void {
    this.userLocation.next(location)
  }

}
