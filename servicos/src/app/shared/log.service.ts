import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  consloeLog(msg:string){
    console.log(msg);
  }
}
