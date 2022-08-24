import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reac-dinamicos',
  templateUrl: './reac-dinamicos.component.html',
  styleUrls: ['./reac-dinamicos.component.css']
})
export class ReacDinamicosComponent implements OnInit {


  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    // en el formulario utilizar formArrayName, enlazando el nombre
    favoritos: this.fb.array([
      // Estoy agregando líneas cada una con su validacion
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding',Validators.required  ],
    ]
    //Validators.required al menos 1
    , Validators.required
    //, Validators.minLength(2)
    )
  });
  //Asocio al html por FormControl
  nuevoFavorito: FormControl = this.fb.control('', Validators.required );

  // Devuelve el arreglos de favoritos
  get favoritosArr() {
    //return this.miFormulario.get('favoritos').controls;// El mismo error
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    // Si es invalido no haga nada
    if ( this.nuevoFavorito.invalid ) { return; }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    // si no agregamos validación los campos que se agregarn no valida
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value) );

    // Con FormBuilder, ya lo inyectamos , mejor utilizar ese
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();

  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    console.log(this.miFormulario.value);
  }

}
