import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomeModalModule, ModalComponent } from 'custome-modal';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomeModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
