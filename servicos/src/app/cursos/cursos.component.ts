import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']//,
  //quando tem dentro de um componente a istancia não é global
  //providers: [ CursosService ]
})
export class CursosComponent implements OnInit {
  cursos:string[] = [];
  //cursosService: CursosService;
  constructor(private cursosService: CursosService) { 
    //this.cursosService = new CursosService;
    //this.cursosService = _cursosService;
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
    //this.cursosService.emitirCursosCriados.subscribe((curso)=>{ console.log(curso); }  );
    CursosService.criouCursosCriados.subscribe( curso=>{console.log(curso)});
  
  }

}
