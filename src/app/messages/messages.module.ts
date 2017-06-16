import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components that we need
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageListComponent,
    MessageComponent,
    MessageFormComponent
  ],
  exports: [
    MessageListComponent,
    MessageComponent,
    MessageFormComponent
  ]
})
export class MessagesModule {}
