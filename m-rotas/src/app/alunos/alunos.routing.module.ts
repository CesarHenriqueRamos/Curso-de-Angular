import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from '../aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';


const routes: Routes = [
  
  {path:'alunos', component: AlunosComponent},
  {path:'alunos/novo', component: AlunoFormComponent},
  {path:'alunos/:id', component: AlunoDetalheComponent},
  {path:'alunos/:id/editar', component: AlunoFormComponent}
  
];
//const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
