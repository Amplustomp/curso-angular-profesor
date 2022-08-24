import { Component } from "@angular/core";
@Component({
    selector:'app-persona-datos',
    templateUrl:'./persona.component.html',
})
export class PersonaDatosComponent {
    run :number=1;
    nombres:String="Carlos Mario";
    apPaterno:String="Harrys"
    apMaterno:String="El Magnifico"
    title = 'Proyecto Persona';    

    obtenerNombre():String{
        var palabra:String =   `${this.nombres} - ${this.apPaterno} - ${this.apMaterno}`
        return palabra.toUpperCase()
    }
    
    //Getter an Setter
    get getCompleto():String{
        return `${this.nombres} - ${this.apPaterno} - ${this.apMaterno}`
    }
    set setNombres(val:String){
        this.nombres= val
    }

    // Método utilizado en el HTML
    ponerHarrisita():void{
        this.nombres=" Harrisita  de las Mercedes";
    }
    // Método utilizado en el HTML
    ponerHarrisito():void{
        //this.nombres=" Carlos Mario";
        // Podemos utilizar el Setter, se utiliza con asignación
        this.setNombres = " Carlos Mario"
    }

}