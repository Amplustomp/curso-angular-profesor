import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPersona } from '../../../c04_pipes/interface/ordenar.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl: string = environment.baseUrl;


  constructor(private http:HttpClient) { }
 
  getPersonas(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`${ this.baseUrl }/personas`);
  }

  getPersonaPorId( id: string ):Observable<IPersona> {
    return this.http.get<IPersona>(`${ this.baseUrl }/personas/${ id }`);
  }

  getSugerencias( termino: string ): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`${ this.baseUrl }/personas?q=${ termino }&_limit=6`);
  }
//******************************* */
  agregarPersona( persona: IPersona ): Observable<IPersona> {
    return this.http.post<IPersona>(`${ this.baseUrl }/personas`, persona );
  }

  actualizarPersona( persona: IPersona ): Observable<IPersona> {
    return this.http.put<IPersona>(`${ this.baseUrl }/personas/${ persona.id }`, persona );
  }

  borrarPersona( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/personas/${ id }`);
  }





}
