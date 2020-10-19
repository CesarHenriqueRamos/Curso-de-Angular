import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { criarCursosModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    criarCursosModule
  ],
  providers: [ LogService,CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
