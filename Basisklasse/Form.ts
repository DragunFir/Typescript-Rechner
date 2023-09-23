export abstract class Form{
  _farbe:String

  constructor(public farbe: String){
    this._farbe = farbe
  }

  public berechneFläche(): number{
    return 0;
  }

  public berechneVolume(): number{
    return 0;
  }

  public berechneUmfang(): number{
    return 0;
  }

  public berechneDurchmesser():number{
    return 0;
  }
}