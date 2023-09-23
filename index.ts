// Import Datein
import { Kegel } from './Kegel';
import { Kreis } from './Kreis';
import { Rechteck } from './Rechteck';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Ausgabe per Consoel</h1>`

let kegel: Kegel = new Kegel("blue",5,8)
let kreis: Kreis = new Kreis(7,"yellow")
let rechteck: Rechteck = new Rechteck("black",10,3)

console.log("Kreis \n Kegel Flächeninhalt: " + kegel.berechneFläche()
            +"\n ")
console.log("Kreis \n Flächeninhalt: " + kreis.berechneFläche() + 
            "\n Umfang: " + kreis.berechneUmfang())
console.log("Rechtecke Flächeninhalt: " + rechteck.berechneFläche())
