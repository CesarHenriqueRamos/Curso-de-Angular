import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-custumisadas',
  templateUrl: './diretivas-custumisadas.component.html',
  styleUrls: ['./diretivas-custumisadas.component.css']
})
export class DiretivasCustumisadasComponent implements OnInit {

  cursoExibir:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  mostrarCurso(){
    this.cursoExibir = !this.cursoExibir;
  }


}
