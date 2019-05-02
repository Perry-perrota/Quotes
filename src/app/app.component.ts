import { Component } from '@angular/core';
import {Quote} from './quote'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  quotes =[
    new Quote('Gathemo ','Do not be fearful of the past',new Date(2018,3,16),0,"Perry Obara"),
    new Quote('Old walter','Do not be overanxious',new Date(2018,4,18),0,"Perry Obara"),
    new Quote('Niklaus','Always and forever',new Date(2018,5,17),0,"Perry Obara"),
    new Quote('Thanos','Run from it,Destiny arrives all the same',new Date(2018,6,14),0,"Perry Obara"),
  ]
  
}
