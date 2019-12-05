import { Component } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tab2Displayed = true;
  constructor(private messageService: MessageService) {}

  toggleTab2(): void {
    this.tab2Displayed = !this.tab2Displayed;
    // send message to subscribers via observable subject
    this.messageService.sendMessage(`${this.tab2Displayed}`);
  }

  // toggleTab2() {
  //   this.tab2Displayed = !this.tab2Displayed;
  //   localStorage.setItem('tab2Displayed', '' + this.tab2Displayed);
  // }
}
