import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../services/pais.service';
import { IPais } from '../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls:['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,
              private servPais:PaisService) { }

  ngOnInit(): void {
    // mejor utilizar sinRX
    //this.v1SinRx()
    this.v2ConRx()
  }
  v2ConRx(){
    console.log("RuraACTTTT",this.actRoute) // Ver parametro en la ruta
    this.actRoute.params
    .pipe(
      //switchMap(({countryId})=>this.servPais.buscarPaisCodigo(countryId))
      switchMap(parametro=>this.servPais.buscarPaisCodigo(parametro.countryId))
      //,tap(console.log)
      ,tap(resp=>console.log("respuesta tap",resp))
    )
    .subscribe(resp=>{
      console.log("respuesta swithMap",resp)
      this.pais=resp
    })
  }
  v1SinRx(){
    console.log("RuraACTTTT",this.actRoute) // Ver parametro en la ruta
    this.actRoute.params
    /*
         .subscribe( parametros=>{
           // Muestra los parametros
           console.log("parametros",parametros)
           */
            // destructuracion
           .subscribe( ({countryId})=>{
             console.log("countryId destructurado",countryId)
             this.servPais.buscarPaisCodigo(countryId)
                 .subscribe(pais=>{
                   console.log("Servcio Ser-Pais",pais)
                   this.pais = pais
                 })
         })
  }

  //***************** */
  pais!:IPais
}
