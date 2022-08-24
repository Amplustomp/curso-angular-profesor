import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private autService:AuthService
             ,private router:Router){}

  // El Activate es por cada vez que carga la página
  canActivate(
    route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    console.log("CanActivate",route)
        /*
        if(!this.autService.auth.id)
        {
          console.log("Bloqueado por Activate")
          return false;
        }

    return true;
    */
    return this.autService.verificaAutenticacion()
        .pipe(tap(isAutenticado=>{
          if (!isAutenticado){
            this.router.navigate(['./auth/login']);
          }
        }))
        ;
  }
  canLoad(
    route: Route,
    //segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean  {
        // deja pasar a todo el mundo
        // Solo si puede cargar el modulo, noooo si puede mostrar
        // esto significa que si ya lo cargo, luego mostrará no importando, la validación
        console.log("CanLoad",route)
        console.log("segmentos",segments)
        /*
        // false no deja pasar a la aplicación
        //return false;
        if(!this.autService.auth.id){
          console.log("NoOOOO Load  Canload")
          return false;
        }
        return true;
        */
        return this.autService.verificaAutenticacion()
        .pipe(tap(isAutenticado=>{
          if (!isAutenticado){
            this.router.navigate(['./auth/login']);
          }
        }));

        
  }
}
