import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFrmTmpRoutingModule } from './app-frm-tmp-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { LifecycleComponent } from './lifecycle/pages/lifecycle/lifecycle.component';
import { PagePrinComponent } from './lifecycle/pages/page-prin/page-prin.component';
import { MuestraNnombreComponent } from './lifecycle/pages/muestra-nnombre/muestra-nnombre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LifecycleComponent,
    PagePrinComponent,
    MuestraNnombreComponent,
  ],
  imports: [
    CommonModule,
    AppFrmTmpRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AppFrmTmpModule { }
