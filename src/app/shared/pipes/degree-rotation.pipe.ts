import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeRotation',
  standalone: true
})
export class DegreeRotationPipe implements PipeTransform {

  transform(deg: number, icon_deg: number = -90): string {
    return `rotate(${deg - icon_deg}deg)`;
  }

}
