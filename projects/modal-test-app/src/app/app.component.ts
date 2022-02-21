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
    private _vcr: ViewContainerRef
  ) { }

  openModal() {

    this.modalService.openModel({
      viewContainerRef: this._vcr,
      title: 'one',
      height: '500px',
      width: '500px',
      backgroundColor: '#f00',
      bodyText: 'one works!',
    }).subscribe((res) => {
      console.log("******************");
      console.log(res);
    });


    this.modalService.openModel({
      viewContainerRef: this._vcr,
      title: 'two',
      height: '50px',
      width: '200px',
      backgroundColor: '#eeeeee',
      bodyText: 'two works!',
    }).subscribe((res) => {
      console.log("******************");
      console.log(res);
    });

  }


}
