import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {


  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  noPuedeSerStrider( control: FormControl ): ValidationErrors | null {
      const valor:string = control.value?.trim().toLowerCase();
      if ( valor === 'strider' ) {
        return {
          noStrider: true
        }
      } 

    return null;
  }

  camposIguales( campo1: string, campo2: string ) {
    console.log("camposIguales********* ")
    // Nueva funcion
    /*  esto ocasiona que la fb.group sea obsoleta
    return ( ) => {
      //return null //=> ya no es deprecated
    }
    */

    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      console.log("formGroup",formGroup) // Estoy recibiendo todos los objetos
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        // activamos el segundo campo el error
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      } 



      formGroup.get(campo2)?.setErrors(null);
      // retorn nada, significa que no hay error
      return null
    }

  }


}
