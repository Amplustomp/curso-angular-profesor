import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { PersonaDatosComponent } from './c02_personas/persona.component';
import { C03PersonaListarComponent } from './c03-per-list/c03-per-list.component';
import { MiServAddComponent } from './c05-modulo/mi-serv-add/mi-serv-add.component';
import { MiServListaComponent } from './c05-modulo/mi-serv-lista/mi-serv-lista.component';

@NgModule({
    // declaros los módulos de la carpeta
    declarations:[
      //PersonaDatosComponent,
      //C03PersonaListarComponent,
      MiServAddComponent,
      MiServListaComponent,
    ],
    // Los que quiero que sean publicos
    exports:[
        //C03PerListComponent  ,
        MiServAddComponent,
        MiServListaComponent,
    ],
    // importamos las librerías que utilizaremos
    imports:[
        // si coloco en comentarios, no funciona nfor,nif,nels, etc
        // el error se ve en la consola
        CommonModule,
        FormsModule, // Para NgModel
    ]
})
export class C05ComponentesModule {}