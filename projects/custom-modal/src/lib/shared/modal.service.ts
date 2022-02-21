import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { v4 as uuidv4 } from 'uuid';
import { ModalConfiguration } from '../data-model/modal-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  myMap = new Map<string, any>();

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  openModel(configuration: ModalConfiguration): Observable<string> {

    let modelKey = configuration.modelKey ? configuration.modelKey : uuidv4();
    let existRef = this.myMap.get(modelKey);
    if (!existRef) {

      let factory = this.resolver.resolveComponentFactory(ModalComponent);
      let componentRef: ComponentRef<ModalComponent> = configuration.viewContainerRef.createComponent(factory);

      configuration.modelKey = modelKey;
      componentRef.instance.configuration = configuration;

      componentRef.instance.closeEvent.subscribe((key) => this.closeModal(key));
      componentRef.instance.okEvent.subscribe((key) => this.confirm(key));

      let subcription: Subject<string> = new Subject<string>();

      this.myMap.set(modelKey, {
        reference: componentRef,
        eventSubject: subcription
      });
      return subcription.asObservable();
    }

    return existRef.eventSubject.asObservable();;
  }

  closeModal(modelKey: string): void {

    let existRef = this.myMap.get(modelKey);
    existRef.eventSubject.complete();
    existRef.reference.destroy();
    this.myMap.delete(modelKey);
  }

  confirm(modelKey) {
    let existRef = this.myMap.get(modelKey);
    existRef.eventSubject.next('done')
    this.closeModal(modelKey);
  }

}
