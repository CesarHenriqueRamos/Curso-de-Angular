import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursosService: CursosService,
    private router:ActivatedRoute,
    private route:Router) { }
  cursos:any[];
  pagina:number;
  inscricao: Subscription;
 
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.router.queryParams.subscribe(
      (queryParams:any)=>{
        this.pagina = queryParams['pagina'];
      }
    )
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  proxima(){
    //this.pagina++;
    this.route.navigate(['cursos'], {queryParams:{'pagina': ++this.pagina}});
  }
}
