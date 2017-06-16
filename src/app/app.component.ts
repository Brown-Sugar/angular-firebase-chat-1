import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Message } from './shared/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: FirebaseListObservable<any>;
  message: Message = new Message('');

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    // grab our actual messages
    this.messages = this.db.list('/messages', {
      query: { limitToLast: 5 }
    });

    this.messages.subscribe(messages => {
      console.log(messages);
    });
  }

  // add a new message to the database
  createMessage() {
    // empty validation
    if (this.message.text == '') return;

    this.messages.push(this.message);
    this.message.text = '';
  }
}
