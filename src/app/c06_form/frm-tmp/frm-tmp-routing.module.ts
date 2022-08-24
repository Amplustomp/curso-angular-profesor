import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmpBasicosComponent } from './tmp-basicos/tmp-basicos.component';
import { TmpDinamicosComponent } from './tmp-dinamicos/tmp-dinamicos.component';
import { TmpSwitchesComponent } from './tmp-switches/tmp-switches.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  children:[
      //http://localhost:4200/frm-tmp/tmp-basicos
      {path:'tmp-basicos',component:TmpBasicosComponent},
      {path:'tmp-dinamicos',component:TmpDinamicosComponent},
      {path:'tmp-switches',component:TmpSwitchesComponent},
      {path:'**',redirectTo:'reac-basicos'},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmTmpRoutingModule { }
