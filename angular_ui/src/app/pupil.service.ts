import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupilService {
  private baseUrl = 'http://localhost:8080/api/pupil';

  constructor(private http: HttpClient) { }

  // Beispiel: Abrufen aller Schüler
  getAllPupils(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
