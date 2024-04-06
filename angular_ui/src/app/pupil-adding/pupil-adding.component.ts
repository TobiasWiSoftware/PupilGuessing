import { Component, Input } from '@angular/core';
import { PupilAddingService } from '../pupil-adding.service';


@Component({
  selector: 'app-pupil-adding',
  templateUrl: './pupil-adding.component.html',
  styleUrls: ['./pupil-adding.component.css']
})
export class PupilAddingComponent {
  pupil = {
    firstname: '',
    lastname: '',
    picturedata: ''
  };

  constructor(private pupilAddingService: PupilAddingService) { }


  convertToBase64(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pupil.picturedata = e.target.result; // Speichert nur den Base64-String 
        console.log(this.pupil.picturedata + "Bilddaten nach hochladen");
      };
      reader.readAsDataURL(file);
    }
  }

  savePupil2(): void {
    console.log("Schüler speichern" + this.pupil.picturedata);
    this.pupilAddingService.addPupil(this.pupil).subscribe({
      next: (response) => {
        console.log('Schüler gespeichert', response);
        // Füge hier Logik hinzu, um den Nutzer zu benachrichtigen oder die Ansicht zu wechseln
        // Lade das ganze UI neu
        // Redirect to start page
        window.location.href = '/';
      },
      error: (error) => {
        console.error('Fehler beim Speichern des Schüler', error);
        // Behandle Fehlerzustände, z.B. durch Anzeigen einer Fehlermeldung
      }
    });
  }
}


