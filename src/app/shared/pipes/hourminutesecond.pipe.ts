import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourminutesecond'
})
export class HourminutesecondPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);

    const minutes: number = Math.floor((value - hours *3600) / 60);

    const seconds: number = (value - minutes * 60);

    return hours.toString().padStart(2, '0')  + ':' + minutes.toString().padStart(2, '0') +':' +seconds.toString().padStart(2, '0') ;
  }

}
