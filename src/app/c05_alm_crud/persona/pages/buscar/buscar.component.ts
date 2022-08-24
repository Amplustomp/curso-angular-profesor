import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IPersona } from 'src/app/c04_pipes/interface/ordenar.interface';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  lPersonas: IPersona[] = [];
  personaSeleccionado: IPersona | undefined;

  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {
  }


  buscando() {
    this.personaService.getSugerencias( this.termino.trim() )
      .subscribe( personas => this.lPersonas = personas );
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {
    //opcionSeleccionada( event:any ) {
    console.log(event)
    if(!event.option.value) {
      this.personaSeleccionado = undefined;
      return;
    }
    //Mirar el consol.log
    const persona: IPersona = event.option.value;
    this.termino = persona.superhero!;
    this.personaService.getPersonaPorId( persona.id! )
      .subscribe(persona => this.personaSeleccionado = persona );
  }
}
