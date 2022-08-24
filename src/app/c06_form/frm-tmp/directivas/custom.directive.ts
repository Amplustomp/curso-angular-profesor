import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
// Agregar en modules template, declarativas
@Directive({
    // customMin ==> es el nombre del atributo utilizado en el input
    // y el input tienen que tener un  ngModel
    selector: '[customMin][ngModel]',
    // providers Injectar  NG_VALIDATORS
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
//Validator permite realizar validaciones
export class CustomMinDirective implements Validator {
  // recibire el atributo llamado minimo
    @Input() minimo!: number;

    constructor() {
        // la primera vez sale CustomMinDirective => undefined

        console.log("CustomMinDirective", this.minimo)
    }
    //control: FormControl ==> el input
    validate( control: FormControl ) {
        console.log("CustomMinDirective Validator", this.minimo)
        const inputValue = control.value;
        return ( inputValue < this.minimo )
                ? { 'customMin': true }
                : null;
    }

}