import { Component, OnInit, Input } from '@angular/core';
import { PupilGameService } from '../pupil-game.service';
import { PlayerAddingService } from '../player-adding.service';


@Component({
  selector: 'app-pupil-game',
  templateUrl: './pupil-game.component.html',
  styleUrls: ['./pupil-game.component.css']
})
export class PupilGameComponent implements OnInit {
  pupil = {
    firstname: '',
    lastname: '',
    picturedata: ''
  };

  guessedPupil = {
    firstname: '',
    lastname: ''
  };

  listPupils: any[] = [];
  indexPupilList = 0;

  constructor(private pupilGameService: PupilGameService, private playerAddingService: PlayerAddingService) { 

  }

  ngOnInit(): void {
    this.pupilGameService.getDaten().subscribe({
      next: (response) => {
        this.listPupils = response;
        console.log('Schüler geladen', response);
        if(this.listPupils.length > 0) {
          this.pupil = this.listPupils[0];
        }
      },
      error: (error) => {
        console.error('Fehler beim Laden der Schüler', error);
      }
    });


    console.log(this.pupil);
  }


  convertToBase64(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pupil.picturedata = e.target.result; // Speichert nur den Base64-String 
      };
      reader.readAsDataURL(file);
    }
  }

  tryGuessPupil(): void {
    console.log(this.pupil);
    
    // Vergleichen des ratenden Schülers mit dem aktuellen Schüler
    if(this.pupil.firstname === this.guessedPupil.firstname && this.pupil.lastname === this.guessedPupil.lastname) {
      console.log("Richtig geraten");
      // Punkte erhöhen
      this.playerAddingService.player.points += 5;

      if(this.listPupils.length > this.indexPupilList + 1) {
      // nächster Schüler
      this.pupil = this.listPupils[++this.indexPupilList];
      }
    } else {
      console.log("Falsch geraten");
      // Punkte abziehen
      this.playerAddingService.player.points -= 2;
      console.log(this.playerAddingService.player.points);
    }
  }
}


