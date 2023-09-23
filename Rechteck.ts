import { Form } from "./Form"

export class Rechteck extends Form{
  _breite:number
  _höhe:number

  constructor(public readonly farbe:String, breite:number, höhe:number){
    super(farbe)
    this._breite = breite
    this._höhe = höhe
  }

  public berechneFläche():number{
    return this._breite*this._höhe
  }
}