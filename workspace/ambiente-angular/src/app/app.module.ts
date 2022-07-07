import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/directive/marca-texto.directive';
import { FormsModule } from '@angular/forms';
import { PeopleService } from './shared/services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleService], //providers garantem que o service será provido p/ tds os modulos
  bootstrap: [AppComponent]
})
export class AppModule { }
