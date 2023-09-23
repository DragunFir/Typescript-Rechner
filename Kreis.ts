import { Form } from "./Form";

export class Kreis extends Form{
  _radius:number

  constructor(public readonly radius:number, farbe:String){
    super(farbe)
    this._radius=radius
  }

  public berechneFläche():number{
    return Math.PI * this._radius * this._radius;
  }
}