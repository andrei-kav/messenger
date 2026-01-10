import {Component, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {ChatResponse} from '../../services/models/chat-response';
import {DatePipe} from '@angular/common';
import {UserResponse} from '../../services/models/user-response';
import {Api} from '../../services/api';
import {getAllUsers} from '../../services/functions';

@Component({
  selector: 'app-chat-list',
  imports: [
    DatePipe
  ],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.scss',
})
export class ChatList {

  private api: Api = inject(Api);

  chats: InputSignal<ChatResponse[]> = input<ChatResponse[]>([]);

  searchNewContact: WritableSignal<boolean> = signal(false);
  contacts: WritableSignal<UserResponse[]> = signal<UserResponse[]>([]);

  constructor() {}

  searchContact(): void {
    this.api.invoke(getAllUsers)
      .then((users: UserResponse[]) => {
        this.contacts.set(users);
        this.searchNewContact.set(true);
      })
  }

  onChatClicked(chat: ChatResponse): void {

  }

  wrapMessage(lastMessage: string | undefined): string {
    if (lastMessage && lastMessage.length <= 20) {
      return lastMessage;
    }
    return lastMessage?.substring(0, 17) + "...";
  }

  selectContact(): void {

  }
}
