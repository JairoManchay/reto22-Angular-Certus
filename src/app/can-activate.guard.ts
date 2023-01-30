import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {


  constructor(private autenticacion: AutenticacionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          // mi sentencia logica para hacer el traslado a la ruta correspondiente
          if(this.autenticacion.isLoggedIn(state.url)){
            return true;
          }
          this.router.navigate(['/login']);
          return false;
  }

}
