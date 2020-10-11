import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
    ) {
      //jeito poco seguro
      //this.elementRef.nativeElement.style.backgroundColor= 'yellow';
      // jeito mais seguro
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'yellow'
        )
     }

}
