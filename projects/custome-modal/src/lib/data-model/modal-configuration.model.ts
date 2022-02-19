import { ViewContainerRef } from "@angular/core";

export interface ModalConfiguration {
    modelKey?:string;
    viewContainerRef:ViewContainerRef;
    title?: string;
    bodyText?: string;
    width?: string;
    height?: string;
    backgroundColor?:string;
}