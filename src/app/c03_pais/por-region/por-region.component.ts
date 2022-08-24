import { Component, OnInit } from '@angular/core';
import { IPais } from '../interface/pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{margin-right:5px}
  `
  ]
})
export class PorRegionComponent implements OnInit {
  regiones:string[]=['africa','americas','asia','europe','oceania']
  regActiva:string=''
  paises:IPais[]=[]

  constructor(private servPais:PaisService) { }

  ngOnInit(): void {
  }
  regActivaCss(stRegion:string){
    console.log("Método regActivaCss Region, Por Region") 
    return (stRegion===this.regActiva)? 'btn btn-primary':'btn btn-outline-primary'
  }
  activarRegion(region:string){
    console.log("Método activar Region, Por Region") 
    if(region === this.regActiva) return
    this.regActiva=region
    this.servPais.buscarRegion(region)
    .subscribe(paises=>{
      console.log("Paises Region", paises)
      this.paises=paises
    })
  }

}
