import {Component, inject, OnInit} from '@angular/core';
import {ChatList} from '../../components/chat-list/chat-list';
import {ChatResponse} from '../../services/models/chat-response';
import {getChatsByReceiver} from '../../services/functions';
import {Api} from '../../services/api';

@Component({
  selector: 'app-main',
  imports: [
    ChatList
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {

  private api: Api = inject(Api);

  chats: ChatResponse[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getAllCharts();
  }

  private getAllCharts(): void {
    this.api.invoke(getChatsByReceiver)
      .then((res: ChatResponse[]) => this.chats = res)
  }

}
