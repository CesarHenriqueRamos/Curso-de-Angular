import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getEstadosBr(){
    return this.httpClient.get("assets/dados/estadosbr.json");
  }
}
