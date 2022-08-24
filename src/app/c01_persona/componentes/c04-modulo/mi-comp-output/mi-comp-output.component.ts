import { Component, EventEmitter ,OnInit, Output } from '@angular/core';
import { PersonaServices } from 'src/app/c01_persona/servicios/persona.services';
import { iPersona } from '../interfaces/iPersona';

@Component({
  selector: 'app-mi-comp-output',
  templateUrl: './mi-comp-output.component.html',
  styleUrls: ['./mi-comp-output.component.css']
})
export class MiCompOutputComponent implements OnInit {
  // Agregamos output y podemos tomarla afuera
  // EventEmitter Importamos  de angular/core
  @Output() onNuevaPersona: EventEmitter<iPersona> = new EventEmitter<iPersona>();

  persona_ot:iPersona= {
    run:1,
    nombres:"Juan Mario",
    apPaterno:"paterno",
    apMaterno:"Materno",
    edad:10,
  }
  // Agregamos el servicio
  constructor(public servPersonas:PersonaServices) { 
    //aa:Persona = servPersonas.lPersonas_SS
  }

  ngOnInit(): void {
  }
  agregarSinEvento():void{
    console.log("agregarSinEvento")
    // Cada vez que apreten el boton emito la señal de cambio
    // enviando los datos, como parámetro
    this.onNuevaPersona.emit(this.persona_ot);
    // si no inicializo de nuevo, el objeto se repetirá
    // , ya que se pasa el objeto por referencia
    this.persona_ot= {
      run:1,
      nombres:"Juan Mario",
      apPaterno:"paterno",
      apMaterno:"Materno",
      edad:10,
    }
  }
}
