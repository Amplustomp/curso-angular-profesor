import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NumerosComponent } from "./pages/numeros/numeros.component";
import { NoComunesComponent } from "./pages/no-comunes/no-comunes.component";
import { OrdenarComponent } from "./pages/ordenar/ordenar.component";
import { BasicosComponent } from "./pages/basicos/basicos.component";


const misRoutesHijas:Routes=[ 
          { path:'',
            children:[
                  {path:'numeros'         , component:NumerosComponent},
                  {path:'no-comunes'      , component:NoComunesComponent},
                  {path:'ordenar'         , component:OrdenarComponent},
                  {path:'basicos'         , component:BasicosComponent},
                  ]
          }
];


@NgModule({
  imports:[RouterModule.forChild(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingPipesModule { }
