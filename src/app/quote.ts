export class Quote {
  public showDescription:boolean;
  constructor(public name:string,public description:string,public entry_date:Date,public vote:number,public submission:string){
    this.showDescription=false
  }
}
