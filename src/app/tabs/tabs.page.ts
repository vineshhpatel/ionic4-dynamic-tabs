import { Component } from '@angular/core';

import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  displayTab2 = true;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to tab1 component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.displayTab2 = message.text === 'true';
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
