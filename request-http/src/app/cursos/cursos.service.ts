import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Curso} from './curso';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
private readonly API = `${environment.API}cursos`;
  constructor(
    private httpClient: HttpClient
  ) { }
  list(){
    return this.httpClient.get<Curso[]>(this.API)
  }
  loadById(id){
    return this.httpClient.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }
  create(curso){
    return this.httpClient.post(this.API, curso).pipe(take(1));
  }
  update(curso){
    return this.httpClient.put(`${this.API}/${curso.id}`,curso).pipe(take(1));
  }
  delete(curso){
    return this.httpClient.delete(`${this.API}/${curso.id}`,curso.id).pipe(take(1));
  }
}
