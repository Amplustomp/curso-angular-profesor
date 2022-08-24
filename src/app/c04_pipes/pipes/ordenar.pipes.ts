import { Pipe, PipeTransform } from '@angular/core';
import { IPersona } from '../interface/ordenar.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( lPersonas: IPersona[], orderPor: string = 'sin valor' ): IPersona[] {

    switch( orderPor ) {

      case 'nombres': 
       // 1 : -1   ==>1 hace el cambio -1 no ace el cambio
        return lPersonas.sort( (a,b) => ( a.nombres > b.nombres ) ? 1 : -1 );
      
      case 'vuela':
          return lPersonas.sort( (a,b) => ( a.vuela! > b.vuela! ) ? -1 : 1 );

      case 'paterno':
        return lPersonas.sort( (a,b) => ( a.apPaterno > b.apPaterno ) ? -1 : 1 );

      case 'color':
        return lPersonas.sort( (a,b) => ( a.color! > b.color! ) ? 1 : -1 );

      default:
        return lPersonas;
    }


    // if( orderPor === 'sin valor' ) {
    //   return heroes;
    // } else {
    //   heroes = heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
    // }

    // return heroes;
  }

}
