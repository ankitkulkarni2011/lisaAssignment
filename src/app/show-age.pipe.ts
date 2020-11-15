import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAge'
})
export class ShowAgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    if(value){
      const convertAge = new Date(value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      var year:number = Math.floor((timeDiff / (1000 * 3600 * 24))/365); 
     }
      return year;
    
  }

}
