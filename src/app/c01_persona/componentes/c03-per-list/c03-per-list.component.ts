import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c03-per-list',
  templateUrl: './c03-per-list.component.html',
  styleUrls: ['./c03-per-list.component.css']
})
export class C03PersonaListarComponent  implements OnInit {
  constructor() { 
    console.log("Constructor C03PerList")
  }
  ngOnInit(): void {
    console.log("ngOnInit C03PerList")
  }
  //Creamos un Arreglo de Personas, con 4 personas posición de 0 a 3
  public lPersonas:String[] =["Harrys","Marilaf","Pedreros","Cordova"]

  // Creamos el Arreglo de los Eliminados
  public lPersonasEliminados:String[]=[]

  borrarPrimerPersona(){
    // shift devuelve string o undefined, por eso colocamos || ''
    // si es undefined coloque ==> ''
    const borrado = this.lPersonas.shift() || ''
    // push agrega al final del registro
    this.lPersonasEliminados.push(borrado);
  }

  //*************************** */
  booleanA: boolean = true;
  booleanB: boolean = true;
  
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  selectedValue: string= 'Two';  //ngSwitch

  

}
