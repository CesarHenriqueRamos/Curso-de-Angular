import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VerivicaEmailService {

  constructor(private http: HttpClient) { }
  verificaEmail(email:string){
    /*  return this.http.get('assets/dados/verificarEmail.json').pipe( map((dados: { emails: any[]; }) => dados.emails) ); */
  }
}
