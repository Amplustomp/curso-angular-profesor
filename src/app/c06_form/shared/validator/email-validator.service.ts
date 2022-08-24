import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

type NewType = Observable<ValidationErrors | null>;

@Injectable({
  providedIn: 'root'
})
//export class EmailValidatorService implements AsyncValidator{
  export class EmailValidatorService implements AsyncValidator{

  constructor( private http: HttpClient ) { }
  //validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    //throw new Error('Method not implemented.');
    //return this.http.get<any[]>("localhost:3000/usuarios?q=test1@test.com")
    const email = control.value;
    console.timeLog("EmailValidatorService:", email)
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
                        .pipe(
                           //delay(3000),
                          map( resp => {
                            console.log("respuesta EmailValidatorService:",resp)
                            return ( resp.length === 0 ) 
                                ? null
                                : { emailTomado: true }
                          })
                        );
}
/*
  validate( control: AbstractControl): NewType {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  // delay(3000),
                  map( resp => {
                    return ( resp.length === 0 ) 
                        ? null
                        : { emailTomado: true }
                  })
                );

  }
*/
}
