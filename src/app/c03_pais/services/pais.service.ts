import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPais } from '../interface/pais.interface';

@Injectable({
  // Root recuerde que es general, no se importa
  providedIn: 'root'
})
export class PaisService {
  //https://restcountries.eu/
  //https://restcountries.eu/rest/v2/name/españa
  //https://restcountries.eu/rest/v2/name/chile
  //https://restcountries.eu/rest/v2/capital/santiago
  //https://restcountries.eu/rest/v2/capital/lima
  //https://restcountries.eu/rest/v2/region/africa
  //https://restcountries.eu/rest/v2/apha/AS
  //http://api.countrylayer.com/v2/all?access_key=13fb6df72b7f57772606258800795478
  //http://api.countrylayer.com/v2/region/africa?access_key=13fb6df72b7f57772606258800795478
  //private apiUrl :string='https://restcountries.eu/rest/v2/'
  private apiUrl :string='http://api.countrylayer.com/v2/'
  private apiKey:string="13fb6df72b7f57772606258800795478"
  constructor(private http:HttpClient) { 

  }
  buscarPais(stBusco:string):Observable<IPais[]>{
    let stUrl = `${this.apiUrl}name/${stBusco}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3001/${stBusco}`
    // Visitamos la url, y eviamos los parámetros
      return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
  }
  buscarCapital(stBusco:string):Observable<IPais[]>{
    let stUrl = `${this.apiUrl}capital/${stBusco}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3002/${stBusco}`
    // Visitamos la url, y eviamos los parámetros
    return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
  }  
  // Retorno un pais no un arreglo
  buscarPaisCodigo(stId:string):Observable<IPais>{
    let stUrl = `${this.apiUrl}alpha/${stId}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3004/${stId}`
    // Visitamos la url, y eviamos los parámetros
      return this.http.get<IPais>(stUrl)
      // a este no por que queremos toda la informacion
      //, { params: this.httpParams }
  }  
  buscarRegion(stRegion:string):Observable<IPais[]>{
    //const stUrl = `${this.apiUrl}region/${stRegion}?fields=name;capital;alpha2Code;flag;population`
    let stUrl = `${this.apiUrl}region/${stRegion}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3003/${stRegion}`
    // Visitamos la url, y eviamos los parámetros
    return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
  }  

  get httpParams () {
    return new HttpParams().set( 'fields'
                  , 'name;capital;alpha2Code;flag;population' 
              //, 'name;capital' 
                  ).set("access_key",this.apiKey);
  }

}
