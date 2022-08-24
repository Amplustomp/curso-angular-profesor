import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PagePaisComponent } from './page/page.component';

const misRoutesHijas:Routes=[ 
          { path:'',
            // probar sin ==> component
            component:PagePaisComponent,
            children:[
              //{path:''     , component:PagesPaisComponent},
              {path:'pais-pais'     , component:PorPaisComponent},
              {path:'pais-region'   , component:PorRegionComponent},
              {path:'pais-capital'  , component:PorCapitalComponent},
              //{path:'ver-pais/:id' , component:VerPaisComponent},
              // no ocupar guion(-)
              {path:'ver-pais/:countryId' , component:VerPaisComponent},
                            ]
          }
];


@NgModule({
  imports:[RouterModule.forChild(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingPaisModule { }
