import {Component} from '@angular/core';

@Component({
     selector:'app-contador'  // Nombre del modulo
    ,template:`
<hr>
<h1><font color="red"><p>Componente 00 Contador!</p></font></h1>
<h1>Titulo de la canción <font color="red">{{title_harrys}}</font></h1>
Lo anterior se encuentra en app.component.ts en ==> export class AppComponent

<h1>expresión  <font color="red">{{5 * 3}}</font></h1>

<button (click) = "contador=contador + 1" >+1</button>
<h1>contador  <font color="red">{{contador}}</font></h1>
<button (click) = "contador=contador - 1">-1</button>

<h1>sumar  <font color="red">{{sumar(2,3)}}</font></h1>
<h1>sumar v2 <font color="red">{{sumar_v2(2,'3')}}</font></h1>

<button (click) = "contador=contador + base" >+{{base}}</button>
<button (click) = "contador=contador - base">-{{base}}</button>
<h1>Base <font color="red">{{base}}</font></h1>
              
             `
})
// Export lo podemos utilizar afuera
export class ContadorComponent{
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