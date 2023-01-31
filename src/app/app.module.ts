import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Ajv from 'ajv';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: Ajv,
      useFactory: () => new Ajv()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
