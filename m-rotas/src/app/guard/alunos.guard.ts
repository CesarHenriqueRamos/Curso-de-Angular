import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  	canActivateChild(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
      ): Observable<boolean>|Promise<boolean>|boolean {
          if(state.url.includes('editar')){
            //alert('Você não tem autorização')  
            //return false;
          }
          return true;
      }
 
}
