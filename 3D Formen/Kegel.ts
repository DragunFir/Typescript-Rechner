import { Form } from "../Basisklasse/Form"

export class Kegel extends Form{
  _höhe:number
  _radius:number
  _Mantellinie:number
  _Grundfläche:number
  _Mantelfläche:number
  _Oberfläche:number

  constructor(public readonly farbe:String, radius:number, höhe:number){
    super(farbe)
    this._radius = radius
    this._höhe = höhe
  }

  public berechneFläche():number {

    this._Grundfläche = Math.PI * Math.pow(this._radius,2)
    this._Mantellinie = Math.sqrt(Math.pow(this._höhe,2) + Math.pow(this._radius,2))
    this._Mantelfläche = Math.PI * this._radius * this._höhe
    this._Oberfläche = this._Mantelfläche + this._Grundfläche

    return this._Oberfläche;
  }

  public berechneUmfang():number{
    this._Mantellinie = Math.sqrt(Math.pow(this._höhe,2) + Math.pow(this._radius,2))
    return (2* Math.PI * this._radius) + this._Mantellinie
  }

  public berechneVolume():number{
    return (1/3 * Math.PI) * Math.pow(this._radius,2) * this._höhe
  }

  public berechneDurchmesser():number{
    return 2 * this._radius;
  }
}