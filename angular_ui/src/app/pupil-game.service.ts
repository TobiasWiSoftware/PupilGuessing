import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PupilGameService {
  private apiUrl = `${environment.apiUrl}`; // Verwendung der Umgebungsvariablen

  constructor(private http: HttpClient) { }

  getDaten(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getpupils`);
  }

  addPupil(pupil: any) {
    console.log("über gameapi");
    return this.http.post(`${this.apiUrl}/pupil`, pupil);
  }
}
