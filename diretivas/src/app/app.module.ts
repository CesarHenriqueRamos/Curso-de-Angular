import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivasCustumisadasComponent } from './diretivas-custumisadas/diretivas-custumisadas.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgswitchComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    NgcontentComponent,
    HighlightMouseDirective,
    DiretivasCustumisadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
