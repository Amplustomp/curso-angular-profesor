import { Component, OnInit } from '@angular/core';
import { Color, Genero, IPersona } from '../../interface/ordenar.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {
  ordenarPor:string="nombre"
  lPersonas: IPersona[] = [
    {
      run:1,
      dv:'9',
      nombres: 'Harrys',
      apPaterno:'El Magnifico',
      apMaterno:'Macaveo',
      genero:Genero.M,
      color:Color.azul,
      vuela:true,
    },
    {
      run:2,
      dv:'9',
      nombres: 'Batman',
      apPaterno:'El Magnifico 2',
      apMaterno:'Macaveo',
      genero:Genero.M,
      color:Color.rojo,
      vuela:true,
    },
    {
      run:3,
      dv:'9',
      nombres: 'Robin',
      apPaterno:'El Magnifico 3',
      apMaterno:'Macaveo',
      genero:Genero.M,
      color:Color.verde,
      vuela:false,
    },
    {
      run:4,
      dv:'9',
      nombres: 'Daredevil',
      apPaterno:'El Magnifico 4',
      apMaterno:'Macaveo',
      genero:Genero.F,
      color:Color.azul,
      vuela:true,
    },
    {
      run:5,
      dv:'9',
      nombres: 'Linterna Verde',
      apPaterno:'El Magnifico 5',
      apMaterno:'Macaveo',
      genero:Genero.F,
      color:Color.negro,
      vuela:true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOrden(stPorValor:string){
      this.ordenarPor = stPorValor;
  }
  enMay:boolean=true
  cambiar(){
    /*
    if (this.enMay) this.enMay=false:
    else this.enMay=true;
    */
    this.enMay=!this.enMay;
  }


}
