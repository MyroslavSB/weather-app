import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'barHeight',
  standalone: true
})
export class BarHeightPipe implements PipeTransform {

  transform(current_value: number, min: number, max: number, format: 'decimal' | 'percentage_string' = 'decimal'): number | string {
    const range: number = max - min
    const relative_value = current_value - min

    if (format === 'percentage_string') {
      return `${(relative_value / range) * 100}%`
    }

    return relative_value / range

  }

}
