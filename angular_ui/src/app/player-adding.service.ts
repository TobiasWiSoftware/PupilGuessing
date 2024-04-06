import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerAddingService {

  player = {
    nickname: '',
    points: 0
  }

  private apiUrl = `${environment.apiUrl}`; // Verwendung der Umgebungsvariablen

  constructor(private http: HttpClient) { }


  addPlayer(pupil: any) {
    console.log("über playerapi");
    return this.http.post(`${this.apiUrl}/setuser`, pupil);
  }

  setPlayerNickName(nickname: string) {
    this.player.nickname = nickname;
  }

  getPlayerNickName() {
    return this.player.nickname;
  }

}
