// Import Datein
import { Dreieck } from './2D Formen/Dreieck';
import { Kreis } from './2D Formen/Kreis';
import { Rechteck } from './2D Formen/Rechteck';
import { Kegel } from './3D Formen/Kegel';
import { Pyramide } from './3D Formen/Pyramide';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Ausgabe per Consoel</h1>`

let kegel: Kegel = new Kegel("blue",5,8)
let kreis: Kreis = new Kreis(9,"yellow")
let rechteck: Rechteck = new Rechteck("black",10,3)

console.log("Kreis \n Kegel Flächeninhalt: " + kegel.berechneFläche()
            +"\n ")
console.log("Kreis \n Flächeninhalt: " + kreis.berechneFläche() + 
            "\n Umfang: " + kreis.berechneUmfang())
console.log("Rechtecke \n Flächeninhalt: " + rechteck.berechneFläche())