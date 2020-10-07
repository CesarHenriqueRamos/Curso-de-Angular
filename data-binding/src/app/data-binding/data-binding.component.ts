import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.io';
  urlImagem:string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;
  valorAtual:string = '';
  valorSalvo:string = '';
  onMouse:boolean = false;
  nome:string = 'abs';

  nomeDoCurso:string = 'Angular';

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão Clicado');
  }
  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  sobreMim(){
    this.onMouse = !this.onMouse;
  }
  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
