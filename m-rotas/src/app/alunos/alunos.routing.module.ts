import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate.guard';
import { AlunosGuard } from '../guard/alunos.guard';
import { AuthGuard } from '../guard/auth.guard.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';


const routes: Routes = [
  
  {path:'alunos', component: AlunosComponent, children:[
    {path:'novo', component: AlunoFormComponent, canDeactivate:[AlunosDeactivateGuard]},
    {path:':id', component: AlunoDetalheComponent},
    {path:':id/editar', component: AlunoFormComponent, canDeactivate:[AlunosDeactivateGuard]}
  
  ], canActivate:[AuthGuard], canActivateChild:[AlunosGuard]},
  
];
//const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
