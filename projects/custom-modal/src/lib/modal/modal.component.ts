import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { ModalConfiguration } from '../data-model/modal-configuration.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  @Input() configuration: ModalConfiguration;

  @Output() closeEvent = new EventEmitter();
  @Output() okEvent = new EventEmitter();


  customStyles: Record<string, string> = {};

  ngOnInit(): void {
    this.autoClose();
  }

  getBodyConfigurationBackgroundColor(): Record<string, string> {
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

  onClose(): void {
    this.closeEvent.emit(this.configuration.modelKey);
  }

  autoClose(): void {
    if (this.configuration.closeAfter) {
      setTimeout(() => {
        this.onClose();
      }, this.configuration.closeAfter);
    }
  }

  onOk() {
    this.okEvent.emit(this.configuration.modelKey);
  }


}
