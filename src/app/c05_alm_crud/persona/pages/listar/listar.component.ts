import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/c04_pipes/interface/ordenar.interface';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lPersona: IPersona[] = [];
  
  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {

    this.personaService.getPersonas()
      .subscribe( lPersonasResp => this.lPersona = lPersonasResp );

  }


}
