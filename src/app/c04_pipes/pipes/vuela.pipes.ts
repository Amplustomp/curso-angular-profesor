import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {


    transform( valor: string ): string {
        return ( valor )   ? 'vuElA altO haRRYS': 'no vuela';
    }

}
/*
Rodrigo Montecinos == pais emiter
Christian lorca == Pais    , pipe 1
*/