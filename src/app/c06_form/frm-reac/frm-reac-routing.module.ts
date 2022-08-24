import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReacBasicosComponent } from './reac-basicos/reac-basicos.component';
import { ReacDinamicosComponent } from './reac-dinamicos/reac-dinamicos.component';
import { ReacSwitchesComponent } from './reac-switches/reac-switches.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  children:[
      {path:'reac-basicos',component:ReacBasicosComponent},
      {path:'reac-dinamicos',component:ReacDinamicosComponent},
      {path:'reac-switches',component:ReacSwitchesComponent},
      {path:'**',redirectTo:'reac-basicos'},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmReacRoutingModule { }
