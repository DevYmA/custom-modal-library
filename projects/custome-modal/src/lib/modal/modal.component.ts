import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { ModalConfiguration } from '../data-model/modal-configuration.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {

  @Input() configuration: ModalConfiguration;

  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();


  customStyles: Record<string, string> = {};

  getBodyConfigurationBackgroundColor() {
    let {
      width,
      height,
      backgroundColor
    } = this.configuration;
    return {
      'width': width ? width : '50%',
      'height': height ? height : '75%',
      'background-color': backgroundColor ? backgroundColor : '#fff',
    };

  }

  closeMe() {
    this.closeMeEvent.emit(this.configuration.modelKey);
  }

}
