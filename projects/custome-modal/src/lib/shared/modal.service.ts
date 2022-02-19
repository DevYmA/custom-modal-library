import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { v4 as uuidv4 } from 'uuid';
import { ModalConfiguration } from '../data-model/modal-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentSubcriber: Subject<string> = new Subject<string>();;
  myMap = new Map<string, any>();

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  openModel(configuration: ModalConfiguration): Observable<string> {

    let modelKey = configuration.modelKey ? configuration.modelKey : uuidv4();
    if (!this.myMap.get(modelKey)) {
      
      let factory = this.resolver.resolveComponentFactory(ModalComponent);
      let componentRef: ComponentRef<ModalComponent> = configuration.viewContainerRef.createComponent(factory);
      
      configuration.modelKey = modelKey;
      componentRef.instance.configuration = configuration;

      componentRef.instance.closeMeEvent.subscribe((val) => this.closeModal(val));
      // componentRef.instance.confirmEvent.subscribe(() => this.confirm());

      this.myMap.set(modelKey, componentRef);
    }

    return this.componentSubcriber.asObservable();
  }

  closeModal(modelKey: string): void {
    this.componentSubcriber.complete();
    this.myMap.get(modelKey).destroy();
    this.myMap.delete(modelKey);
  }

  // confirm() {
  //   this.componentSubcriber.next('confirm');
  //   this.closeModal();
  // }

}
