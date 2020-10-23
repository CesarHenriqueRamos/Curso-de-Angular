import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
    private verificarAcesso(){
      if(this.authService.usuarioEstaAutenticado()){
        return true;
      }
      this.router.navigate(['login'])
      return false;
    }
  canActivate(
    router:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    return this.verificarAcesso();
  }

  	resolve(
      route: Route
      ): Observable<any>|Promise<any>|any {
        return this.verificarAcesso();
    }
}
