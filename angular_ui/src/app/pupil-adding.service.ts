import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PupilAddingService {
  private apiUrl = `${environment.apiUrl}/setpupil`; // Verwendung der Umgebungsvariablen

  constructor(private http: HttpClient) { }

  addPupil(pupil: any) {
    // Die Anfrage wird nun direkt an /proxyapi/setpupil gesendet
    console.log('Sending pupil to ' + this.apiUrl);
    return this.http.post(this.apiUrl, pupil);
  }
}
