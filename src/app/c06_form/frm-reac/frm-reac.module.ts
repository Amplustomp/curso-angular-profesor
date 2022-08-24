import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmReacRoutingModule } from './frm-reac-routing.module';
import { ReacBasicosComponent } from './reac-basicos/reac-basicos.component';
import { ReacDinamicosComponent } from './reac-dinamicos/reac-dinamicos.component';
import { ReacSwitchesComponent } from './reac-switches/reac-switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReacBasicosComponent,
    ReacDinamicosComponent,
    ReacSwitchesComponent
  ],
  imports: [
    CommonModule,
    FrmReacRoutingModule,
    ReactiveFormsModule,
    FrmReacRoutingModule

  ]
})
export class FrmReacModule { }
