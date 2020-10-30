import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { EstadosBr } from '../shared/models/estados-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados:EstadosBr;

  constructor(
    private formBuilder:FormBuilder,
    private httpClient:HttpClient,
    private dropDownService: DropdownService,
    private cepService:ConsultaCepService
    ) { }

  ngOnInit(): void {
    //uma das maneiras
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    })*/
    //this.dropDownService.getEstadosBr().subscribe(dados => this.estados = dados);
    this.formulario = this.formBuilder.group({
      nome:[null, Validators.required ],
      email:[null, [ Validators.required, Validators.email ]],
      //endereco: this.formBuilder.group({
        cep:[null, Validators.required ],
        numero:[null, Validators.required ],
        complemento:[null],
        rua:[null],
        bairro:[null],
        cidade:[null],
        estado:[null]
      //})
    })
  }
  onSubmit(){
    console.log(this.formulario.value)
    //if(this.formulario.valid){
      this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(dados => {
        console.log(dados);
        this.formulario.reset();
      },(err)=>{
        alert('Ocorreu um Erro');
      });
    /*}else{
      console.log('formlario invalido');
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle.markAsDirty()
      })
    }*/
  }
  //validação checkbox
  requireMinCheck(min=1){
    const validator = (formArray: FormArray) =>{
      /*const value = formArray.controls;
      let totalChecked = 0;
      for(let i=0; i < value.length; i++){
        if(value[i].value){
          totalChecked++;
        }
      }*/
      //outra maneira de fazer
      const totalChecked = formArray.controls.map(v => v.value).reduce((total,current) => current ? total + current : total ,0);
      return totalChecked >= min ? null : { required: true };
    }

  }
  /*buidFramkorw(){
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, this.requireMinCheck(1));
  }*/

  clear(){
    this.formulario.reset();
  }
  varificaCampo(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  consutaCep(){
    let cep = this.formulario.get('cep').value;
    console.log(cep);
    if(cep != null){
    cep = cep.replace(/\D/g , '');
    if(cep != ""){
      //função validar cep
      var cepValido = /^[0-9]{8}$/
      this.reseteFormulario();
        if(cepValido.test(cep)){
          this.httpClient.get("https://viacep.com.br/ws/"+ cep +"/json/").subscribe(dados =>{
            console.log(dados);
            this.populaDadosForm(dados);
          })        
        }
      }
    }
  }
  populaDadosForm(dados){
    this.formulario.patchValue({
      //endereco:{
        estado: dados.uf,
        rua: dados.logradouro,
        cidade: dados.localidade,
        complemento: dados.complemento,
        bairro: dados.bairro,
      //}
    })
  }
  reseteFormulario(){
    this.formulario.patchValue({
      //endereco:{
        estado: null,
        rua: null,
        cidade: null,
        complemento: null,
        bairro: null,
      //}
      
    })
  }
}
