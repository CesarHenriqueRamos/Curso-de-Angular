import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._render.setStyle(this._elementRef.nativeElement,
      'background-color','yellow')*/
      this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
    /*this._render.setStyle(this._elementRef.nativeElement,
      'background-color','white')*/
      this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor:string;
  
  //outra maneira de fazer
  @HostBinding('style.backgroundColor') get setColor(){
    //qualquer codigo adicional

    return this.backgroundColor;
  }
  
  private backgroundColor:string;

  constructor(
    //private _elementRef:ElementRef,
    //private _render: Renderer2
    ) { }

}
