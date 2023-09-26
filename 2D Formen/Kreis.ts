import { Form } from "../Basisklasse/Form";

export class Kreis extends Form{
  _radius:number

  constructor(public readonly radius:number, farbe:String){
    super(farbe)
    this._radius=radius
  }

  berechneFläche():number{
    return Math.PI * Math.pow(this.radius,2);
  }

  berechneUmfang():number{
    return (2*Math.PI) * this.radius;
  }
  
  berechneDurchmesser(){
    return 2 * this._radius;
  }
}