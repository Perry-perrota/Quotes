import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote("","",new Date(),0,"");
  @Output() addQuote=new EventEmitter<Quote>();
    submitQuote(){
      this.addQuote.emit(this.newQuote);
    }
  @Output() voteFor=new EventEmitter<boolean>();
  quoteUpvote(complete:boolean){
    this.voteFor.emit(complete);
  }
  @Output() voteNot=new EventEmitter<boolean>();
  quoteDownvote(complete:boolean){
    this.voteNot.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
