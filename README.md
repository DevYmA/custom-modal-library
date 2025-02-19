
# Custom Modal For Angular

Simple, lightweight and configurable modal box component to implemnt your dynamic pop up component.  


## 🧾 Features

- Dynamic injection
- Customization (Size, Color, Content, etc..)
- Multiple modal at once
- Host's component interaction wih model's actions (🆗 button)
- Auto closeable configuration


## ✨ Installation

```bash
  npm i ya-custom-modal-lib
```
    
## 🚊 Usage

Three steps and roll out 😀

* Import CustomModalModule to your root AppModule
```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomModalModule } from 'custom-modal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

* Inject fallowing two services to component where you want to add custom modal

```bash
  
import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from 'custom-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private modalService: ModalService,
    private componentReference: ViewContainerRef
  ) { }

}


```

* Create a function and call openModel function in ModalService with custom configuration.(You can pass prefered configuration by using parameters)

```bash
  
import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from 'custom-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private modalService: ModalService,
    private componentReference: ViewContainerRef
  ) { }

  onOpenModal() : void{
    this.modalService.openModel({
      viewContainerRef: this.componentReference,
      title: 'one',
      height: '500px',
      width: '500px',
      backgroundColor: '#f00',
      bodyText: 'one works!',
      closeAfter: 2000
    }).subscribe((res) => {

    });
  }

}

```
## API Reference

#### openModel({modalConfigurations})

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `viewContainerRef`      | `ViewContainerRef` | **Required**. Component Reference where need to be added modal |
| `title`      | `string` | Title for modal box |
| `bodyText`      | `string` | Body text for the modal box |
| `height`      | `string` | Height of the modal box |
| `backgroundColor`      | `string` |  Background Color (Only applicable CSS colors) |
| `closeAfter`      | `number` | If required auto closeable (milisecond)|





# CustomModalBox

Library source code is availble in :  Projects > custome-modal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
