import { Component} from '@angular/core';
import { IPais } from '../interface/pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  
  txBuscar:string="sp"
  swError:boolean=false
  paises:IPais[]=[]
  constructor(private serPais:PaisService) { }


  buscarEmit(stBuscar:string){
    console.log("Método BuscarEmit, Por Capital") 
    console.log("Buscar Emit", this.txBuscar)
    this.txBuscar = stBuscar
    this.buscar()
  }
  buscar(){
    this.swError=false
    console.log("Buscar", this.txBuscar)

         // this.serPais.buscarCapital(this.txBuscar)
         //.subscribe(()=>{},()=>{})
         // El primero es si el observable funciona correctamente    
         // El segundo es si el observable tiene error
        this.serPais.buscarCapital(this.txBuscar)
             .subscribe({ next: (paises)=>{
               console.log("respuesta =:",paises)
               this.swError=false
               this.paises=paises
             },
             complete: ()=>{},
             error:(error)=>{
               console.log("Error en Suscribe")
               console.info(error)
               this.swError=true
               this.paises=[]
             }
            })
  }
  sugerencia(stBuscar:string){
    console.log("Método sugerencia, Por Capital")
    console.log("Sugerencias:",stBuscar)
    this.buscarEmit(stBuscar)
  }  

}
