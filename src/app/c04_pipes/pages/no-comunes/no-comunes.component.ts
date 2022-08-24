import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
//******************************************** */
  nombre: string = 'Harrys';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla',
  }

  cambiarCliente() {
    if (this.nombre==='Harrys'){
      this.nombre = 'Melissa';
      this.genero = 'femenino';
    }
    else{
      this.nombre = 'Harrys';
      this.genero = 'masculino';
    }
  }
//******************************************** */
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo','Fernando','pepe'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    // # imprime el valor de comparación
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente(){
    this.clientes.pop();
  }
//************************************ */
persona_una =   {
    run:1,
    dv:'7',
    nombre: 'Superman',
    vuela: true
  }
//************************* */
  // JsonPipe

  personas = [
    {
      run:1,
      dv:'7',
      nombre: 'Superman',
      vuela: true
    },
    {
      run:2,
      dv:'9',
      nombre: 'Robin',
      vuela: false
    },
    {
      run:3,
      dv:'7',
      nombre: 'Aquaman',
      vuela: false
    },
  ]
//********************************* */
// Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });


}
