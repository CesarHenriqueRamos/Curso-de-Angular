import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs:["mudouValor"]
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0;
  //emitir valor
  @Output() mudouValor = new EventEmitter();
  //manipulando DOM
  @ViewChild('campoInput') campoValorInput: ElementRef;


//fim
  incrementa(){
    //this.campoValorInput.nativeElement.value++;
    this.valor++;
    this.mudouValor.emit({ novoValor:this.valor });
  }
  decrementa(){
    //this.campoValorInput.nativeElement.value--;
    this.valor--;
    this.mudouValor.emit({ novoValor:this.valor });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
