import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
