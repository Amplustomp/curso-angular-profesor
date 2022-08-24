import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tmp-basicos',
  templateUrl: './tmp-basicos.component.html',
  //styleUrls: ['./tmp-basicos.component.css']
})
export class TmpBasicosComponent implements OnInit {

  //Repasar @Input, @Output
  //miFormulario, nombre del formulario
  //@ViewChild hace referencia a un objeto local
  @ViewChild('miFormulario') miFormulario!: NgForm;
  // Primero solo con ngModel
  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid 
            && this.miFormulario?.controls.producto?.touched;
  }

  precioNoValido():boolean {
    //this.miFormulario?.controls?.precio?.setErrors({'precio' : true})
    //this.miFormulario?.controls?.precio?.setErrors(null)
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0;
  }
  // guardar( miFormulario: any ) {console.log("miFormulario",miFormulario)
  // guardar( miFormulario: NgForm ) {console.log("miFormulario",miFormulario);console.log("Value",miFormulario.value)
  guardar() {
    // console.log( this.miFormulario );
    if(this.miFormulario.controls.precio.value < 0){
      console.log('Posteo NOOOOO Correcto');
      return;  
    }
    console.log('Posteo correcto');
    //Vean los pristine y touch
    //this.miFormulario.resetForm();
    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }


}
