import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor( private router:Router) { }

  fazerLogin(usuario:Usuario){
    if(usuario.nome === 'Cesar Henrique Ramos' && usuario.senha === '123456789'){
      this.mostrarMenuEmitter.emit(true);
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    }else{
      this.mostrarMenuEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
