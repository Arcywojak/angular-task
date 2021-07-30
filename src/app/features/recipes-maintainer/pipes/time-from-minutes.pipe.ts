import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFromMinutes'
})
export class TimeFromMinutesPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    const hoursStr = hours > 0 ? `${hours}h `: "";
    const minutesStr = minutes > 0 ? `${minutes}m`: "";

    return `${hoursStr}${minutesStr}`
  }

}
