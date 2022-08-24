import { Component, OnInit } from '@angular/core';
import { PersonaServices } from 'src/app/c01_persona/servicios/persona.services';
import { iPersona } from '../../c04-modulo/interfaces/iPersona';

@Component({
  selector: 'app-mi-serv-lista',
  templateUrl: './mi-serv-lista.component.html',
  styleUrls: ['./mi-serv-lista.component.css']
})
export class MiServListaComponent implements OnInit {

  constructor(public servPersonas:PersonaServices) { }

  ngOnInit(): void {
  }

  get listaPersonas():iPersona[]{
     return this.servPersonas.getPersonas;
  }

}
