import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directivas/error-msg.directive';
import { CustomIfDirective } from './directivas/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ErrorMsgDirective,
    CustomIfDirective,
  ]
})
export class SharedModule { }
