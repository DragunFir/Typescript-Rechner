export abstract class Form{
  _farbe:String

  constructor(public farbe: String){
    this._farbe = farbe
  }

  berechneFläche(): number{
    return 0;
  }

  berechneVolume(): number{
    return 0;
  }

  berechneUmfang(): number{
    return 0;
  }

  berechneDurchmesser():number{
    return 0;
  }
}