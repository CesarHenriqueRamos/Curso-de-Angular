import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FormCanDeactivate } from './form-candeactivate';

/*class UserToken {}
class Permissions {
    canDeactivate(user: UserToken, id: string): boolean {
        return true;
    }
}*/
@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {
        //constructor(private permissions: Permissions, private currentUser: UserToken) {}
        canDeactivate(
            component: FormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            return component.podeDesativar();
    }
}
/*@NgModule({
    imports: [
        RouterModule.forRoot([
        {
            path: 'team/:id',
            component: TeamCmp,
            canDeactivate: [CanDeactivateTeam]
        }
    ])
],
providers: [CanDeactivateTeam, UserToken, Permissions]
})
class AppModule {}*/