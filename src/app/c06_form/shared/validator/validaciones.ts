import { FormControl, ValidationErrors } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// Agregamos export const,
// y el = antes de = (
// =>
//original == noPuedeSerStrider( control: FormControl ) {    
export const noPuedeSerStrider = ( control: FormControl ):ValidationErrors|null =>{
    const valorForm = control.value.trim()
    console.log("noPuedeSerStrider",valorForm)
    console.log("noPuedeSerStrider???",control.value.trim())
    const valor:string = control.value?.trim().toLowerCase();
    // Que el username no puede ser strider
    if ( valor === 'strider' ) {
      // Retorno un objeto, ya que cuando es null, significa correcto
      // puede ser cualquier objeto
      return {noStrider: true }
    } 
    
    return null;
  }
  