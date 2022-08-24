import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppPersonaRoutingModule } from './personas-routing.module';
import { MaterialModule } from '../material/material.module';
import { PersonaTarjetaComponent } from './componente/persona-tarjeta/persona-tarjeta.component';
import { PersonaImagenPipe } from './pipe/persona-imagen.pipe';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './componente/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    PersonaComponent,
    ListarComponent,
    HomeComponent,
    PersonaTarjetaComponent,
    PersonaImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    AppPersonaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class PersonaModule { }
