import { AlunosDeactivateGuard } from './guard/alunos-deactivate.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard.service';
import { AlunosGuard } from './guard/alunos.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule,
    AlunosModule
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    AlunosGuard,
    AlunosDeactivateGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
