import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()
export class CursosService{
    emitirCursosCriados = new EventEmitter<string>();
     static criouCursosCriados = new EventEmitter<string>();

    cursos:string[] = ['Angular.js', 'React.js', 'Node.js', 'PHP'];
    //importando um serviço dentro de outro serviço
    constructor(private logService:LogService){

    }
    getCursos(){
        this.logService.consloeLog('Obtendo lista de Cursos');
        return this.cursos;
    }
    addCursos(curso){
        this.cursos.push(curso);
        this.emitirCursosCriados.emit(curso);
        CursosService.criouCursosCriados.emit(curso);
    }
}