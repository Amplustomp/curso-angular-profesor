import { Pipe, PipeTransform } from '@angular/core';
import { IPersona } from '../../../c04_pipes/interface/ordenar.interface';

@Pipe({
  name: 'personaImagenPipe'
  // consume mucho recursos, no ocupar
  //,pure:false
})
export class PersonaImagenPipe implements PipeTransform {

  transform( persona: IPersona ): string {
/*
    if( !persona.id && !persona.alt_img ) {
      return 'assets/no-image.png';
    } else if ( persona.alt_img ) {
      return persona.alt_img;
    } else {
      return `assets/heroes/${ persona.id }.jpg`;
    }
    */
    //console.log("pipe",persona)
    if( !persona.id && !persona.alt_img ) 
      return 'assets/no-image.png';

    if ( persona.alt_img ) 
      return persona.alt_img;

    return `assets/personas/${ persona.idImg }.jpg`;
  }





}
