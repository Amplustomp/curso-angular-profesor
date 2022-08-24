import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './prin-page.component.html',
  //styleUrls: ['./persona.component.css']
})
export class PrinPageComponent {
  title = 'proyecto';
  public title_harrys:string = 'proyecto Harrys Titulo';
  public contador:number=100;
  public base:number=10;
  sumar(n1:number,n2:number){
    return n1+n2 + this.contador
  }
  sumar_v2(n1:number,n2:string){
    return n1 + n2 + this.contador
  }
}