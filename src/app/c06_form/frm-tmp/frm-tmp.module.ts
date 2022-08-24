import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmTmpRoutingModule } from './frm-tmp-routing.module';
import { TmpBasicosComponent } from './tmp-basicos/tmp-basicos.component';
import { TmpDinamicosComponent } from './tmp-dinamicos/tmp-dinamicos.component';
import { TmpSwitchesComponent } from './tmp-switches/tmp-switches.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directivas/custom.directive';


@NgModule({
  declarations: [
    TmpBasicosComponent,
    TmpDinamicosComponent,
    TmpSwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    FrmTmpRoutingModule,

  ]
})
export class FrmTmpModule { }
