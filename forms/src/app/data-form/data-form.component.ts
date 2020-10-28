import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private httpClient:HttpClient
    ) { }

  ngOnInit(): void {
    //uma das maneiras
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    })*/
    this.formulario = this.formBuilder.group({
      nome:[null, Validators.required ],
      email:[null, [ Validators.required, Validators.email ]],
      cep:[null, Validators.required ],
      numero:[null, Validators.required ],
      complemento:[null],
      rua:[null],
      bairro:[null],
      cidade:[null],
      estado:[null]
    })
  }
  onSubmit(){
    console.log(this.formulario.value)

    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(dados => {
      console.log(dados);
      this.formulario.reset();
    },(err)=>{
      alert('Ocorreu um Erro');
    });
  }
  clear(){
    this.formulario.reset();
  }
  varificaCampo(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
}
