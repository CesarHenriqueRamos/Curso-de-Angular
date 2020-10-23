import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';


const routes: Routes = [
  
  {path:'cursos', component: CursosComponent, canActivate:[AuthGuard], canLoad:[AuthGuard] },
  {path:'cursos/:id', component: CursoDetalheComponent, canActivate:[AuthGuard], canLoad:[AuthGuard]},
  {path:'cursos/naoEncontrado', component: CursoNaoEncontradoComponent, canActivate:[AuthGuard], canLoad:[AuthGuard]}
];
//const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
