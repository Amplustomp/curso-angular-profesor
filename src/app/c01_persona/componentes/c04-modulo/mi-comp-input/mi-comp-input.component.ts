import { Component, Input, OnInit } from '@angular/core';
// despues agregamos la interface
import { iPersona } from '../interfaces/iPersona';

@Component({
  selector: 'app-mi-comp-input',
  templateUrl: './mi-comp-input.component.html',
  styleUrls: ['./mi-comp-input.component.css']
})
export class MiCompInputComponent implements OnInit {
  // Importar en la primera linea  ==> @angular/core
  @Input()
  //lista_personas:any[]=[]
  // despues agregamos la interfaz
  lista_personas:iPersona[]=[]

  @Input('lista_personas_data')
  //lista_personas_v2:any[]=[]
  // despues agregamos la interfaz
  lista_personas_v2:iPersona[]=[]

  constructor() { }

  ngOnInit(): void {}

}
