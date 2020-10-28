import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private httpClient:HttpClient
  ) { }
  consutaCep(cep:string){
    //limpar cep
    cep = cep.replace(/\D/g , '');
    if(cep != ""){
      //função validar cep
      var cepValido = /^[0-9]{8}$/

      if(cepValido.test(cep)){
        this.httpClient.get("https://viacep.com.br/ws/"+ cep +"/json/");
        }        
      }
    }
  }

