import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapComponent } from './componentes/mini-map/mini-map.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MenuMapComponent } from './shared/menu-map/menu-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';


@NgModule({
  declarations: [
    MiniMapComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    MenuMapComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
    
  ]
})
export class MapasModule implements OnInit{
  ngOnInit(): void {
    //console.log("MapasModule Init")
    //(mapboxgl as any).accessToken = environment.mapboxToken;
  }

 }
