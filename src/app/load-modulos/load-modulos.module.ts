import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule} from 'primeng/button';
import { CardModule} from 'primeng/card';

import { MenubarModule} from 'primeng/menubar';
import { FieldsetModule} from 'primeng/fieldset'
import { ToolbarModule } from 'primeng/toolbar'
import { TableModule } from 'primeng/table'
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    //BrowserModule,    // Cuidado produce error
    //BrowserAnimationsModule, // Cuidado produce error
    FormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    //BrowserModule,  // No cargar se produce error, siii solo en appModule
    //BrowserAnimationsModule,// No cargar se produce error, siii solo en appModule
    TableModule,
    ToolbarModule,
  ]
})
export class LoadModulosModule { }
