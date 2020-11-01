import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormVadidator } from '../form-validator';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {
   @Input() msgErro: string;
   @Input() label: string;
   @Input() mostrarErro: boolean;
   @Input() control:FormControl

  constructor() { }

  ngOnInit(): void {
  }
  get errorMessage(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return FormVadidator.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
