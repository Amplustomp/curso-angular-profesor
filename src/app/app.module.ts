import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Lazy Load
//import { GifsModule } from './gifs/gifs.module';
//import { PaisModule } from './pais/pais.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';

// Pipes
import { LoadModulosModule } from './load-modulos/load-modulos.module';
//import { C00ModuloModule } from './c04_pipes/c00-modulo/c00-modulo.module';
 
// Cambio fecha Local
import localeEs from '@angular/common/locales/es-CL'
import localeFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'
import { CommonModule } from '@angular/common';
import { CMenuComponent } from './c00-menu/menu.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
// Para utilizar en forma local
registerLocaleData(localeEs)
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    CMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    // PaisModule, // Cargar Por Lazy Load
    //GifsModule,  // Cargar Por Lazy Load
    RouterModule,
    AppRoutingModule,
    LoadModulosModule,
   // C00ModuloModule,
  //  localeEs
  ],
  // Permite cambiar el formato fecha y número glbalmente
  //{provide:LOCALE_ID,useValue='es-HN'}
  providers: [{provide:LOCALE_ID,useValue:'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 

  ngOnInit(): void {
    //console.log("MapasModule Init")
    //(mapboxgl as any).accessToken = environment.mapboxToken;
  }

}
