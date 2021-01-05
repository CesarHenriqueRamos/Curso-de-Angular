import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livro:any ={
    title: 'Javascript para web',
    rating: 4.5678,
    numeroPaginas: 345,
    preco: 50,
    dataLancamento: new Date(2016, 5, 13)
  }
  livros:string[] = ['agular 2', 'react'];
  valorAsync = new Promise((resolve , reject)=>{
    setTimeout(()=> resolve('Valor asincrono'), 2000);
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
