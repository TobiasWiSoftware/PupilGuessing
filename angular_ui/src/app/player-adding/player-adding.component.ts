import { Component, ChangeDetectorRef } from '@angular/core';
import { PlayerAddingService } from '../player-adding.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-adding',
  templateUrl: './player-adding.component.html',
  styleUrl: './player-adding.component.css'
})
export class PlayerAddingComponent{

  
  player$ = this.PlayerAddingService.getPlayer();

  player = {
    nickname: '',    
  };
  
  
  
  
  isInputDisabled = false;
  
  
  constructor(private PlayerAddingService: PlayerAddingService, private cdRef: ChangeDetectorRef) { }

  

  startGame(): void {
    if(this.PlayerAddingService.getNickname() === '') {
    console.log("Spieler hinzufügen");
    console.log(this.player.nickname);
    this.PlayerAddingService.setPlayer(this.player.nickname);
    this.isInputDisabled = true;
    this.cdRef.detectChanges();
    }
  }

  
}
