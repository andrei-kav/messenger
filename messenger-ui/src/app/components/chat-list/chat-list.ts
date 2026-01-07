import {Component, input, InputSignal} from '@angular/core';
import {ChatResponse} from '../../services/models/chat-response';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.scss',
})
export class ChatList {

  chats: InputSignal<ChatResponse[]> = input<ChatResponse[]>([]);

}
