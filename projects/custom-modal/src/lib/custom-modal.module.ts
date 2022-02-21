import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './shared/modal.service';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModalService
  ],
  exports: [
  ],
})
export class CustomModalModule { }
