import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/ChatbotService .service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages: string[] = [];
  userInput: string = '';

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.messages.push(`User: ${this.userInput}`);
      this.chatbotService.sendMessage(this.userInput).subscribe(response => {
        this.messages.push(`Bot: ${response.response}`);
      });
      this.userInput = '';
    }
  }

}
