import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  transform(value:any):number{
   let today:Date = new Date(); //gets the current date and time from the user system clock
   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
   var dateDifference=Math.abs(value-todayWithNoTime )// returns value in milliseconds of the difference in time
   const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24 hours

   var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

   var dateCounter =Math.abs(dateDifferenceSeconds/secondsInADay);

   if (dateCounter >= 1 && value > todayWithNoTime){
       return dateCounter;
   }
}

}
