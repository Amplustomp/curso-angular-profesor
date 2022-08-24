import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { CommonModule } from '@angular/common';

import { LoadModulosModule } from '../load-modulos/load-modulos.module';

import { C01BasicoComponent } from './c01-basico/c01-basico.component';

import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';


import { MayusculaPipe } from './pipes/mayusculas.pipesxx';
import { VuelaPipe } from './pipes/vuela.pipes';
import { OrdenarPipe } from './pipes/ordenar.pipes';
import { AppRoutingPipesModule } from './app-routing-pipes.module';



@NgModule({
  declarations: [
    C01BasicoComponent,

    OrdenarComponent,
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    MayusculaPipe,
    VuelaPipe,
    OrdenarPipe,
  ],
  imports: [
    //CommonModule,
    LoadModulosModule,
  ],
  exports:[
    AppRoutingPipesModule,
    //LoadModulosModule,
    //C01BasicoComponent,
    //BasicosComponent,
    //NumerosComponent,
    //NoComunesComponent,
    //OrdenarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class C00ModuloModule { }
