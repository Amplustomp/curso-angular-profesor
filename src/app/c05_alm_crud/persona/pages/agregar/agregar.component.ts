import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Genero, IPersona,Color } from 'src/app/c04_pipes/interface/ordenar.interface';
import { ConfirmarComponent } from '../../componente/confirmar/confirmar.component';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  genero = [
    {id: 'F', desc: 'Femenino'},
    {id: 'M',desc: 'Masculino'},
  ];
  color = [
    {id: '0', desc: 'Rojo'},
    {id: '1',desc: 'Negro'},
    {id: '2',desc: 'Azul'},
    {id: '3',desc: 'Verde'},
  ];

  persona: IPersona = {
    id:'',
    run:1,
    dv:'',
    nombres: '',
    apPaterno:'',
    apMaterno:'',
    color:Color.azul,
    superhero: '',
    alter_ego: '',
    genero:  Genero.M,
    idImg:'',
  }

  constructor( private personaService: PersonaService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap( ({id}) => this.personaService.getPersonaPorId( id ) )      )
      .subscribe( persona => this.persona = persona );

  }

  guardar() {
    
    if( this.persona.superhero!.trim().length === 0  ) {
      return;
    }
    // Si contiene algo el id es actualizar
    if ( this.persona.id ) {
      // Actualizar
      this.personaService.actualizarPersona( this.persona )
        .subscribe( persona => {
          this.mostrarSnakbar('Registro actualizado')
          this.router.navigate(['/personas/listado' ]);
        });
      return
    } 
    // Crear
    this.personaService.agregarPersona( this.persona )
      .subscribe( persona => {
        this.router.navigate(['/personas/editar', persona.id ]);
        this.mostrarSnakbar('Registro creado');
      })

  }
  borrarHeroe() {
    
    
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.persona
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ) {
          this.personaService.borrarPersona( this.persona.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
            });
        }
      }
    )
    
  }
  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }



}
