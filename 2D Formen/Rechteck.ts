import { Form } from "../Basisklasse/Form"

export class Rechteck extends Form{
  _breite:number
  _höhe:number

  constructor(public readonly farbe:String, breite:number, höhe:number){
    super(farbe)
    this._breite = breite
    this._höhe = höhe
  }

  berechneFläche():number{
    return this._breite*this._höhe;
  }

  berechneUmfang():number{
    return 2*this._breite + 2*this._höhe;
  }
}