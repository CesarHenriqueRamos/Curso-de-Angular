import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  error$: Subject<boolean>;
constructor(
    private service: CursosService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) { }
    

  ngOnInit(): void {
    this.cursos$ = this.service.list().pipe(
      catchError(error => {
        //this.error$.next(true);
        this.handlerError();
        console.log(error);
        
        return empty();
      })
    )
  }
  handlerError(){
    alert('Erro ao carregar os cursos. Tente mais Tarde.')
  }
  onEdit(id){
    console.log(id);
    this.router.navigate(['editar',id]);
  }
  onDelete(curso){
    let del = confirm('Gostaria de Deletar este Registro');
    if(del){
      console.log('deletar');
      this.service.delete(curso).subscribe(
        success => {
          location.reload()
        },
        error => this.alert('Erro ao Deletar'),
        () => console.log('processo completo')
      );
    }
  }
  alert(msg){
    alert(msg);
  }
}
