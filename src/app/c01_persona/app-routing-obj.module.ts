import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinPageComponent } from './prin-page/prin-page.component';

//http://localhost:4200/persona/objetos
//http://localhost:4200/objetos/obj
const misRoutesHijas:Routes=[ 
          { path:'',
            children:[
              {path:'obj'     , component:PrinPageComponent},
                     ]
          }
];


@NgModule({
  imports:[CommonModule,RouterModule.forChild(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingObjModule { }
