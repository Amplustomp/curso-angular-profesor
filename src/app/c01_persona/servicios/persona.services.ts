import { Injectable } from "@angular/core";
import { iPersona } from "../componentes/c04-modulo/interfaces/iPersona";

@Injectable()
export class PersonaServices{
    // Al poner private no puedo ver desde los demas
    private _lPersonas_SS:iPersona[]=[]
    get getPersonas():iPersona[]{
        // Cuidado que javaScript manda los datos por referencia
        // por lo cual el cliente puede realizar cambios
        //return this._lPersonas_SS;

        // Esto rompre la referencia, envia un objeto nuevo
        return [...this._lPersonas_SS];
        //return this._lPersonas_SS; // ==> Por referencia
    }
    constructor(){
        console.log("Servicio Inicializado ***************************")
    }
    // Agregar una persona al arreglo _lPersonas_SS
    addPersona(persona:iPersona){
        // Agrega
        this._lPersonas_SS.push(persona)
         // Solo Imprime el contenido del arreglo, 
        // con el fin de visualizar que no se ha perdido ni uno        
       for (var i = 0; i < this._lPersonas_SS.length; i++) {
            console.log("Persona Arr",this._lPersonas_SS[i])
        }
    }
}