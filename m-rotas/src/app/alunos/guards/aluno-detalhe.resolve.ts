import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

/*class Backend {
    fetchTeam(id: string) {
        return 'someTeam';
    }
}*/
@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService:AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            let id = route.params['id'];
            return this.alunosService.getAluno(id);
    }
}
/*@NgModule({
    imports: [
        RouterModule.forRoot([
        {
            path: 'team/:id',
            component: TeamCmp,
            resolve: {
                team: TeamResolver
            }
    }])
    ],
    providers: [TeamResolver]
})
class AppModule {}*/