import { Form } from "./Form";

export class Dreieck extends Form{
  _seiteA:number
  _seiteB:number
  _grundseite:number
  _höhe:number

  constructor(public readonly farbe:string, a:number, b:number, grundseite:number, höhe:number){
    super(farbe)
    this._seiteA = a
    this._seiteB = b
    this._grundseite = grundseite
    this._höhe = höhe
  }

  public berechneUmfang():number{
    return this._seiteA + this._seiteB + this._grundseite
  }

  public berechneFläche():number{
    return 1/2 * this._grundseite * this._höhe
  }
}