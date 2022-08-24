import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reac-switches',
  templateUrl: './reac-switches.component.html',
  styleUrls: ['./reac-switches.component.css']
})
export class ReacSwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    notificaciones: true,
    // Si agrego más que no existan en el formulario no  da problemas
  }
/*
  miFormulario: FormGroup = this.fb.group({
    genero: [ this.persona.genero, Validators.required ],
    notificaciones: [ this.persona.notificaciones, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });
  */
 // lo dejamos así para ver el efecto del reset en el on init
  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    //condiciones: [ false, Validators.required ]
    // requiredTrue == obliga que sea true
    condiciones: [ false, Validators.requiredTrue ]
  });


  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    //No funciona, si es que el objeto persona no tiene todos los campos 
    // por lo cual hay que utilizar reset
    //this.miFormulario.setValue(this.persona);

    // Observe que le paso el objeto
    // falta un campo, se puede con reset
    this.miFormulario.reset({ 
      ...this.persona,  // Por que ...
      // agregamos las condiciones , que no estan en persona
      condiciones: false
    });
/*  deprecate suscribe form
    this.miFormulario.valueChanges.subscribe( form => {
      console.log("suscribo cualquier cambio el formulario")
    })
    */
   /*
   Solo suscribo el valor del cambio de condiciones
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log("suscribo cualquier cambio el formulario",newValue)
    })
    */
/*
   // permite que cambie automáticamente 
   //{ condiciones, ...rest } destructuracion, separo las condiciones del resto en rest
   //       asi no tengo que eliminar,delete form.condiciones, no quiero que tenta las condiones en persona
      this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // this.miFormulario.valueChanges.subscribe( ({...rest }) => {  ==> toma todo el form
      // delete form.condiciones;
      this.persona = rest;
      console.log("suscribo cualquier cambio")
    })
*/
  }

  guardar() {

    const formValue = { ...this.miFormulario.value };
    console.log("xon1:",formValue)
    // elimino las condiciones
    delete formValue.condiciones;
    console.log("xon2:",formValue)

    this.persona = formValue;

  }


}
