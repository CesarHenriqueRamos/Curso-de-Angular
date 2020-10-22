import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';


const routes: Routes = [
  
  {path:'cursos', component: CursosComponent,children:[
    {path:':id', component: CursoDetalheComponent},
    {path:'naoEncontrado', component: CursoNaoEncontradoComponent}
  ], canActivate:[AuthGuard]},
  
];
//const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
