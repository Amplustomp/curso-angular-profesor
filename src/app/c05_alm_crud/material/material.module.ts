import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//https://material.angular.io/components/sidenav/api
import {MatSidenavModule} from '@angular/material/sidenav';
//https://material.angular.io/components/toolbar/overview
import {MatToolbarModule} from '@angular/material/toolbar';
//https://material.angular.io/components/button/overview
import {MatButtonModule} from '@angular/material/button';
//https://material.angular.io/components/icon/api
//https://fonts.google.com/icons?selected=Material+Icons:bookmark
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog'; 

import { MatSelectModule } from '@angular/material/select'; 







@NgModule({
  declarations: [],
  imports: [
//    CommonModule,
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,

    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,

    
  ]
})
export class MaterialModule { }
