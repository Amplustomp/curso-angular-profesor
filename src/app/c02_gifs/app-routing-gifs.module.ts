import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinPageComponent } from './prin-page/prin-page.component';


const misRoutesHijas:Routes=[ 
          { path:'',
            children:[
              {path:''     , component:PrinPageComponent,     pathMatch:'full'},
                     ]
          }
];


@NgModule({
  imports:[RouterModule.forChild(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingGifsModule { }
