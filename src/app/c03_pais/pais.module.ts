import { BrowserModule } from '@angular/platform-browser';


import { LOCALE_ID,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PagePaisComponent } from './page/page.component';
import { SidebarPaisComponent } from './shared/sidebar/sidebar.pais.component';
import { PaisTablaComponent } from './componentes/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './componentes/pais-input/pais-input.component';
import { AppComponent } from '../app.component';
import { AppRoutingPaisModule } from './app-routing-pais.module';
import { LoadModulosModule } from '../load-modulos/load-modulos.module';

@NgModule({
  declarations: [
    //AppComponent,  // pipes number
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PagePaisComponent,
    SidebarPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    PagePaisComponent,
    SidebarPaisComponent,
  ],
  imports: [
    AppRoutingPaisModule,
    //CommonModule,
    //BrowserModule,
    //FormsModule, 
    //RouterModule,  // Hace que funcione el click
    LoadModulosModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es-CL'}],
  //bootstrap: [AppComponent]
})
export class  PaisModule { }
