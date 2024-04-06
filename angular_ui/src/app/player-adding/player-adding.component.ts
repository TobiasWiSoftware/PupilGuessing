import { Component } from '@angular/core';
import { PlayerAddingService } from '../player-adding.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-adding',
  templateUrl: './player-adding.component.html',
  styleUrl: './player-adding.component.css'
})
export class PlayerAddingComponent{

  player = {
    nickname: '',
    points: 0
  };

  

  isInputDisabled = false;


  constructor(private PlayerAddingService: PlayerAddingService) { }


  startGame(): void {
    if(this.PlayerAddingService.player.nickname === '') {
    console.log("Spieler hinzufügen");
    this.PlayerAddingService.setPlayerNickName(this.player.nickname);
    this.isInputDisabled = true;
    }
  }

}
