import { Form } from "../Basisklasse/Form";

export class Pyramide extends Form{
  _höhe:number
  _seite:number
  _schrägenhöhe:number
  _seitenflächen:number

  constructor(public readonly farbe:string, höhe:number, seite:number){
    super(farbe)
    this._höhe = höhe
    this._seite = seite
  }

  berechneVolume():number{
    return (Math.pow(this._seite,2) * this._höhe)/3;
  }

  berechneFläche():number{
    this._schrägenhöhe = Math.sqrt(Math.pow(this._höhe,2) + Math.pow((this._seite/2),2))
    return Math.pow(this._seite,2) + 2 * this._seite * this._höhe;
  }

  berechneUmfang():number{
    this._seitenflächen = Math.sqrt(Math.pow(this._höhe,2) + Math.pow(this._seite,2))
    return (4 * this._seite) * (4 * this._seitenflächen)
  }
}