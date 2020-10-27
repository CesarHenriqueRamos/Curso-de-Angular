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
    //console.log(form.value);
    //enviando  dados para o formulario
    this.httpClient.post('enderecoServidor/userForm', JSON.stringify(form.value)).subscribe(dados => console.log(dados));
  }
  consutaCep(cep, form){
    //limpar cep
    cep = cep.replace(/\D/g , '');
    if(cep != ""){
      //função validar cep
      var cepValido = /^[0-9]{8}$/
      this.reseteFormulario(form);
      if(cepValido.test(cep)){
        this.httpClient.get("https://viacep.com.br/ws/"+ cep +"/json/").subscribe(dados =>{
          this.populaDadosForm(dados,form);
        })
        
      }
    }
  }
  populaDadosForm(dados, form){
    //metudo setValue
    /*form.setValue({
      bairro: dados.bairro,
      cep: dados.cep,
      cidade: dados.localidade,
      complemento: dados.complemento,
      email: form.value.email,
      estado: dados.uf,
      nome: form.value.nome,
      numero: "",
      rua: dados.logradouro,
    })*/
    //metudo patchValue
    form.form.patchValue({
      estado: dados.uf,
      rua: dados.logradouro,
      cidade: dados.localidade,
      complemento: dados.complemento,
      bairro: dados.bairro,
    })
  }
  reseteFormulario(form){
    form.form.patchValue({
      estado: null,
      rua: null,
      cidade: null,
      complemento: null,
      bairro: null,
    })
  }
}
