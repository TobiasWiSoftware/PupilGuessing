import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerAddingService {

  private playerSubject = new BehaviorSubject<{ nickname: string; points: number }>({ nickname: '', points: 0});

  // Methode, um den aktuellen Wert des player zu erhalten
  getPlayer() {
    return this.playerSubject.asObservable();
  }

  setPlayer(nickname: string) {
    const currentPlayer = this.playerSubject.value; // Aktuellen Spieler abrufen
    this.playerSubject.next({ ...currentPlayer, nickname: nickname, points: 0});
  }

  hasNickname() {
    console.log("der Nickname" + this.playerSubject.value.nickname);
    return this.playerSubject.value.nickname !== '';
  }


  // Funktion, um 5 Punkte hinzuzufügen
  addPoints() {
    const currentPlayer = this.playerSubject.value; // Aktuellen Spieler abrufen
    this.playerSubject.next({ ...currentPlayer, points: currentPlayer.points + 5 }); // Punkte aktualisieren und nächsten Wert setzen
  }

  // Funktion, um 2 Punkte abzuziehen
  subtractPoints() {
    const currentPlayer = this.playerSubject.value; // Aktuellen Spieler abrufen
    this.playerSubject.next({ ...currentPlayer, points: currentPlayer.points - 2 }); // Punkte aktualisieren und nächsten Wert setzen
  }

  private apiUrl = `${environment.apiUrl}`; // Verwendung der Umgebungsvariablen

  constructor(private http: HttpClient) { }

  savePlayer() {
    console.log("über playerapi");
    console.log(this.playerSubject.value);
    console.log("wird in die Datenbank gespeichert an api")
    console.log(`${this.apiUrl}/setplayer`);
    return this.http.post(`${this.apiUrl}/setplayer`, this.playerSubject.value);
  }

  // Funktion, um den Nickname des aktuellen Spielers zu erhalten
  getNickname(): string {
    return this.playerSubject.value.nickname;
  }


}

