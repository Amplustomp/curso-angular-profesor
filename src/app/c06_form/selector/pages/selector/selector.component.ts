import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

 
  miFormulario: FormGroup = this.fb.group({
    //region  : [{value:'',disabled:true}, Validators.required ],
    region  : ['', Validators.required ],
    pais    : ['', Validators.required ],
    frontera: ['', Validators.required ],
  })

  // Llenar selectores
  regiones : string[]    = [];
  paises   : PaisSmall[] = [];
  // fronteras: string[]    = []
  fronteras: PaisSmall[] = []

  // UI
  cargando: boolean = false;


  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }
  
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
    /*
    console.log("Antes Suscribe Region")
    this.miFormulario.get('region')?.valueChanges
    .subscribe( region => {
      console.log("Suscribe Region",region)
      // Por que tengo que suscribir a cada rato
      // es por que se crea el objeto de nuevo
      this.paisesService.getPaisesPorRegion( region )
      .subscribe( paises => {
          console.log("Suscribe Paises",region)
          this.paises = paises
      })
     });*/
/*
     this.miFormulario.get('region')?.valueChanges
     // permite transformar la respuesta del observable
     // permite disparar otras cosas mediante switchMap
     .pipe(
       switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
     )
     .subscribe( paises => {
       console.log("paises",paises)
       this.paises = paises;
   });
   */
    // Suscribimos, Cuando cambie la region
    // primero solo el suscribe
    this.miFormulario.get('region')?.valueChanges
      // permite transformar la respuesta del observable
      // permite disparar otras cosas mediante switchMap
      .pipe(
        //tap( (region ) => {
        //( _ ) ==> permite decir que no me interesa el parámetro  
        tap( ( _ ) => {
          //Reseteamos, el contenido de pais seleccionado
          this.miFormulario.get('pais')?.reset('');
          //this.miFormulario.get('frontera')?.disable();
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
      )
      .subscribe( paises => {
        console.log("paises",paises)
        this.paises = paises;
        this.cargando = false;
    });


    // Cuando cambia el país
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('frontera')?.reset('');
          //this.miFormulario.get('frontera')?.enable();
          this.cargando = true;
        }),
        switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) ),
        switchMap( pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ) )
      )
      .subscribe( paises => {
        // this.fronteras = pais?.borders || [];
        console.log(paises)
        this.fronteras = paises;
        this.cargando = false;
      })
  }


  guardar() {
    console.log(this.miFormulario.value);
  }



}
