import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './c01-main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { MiCompInputComponent } from './mi-comp-input/mi-comp-input.component';
import { MiCompOutputComponent } from './mi-comp-output/mi-comp-output.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MiCompInputComponent,
    MiCompOutputComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    // Agregamos FormModule para los campos
    // con FormModule, No se refresca
    FormsModule

  ]
})
export class C04ModuloModule { }
