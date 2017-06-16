import { Component, Input } from '@angular/core';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'ff-message',
  template: `
    {{ message.text }}
  `
})
export class MessageComponent {
  @Input() message: Message;
}
