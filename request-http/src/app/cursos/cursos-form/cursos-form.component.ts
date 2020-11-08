import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { error } from 'console';
import { CursosService } from '../cursos.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const curso = this.route.snapshot.data['curso'];
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }
   onSubmit(){
    this.submited = true;
    if(this.form.valid){
      console.log(this.form.value);
      this.service.create(this.form.value).subscribe(
        success => {
          this.alert('Cadastrado com Sucesso');
          this.location.back();
        },
        error => this.alert('Erro ao Cadastrado'),
        () => console.log('processo conpleto')
      );
    }
  }
  onCancel(){
    this.submited = false;
    this.form.reset();
  }
  alert(msg){
    alert(msg);
  }
}
