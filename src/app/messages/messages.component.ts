import { Component } from '@angular/core';
import {HeroesComponent} from "../heroes/heroes.component";
import {MessageService} from "../message.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    HeroesComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

}
