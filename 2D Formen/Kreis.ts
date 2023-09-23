import { Form } from "../Basisklasse/Form";

export class Kreis extends Form{
  _radius:number

  constructor(public readonly radius:number, farbe:String){
    super(farbe)
    this._radius=radius
  }

  public berechneFläche():number{
    return Math.PI * Math.pow(this.radius,2);
  }

  public berechneUmfang():number{
    return (2*Math.PI) * this.radius;
  }
  
  public berechneDurchmesser(){
    return 2 * this._radius;
  }
}