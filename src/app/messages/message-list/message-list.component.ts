import { Component, Input } from '@angular/core';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'ff-message-list',
  styles: [`
  `],
  template: `
    <div class="message-list" *ngIf="messages">
      <ff-message
        class="message"
        *ngFor="let message of messages"
        [message]="message">
      </ff-message>
    </div>

    <div *ngIf="!messages">
      No Messages!
    </div>
  `
})
export class MessageListComponent {
  @Input() messages: Message[];
}
