import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote('Gathemo ','Do not be fearful of the past',new Date(2018,3,16),0,"Perry Obara"),
    new Quote('Old walter','Do not be overanxious',new Date(2018,4,18),0,"Perry Obara"),
    new Quote('Niklaus','Always and forever',new Date(2018,5,17),0,"Perry Obara"),
    new Quote('Thanos','Run from it,Destiny arrives all the same',new Date(2018,6,14),0,"Perry Obara"),
  ]
  toogleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
    deleteQuote(isComplete,index){
      if(isComplete){
        let toDelete=confirm('Are you sure you want to delete ')
        if (toDelete){
        this.quotes.splice(index,1);
      }
    }
}
      addNewQuote(quote){
        quote.entry_date=new Date(quote.entry_date)
        this.quotes.push(quote)
      }
  constructor() { }

  ngOnInit() {
  }

}
