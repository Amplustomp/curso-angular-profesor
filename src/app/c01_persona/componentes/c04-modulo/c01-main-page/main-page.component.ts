import { Component, OnInit } from '@angular/core';
import { iPersona } from '../interfaces/iPersona';
/*
Lo dejamos en una archivo de interfaces
e importamos el archivo
debemos agregar export en la interface
interface iPersona{
  run:number;
  nombres:String;
  apPaterno:String;
  apMaterno:String;
  edad:number;
}
*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // Debemos importar iPersonas
  persona_n1:iPersona= {
    run:1,
    nombres:"Juan Mario",
    apPaterno:"paterno",
    apMaterno:"Materno",
    edad:10,
  }
  //lPersonas:any[]=[]
  /*
  export class MainPageComponent implements OnInit {
  lPersonas:any[]=[{nombres:"carlos",apPaterno:"Ojeda",apMaterno:"Ojeda",edad:109,run:90}
                   ,{nombres:"carlos1",apMaterno:"Ojeda1",edad:209,apPaterno:"Ojeda",run:10}
                  ]*/
  lPersonas:iPersona[]=[{nombres:"Carlos",apPaterno:"Vega",apMaterno:"Osorio",edad:109,run:90}
                        ,{nombres:"Pedro",apMaterno:"Pereira",edad:209,apPaterno:"Pinto",run:10}]

  constructor() { }

  ngOnInit(): void {
  }
  agregarEvent(evento:any){
    //Evita refresh de la página
    // aún así se refresca el objeto
    evento.preventDefault()
    console.log("evento" , evento)
    //console.log("target" , evento.target)
    // Rescatamos los valores por medio del evento
    // Problema de las posiciones de los campos
    this.persona_n1.run = evento.srcElement[0].value
    this.persona_n1.nombres = evento.srcElement[1].value
    this.persona_n1.apPaterno = evento.srcElement[2].value
    this.persona_n1.apMaterno = evento.srcElement[3].value
    // Agregamos el registro al arreglo
    this.lPersonas.push(this.persona_n1)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia
    this.persona_n1 = {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
  
    }

  }

  agregarSinEvent(){
    // Nombres no tiene two way DataBind, o sea no tiene ngModel
    if (this.persona_n1.apMaterno.trim().length==0){
           console.log("Error Nombre en Blanco")
           return
       }
    console.log("Holaaaaaaa SinEvento")
    console.log("Persona",this.persona_n1)
    this.lPersonas.push(this.persona_n1)
    this.persona_n1 = {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
  
    }
  }
  agregarNgModel(){
    this.lPersonas.push(this.persona_n1)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia

    this.persona_n1 = {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
  
    }
  }  
  // Método que se ejecutará cuando reciba el evento
  agregarPersonaOutput(persona_output:iPersona){
    console.log("Agregando Output",persona_output)
    // Agrega al Arreglo
    this.lPersonas.push(persona_output)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia
    this.persona_n1 = {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
  
    }
  }  

  cambiarNombre(evento:any){
    console.log(evento)
    console.log("valor:" ,evento.target.value)
     this.persona_n1.nombres = evento.target.value

  }
  cambiarRut(evento:any){
    this.persona_n1.run = evento.target.value
  }
  cambiarMaterno(evento:any){
    this.persona_n1.apMaterno = evento.target.value
  }
  cambiarPaterno(evento:any){
    this.persona_n1.apPaterno = evento.target.value
  }
  cambiarEdad(evento:any){
    this.persona_n1.edad = evento.target.value
  }

}
