import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [ErrorMsgComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ErrorMsgComponent
  ]
})
export class SharedModule { }
