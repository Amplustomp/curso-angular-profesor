import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';

import { HttpClientModule} from '@angular/common/http';
import { PrinPageComponent } from './prin-page/prin-page.component';
import { SidebarGifsComponent } from './shared/sidebar/sidebar.gifs.component';
import { AppRoutingGifsModule } from './app-routing-gifs.module';
import { LoadModulosModule } from '../load-modulos/load-modulos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent,
    PrinPageComponent,
    SidebarGifsComponent
  ],
  exports:[
    GifsPageComponent,
    PrinPageComponent,
    LoadModulosModule,
    
    //BrowserAnimationsModule,
    //BrowserModule,
    //CommonModule,
  ],
  imports: [
    CommonModule,
    LoadModulosModule,
    AppRoutingGifsModule,
    CommonModule,
    //HttpClientModule,
    AppRoutingGifsModule,
  ]
})
export class GifsModule { }
