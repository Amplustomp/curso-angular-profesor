import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { PersonaComponent } from './persona.component';
//import { HeroesComponent } from './componentes/c02_heroes/heroesClass.component';
// Agregamos import contador
import { ContadorComponent } from './componentes/contador.component';
import { AppRoutingObjModule } from './app-routing-obj.module';
import { PrinPageComponent } from './prin-page/prin-page.component';
import { CommonModule } from '@angular/common';
import { PersonaDatosComponent } from './componentes/c02_personas/persona.component';
//import { C03PerListComponent } from './componentes/c03-per-list/c03-per-list.component';
import { C04ModuloModule } from './componentes/c04-modulo/c04-modulo.module';
import { C03PersonaListarComponent } from './componentes/c03-per-list/c03-per-list.component';
/* Eliminamos cuando agregamos un modulo
import { C03PerListComponent } from './componentes/c03-per-list/c03-per-list.component';
*/
import { C05ComponentesModule } from './componentes/componentes.module';
import { PersonaServices } from './servicios/persona.services';
@NgModule({
  declarations: [
    PrinPageComponent,
    C03PersonaListarComponent,
    ContadorComponent,
    PersonaDatosComponent,
  ],
  imports: [
    CommonModule,
    //BrowserModule,  // Compilo con browser, y luego lo saco
                //BrowserModule no se puede cargar dosveces
    C04ModuloModule,
    C05ComponentesModule,
    AppRoutingObjModule,
  ],
  providers: [
     PersonaServices
  ],
  bootstrap: [PrinPageComponent]
})
export class PersonaModule { }
