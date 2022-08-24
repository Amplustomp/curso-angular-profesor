import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reac-basicos',
  templateUrl: './reac-basicos.component.html',
  styleUrls: ['./reac-basicos.component.css']
})
export class ReacBasicosComponent implements OnInit {


  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })
  // No aparecen los valores si no coloco los FormControl

  constructor( private fb: FormBuilder ) { }

  miFormulario: FormGroup = this.fb.group({
    //nombre: ['valini' , [ Validators.required, Validators.minLength(3) ]   ],

    // sin llaves cuadradas son validadores asincronos
    // Si coloco uno no hay problemas
    //nombre: [ ,  Validators.required/*, Validators.minLength(3)*/   ], 
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],
    precio: [ , [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(150)] ],
  })
  //FormBuilder ==> es un servicio hay que inyectarlo, Validaciones

  ngOnInit() {

    /*  Error por que falta inicializar un campo
    this.miFormulario.setValue({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
    */
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }

// Pregunta por el error del camppo pasado por parámetro
// Crear uno para cada uno por primera vez
//return this.miFormulario.controls.nombre.errors && this.miFormulario.controls.nombre.touched;
campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {
      // Forzar que todos los campos han sido tocados, se producen validaciones
      //this.miFormulario.markAllAsTouched(); 
      //if ( this.miFormulario.valid )  {}

    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
