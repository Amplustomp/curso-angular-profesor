import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  // parámetro que permitirá traer solo algunos campos
  private fieldsCam="fields=alpha3Code;name";

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {

    const url: string = `${ this.baseUrl }/region/${ region }?${this.fieldsCam}`
    return this.http.get<PaisSmall[]>( url );
  }

  // retorna un <Pais o null >
  getPaisPorCodigo( codigo: string ): Observable<Pais | null> { 

    if ( !codigo ) {
      // devuelve un observable null
      //return of({}) //error debiera ser objeto pais
      return of(null)
    }

    const url = `${ this.baseUrl }/alpha/${ codigo }`;
    return this.http.get<Pais>( url );
  }

  getPaisPorCodigoSmall( codigo: string ): Observable<PaisSmall> {
    const url = `${ this.baseUrl }/alpha/${ codigo }?fields=alpha3Code;name`;
    return this.http.get<PaisSmall>( url );
  }

  getPaisesPorCodigos( borders: string[] ): Observable<PaisSmall[]> {

    if ( !borders ) {
      return of([]);
    }
    // un arreglo de observables
    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach( codigo => {
      // this.getPaisPorCodigoSmall(codigo).suscribe(); ==> se ejecuta

      // solo quiero almacenarla en el arreglo de peticiones
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push( peticion );
    });
    // segun la forma de utilizarlo aparece obsoletos
    return combineLatest( peticiones );

  }
}
