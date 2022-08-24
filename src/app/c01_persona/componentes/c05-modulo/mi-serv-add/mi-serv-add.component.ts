import { Component, OnInit } from '@angular/core';
import { PersonaServices } from 'src/app/c01_persona/servicios/persona.services';
import { iPersona } from '../../c04-modulo/interfaces/iPersona';


@Component({
  selector: 'app-mi-serv-add',
  templateUrl: './mi-serv-add.component.html',
  styleUrls: ['./mi-serv-add.component.css']
})
export class MiServAddComponent implements OnInit {

  persona_serv:iPersona= {
    run:1,
    nombres:"Juan Servicio",
    apPaterno:"Service Harrys",
    apMaterno:"Materno Harrys",
    edad:100,
  }

  
  constructor(public servPersonas:PersonaServices) { }

  ngOnInit(): void {
  }
  agregarSinEvento(){
    if ( this.persona_serv.nombres.trim().length === 0 ) { return; }
    console.log("Persona Service",this.persona_serv)
    this.servPersonas.addPersona(this.persona_serv)
    // Inicializo para que no quede como referencia
    this.persona_serv= {
      run:1,
      nombres:"Juan Servicio",
      apPaterno:"Service Harrys",
      apMaterno:"Materno Harrys",
      edad:100,
    }
  }
}
