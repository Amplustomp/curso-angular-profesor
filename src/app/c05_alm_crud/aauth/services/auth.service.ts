import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) { }
  get auth(): Auth {
    // ... => retorna copia
    return { ...this._auth! }
  }
  // Retonra un observable o un Boolean
  //verificaAutenticacion(): Observable<boolean>|boolean {
    verificaAutenticacion(): Observable<boolean> {
    //return of(true);
    
    console.log("verificaAutenticacion   222")
    if (!localStorage.getItem('token')) {
      console.log("verificaAutenticacion   333")
      //of ==> Reseulve un ofservable
      return of(false);
    }
    // Pondremos el usuario 1 fijo
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        // Permite trabsforma lo recibido del observable
        map(auth => {
          console.log("verificaAutenticacion   444")
          this._auth = auth;
          return true;
        })
      );

  }


  login() {
    //Jugar con el 4
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(auth => {this._auth = auth
                     console.log("Tap1",auth) 
                    }),
        tap(auth => {localStorage.setItem('token', auth.id)
                    console.log("Tap2",auth) 
                    }),
      );
  }

  logout() {
    this._auth = undefined;
  }



}
