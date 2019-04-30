export class Quote {
  public showDescription:boolean;
  constructor(public id:number,public name:string,public description:string,public entry_date:Date,public vote:number){
    this.showDescription=false
  }
}
