import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IPersona } from '../../../../c04_pipes/interface/ordenar.interface';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona!: IPersona;

  constructor( private activatedRoute: ActivatedRoute,
               private personaService: PersonaService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.personaService.getPersonaPorId(id) )
      )
      .subscribe( persona => this.persona = persona );

  }

  regresar() {
    this.router.navigate(['/personas/listado']);
  }


}
