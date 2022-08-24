import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/pais.service';
import { IPais } from '../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls:['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  // Variable que se utilizará para desplegar la palabra seleccionada
  txBuscar:string="sp"
  // Check para indicar si hay error
  swError:boolean=false
  //  Resultados de Paises
  paises:IPais[]=[]
  // Arreglo de paises sugeridos
  paisesSugeridos   : IPais[] = [];
  // Si es true se activa el bloque de ayuda en el html
  mostrarSugerencias: boolean = false;
   /*
  txBuscar : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  */
 
  constructor(private serPais:PaisService) { }

  ngOnInit(): void {
  }

  // Método que se ejecutará cuando 
  // presionen enter en el componente input
  buscarEmit(stBuscar:string){
    this.txBuscar = stBuscar
    this.buscar()
  }
  buscar(){
    console.log("Método Buscar, Por País")
    this.swError=false
    console.log("Buscar", this.txBuscar)
    this.serPais.buscarPais(this.txBuscar)
    .subscribe({
      next:(paises)=>{
        console.log("respuesta =:",paises)
        this.swError=false
        this.paises=paises
      },
      complete: () => { console.log("complete") }, // completeHandler
      error: (error) => { // errorHandler 
                        console.log("Error")
                        console.info(error)
                        this.swError=true
                        this.paises=[]
                       },    
    })
  }

  // Método que se ejecutará cuando se 
  // produsca  onDebounce en el componente input
  sugerencia(stBuscar:string){
    console.log("Método Sugerencia, Por País") 
    this.mostrarSugerencias=true
    console.log("Sugerencias:",stBuscar)
    //this.buscarEmit(stBuscar)
    this.serPais.buscarPais(stBuscar)
        .subscribe({ 
               //  Guarda la respuesta en paisesSugeridos
               next:(paises)=>this.paisesSugeridos=paises.splice(0,3),
               error:()=>this.paisesSugeridos=[]
        })
  }
  
  // Método que se ejecutará cuando den click
  // en una de la lista sugerida
  buscarSugerido(stBuscar:string){
    console.log("Método Buscar Sugerido, Por País") 
    this.buscarEmit(stBuscar)
    //this.mostrarSugerencias=false
  }
}
