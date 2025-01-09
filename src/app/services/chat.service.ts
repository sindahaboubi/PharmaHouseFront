import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ChatMessage } from 'src/app/models/chat-message';
import { Client, Stomp,  IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  constructor(private httpClient: HttpClient) { 
    this.initConnenctionSocket();
  }

  initConnenctionSocket() {
    const url = '//localhost:8081/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket)
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, ()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage);

      })
    })
    this.loadMessage(roomId);
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage))
  }

  getMessageSubject(){
    return this.messageSubject.asObservable();
  }

  loadMessage(roomId: string): void {
    this.httpClient.get<any[]>(`http://localhost:8081/api/chat/${roomId}`).pipe(
     map(result=>{
        return result.map(res=> {
          return {
          user: res.user_name,
          message: res.message
         } as ChatMessage
        })
      })
    ).subscribe({
      next: (chatMessage: ChatMessage[]) =>{
        this.messageSubject.next(chatMessage);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}

