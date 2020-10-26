import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario:any = {
    nome: null,
    email: null,
  }
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(form.value);
  }
  consutaCep(cep){
    //limpar cep
    cep = cep.replace(/\D/g , '');
    if(cep != ""){
      //função validar cep
      var cepValido = /^[0-9]{8}$/
      if(cepValido.test(cep)){
        this.httpClient.get("https://viacep.com.br/ws/"+ cep +"/json/").subscribe(dados =>{
          console.log(dados);
        })
        
      }
    }
  }
}
